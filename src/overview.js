
/* =====================================================================
 * Overview cards: wp-power-flow, wp-side (climate · people · TV), wp-car
 * ===================================================================== */
const kW = (w) => (w == null ? "–" : Math.abs(w) >= 10000 ? (w / 1000).toFixed(0) : (w / 1000).toFixed(1));
const kWh = (v) => (v == null ? "–" : v >= 100 ? Math.round(v).toLocaleString("en-AU") : v.toFixed(1));
const aud = (v) => (v == null ? "–" : `$${v.toFixed(2)}`);
const stateNum = (h, id) => (id ? num(h.states[id]?.state) : null);
const ago = (iso) => { const m = Math.round((Date.now() - new Date(iso).getTime()) / 60000); return m < 1 ? "just now" : m < 60 ? `${m}m` : m < 1440 ? `${Math.floor(m / 60)}h ${m % 60}m` : `${Math.floor(m / 1440)}d`; };

class WpBase extends HTMLElement {
  setConfig(config) { this._config = config; this._sig = null; if (this.shadowRoot && this._hass) this._render(); }
  getCardSize() { return 6; }
  set hass(hass) {
    const first = !this._hass; this._hass = hass;
    if (!this.shadowRoot) this.attachShadow({ mode: "open" });
    this.toggleAttribute("dark", wpIsDark(hass, this._config));
    const sig = this._signature();
    if (first || sig !== this._sig) { this._sig = sig; this._render(); }
    if (first) this._firstHass?.();
  }
  _signature() { const h = this._hass; return (this._ids() || []).filter(Boolean).map((id) => { const s = h.states[id]; return s ? s.state + s.last_updated : "x"; }).join("|") + (this._extraSig?.() || "") + (this.hasAttribute("dark") ? "|D" : "|L"); }
  _ids() { return []; }
  _setHtml(html) { if (html === this._lastHtml) return false; this._lastHtml = html; this.shadowRoot.innerHTML = html; return true; }
  _go(path) { if (!path) return; navigate(path.startsWith("#") ? `${location.pathname}${path}` : path); }
  _call(d, s, data) { return this._hass.callService(d, s, data); }
}

/* ---------------- wp-power-flow ---------------- */
class WpPowerFlow extends WpBase {
  _ids() { const c = this._config; const s = c.stats || {}; return [c.solar, c.grid_import, c.grid_export, c.home, c.ev, c.ev_connected, c.car_plugged, "sun.sun", s.generation, s.import, s.export, c.theme_entity]; }
  _extraSig() { return this._statsAt || ""; }
  _firstHass() { this._loadStats(); this._statTimer = setInterval(() => this._loadStats(), 5 * 60000); }
  disconnectedCallback() { clearInterval(this._statTimer); }
  async _loadStats() {
    const s = this._config.stats; if (!s || !this._hass.callWS) return;
    const now = new Date(); const today = new Date(now); today.setHours(0, 0, 0, 0); const yday = new Date(today.getTime() - 86400000);
    const ids = [s.generation, s.import, s.export, s.import_cost].filter(Boolean);
    try {
      const r = await this._hass.callWS({ type: "recorder/statistics_during_period", start_time: yday.toISOString(), end_time: now.toISOString(), statistic_ids: ids, period: "hour", types: ["change"] });
      const series = (id) => { const t = Array(24).fill(0), y = Array(24).fill(0); (r[id] || []).forEach((p) => { const st = new Date(typeof p.start === "number" ? p.start : p.start); const arr = st >= today ? t : y; arr[st.getHours()] += p.change || 0; }); return { t, y }; };
      const g = series(s.generation), i = series(s.import), e = series(s.export), c = s.import_cost ? series(s.import_cost) : null;
      const home = { t: g.t.map((v, k) => Math.max(0, v + i.t[k] - e.t[k])), y: g.y.map((v, k) => Math.max(0, v + i.y[k] - e.y[k])) };
      let yearSolar = null;
      if (s.solar_total) {
        const jan = new Date(now.getFullYear(), 0, 1);
        const m = await this._hass.callWS({ type: "recorder/statistics_during_period", start_time: jan.toISOString(), end_time: now.toISOString(), statistic_ids: [s.solar_total], period: "month", types: ["change"] });
        yearSolar = (m[s.solar_total] || []).reduce((a, p) => a + (p.change || 0), 0);
      }
      this._stats = { g, i, e, c, home, yearSolar };
      this._statsAt = Date.now();
      this._sig = null; this._render();
    } catch (err) { console.warn("wp-power-flow stats", err); }
  }
  _bars(t, color) {
    const hr = new Date().getHours(); const max = Math.max(...t, 0.01);
    return `<svg class="bars" viewBox="0 0 96 28" preserveAspectRatio="none">${t.map((v, k) => `<rect x="${k * 4}" y="${28 - Math.max(1, (v / max) * 26)}" width="3" height="${Math.max(1, (v / max) * 26)}" rx="1" fill="${k <= hr ? color : "var(--wp-track)"}"/>`).join("")}<line x1="0" y1="27.5" x2="96" y2="27.5" stroke="var(--wp-track)" stroke-dasharray="2 2"/></svg>`;
  }
  _vsY(arr) {
    if (!arr) return "";
    const hr = new Date().getHours(), frac = new Date().getMinutes() / 60;
    const t = arr.t.slice(0, hr + 1).reduce((a, v) => a + v, 0); const y = arr.y.slice(0, hr).reduce((a, v) => a + v, 0) + arr.y[hr] * frac;
    if (y < 0.2) return "";
    const p = Math.round(((t - y) / y) * 100);
    return `<span class="side vs"><b>${icon(p > 0 ? "lu:arrow-up" : "lu:arrow-down")}${Math.abs(p)}%</b><small>vs yesterday</small></span>`;
  }
  _geom() {
    const c = this._config;
    if (c.image) {
      const ar = c.image.aspect || 16 / 9; const H = 1000 / ar;
      const P = (k, d) => { const q = (c.nodes || {})[k] || d; return [q[0] * 10, (q[1] * H) / 100]; };
      const home = P("home", [52, 72]);
      const f = (n) => n.toFixed(0);
      const drop = (a, b) => `M${f(a[0])},${f(a[1])} Q${f(a[0])},${f(b[1])} ${f(b[0])},${f(b[1])}`; // down then across
      const arc = (a, b) => `M${f(a[0])},${f(a[1])} Q${f((a[0] + b[0]) / 2)},${f(Math.max(a[1], b[1]) + 0.06 * H)} ${f(b[0])},${f(b[1])}`;
      return {
        photo: true, ratio: ar, vb: `0 0 1000 ${f(H)}`, home,
        paths: { solar: drop(P("solar", [60, 30]), home), grid: arc(P("grid", [92, 50]), home), ev: arc(home, P("ev", [22, 78])), ...(c.paths || {}) },
      };
    }
    return { photo: false, ratio: 1000 / 390, vb: "0 30 1000 390", home: [510, 330],
      paths: { solar: "M560,150 C560,215 540,262 515,300", grid: "M868,225 C830,300 650,330 552,328", ev: "M468,330 C380,338 300,338 236,330" } };
  }
  _clampLabels() {
    const v = this._vis, c = this._config; if (!v || !c.image) return;
    for (const k of ["solar", "grid", "home", "ev"]) {
      const el = this.shadowRoot.getElementById(`l-${k}`); if (!el) continue;
      const q = (c.labels || {})[k]; if (!q) continue;
      const lw = (el.offsetWidth / v.sw) * 100, lh = (el.offsetHeight / v.sh) * 100, pad = 2;
      el.style.left = `${Math.min(Math.max(q[0], v.x0 + pad), 100 - v.x1 - lw - pad)}%`;
      el.style.top = `${Math.min(Math.max(q[1], v.y0 + pad), 100 - v.y1 - lh - pad)}%`;
    }
  }
  _render() {
    const h = this._hass, c = this._config, st = this._stats, r = this.shadowRoot;
    const dark = this.hasAttribute("dark");
    const night = h.states["sun.sun"]?.state === "below_horizon";
    const G = this._geom();
    const skelKey = `${G.photo}|${dark}|${night}|${G.vb}`;
    if (this._skelKey !== skelKey) {
      this._skelKey = skelKey; this._parts = {};
      const pick = (a, b) => (dark ? a || b : b || a);
      const img = G.photo ? pick(c.image.dark, c.image.light) : null;
      const imgCar = G.photo ? pick(c.image.car_dark, c.image.car_light) : null;
      const lp = (k, d) => { const q = (c.labels || {})[k] || d; return `left:${q[0]}%;top:${q[1]}%`; };
      r.innerHTML = `<style>${WP_PALETTE}${WP_FLOW_CSS}</style>
      <section class="card">
        <header><div class="ttl">${icon("lu:house", "hico")}<div><h2>Live Power Flow</h2><p id="sub"></p></div></div><div class="chips" id="chips"></div></header>
        <div class="scene ${G.photo ? "photo" : ""}" data-go="${c.tap || ""}">${G.photo ? `<img class="ph" src="${$esc(img)}" alt="">${imgCar ? `<img class="ph car" src="${$esc(imgCar)}" alt="">` : ""}` : ""}<div class="stage ${G.photo ? "photo" : ""}">
          ${G.photo ? "" : WP_HOUSE_SVG(night)}
          <svg class="flows" viewBox="${G.vb}" preserveAspectRatio="none"><g id="fl"></g>
            <defs><radialGradient id="hubg" cx="50%" cy="35%" r="70%"><stop offset="0" stop-color="#1d4f91"/><stop offset="1" stop-color="#0b1b38"/></radialGradient></defs>
            <circle cx="${G.home[0]}" cy="${G.home[1]}" r="40" class="hubhalo"/><circle cx="${G.home[0]}" cy="${G.home[1]}" r="31" class="hub"/><foreignObject x="${G.home[0] - 24}" y="${G.home[1] - 24}" width="48" height="48"><div class="hubi">${icon("lu:house")}</div></foreignObject></svg>
          <div class="lbl" id="l-solar" style="${G.photo ? lp("solar", [62, 4]) : ""}"></div><div class="lbl" id="l-grid" style="${G.photo ? lp("grid", [80, 22]) : ""}"></div>
          <div class="lbl" id="l-home" style="${G.photo ? lp("home", [56, 80]) : ""}"></div><div class="lbl" id="l-ev" style="${G.photo ? lp("ev", [3, 50]) : ""}"></div>
        </div></div>
        <div class="tiles" id="tiles"></div>
      </section>`;
      r.querySelectorAll("[data-go]").forEach((el) => el.addEventListener("click", () => this._go(el.dataset.go)));
      const sc = r.querySelector(".scene"), stg = r.querySelector(".stage");
      // Illustration: contain. Photo: cover the whole scene (the image is object-fit: cover with the same centring),
      // then keep the label boxes inside the visible part.
      const fit = () => {
        const w = sc.clientWidth, hh = sc.clientHeight; if (!w || !hh) return;
        const sw = G.photo ? Math.max(w, hh * G.ratio) : Math.min(w, hh * G.ratio), sh = sw / G.ratio;
        const fy = G.photo ? (c.image.focus_y ?? 50) / 100 : 0.5;   // which part of a cropped photo stays in view (0 = top, 100 = bottom)
        const left = (w - sw) / 2, top = (hh - sh) * fy;
        Object.assign(stg.style, { width: `${sw}px`, height: `${sh}px`, left: `${left}px`, top: `${top}px`, transform: "none" });
        sc.querySelectorAll(".ph").forEach((im) => { im.style.objectPosition = `50% ${fy * 100}%`; });
        this._vis = { x0: (-left / sw) * 100, x1: ((sw - w + left) / sw) * 100, y0: (-top / sh) * 100, y1: ((sh - hh + top) / sh) * 100, sw, sh };
        this._clampLabels();
      };
      this._ro?.disconnect(); this._ro = new ResizeObserver(fit); this._ro.observe(sc); fit();
    }
    const set = (id, html) => { if (this._parts[id] !== html) { this._parts[id] = html; r.getElementById(id).innerHTML = html; } };
    const solar = Math.max(0, stateNum(h, c.solar) ?? 0), imp = Math.max(0, stateNum(h, c.grid_import) ?? 0), exp = Math.max(0, stateNum(h, c.grid_export) ?? 0);
    const home = stateNum(h, c.home) ?? Math.max(0, solar + imp - exp), ev = Math.max(0, stateNum(h, c.ev) ?? 0);
    const gridW = imp > 20 ? imp : exp > 20 ? -exp : 0;
    // car_plugged: show the car photo and the EV flow only while the car is plugged in (or while it is drawing power)
    const carHere = !c.car_plugged || h.states[c.car_plugged]?.state === "on" || ev > 50;
    r.querySelector(".scene")?.classList.toggle("withcar", carHere);
    set("sub", [solar > 50 ? "Generating" : null, "Powering home", ev > 50 ? "Charging car" : null, exp > 20 ? "Exporting" : imp > 20 ? "Importing" : null].filter(Boolean).join("  →  "));
    set("chips", `<span class="chip ${gridW > 0 ? "warn" : "ok"}"><i></i>${gridW > 0 ? "Using grid" : gridW < 0 ? "Exporting" : "Self-powered"}</span><span class="chip ok live"><i></i>Live</span>`);
    // flows: only rebuilt when direction or speed band changes, so the animation doesn't restart on every sensor update
    const band = (w) => (w > 20 ? Math.max(0.9, Math.min(6, 4.5 / Math.sqrt(Math.max(w, 30) / 1000))).toFixed(1) : "0");
    const flow = (path, w, color, reverse) => { const d = band(w); return d === "0" ? `<path d="${path}" class="fl idle"/>` : `<path d="${path}" class="fl" style="stroke:${color}"/>${[0, 1, 2].map((k) => `<circle r="6" fill="${color}" class="dot"><animateMotion dur="${d}s" begin="-${((k * d) / 3).toFixed(2)}s" repeatCount="indefinite" path="${path}" ${reverse ? 'keyPoints="1;0" keyTimes="0;1" calcMode="linear"' : ""}/></circle>`).join("")}`; };
    set("fl", flow(G.paths.solar, solar, "#fbbf24") + flow(G.paths.grid, Math.abs(gridW), gridW >= 0 ? "#a78bfa" : "#22c55e", gridW < 0) + (carHere ? flow(G.paths.ev, ev, "#22d3ee") : ""));
    set("l-solar", `<span class="lic ${solar > 50 ? "on" : ""}">${WP_SUN_ICON}</span><div class="lbox"><small>Solar</small><b>${kW(solar)} <i>kW</i></b><em class="${solar > 50 ? "y" : ""}">${solar > 50 ? "Generating" : night ? "Night" : "Inactive"}</em></div>`);
    set("l-grid", `<span class="lic grid ${gridW > 0 ? "imp" : gridW < 0 ? "exp" : ""}">${WP_PYLON_ICON}</span><div class="lbox"><small>Grid</small><b>${kW(Math.abs(gridW))} <i>kW</i></b><em class="${gridW > 0 ? "p" : gridW < 0 ? "g" : ""}">${gridW > 0 ? "Importing" : gridW < 0 ? "Exporting" : "Idle"}</em></div>`);
    set("l-home", `<div class="lbox"><small>Home use</small><b>${kW(home)} <i>kW</i></b></div>`);
    set("l-ev", carHere ? `<div class="lbox"><small>${$esc(c.ev_name || "Car")}</small><b>${kW(ev)} <i>kW</i></b><em class="${ev > 50 ? "c" : ""}">${ev > 50 ? "Charging" : "Not charging"}</em></div>` : "");
    this._clampLabels();
    const sx = c.stats || {};
    const genT = stateNum(h, sx.generation), impT = stateNum(h, sx.import), expT = stateNum(h, sx.export);
    const homeT = genT != null && impT != null && expT != null ? Math.max(0, genT + impT - expT) : null;
    const costT = st?.c ? st.c.t.reduce((a, v) => a + v, 0) : null;
    const rate = sx.export_rate ?? 0.05;
    const yr = new Date().getFullYear();
    set("tiles", `
        <div class="tile"><div class="th">${icon("lu:sun", "ti y")}<div><h4>Solar Today</h4><b>${kWh(genT)}<i> kWh</i></b></div></div>
          ${st?.yearSolar != null ? `<div class="tf yr">${icon("lu:calendar-days", "ti2")}<div><small>${yr} Total</small><b>${kWh(st.yearSolar)}<i> kWh</i></b></div></div>` : st ? `<div class="tf">${this._bars(st.g.t, "#fbbf24")}</div>` : ""}</div>
        <div class="tile"><div class="th">${icon("lu:house", "ti b")}<div><h4>Home Today</h4><b>${kWh(homeT)}<i> kWh</i></b></div></div>
          <div class="tf">${st ? this._bars(st.home.t, "#38bdf8") : ""}${st ? this._vsY(st.home) : ""}</div></div>
        <div class="tile"><div class="th">${icon("lu:utility-pole", "ti g")}<div><h4>Exported Today</h4><b>${kWh(expT)}<i> kWh</i></b><p class="money g">+${aud((expT || 0) * rate)} earned</p></div></div>
          <div class="tf">${st ? this._bars(st.e.t, "#22c55e") : ""}</div></div>
        <div class="tile"><div class="th">${icon("lu:arrow-down", "ti p")}<div><h4>Imported Today</h4><b>${kWh(impT)}<i> kWh</i></b></div></div>
          <div class="tf">${st ? this._bars(st.i.t, "#a78bfa") : ""}${costT != null ? `<span class="side"><b>${aud(costT)}</b><small>cost</small></span>` : ""}</div></div>`);
  }
}
const WP_SUN_ICON = `<svg viewBox="0 0 48 48" aria-hidden="true"><defs><radialGradient id="sunc" cx="40%" cy="38%" r="65%"><stop offset="0" stop-color="#fff3b0"/><stop offset=".55" stop-color="#fcd34d"/><stop offset="1" stop-color="#f59e0b"/></radialGradient></defs>
  <g stroke="#fbbf24" stroke-width="3.2" stroke-linecap="round">${[0, 45, 90, 135, 180, 225, 270, 315].map((a) => `<line x1="24" y1="5" x2="24" y2="10.5" transform="rotate(${a} 24 24)"/>`).join("")}</g>
  <circle cx="24" cy="24" r="10" fill="url(#sunc)"/></svg>`;
const WP_PYLON_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M12 2 7.4 22M12 2l4.6 20M4.5 6.5h15M6 10.5h12M8.7 6.5l6.6 4M15.3 6.5l-6.6 4M8.6 14.5h6.8M8.6 14.5l7.1 7.5M15.4 14.5 8.3 22M4.5 6.5 3 8.5M19.5 6.5 21 8.5M6 10.5l-1 1.5M18 10.5l1 1.5"/></svg>`;
function WP_HOUSE_SVG(night) {
  const lit = night ? "var(--h-lit)" : "var(--h-glass)";
  return `<svg class="house" viewBox="0 30 1000 390" preserveAspectRatio="none">
    <defs><linearGradient id="gnd" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="var(--h-ground)"/><stop offset="1" stop-color="var(--h-ground)" stop-opacity="0"/></linearGradient>
      <radialGradient id="sunG"><stop offset="0" stop-color="#fde68a"/><stop offset=".55" stop-color="#fbbf24"/><stop offset="1" stop-color="#fbbf24" stop-opacity="0"/></radialGradient>
      <radialGradient id="winG"><stop offset="0" stop-color="#fcd34d" stop-opacity=".55"/><stop offset="1" stop-color="#fcd34d" stop-opacity="0"/></radialGradient></defs>
    ${night ? `<g class="moon"><circle cx="118" cy="78" r="26" fill="#e2e8f0"/><circle cx="130" cy="70" r="24" fill="var(--wp-card)"/></g>${[[220, 40], [300, 90], [80, 150], [420, 30], [760, 60], [930, 110]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.8" fill="#cbd5e1" opacity=".7"/>`).join("")}`
      : `<g class="sun"><circle cx="118" cy="82" r="70" fill="url(#sunG)" opacity=".55"/><circle cx="118" cy="82" r="26" fill="#fbbf24"/></g>`}
    <rect x="0" y="352" width="1000" height="68" fill="url(#gnd)"/>
    <line x1="20" y1="352" x2="980" y2="352" stroke="var(--h-line)" stroke-width="2"/>
    <!-- trees -->
    <g fill="var(--h-tree)"><circle cx="745" cy="300" r="34"/><circle cx="772" cy="318" r="26"/><rect x="752" y="320" width="6" height="32" fill="var(--h-trunk)"/>
      <circle cx="40" cy="306" r="28"/><rect x="37" y="322" width="6" height="30" fill="var(--h-trunk)"/></g>
    <!-- garage -->
    <rect x="236" y="246" width="128" height="106" fill="var(--h-side)"/><rect x="228" y="238" width="144" height="12" rx="3" fill="var(--h-roof)"/>
    <rect x="252" y="270" width="96" height="82" rx="4" fill="var(--h-door)"/>${[0, 1, 2, 3, 4].map((k) => `<line x1="252" x2="348" y1="${286 + k * 14}" y2="${286 + k * 14}" stroke="var(--h-line)" stroke-width="1.5"/>`).join("")}
    <!-- main house -->
    <rect x="360" y="190" width="330" height="162" fill="var(--h-wall)"/>
    <polygon points="340,198 525,92 710,198" fill="var(--h-roof)"/>
    <polygon points="425,170 525,113 625,170" fill="var(--h-panel)"/>
    ${[1, 2, 3, 4].map((k) => { const x = 425 + k * 40; const yTop = 170 - Math.min(x - 425, 625 - x) * 0.57; return `<line x1="${x}" y1="${yTop.toFixed(1)}" x2="${x}" y2="170" stroke="var(--h-panel-line)" stroke-width="1.6"/>`; }).join("")}
    <line x1="462" y1="149" x2="588" y2="149" stroke="var(--h-panel-line)" stroke-width="1.6"/><line x1="497" y1="129" x2="553" y2="129" stroke="var(--h-panel-line)" stroke-width="1.6"/>
    <rect x="372" y="186" width="306" height="8" fill="var(--h-trim)"/>
    ${night ? `<circle cx="450" cy="260" r="70" fill="url(#winG)"/><circle cx="610" cy="250" r="60" fill="url(#winG)"/>` : ""}
    <rect x="392" y="222" width="96" height="62" rx="4" fill="${lit}"/><line x1="440" y1="222" x2="440" y2="284" stroke="var(--h-wall)" stroke-width="4"/>
    <rect x="576" y="222" width="86" height="62" rx="4" fill="${lit}"/><line x1="619" y1="222" x2="619" y2="284" stroke="var(--h-wall)" stroke-width="4"/>
    <rect x="503" y="246" width="54" height="106" rx="4" fill="var(--h-door)"/><circle cx="548" cy="302" r="3" fill="var(--h-trim)"/>
    <!-- car -->
    <g transform="translate(80,286)"><path d="M6,46 C6,36 16,32 34,30 L64,16 C74,10 92,8 116,8 C136,8 150,12 162,22 L178,30 C190,32 196,38 196,46 L196,52 L6,52 Z" fill="var(--h-car)" stroke="var(--h-line)" stroke-width="1.5"/>
      <path d="M70,18 C78,13 92,12 112,12 L114,28 L58,29 Z M120,12 C136,12 146,15 156,24 L120,28 Z" fill="var(--h-car-glass)"/>
      <circle cx="48" cy="52" r="14" fill="var(--h-tyre)"/><circle cx="48" cy="52" r="6" fill="var(--h-rim)"/><circle cx="158" cy="52" r="14" fill="var(--h-tyre)"/><circle cx="158" cy="52" r="6" fill="var(--h-rim)"/></g>
    <!-- pylon -->
    <g stroke="var(--h-pylon)" stroke-width="3" fill="none" stroke-linejoin="round"><path d="M848,352 L868,170 L888,352"/><path d="M842,196 L894,196 M836,226 L900,226"/><path d="M856,262 L880,262 M853,300 L884,300 M858,262 L878,300 M878,262 L858,300 M861,226 L876,262 M876,226 L861,262"/>
      <path d="M836,226 C800,236 760,240 720,236" stroke-width="1.5" opacity=".6"/><path d="M900,226 C930,232 960,236 990,236" stroke-width="1.5" opacity=".6"/></g>
  </svg>`;
}
const WP_FLOW_CSS = `
  :host { display:block; height:100%; } * { box-sizing:border-box; }
  :host([dark]) { --h-ground:#1a2a4b; --h-line:rgba(148,163,196,.25); --h-wall:#26385f; --h-side:#1f2f52; --h-roof:#0f1830; --h-trim:#33497a; --h-panel:#1d3a8f; --h-panel-line:#4f74e0; --h-glass:#3a5585; --h-lit:#fbbf24; --h-door:#18243f; --h-tree:#1e4636; --h-trunk:#3b2f22; --h-car:#e7ecf5; --h-car-glass:#1b2540; --h-tyre:#0b1120; --h-rim:#64748b; --h-pylon:#7083ab; }
  :host(:not([dark])) { --h-ground:#dbe5f2; --h-line:#c9d5e6; --h-wall:#ffffff; --h-side:#eef2f8; --h-roof:#3a4760; --h-trim:#c8d3e4; --h-panel:#1e40af; --h-panel-line:#6d8ff2; --h-glass:#bcd7fb; --h-lit:#fcd34d; --h-door:#d6deea; --h-tree:#9bd1af; --h-trunk:#a08262; --h-car:#f8fafc; --h-car-glass:#334155; --h-tyre:#1e293b; --h-rim:#94a3b8; --h-pylon:#8090ad; }
  .card { height:100%; display:flex; flex-direction:column; gap: 12px; padding: 18px 20px 20px; background: var(--wp-card); border:1px solid var(--wp-border); border-radius: var(--wp-radius); box-shadow: var(--wp-shadow); overflow:hidden; }
  header { display:flex; justify-content:space-between; align-items:flex-start; gap: 10px; }
  .ttl { display:flex; gap: 12px; align-items:center; } .ttl > ha-icon { --mdc-icon-size: 30px; color: var(--wp-accent); }
  h2 { margin:0; font-size: 24px; } header p { margin: 2px 0 0; color: var(--wp-muted); font-size: 16px; }
  .chips { display:flex; gap: 8px; } .chip { display:flex; align-items:center; gap: 7px; padding: 6px 12px; border-radius: 999px; font-size: 14px; font-weight: 700; border: 1px solid var(--wp-border); background: var(--wp-card-2); }
  .chip i { width: 8px; height: 8px; border-radius: 50%; background: var(--wp-ok); } .chip.warn i { background: #a78bfa; } .chip.live i { animation: pulse 1.6s infinite; }
  @keyframes pulse { 50% { opacity: .25; } }
  .scene { position:relative; flex: 1 1 0; min-height: 240px; cursor:pointer; }
  .scene.photo { overflow: hidden; margin: 0 -20px; }
  .stage { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); } .stage > svg { position:absolute; inset:0; width:100%; height:100%; }
  .fl { fill:none; stroke-width: 5; stroke-linecap: round; opacity: .55; } .photo .fl { opacity: .8; stroke-width: 6; filter: drop-shadow(0 0 4px rgba(0,0,0,.6)); } .fl.idle { stroke: var(--wp-track); opacity: .8; stroke-dasharray: 4 10; }
  .dot { filter: drop-shadow(0 0 6px currentColor); }
  .hub { fill: url(#hubg); stroke: #38bdf8; stroke-width: 3; filter: drop-shadow(0 0 10px rgba(56,189,248,.85)); }
  .hubhalo { fill: rgba(56,189,248,.16); stroke: rgba(56,189,248,.35); stroke-width: 1.5; }
  .hubi { width:48px; height:48px; display:grid; place-items:center; color: #9be7ff; } .hubi svg.lu { --mdc-icon-size: 28px; --lu-stroke: 2; filter: drop-shadow(0 0 4px rgba(56,189,248,.8)); }
  .ttl > svg.hico { --mdc-icon-size: 34px; --lu-stroke: 1.8; color: var(--wp-text); }
  .lbl { position:absolute; display:flex; align-items:center; gap: 8px; }
  .lbox { padding: 8px 14px; border-radius: 14px; background: color-mix(in srgb, var(--wp-card) 84%, transparent); border:1px solid var(--wp-border); backdrop-filter: blur(6px); box-shadow: var(--wp-shadow); }
  .lic { flex: none; width: 52px; height: 52px; display:grid; place-items:center; }
  .lic svg { width: 100%; height: 100%; overflow: visible; }
  .lic:not(.grid):not(.on) svg { filter: grayscale(1) opacity(.65); } .lic.on svg { filter: drop-shadow(0 0 10px rgba(251,191,36,.75)); }
  .lic.grid { color: #a78bfa; } .lic.grid svg { width: 44px; height: 44px; filter: drop-shadow(0 0 7px rgba(167,139,250,.9)); }
  .lic.grid.exp { color: #4ade80; } .lic.grid.exp svg { filter: drop-shadow(0 0 7px rgba(74,222,128,.85)); }
  .lbl small { display:block; color: var(--wp-muted); font-size: 14px; } .lbl b { display:block; font-size: 26px; line-height: 1.15; } .lbl b i { font-style: normal; font-size: 16px; color: var(--wp-muted); }
  .lbl em { display:block; font-style:normal; font-size: 14px; font-weight: 700; color: var(--wp-muted); } .lbl em.y { color: #f59e0b; } .lbl em.p { color: #a78bfa; } .lbl em.g { color: #22c55e; } .lbl em.c { color: #06b6d4; }
  .stage:not(.photo) #l-solar { left: 17.5%; top: 2%; } .stage:not(.photo) #l-grid { left: 70%; top: 6%; } .stage:not(.photo) #l-home { left: 55.5%; top: 77%; } .stage:not(.photo) #l-ev { left: 3%; top: 40%; }
  .ph { position:absolute; inset:0; width:100%; height:100%; object-fit: cover; object-position: 50% 50%; transition: opacity .9s ease;
    -webkit-mask-image: linear-gradient(to bottom, transparent, #000 11%, #000 86%, transparent); mask-image: linear-gradient(to bottom, transparent, #000 11%, #000 86%, transparent); }
  .ph.car { opacity: 0; } .withcar .ph.car { opacity: 1; }
  :host(:not([dark])) .ph { -webkit-mask-image: none; mask-image: none; }
  .lbl:empty { display:none; }
  .tiles { display:grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; }
  .tile { display:flex; flex-direction:column; justify-content:space-between; gap: 10px; padding: 13px 14px 12px; border-radius: 18px; background: var(--wp-card-2); border: 1px solid var(--wp-border); min-width: 0; }
  .th { display:flex; align-items:center; gap: 11px; min-width: 0; } .th > div { min-width: 0; }
  .ti { --mdc-icon-size: 34px; --lu-stroke: 1.7; flex:none; } .ti.y { color:#fbbf24; } .ti.b { color:#38bdf8; } .ti.g { color:#22c55e; } .ti.p { color:#a78bfa; }
  .th h4 { margin: 0; font-size: 15px; font-weight: 700; letter-spacing: -.01em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .th b { display:block; font-size: 27px; font-weight: 800; line-height: 1.15; white-space: nowrap; letter-spacing: -.01em; } .th b i { font-style: normal; font-size: 19px; font-weight: 700; }
  .money { margin: 1px 0 0; font-size: 14px; font-weight: 700; color: var(--wp-muted); } .money.g { color: #22c55e; }
  .tf { display:flex; align-items:flex-end; gap: 10px; min-width: 0; }
  .tf.yr { align-items:center; gap: 14px; border-top: 1px solid var(--wp-border); padding-top: 10px; }
  .ti2 { --mdc-icon-size: 30px; --lu-stroke: 1.7; color: #60a5fa; margin: 0 4px; } .tf.yr small { display:block; font-size: 14px; font-weight: 600; } .tf.yr b { display:block; font-size: 22px; font-weight: 800; line-height: 1.15; } .tf.yr b i { font-style:normal; font-size: 15px; font-weight: 700; color: var(--wp-muted); }
  .side { flex: none; display:flex; flex-direction:column; align-items:flex-end; text-align: right; } .side b { display:flex; align-items:center; gap: 2px; font-size: 16px; font-weight: 800; } .side small { font-size: 13px; color: var(--wp-muted); white-space: nowrap; }
  .vs b { color: #2dd4bf; } .vs svg.lu { --mdc-icon-size: 16px; --lu-stroke: 2.6; }
  .bars { flex: 1; min-width: 0; width: 100%; height: 40px; display:block; }
`;
customElements.define("wp-power-flow", WpPowerFlow);

/* ---------------- wp-side: climate summary · people · TV ---------------- */
const TV_ACTIVE = ["playing", "paused", "on", "idle", "buffering"];
class WpSide extends WpBase {
  _ids() {
    const c = this._config;
    return [...(c.rooms || []).flatMap((r) => [r.climate, r.temperature, r.target_entity]), ...(c.hot_water ? Object.values(c.hot_water) : []), ...(c.people || []).map((p) => p.entity), c.tv?.media_player, c.theme_entity];
  }
  _render() {
    const h = this._hass, c = this._config;
    const tv = c.tv && h.states[c.tv.media_player];
    const tvOn = tv && TV_ACTIVE.includes(tv.state);
    const r = this.shadowRoot;
    if (!this._main) {
      r.innerHTML = `<style>${WP_PALETTE}${WP_SIDE_CSS}</style><div id="main"></div><div id="pmap"></div>`;
      this._main = r.getElementById("main"); this._lastHtml = null;
    }
    if (this._pm) this._pmUpdate();
    const html = `<div class="col">${this._climateHtml()}${this._peopleHtml()}${tvOn ? this._tvHtml(tv) : ""}</div>
      ${this._tvModal && tvOn ? this._remoteHtml(tv) : ""}`;
    if (html === this._lastHtml) return;
    this._lastHtml = html; this._main.innerHTML = html;
    this._bind();
  }
  /* ---------- person location dialog (built-in; replaces the Bubble Card map pop-ups) ---------- */
  _pmOpen(i) {
    const p = (this._config.people || [])[i]; if (!p) return;
    this._pm = { i, entity: p.entity };
    const host = this.shadowRoot.getElementById("pmap");
    host.innerHTML = `<div class="scrim pm-in" data-pm="close"></div>
      <div class="sheet pmap pm-in"><header class="sh" id="pmh"></header>
        <div class="pmb"><div class="mapbox" id="pmm"></div><div class="pminfo" id="pmi"></div></div></div>`;
    host.querySelectorAll("[data-pm]").forEach((el) => el.addEventListener("click", (e) => { if (e.target.closest("[data-pm]") === el) this._pmClose(); }));
    host.querySelector(".sheet").addEventListener("click", (e) => { const x = e.target.closest("[data-pm]"); if (x) this._pmClose(); });
    this._pmUpdate();
    this._pmMap();
  }
  _pmClose() { this._pm = null; this._pmCard = null; const host = this.shadowRoot.getElementById("pmap"); if (host) host.innerHTML = ""; }
  async _pmMap() {
    const pm = this._pm, box = this.shadowRoot.getElementById("pmm"); if (!pm || !box) return;
    const c = this._config, p = c.people[pm.i];
    pm.dark = this.hasAttribute("dark");   // follow the wall panel's own light/dark setting, not HA's profile theme
    await new Promise((res) => requestAnimationFrame(res));
    const w = box.clientWidth || 700, hgt = box.clientHeight || 500;
    try {
      const helpers = await window.loadCardHelpers();
      if (this._pm !== pm) return;
      const card = helpers.createCardElement({ type: "map", entities: [{ entity: p.entity }, { entity: c.home_zone || "zone.home" }], default_zoom: p.zoom || c.map_zoom || 14, hours_to_show: p.hours_to_show ?? c.map_hours ?? 0, theme_mode: c.map_theme || (pm.dark ? "dark" : "light"), aspect_ratio: `${((hgt / w) * 100).toFixed(1)}%` });
      card.hass = this._hass; this._pmCard = card;
      box.innerHTML = ""; box.appendChild(card);
    } catch (e) { box.innerHTML = `<p class="pmerr">Map unavailable</p>`; }
  }
  _pmUpdate() {
    const pm = this._pm, h = this._hass, c = this._config; if (!pm) return;
    const r = this.shadowRoot, p = c.people[pm.i], s = h.states[pm.entity]; if (!s) return;
    if (this._pmCard) this._pmCard.hass = h;
    if (this._pmCard && pm.dark !== this.hasAttribute("dark")) { this._pmCard = null; this._pmMap(); }
    const a = s.attributes, home = s.state === "home";
    const where = home ? "Home" : s.state === "not_home" ? "Away" : s.state;
    const pic = a.entity_picture;
    const z = h.states[c.home_zone || "zone.home"]?.attributes || {};
    let dist = null;
    if (a.latitude != null && z.latitude != null) {
      const R = 6371, rad = (d) => (d * Math.PI) / 180, dLa = rad(a.latitude - z.latitude), dLo = rad(a.longitude - z.longitude);
      const q = Math.sin(dLa / 2) ** 2 + Math.cos(rad(z.latitude)) * Math.cos(rad(a.latitude)) * Math.sin(dLo / 2) ** 2;
      dist = 2 * R * Math.asin(Math.sqrt(q));
    }
    const since = new Date(s.last_changed);
    const sinceTxt = `${since.toLocaleTimeString("en-AU", { hour: "numeric", minute: "2-digit" })}${since.toDateString() === new Date().toDateString() ? "" : ` · ${since.toLocaleDateString("en-AU", { weekday: "short", day: "numeric", month: "short" })}`}`;
    const src = a.source ? h.states[a.source] : null;
    const row = (ic, label, val, cls = "") => `<div class="pmr ${cls}">${icon(ic)}<div><small>${label}</small><b>${val}</b></div></div>`;
    const head = `<div class="ttl"><div class="av ${home ? "home" : "away"}">${pic ? `<img src="${$esc(pic)}" alt="">` : icon("mdi:account")}<i></i></div>
        <div><h2>${$esc(p.name || a.friendly_name)}</h2><p class="${home ? "ok" : "warn"}">${$esc(where)} <span>· for ${ago(s.last_changed)}</span></p></div></div>
      <button class="x" data-pm="close" aria-label="Close">${icon("mdi:close")}</button>`;
    const info = row(home ? "mdi:home-outline" : "mdi:map-marker-outline", "Location", $esc(where), home ? "ok" : "warn")
      + row("mdi:clock-outline", home ? "Home since" : s.state === "not_home" ? "Away since" : "Arrived", sinceTxt)
      + (dist != null ? row("mdi:map-marker-distance", "From home", home ? "At home" : dist < 1 ? `${Math.round(dist * 1000)} m` : `${dist.toFixed(dist < 10 ? 1 : 0)} km`) : "")
      + (a.gps_accuracy != null ? row("mdi:crosshairs-gps", "GPS accuracy", `± ${Math.round(a.gps_accuracy)} m`) : "")
      + (src ? row("mdi:cellphone", "Tracked by", `${$esc(src.attributes.friendly_name || a.source)}<em>updated ${ago(src.last_updated)} ago</em>`) : "");
    const hh = r.getElementById("pmh"), ii = r.getElementById("pmi");
    if (hh && hh._h !== head) { hh._h = head; hh.innerHTML = head; hh.querySelector("[data-pm]")?.addEventListener("click", () => this._pmClose()); }
    if (ii && ii._h !== info) { ii._h = info; ii.innerHTML = info; }
  }
  _climateHtml() {
    const h = this._hass, c = this._config;
    const rooms = (c.rooms || []).map((r) => {
      const s = h.states[r.climate]; const on = s && !["off", "unavailable", "unknown"].includes(s.state);
      return { r, s, on, mode: s?.state, cur: (r.temperature && num(h.states[r.temperature]?.state)) ?? num(s?.attributes.current_temperature), target: r.target_entity ? num(h.states[r.target_entity]?.state) : num(s?.attributes.temperature) };
    });
    const temps = rooms.map((x) => x.cur).filter((v) => v != null);
    const avg = temps.length ? temps.reduce((a, v) => a + v, 0) / temps.length : null;
    const onR = rooms.filter((x) => x.on);
    const modes = [...new Set(onR.map((x) => x.mode))];
    const sum = onR.length ? `${onR.length} room${onR.length > 1 ? "s" : ""} ${modes.length === 1 ? ({ heat: "heating", cool: "cooling", dry: "drying", fan_only: "on fan" }[modes[0]] || "on") : "on"}` : "All rooms off";
    const hw = c.hot_water || {};
    const hwT = num(h.states[hw.temperature]?.state), hwMode = h.states[hw.mode]?.state, hwOn = h.states[hw.switch]?.state === "on", hwP = num(h.states[hw.power]?.state);
    return `<section class="card clim" data-go="${c.climate_path || ""}">
      <header><div class="ttl">${icon("lu:thermometer")}<h2>${$esc(c.climate_title || "Climate & Heat Pumps")}</h2></div>${icon("mdi:chevron-right", "chev")}</header>
      ${c.heat_pump_image ? `<div class="hp ${c.heat_pump_style === "photo" ? "photo" : ""}" style="${c.heat_pump_height ? `height:${+c.heat_pump_height}px;` : ""}${c.heat_pump_aspect ? `--hp-ar:${+c.heat_pump_aspect};` : ""}"><img src="${$esc(c.heat_pump_image)}" alt=""></div>` : ""}
      <div class="cl-top">
        <div class="ct">${icon("lu:thermometer", "cti h")}<div><h4>House Temperature</h4><b>${fmt1(avg)}<i> °C</i></b><small>${sum}</small></div></div>
        ${c.hot_water ? `<div class="ct hw ${hwOn ? "run" : ""}">${icon("lu:droplet", "cti w")}<div><h4>Hot Water Temperature</h4><b>${hwT == null ? "–" : Math.round(hwT)}<i> °C</i></b><small>${hwOn ? `Heating${hwP > 20 ? ` · ${(hwP / 1000).toFixed(1)} kW` : ""}` : "Idle"}</small></div></div>` : ""}
      </div>
      <div class="rlist">${rooms.map((x) => { const m = x.on ? MODES[x.mode]?.c || "auto" : "off"; return `<div class="rrow m-${m}"><i class="dot"></i><span class="rn">${$esc(x.r.name)}</span><span class="rt">${fmt1(x.cur)}°</span><span class="rs">${x.on ? `${MODES[x.mode]?.label || x.mode}${x.target != null && ["heat", "cool", "heat_cool", "auto"].includes(x.mode) ? ` ${x.target}°` : ""}` : "Off"}</span></div>`; }).join("")}</div>
    </section>`;
  }
  _peopleHtml() {
    const h = this._hass, c = this._config;
    if (!c.people?.length) return "";
    return `<div class="people">${c.people.map((p) => {
      const s = h.states[p.entity]; if (!s) return "";
      const home = s.state === "home"; const where = home ? "Home" : s.state === "not_home" ? "Away" : s.state;
      const pic = s.attributes.entity_picture;
      return `<button class="card person ${home ? "home" : "away"}" ${p.popup ? `data-go="${$esc(p.popup)}"` : `data-person="${c.people.indexOf(p)}"`}>
        <div class="av">${pic ? `<img src="${$esc(pic)}" alt="">` : icon("mdi:account")}<i></i></div>
        <div class="pi"><b>${$esc(p.name || s.attributes.friendly_name)}</b><span>${$esc(where)}</span><small>for ${ago(s.last_changed)}</small></div>
        ${icon("mdi:map-marker-outline", "pin")}</button>`;
    }).join("")}</div>`;
  }
  _tvHtml(tv) {
    const a = tv.attributes; const playing = tv.state === "playing";
    return `<section class="card tv">
      <div class="tvc">
        <div class="tvtop"><div class="tvtx">
          <div class="tvh">${icon("mdi:television-play")}<span>${$esc(this._config.tv.name || a.friendly_name)} · ${$esc(a.app_name || a.source || tv.state)}</span></div>
          <b class="tvt">${$esc(a.media_title || (tv.state === "idle" ? "Home screen" : "On"))}</b><small>${$esc(a.media_artist || a.media_series_title || "")}</small>
        </div>${a.entity_picture ? `<img class="tvart" src="${$esc(a.entity_picture)}" alt="" onerror="this.remove()">` : ""}</div>
        <div class="tvb">
          <button class="rb" data-tv="media_previous_track">${icon("mdi:skip-previous")}</button>
          <button class="rb main" data-tv="media_play_pause">${icon(playing ? "mdi:pause" : "mdi:play")}</button>
          <button class="rb" data-tv="media_next_track">${icon("mdi:skip-next")}</button>
          <button class="rb" data-tv="volume_down">${icon("mdi:volume-minus")}</button>
          <button class="rb" data-tv="volume_up">${icon("mdi:volume-plus")}</button>
          <button class="rb wide" data-act="remote">${icon("mdi:remote-tv")}Remote</button>
        </div>
      </div></section>`;
  }
  _remoteHtml(tv) {
    const c = this._config.tv; const a = tv.attributes;
    const apps = (c.apps || []).filter((x) => (a.source_list || []).includes(x));
    const pad = (cmd, ic, cls = "") => `<button class="pad ${cls}" data-rc="${cmd}">${icon(ic)}</button>`;
    return `<div class="scrim" data-act="close"></div><div class="sheet">
      <header class="sh"><div class="ttl">${icon("mdi:remote-tv")}<div><h2>${$esc(c.name || a.friendly_name)}</h2><p>${$esc(a.app_name || "")}${a.media_title ? ` · ${$esc(a.media_title)}` : ""}</p></div></div><button class="x" data-act="close">${icon("mdi:close")}</button></header>
      <div class="rm">
        <div class="dpad">${pad("up", "mdi:chevron-up", "u")}${pad("left", "mdi:chevron-left", "l")}<button class="pad ok" data-rc="select">OK</button>${pad("right", "mdi:chevron-right", "r")}${pad("down", "mdi:chevron-down", "d")}</div>
        <div class="rside">
          <div class="rrow2">${pad("menu", "mdi:arrow-left")}${pad("home", "mdi:home")}${pad("top_menu", "mdi:menu")}</div>
          <div class="rrow2"><button class="pad" data-tv="volume_down">${icon("mdi:volume-minus")}</button><button class="pad" data-tv="volume_mute">${icon("mdi:volume-off")}</button><button class="pad" data-tv="volume_up">${icon("mdi:volume-plus")}</button></div>
          <div class="rrow2"><button class="pad" data-tv="media_previous_track">${icon("mdi:skip-previous")}</button><button class="pad acc" data-tv="media_play_pause">${icon("mdi:play-pause")}</button><button class="pad" data-tv="media_next_track">${icon("mdi:skip-next")}</button></div>
          <button class="pad off" data-tv="turn_off">${icon("mdi:power")}Turn off TV</button>
        </div>
      </div>
      ${apps.length ? `<div class="apps">${apps.map((x) => `<button class="app ${a.app_name === x || a.source === x ? "on" : ""}" data-src="${$esc(x)}">${$esc(x)}</button>`).join("")}</div>` : ""}
    </div>`;
  }
  _bind() {
    const r = this.shadowRoot, c = this._config;
    r.querySelectorAll("[data-go]").forEach((el) => el.addEventListener("click", () => this._go(el.dataset.go)));
    r.querySelectorAll("[data-person]").forEach((el) => el.addEventListener("click", () => this._pmOpen(+el.dataset.person)));
    r.querySelectorAll("[data-act]").forEach((el) => el.addEventListener("click", (e) => { e.stopPropagation(); this._tvModal = el.dataset.act === "remote"; this._sig = null; this._render(); }));
    r.querySelectorAll("[data-tv]").forEach((el) => el.addEventListener("click", (e) => {
      e.stopPropagation(); const s = el.dataset.tv;
      if (s === "volume_mute") this._call("media_player", "volume_mute", { entity_id: c.tv.media_player, is_volume_muted: !this._hass.states[c.tv.media_player]?.attributes.is_volume_muted });
      else this._call("media_player", s, { entity_id: c.tv.media_player });
      if (s === "turn_off") { this._tvModal = false; this._sig = null; this._render(); }
    }));
    r.querySelectorAll("[data-rc]").forEach((el) => el.addEventListener("click", (e) => { e.stopPropagation(); this._call("remote", "send_command", { entity_id: c.tv.remote, command: el.dataset.rc }); }));
    r.querySelectorAll("[data-src]").forEach((el) => el.addEventListener("click", (e) => { e.stopPropagation(); this._call("media_player", "select_source", { entity_id: c.tv.media_player, source: el.dataset.src }); }));
  }
}
const WP_SIDE_CSS = `
  :host { display:block; height:100%; } * { box-sizing:border-box; } button { font: inherit; color: inherit; }
  .m-heat { --mc: var(--wp-heat); } .m-cool { --mc: var(--wp-cool); } .m-dry { --mc: var(--wp-dry); } .m-fan { --mc: var(--wp-fan); } .m-auto { --mc: var(--wp-auto); } .m-off { --mc: var(--wp-faint); }
  .col { height:100%; display:flex; flex-direction:column; gap: var(--wp-gap); }
  .card { background: var(--wp-card); border:1px solid var(--wp-border); border-radius: var(--wp-radius); box-shadow: var(--wp-shadow); }
  header { display:flex; justify-content:space-between; align-items:center; } .ttl { display:flex; gap: 10px; align-items:center; } .ttl > ha-icon, .ttl > svg.lu { --mdc-icon-size: 28px; color: var(--wp-accent); }
  h2 { margin:0; font-size: 22px; } .chev { color: var(--wp-muted); }
  .clim { flex: 1; min-height: 0; padding: 16px 18px; display:flex; flex-direction:column; gap: 12px; cursor:pointer; }
  .hp { height: 112px; flex: none; display:flex; align-items:center; justify-content:center; }
  .hp img { height: 100%; width: 100%; object-fit: contain; filter: drop-shadow(0 10px 14px rgba(0,0,0,.35)); }
  .clim { container-type: inline-size; }
  .hp.photo { height: auto; width: auto; margin: 0 -18px; flex: 20 1 0; min-height: 110px; max-height: calc((100cqw + 0px) / var(--hp-ar, 2.26)); overflow: hidden; }
  .clim:has(.hp.photo) .rlist { flex: 1 0 auto; }
  :host(:not([dark])) .hp.photo img { -webkit-mask-image: none; mask-image: none; }
  .hp.photo img { width: 100%; height: 100%; object-fit: cover; object-position: 50% 38%; filter: none;
    -webkit-mask-image: linear-gradient(to bottom, #000 82%, transparent); mask-image: linear-gradient(to bottom, #000 82%, transparent); }
  .clim:has(.hp.photo) { padding-top: 14px; } .clim:has(.hp.photo) .rrow { padding: 3px 4px; font-size: 17px; } .clim:has(.hp.photo) .rs { font-size: 15px; }
  .clim:has(.hp.photo) { gap: 10px; } .clim:has(.hp.photo) .ct { padding: 10px 12px; } .clim:has(.hp.photo) .ct b { font-size: 30px; }
  .cl-top { display:grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .ct { display:flex; align-items:flex-start; gap: 8px; min-width: 0; background: var(--wp-card-2); border:1px solid var(--wp-border); border-radius: 16px; padding: 12px 12px; }
  .ct > div { min-width: 0; } .ct h4 { margin: 2px 0 0; font-size: 14px; font-weight: 700; letter-spacing: -.01em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .cti { --mdc-icon-size: 30px; --lu-stroke: 1.8; flex: none; margin-top: 2px; } .cti.h { color: var(--wp-heat); } .cti.w { color: #38bdf8; }
  .mini { display:flex; align-items:center; gap: 6px; color: var(--wp-muted); font-size: 15px; } .mini ha-icon { --mdc-icon-size: 20px; color: var(--wp-heat); }
  .hw .mini ha-icon { color: #38bdf8; } .ct b { display:block; font-size: 32px; font-weight: 800; line-height: 1.15; white-space: nowrap; } .ct b i { font-style: normal; font-size: 22px; font-weight: 700; }
  .ct small { display:block; color: var(--wp-muted); font-size: 14px; font-weight: 600; } .hw.run small { color: #38bdf8; font-weight: 600; }
  .rlist { display:flex; flex-direction:column; gap: 2px; flex: 1; justify-content: space-evenly; }
  .rrow { display:grid; grid-template-columns: 14px 1fr auto auto; align-items:center; gap: 10px; padding: 7px 4px; font-size: 18px; border-bottom: 1px solid var(--wp-border); } .rrow:last-child { border-bottom: 0; }
  .rrow .dot { width: 10px; height: 10px; border-radius: 50%; background: var(--mc); } .rn { font-weight: 600; } .rt { font-weight: 700; } .rs { color: var(--mc); font-weight: 600; min-width: 80px; text-align: right; font-size: 16px; } .m-off .rs { color: var(--wp-muted); }
  .people { display:grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: var(--wp-gap); }
  .person { all: unset; box-sizing:border-box; min-width: 0; cursor:pointer; display:flex; align-items:center; gap: 11px; padding: 12px 14px; position: relative; background: var(--wp-card); border:1px solid var(--wp-border); border-radius: var(--wp-radius); box-shadow: var(--wp-shadow); }
  .av { position: relative; width: 48px; height: 48px; flex:none; border-radius: 50%; background: var(--wp-card-2); display:grid; place-items:center; }
  .av img { width:100%; height:100%; border-radius: 50%; object-fit: cover; } .av i { position:absolute; right: -1px; bottom: -1px; width: 16px; height: 16px; border-radius: 50%; border: 3px solid var(--wp-card); background: var(--wp-faint); }
  .home .av i { background: var(--wp-ok); } .away .av i { background: var(--wp-warn); }
  .pi { flex:1; min-width: 0; display:flex; flex-direction:column; } .pi b { font-size: 19px; } .pi span { font-size: 15px; font-weight: 600; line-height: 1.2; padding-right: 4px; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; overflow-wrap: anywhere; } .home .pi span { color: var(--wp-ok); } .away .pi span { color: var(--wp-warn); }
  .pi small { color: var(--wp-muted); font-size: 13px; } .pin { color: var(--wp-muted); position: absolute; top: 10px; right: 10px; --mdc-icon-size: 19px; }
  .tv { position: relative; overflow:hidden; padding: 0; min-height: 150px; flex: none; }
  .tvtop { display:flex; align-items:flex-start; gap: 12px; }
  .tvtx { flex: 1; min-width: 0; display:flex; flex-direction:column; gap: 2px; }
  .tvart { flex: none; height: 74px; width: auto; max-width: 132px; object-fit: cover; border-radius: 10px; border: 1px solid var(--wp-border); box-shadow: 0 4px 14px rgba(0,0,0,.25); background: var(--wp-card-2); }
  .tvc { position: relative; padding: 14px 16px; display:flex; flex-direction:column; gap: 2px; }
  .tvh { display:flex; align-items:center; gap: 8px; color: var(--wp-muted); font-size: 14px; font-weight: 600; } .tvh ha-icon { --mdc-icon-size: 20px; color: var(--wp-accent); }
  .tvt { font-size: 20px; white-space: nowrap; overflow:hidden; text-overflow: ellipsis; } .tvc small { color: var(--wp-muted); font-size: 14px; min-height: 18px; white-space: nowrap; overflow:hidden; text-overflow: ellipsis; }
  .tvb { display:flex; gap: 8px; margin-top: 8px; } .rb { width: 50px; height: 50px; border-radius: 14px; border:1px solid var(--wp-border); background: color-mix(in srgb, var(--wp-card-2) 85%, transparent); display:grid; place-items:center; cursor:pointer; }
  .rb.main { background: var(--wp-accent); color:#fff; border-color: transparent; } .rb.wide { flex:1; display:flex; gap: 6px; justify-content:center; font-weight: 700; font-size: 16px; }
  .scrim { position: fixed; inset: 0; background: rgba(3,8,20,.55); backdrop-filter: blur(6px); z-index: 20; }
  .sheet { position: fixed; z-index: 21; left: 50%; top: 50%; transform: translate(-50%,-50%); width: min(820px, 92vw); background: var(--wp-card); border:1px solid var(--wp-border); border-radius: 28px; box-shadow: 0 30px 80px rgba(0,0,0,.45); padding-bottom: 22px; }
  :host(:not([dark])) .sheet { background: #fff; }
  .sh { padding: 18px 22px; border-bottom: 1px solid var(--wp-border); } .sh p { margin: 2px 0 0; color: var(--wp-muted); }
  .x { width: 58px; height: 58px; border-radius: 50%; border:1px solid var(--wp-border); background: var(--wp-card-2); display:grid; place-items:center; cursor:pointer; } .x ha-icon { --mdc-icon-size: 28px; }
  .rm { display:grid; grid-template-columns: auto 1fr; gap: 26px; padding: 22px 26px 6px; align-items:center; }
  .dpad { display:grid; grid-template-columns: repeat(3, 84px); grid-template-rows: repeat(3, 84px); gap: 8px; }
  .pad { border:1px solid var(--wp-border); background: var(--wp-card-2); border-radius: 18px; cursor:pointer; display:flex; align-items:center; justify-content:center; gap: 8px; min-height: 64px; font-size: 18px; font-weight: 700; } .pad ha-icon { --mdc-icon-size: 32px; } .pad:active { background: var(--wp-card-hi); transform: scale(.96); }
  .dpad .u { grid-column: 2; grid-row: 1; } .dpad .l { grid-column: 1; grid-row: 2; } .dpad .ok { grid-column: 2; grid-row: 2; border-radius: 50%; background: var(--wp-accent); color:#fff; border-color: transparent; font-size: 22px; } .dpad .r { grid-column: 3; grid-row: 2; } .dpad .d { grid-column: 2; grid-row: 3; }
  .rside { display:flex; flex-direction:column; gap: 10px; } .rrow2 { display:grid; grid-template-columns: repeat(3, 1fr); gap: 10px; } .pad.acc { background: var(--wp-accent); color:#fff; border-color: transparent; } .pad.off { color: var(--wp-bad); }
  /* person location dialog */
  .pm-in.scrim { animation: pmf .2s; } .pm-in.sheet { animation: pmp .22s cubic-bezier(.2,.9,.3,1.2); }
  @keyframes pmf { from { opacity: 0; } } @keyframes pmp { from { opacity: 0; transform: translate(-50%,-50%) scale(.96); } }
  .sheet.pmap { width: min(1120px, 92vw); height: min(760px, 88vh); padding: 0; display:flex; flex-direction:column; overflow:hidden; }
  .pmap .sh { display:flex; justify-content:space-between; align-items:center; flex: none; }
  .pmap .ttl { gap: 14px; } .pmap .ttl h2 { font-size: 24px; }
  .pmap .sh p { font-size: 16px; font-weight: 600; } .pmap .sh p.ok { color: var(--wp-ok); } .pmap .sh p.warn { color: var(--wp-warn); } .pmap .sh p span { color: var(--wp-muted); font-weight: 500; }
  .pmap .av { width: 56px; height: 56px; } .pmap .av.home i { background: var(--wp-ok); } .pmap .av.away i { background: var(--wp-warn); }
  .pmb { flex: 1; min-height: 0; display:grid; grid-template-columns: minmax(0, 1fr) 290px; gap: 18px; padding: 18px 22px 22px; }
  .mapbox { position: relative; min-height: 0; border-radius: 20px; overflow: hidden; border: 1px solid var(--wp-border); background: var(--wp-card-2); }
  .mapbox > * { display:block; height: 100%; --ha-card-border-radius: 0; --ha-card-border-width: 0; --ha-card-box-shadow: none; }
  .pmerr { margin: 0; padding: 24px; color: var(--wp-muted); }
  .pminfo { display:flex; flex-direction:column; gap: 10px; min-height: 0; overflow: auto; }
  .pmr { display:flex; align-items:flex-start; gap: 12px; padding: 14px 16px; border-radius: 16px; background: var(--wp-card-2); border: 1px solid var(--wp-border); }
  .pmr > ha-icon { --mdc-icon-size: 24px; color: var(--wp-accent); flex: none; margin-top: 2px; } .pmr.ok > ha-icon { color: var(--wp-ok); } .pmr.warn > ha-icon { color: var(--wp-warn); }
  .pmr div { min-width: 0; display:flex; flex-direction:column; } .pmr small { color: var(--wp-muted); font-size: 13.5px; font-weight: 600; }
  .pmr b { font-size: 18px; font-weight: 700; overflow-wrap: anywhere; } .pmr em { display:block; font-style: normal; font-size: 13px; font-weight: 500; color: var(--wp-muted); margin-top: 2px; }
  .apps { display:flex; gap: 8px; flex-wrap: wrap; padding: 14px 26px 0; } .app { border:1px solid var(--wp-border); background: var(--wp-card-2); border-radius: 999px; padding: 12px 18px; font-size: 16px; font-weight: 700; cursor:pointer; } .app.on { border-color: var(--wp-accent); color: var(--wp-accent); }
`;
customElements.define("wp-side", WpSide);

/* ---------------- wp-car ---------------- */
class WpCar extends WpBase {
  _ids() { const c = this._config; return [c.battery, c.range, c.charging, c.plugged, c.charger_power, c.location, c.lock, c.charge_limit, c.theme_entity]; }
  _render() {
    const h = this._hass, c = this._config;
    const b = stateNum(h, c.battery), rng = stateNum(h, c.range);
    const charging = h.states[c.charging]?.state === "on", plugged = h.states[c.plugged]?.state === "on";
    const pw = stateNum(h, c.charger_power); const loc = h.states[c.location]?.state; const locked = h.states[c.lock]?.state === "locked";
    const col = b == null ? "var(--wp-faint)" : b < 20 ? "var(--wp-bad)" : b < 40 ? "var(--wp-warn)" : "var(--wp-ok)";
    const status = charging ? `Charging${pw ? ` · ${pw.toFixed(1)} kW` : ""}` : plugged ? "Plugged in" : "Not plugged in";
    this._setHtml(`<style>${WP_PALETTE}${WP_CAR_CSS}</style>
      <section class="card" data-go="${c.tap || ""}">
        <div class="hd">${icon("mdi:car-electric")}<div class="hdt"><h2>${$esc(c.name || "Car")}</h2><small>${$esc(loc === "home" ? "Home" : loc === "not_home" ? "Away" : loc || "")}${c.lock ? ` · ${locked ? "Locked" : "Unlocked"}` : ""}</small></div></div>
        ${c.image ? `<img class="carimg" src="${$esc(c.image)}" alt="">` : `<svg class="car" viewBox="0 0 200 66">${WP_CAR_PATH}</svg>`}
        <div class="bat"><b>${b == null ? "–" : Math.round(b)}<i>%</i></b>
          <div class="bar"><span style="width:${b ?? 0}%;background:${col}"></span></div>
          <small>${rng == null ? "" : `${Math.round(rng)} km range`}</small></div>
        <span class="st ${charging ? "chg" : plugged ? "plug" : ""}">${icon(charging ? "mdi:lightning-bolt" : plugged ? "mdi:power-plug" : "mdi:power-plug-off-outline")}${status}</span>
        ${icon("mdi:chevron-right", "chev")}
      </section>`) && this.shadowRoot.querySelectorAll("[data-go]").forEach((el) => el.addEventListener("click", () => this._go(el.dataset.go)));
  }
}
const WP_CAR_PATH = `<path d="M6,46 C6,36 16,32 34,30 L64,16 C74,10 92,8 116,8 C136,8 150,12 162,22 L178,30 C190,32 196,38 196,46 L196,52 L6,52 Z" fill="var(--c-body)"/><path d="M70,18 C78,13 92,12 112,12 L114,28 L58,29 Z M120,12 C136,12 146,15 156,24 L120,28 Z" fill="var(--c-glass)"/><circle cx="48" cy="52" r="13" fill="var(--c-tyre)"/><circle cx="48" cy="52" r="6" fill="var(--c-rim)"/><circle cx="158" cy="52" r="13" fill="var(--c-tyre)"/><circle cx="158" cy="52" r="6" fill="var(--c-rim)"/>`;
const WP_CAR_CSS = `
  :host { display:block; } * { box-sizing:border-box; }
  :host([dark]) { --c-body:#e7ecf5; --c-glass:#1b2540; --c-tyre:#0b1120; --c-rim:#64748b; } :host(:not([dark])) { --c-body:#f1f5f9; --c-glass:#334155; --c-tyre:#1e293b; --c-rim:#94a3b8; }
  .card { display:flex; align-items:center; gap: 18px; padding: 14px 18px 14px 20px; min-width: 0; overflow: hidden; background: var(--wp-card); border:1px solid var(--wp-border); border-radius: var(--wp-radius); box-shadow: var(--wp-shadow); cursor:pointer; }
  .hd { display:flex; gap: 12px; align-items:center; flex: 0 1 210px; min-width: 120px; white-space: nowrap; }
  .hdt { min-width: 0; } .hdt h2, .hdt small { display:block; overflow: hidden; text-overflow: ellipsis; } .hd > ha-icon { --mdc-icon-size: 28px; color: var(--wp-accent); } h2 { margin:0; font-size: 21px; } .hd small { color: var(--wp-muted); font-size: 15px; }
  .car { width: 170px; height: 56px; flex:none; filter: drop-shadow(0 6px 10px rgba(0,0,0,.3)); }
  .carimg { height: 56px; width: auto; max-width: 175px; flex: none; object-fit: contain; margin: -6px 0; filter: drop-shadow(0 8px 10px rgba(0,0,0,.35)); }
  .bat { flex:1 1 auto; min-width: 190px; display:grid; grid-template-columns: auto 1fr; grid-template-rows: auto auto; column-gap: 16px; align-items:center; }
  .bat b { grid-row: span 2; font-size: 42px; font-weight: 600; } .bat b i { font-style:normal; font-size: 20px; color: var(--wp-muted); }
  .bar { position:relative; height: 12px; border-radius: 999px; background: var(--wp-track); } .bar span { position:absolute; left:0; top:0; bottom:0; border-radius: 999px; } .bar em { position:absolute; top:-4px; bottom:-4px; width: 2px; background: var(--wp-muted); }
  .bat small { color: var(--wp-muted); font-size: 15px; margin-top: 6px; white-space: nowrap; }
  .st { display:flex; align-items:center; gap: 6px; padding: 8px 14px; border-radius: 999px; background: var(--wp-card-2); border:1px solid var(--wp-border); font-weight: 700; font-size: 15px; color: var(--wp-muted); white-space: nowrap; }
  .st ha-icon { --mdc-icon-size: 20px; } .st.chg { color: #06b6d4; border-color: #06b6d4; } .st.plug { color: var(--wp-ok); } .st { flex: none; } .chev { color: var(--wp-muted); flex: none; margin-left: -6px; }
`;
customElements.define("wp-car", WpCar);
window.customCards.push(
  { type: "wp-power-flow", name: "Wall Panel power flow", description: "Animated live power flow" },
  { type: "wp-side", name: "Wall Panel side column", description: "Climate summary, people and TV" },
  { type: "wp-car", name: "Wall Panel car", description: "EV summary strip" },
);
