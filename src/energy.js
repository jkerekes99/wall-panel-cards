
/* =====================================================================
 * Energy + Solar tabs: wp-energy, wp-solar
 * ===================================================================== */
const WPE_C = { solar: "#fbbf24", imp: "#a78bfa", exp: "#22c55e", home: "#38bdf8", ev: "#22d3ee", good: "#2dd4bf", bad: "#f59e0b" };
const wpeDay0 = (offsetDays = 0) => { const d = new Date(); d.setHours(0, 0, 0, 0); d.setDate(d.getDate() + offsetDays); return d; };
const wpeHM = (d) => (d ? new Date(d).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) : "–");
const wpeSum = (a, n = a.length) => a.slice(0, n).reduce((s, v) => s + (v || 0), 0);
// round a chart maximum up to a tidy value and pick a tick step (about 3–4 gridlines)
function wpeNice(max) {
  max = Math.max(max, 0.5);
  const p = 10 ** Math.floor(Math.log10(max)); const steps = [0.1, 0.2, 0.25, 0.5, 1, 2, 2.5, 5, 10].map((s) => s * p);
  const step = steps.find((s) => max / s <= 4) || 10 * p;
  return { step, top: Math.ceil(max / step - 1e-9) * step };
}
const wpeMoreInfo = (el, entityId) => entityId && el.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId }, bubbles: true, composed: true }));

// Shared: hourly statistics (today + yesterday) for a set of ids, with a 5-minute refresh.
class WpEnergyBase extends WpBase {
  _extraSig() { return `${this._statsAt || ""}|${new Date().getHours()}|${this._view || ""}`; }
  _firstHass() { this._loadStats(); this._statTimer = setInterval(() => this._loadStats(), 5 * 60000); }
  connectedCallback() { if (this._hass && !this._statTimer) this._firstHass(); }
  disconnectedCallback() { clearInterval(this._statTimer); this._statTimer = null; }
  async _hourly(ids) {
    ids = ids.filter(Boolean); if (!ids.length || !this._hass.callWS) return {};
    const today = wpeDay0(), yday = wpeDay0(-1);
    const r = await this._hass.callWS({ type: "recorder/statistics_during_period", start_time: yday.toISOString(), end_time: new Date().toISOString(), statistic_ids: ids, period: "hour", types: ["change"] });
    const out = {};
    for (const id of ids) {
      const t = Array(24).fill(0), y = Array(24).fill(0);
      (r[id] || []).forEach((p) => { const st = new Date(p.start); (st >= today ? t : y)[st.getHours()] += p.change || 0; });
      out[id] = { t, y };
    }
    return out;
  }
  async _monthChange(ids) {
    ids = ids.filter(Boolean); if (!ids.length || !this._hass.callWS) return {};
    const m0 = wpeDay0(); m0.setDate(1);
    const r = await this._hass.callWS({ type: "recorder/statistics_during_period", start_time: m0.toISOString(), end_time: new Date().toISOString(), statistic_ids: ids, period: "month", types: ["change"] });
    const out = {}; for (const id of ids) out[id] = (r[id] || []).reduce((a, p) => a + (p.change || 0), 0);
    return out;
  }
  // mini hourly bars (same look as the Overview tiles)
  _bars(t, color, hours = 24) {
    const hr = new Date().getHours(); const max = Math.max(...t, 0.01);
    return `<svg class="bars" viewBox="0 0 ${hours * 4} 30" preserveAspectRatio="none">${t.map((v, k) => { const hh = k <= hr ? Math.max(1, (v / max) * 28) : 1; return `<rect x="${k * 4 + 0.4}" y="${30 - hh}" width="3.2" height="${hh}" rx="1" fill="${k <= hr && v > 0.005 ? color : "var(--wp-track)"}"/>`; }).join("")}</svg>`;
  }
  // % vs the same point in time yesterday; good = "up" or "down"
  _vs(arr, good = "up") {
    if (!arr) return "";
    const hr = new Date().getHours(), frac = new Date().getMinutes() / 60;
    const t = wpeSum(arr.t, hr + 1), y = wpeSum(arr.y, hr) + arr.y[hr] * frac;
    if (y < 0.2) return "";
    const p = Math.round(((t - y) / y) * 100); const up = p >= 0;
    return `<span class="vs ${(up ? "up" : "down") === good ? "good" : "bad"}"><b title="vs the same time yesterday">${icon(up ? "lu:arrow-up" : "lu:arrow-down")}${Math.abs(p)}%</b></span>`;
  }
  _wire() {
    const r = this.shadowRoot;
    r.addEventListener("click", (e) => {
      const v = e.target.closest("[data-view]"); if (v) { this._view = v.dataset.view; this._sig = null; this._render(); return; }
      const m = e.target.closest("[data-more]"); if (m) wpeMoreInfo(this, m.dataset.more);
    });
  }
}

const WPE_CSS = `
  :host { display:block; height:100%; } * { box-sizing:border-box; }
  .wrap { height:100%; display:grid; gap: var(--wp-gap); min-height: 0; }
  .panel { position:relative; display:flex; flex-direction:column; min-width:0; min-height:0; padding: 16px 18px; background: var(--wp-card); border:1px solid var(--wp-border); border-radius: var(--wp-radius); box-shadow: var(--wp-shadow); overflow:hidden; }
  .ph { display:flex; justify-content:space-between; align-items:flex-start; gap: 10px; flex: none; }
  .pt { display:flex; gap: 12px; align-items:center; min-width: 0; }
  .pt > svg.lu { --mdc-icon-size: 28px; --lu-stroke: 1.8; } .pt > .wsun { width: 30px; height: 30px; flex: none; }
  .pt h2 { margin:0; font-size: 21px; font-weight: 750; letter-spacing: -.01em; white-space: nowrap; } .pt p { margin: 1px 0 0; color: var(--wp-muted); font-size: 14px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .chip { display:inline-flex; align-items:center; gap: 7px; padding: 5px 12px; border-radius: 999px; font-size: 13px; font-weight: 700; border: 1px solid var(--wp-border); background: var(--wp-card-2); white-space: nowrap; }
  .chip i { width: 8px; height: 8px; border-radius: 50%; background: var(--wp-ok); } .chip.live i { animation: pulse 1.6s infinite; } .chip.off i { background: var(--wp-faint); } .chip.sol i { background: ${WPE_C.solar}; }
  @keyframes pulse { 50% { opacity: .25; } }
  .seg { display:inline-flex; padding: 3px; gap: 2px; border-radius: 999px; background: var(--wp-card-2); border: 1px solid var(--wp-border); }
  .seg button { all: unset; cursor: pointer; display:inline-flex; align-items:center; gap: 6px; padding: 5px 13px; border-radius: 999px; font-size: 13px; font-weight: 700; color: var(--wp-muted); }
  .seg button svg.lu { --mdc-icon-size: 15px; --lu-stroke: 2.2; } .seg button.on { background: var(--wp-accent); color: var(--wp-accent-text); box-shadow: 0 0 12px rgba(59,130,246,.45); }
  .hr { display:flex; gap: 8px; align-items:center; }
  .seg.wide { display:flex; margin-top: 12px; flex: none; } .seg.wide button { flex: 1; justify-content:center; padding: 7px 13px; font-size: 14px; }
  .legend { display:flex; flex-wrap: wrap; gap: 4px 14px; font-size: 13px; font-weight: 600; color: var(--wp-muted); justify-content:flex-end; }
  .legend span { display:inline-flex; align-items:center; gap: 6px; white-space: nowrap; } .legend i { width: 10px; height: 10px; border-radius: 3px; } .legend i.ln { height: 3px; width: 14px; border-radius: 2px; } .legend i.dash { height: 0; width: 14px; border-top: 2.5px dashed; border-radius: 0; background: none !important; }
  /* chart */
  .chart { position:relative; flex: 1 1 0; min-height: 110px; margin-top: 10px; }
  .plot { position:absolute; left: 34px; right: 4px; top: 6px; bottom: 22px; }
  .plot svg { position:absolute; inset:0; width:100%; height:100%; overflow: visible; }
  .yl { position:absolute; left: 0; width: 28px; text-align:right; font-size: 11.5px; color: var(--wp-faint); transform: translateY(-50%); font-variant-numeric: tabular-nums; }
  .xl { position:absolute; bottom: 0; font-size: 11.5px; color: var(--wp-faint); transform: translateX(-50%); font-variant-numeric: tabular-nums; }
  .gl { stroke: var(--wp-track); stroke-width: 1; vector-effect: non-scaling-stroke; } .gl.zero { stroke: var(--wp-faint); opacity: .6; }
  .nowl { stroke: var(--wp-muted); stroke-width: 1.2; stroke-dasharray: 3 4; vector-effect: non-scaling-stroke; opacity: .7; }
  .ln { fill:none; stroke-width: 2.6; stroke-linejoin: round; stroke-linecap: round; vector-effect: non-scaling-stroke; }
  /* tiles */
  .tiles { display:grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; min-height: 0; }
  .tile { position:relative; display:flex; flex-direction:column; gap: 8px; padding: 13px 15px 12px; border-radius: 18px; background: var(--wp-card); border: 1px solid var(--wp-border); box-shadow: var(--wp-shadow); min-width: 0; min-height: 0; overflow: hidden; cursor: pointer; }
  .th { display:flex; align-items:flex-start; gap: 11px; min-width: 0; } .th > div { min-width: 0; flex: 1; }
  .ti { --mdc-icon-size: 30px; --lu-stroke: 1.8; flex:none; margin-top: 1px; } .ti.y { color:${WPE_C.solar}; } .ti.b { color:${WPE_C.home}; } .ti.g { color:${WPE_C.exp}; } .ti.p { color:${WPE_C.imp}; } .ti.t { color: ${WPE_C.good}; } .ti.o { color: #fb923c; } .ti.c { color: ${WPE_C.ev}; }
  svg.ti:not(.lu) { width: 30px; height: 30px; } .ti.wsun { width: 32px; height: 32px; margin: -1px; }
  .th h4 { margin: 0; font-size: 14.5px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .big { display:block; font-size: 27px; font-weight: 800; line-height: 1.15; white-space: nowrap; letter-spacing: -.01em; font-variant-numeric: tabular-nums; } .big i { font-style: normal; font-size: 17px; font-weight: 700; color: var(--wp-muted); margin-left: 2px; }
  .sub { display:block; margin-top: 1px; font-size: 13px; color: var(--wp-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .vs { position:absolute; top: 46px; right: 13px; display:flex; flex-direction:column; align-items:flex-end; } .vs b { display:flex; align-items:center; gap: 2px; font-size: 14px; font-weight: 800; } .vs small { font-size: 11.5px; color: var(--wp-muted); }
  .vs b { padding: 3px 8px 3px 6px; border-radius: 999px; background: color-mix(in srgb, currentColor 13%, transparent); }
  .vs.good b { color: ${WPE_C.good}; } .vs.bad b { color: ${WPE_C.bad}; } .vs svg.lu { --mdc-icon-size: 14px; --lu-stroke: 2.8; }
  .bars { flex: 1 1 0; min-height: 22px; max-height: 84px; width: 100%; display:block; margin-top: auto; }
  .split { margin-top: auto; display:flex; justify-content:space-between; gap: 8px; font-size: 12.5px; color: var(--wp-muted); white-space: nowrap; } .split b { color: var(--wp-text); font-weight: 800; }
  .split + .prog { margin-top: 6px; }
  .prog { margin-top: auto; height: 8px; border-radius: 99px; background: var(--wp-track); overflow: hidden; } .prog i { display:block; height: 100%; border-radius: 99px; }
  .foot { margin-top: auto; display:flex; justify-content:space-between; align-items:flex-end; gap: 8px; padding-top: 9px; border-top: 1px solid var(--wp-border); font-size: 13px; }
  .foot small { display:block; color: var(--wp-muted); font-size: 12px; } .foot b { font-size: 16px; font-weight: 800; font-variant-numeric: tabular-nums; } .foot span { font-weight: 700; }
  .wsun { overflow: visible; } .wsun.dim { filter: grayscale(1) opacity(.6); } .wsun.glow { filter: drop-shadow(0 0 8px rgba(251,191,36,.7)); }
`;

/* ---------------- wp-energy ---------------- */
class WpEnergy extends WpEnergyBase {
  setConfig(config) { super.setConfig(config); if (!this._view) this._view = config.default_view === "flow" ? "flow" : "devices"; }
  getCardSize() { return 12; }
  _ids() { const c = this._config, p = c.power || {}, e = c.energy || {}; return [p.solar, p.grid_import, p.grid_export, p.home, p.ev, e.generation, e.import, e.export, c.theme_entity, ...(this._view === "devices" ? (c.devices || []).map((d) => d.entity) : [])]; }
  async _loadStats() {
    const e = this._config.energy || {};
    try {
      const hs = await this._hourly([e.generation, e.import, e.export, e.import_cost, e.export_comp]);
      const mo = await this._monthChange([e.import_cost, e.export_comp]);
      const g = hs[e.generation], i = hs[e.import], x = hs[e.export];
      const home = g && i && x ? { t: g.t.map((v, k) => Math.max(0, v + i.t[k] - x.t[k])), y: g.y.map((v, k) => Math.max(0, v + i.y[k] - x.y[k])) } : null;
      this._stats = { g, i, x, home, cost: hs[e.import_cost], comp: hs[e.export_comp], mCost: mo[e.import_cost], mComp: mo[e.export_comp] };
      this._statsAt = Date.now(); this._sig = null; if (this.shadowRoot) this._render();
    } catch (err) { console.warn("wp-energy stats", err); }
  }
  _render() {
    const h = this._hass, c = this._config, r = this.shadowRoot, st = this._stats;
    const skel = `${this._view}|${this.hasAttribute("dark")}`;
    if (this._skel !== skel) {
      this._skel = skel; this._parts = {};
      r.innerHTML = `<style>${WP_PALETTE}${WPE_CSS}${WPE_ENERGY_CSS}</style>
      <div class="wrap en">
        <section class="panel flow">
          <div class="ph"><div class="pt">${icon("lu:zap")}<div><h2>${this._view === "devices" ? "Device Power" : "Current Flow"}</h2><p id="fsub"></p></div></div>
            <span class="chip live"><i></i>Live</span></div>
          <div class="seg wide"><button data-view="devices" class="${this._view === "devices" ? "on" : ""}">${icon("lu:list")}Devices</button><button data-view="flow" class="${this._view === "flow" ? "on" : ""}">${icon("lu:activity")}Flow</button></div>
          <div class="fbody">${this._view === "devices" ? `<div class="dbody" id="fbody"></div>` : `<svg class="fsvg" viewBox="0 0 400 452" preserveAspectRatio="xMidYMid meet"><g id="flines"></g><g id="fnodes"></g><g id="flabels"></g></svg><div class="toplist" id="ftop"></div>`}</div>
        </section>
        <section class="panel today">
          <div class="ph"><div class="pt">${icon("lu:clock")}<div><h2>Energy Today</h2><p id="tsub"></p></div></div>
            <div class="legend"><span><i style="background:${WPE_C.solar}"></i>Solar</span><span><i style="background:${WPE_C.imp}"></i>Grid import</span><span><i style="background:${WPE_C.exp}"></i>Export</span><span><i class="ln" style="background:${WPE_C.home}"></i>Home</span></div></div>
          <div class="chart" id="chart"></div>
        </section>
        <div class="tiles" id="t1"></div>
        <div class="tiles" id="t2"></div>
      </div>`;
      this._wire();
    }
    const set = (id, html) => { if (this._parts[id] !== html) { this._parts[id] = html; const el = r.getElementById(id); if (el) el.innerHTML = html; } };
    const p = c.power || {}, en = c.energy || {};
    const solar = Math.max(0, stateNum(h, p.solar) ?? 0), imp = Math.max(0, stateNum(h, p.grid_import) ?? 0), exp = Math.max(0, stateNum(h, p.grid_export) ?? 0);
    const home = Math.max(0, stateNum(h, p.home) ?? solar + imp - exp), ev = Math.max(0, stateNum(h, p.ev) ?? 0);
    const gridW = imp > 20 ? imp : exp > 20 ? -exp : 0;
    set("fsub", $esc(this._view === "devices" ? this._devSub(home) : c.source || "Live from the solar inverter"));
    if (this._view === "devices") set("fbody", this._devices(home));
    else { const f = this._flow(solar, home, gridW, ev); set("flines", f.lines); set("fnodes", f.nodes); set("flabels", f.labels); set("ftop", this._top()); }
    // today totals (sensor state = today so far)
    const genT = stateNum(h, en.generation), impT = stateNum(h, en.import), expT = stateNum(h, en.export);
    const homeT = genT != null && impT != null && expT != null ? Math.max(0, genT + impT - expT) : null;
    set("tsub", homeT != null ? `Home used <b>${kWh(homeT)} kWh</b> so far today` : "");
    set("chart", st?.g ? this._chart(st) : "");
    const yd = (a) => (a ? `Yesterday ${kWh(wpeSum(a.y))} kWh` : "");
    const tile = (more, ic, title, val, sub, extra, bars) => `<div class="tile" data-more="${$esc(more || "")}"><div class="th">${ic}<div><h4>${title}</h4><span class="big">${val}<i>kWh</i></span><span class="sub">${sub}</span></div></div>${extra}${bars}</div>`;
    set("t1", tile(en.generation, WP_SUN_ICON.replace("<svg", '<svg class="ti wsun"'), "Solar Production", kWh(genT), yd(st?.g), this._vs(st?.g, "up"), st?.g ? this._bars(st.g.t, WPE_C.solar) : "")
      + tile(p.home, icon("lu:house", "ti b"), "Home Consumption", kWh(homeT), yd(st?.home), this._vs(st?.home, "down"), st?.home ? this._bars(st.home.t, WPE_C.home) : "")
      + tile(en.import, WP_PYLON_ICON.replace("<svg", '<svg class="ti p"'), "Grid Import", kWh(impT), yd(st?.i), this._vs(st?.i, "down"), st?.i ? this._bars(st.i.t, WPE_C.imp) : "")
      + tile(en.export, WP_PYLON_ICON.replace("<svg", '<svg class="ti g"'), "Grid Export", kWh(expT), yd(st?.x), this._vs(st?.x, "up"), st?.x ? this._bars(st.x.t, WPE_C.exp) : ""));
    // ratios + money
    const selfS = homeT ? Math.max(0, Math.min(1, (homeT - (impT || 0)) / homeT)) : null;
    const used = genT ? Math.max(0, Math.min(1, (genT - (expT || 0)) / genT)) : null;
    const compT = st?.comp ? wpeSum(st.comp.t) : null, costT = st?.cost ? wpeSum(st.cost.t) : null;
    const cents = (money, kwh) => (money != null && kwh > 0.05 ? `${(money / kwh * 100).toFixed(1)}c` : null);
    const mStart = wpeDay0(); mStart.setDate(1); const since = `Since ${mStart.getDate()} ${mStart.toLocaleDateString("en-AU", { month: "short" })}`;
    const pct = (v) => (v == null ? "–" : Math.round(v * 100));
    const ratio = (ic, title, v, sub, color, l, r) => `<div class="tile"><div class="th">${ic}<div><h4>${title}</h4><span class="big">${pct(v)}<i>%</i></span><span class="sub">${sub}</span></div></div><div class="split"><span>${l}</span><span>${r}</span></div><div class="prog"><i style="width:${(v || 0) * 100}%;background:${color}"></i></div></div>`;
    const fromSolar = homeT != null ? Math.max(0, homeT - (impT || 0)) : null;
    const money = (more, ic, title, v, sub, month, cls) => `<div class="tile" data-more="${$esc(more || "")}"><div class="th">${ic}<div><h4>${title}</h4><span class="big ${cls}">${aud(v)}</span><span class="sub">${sub}</span></div></div>
      <div class="foot"><div><span>This month</span><small>${since}</small></div><b>${aud(month)}</b></div></div>`;
    set("t2", ratio(icon("lu:leaf", "ti g"), "Self-sufficiency", selfS, "of home use from solar", `linear-gradient(90deg, #16a34a, ${WPE_C.exp})`, `<b>${kWh(fromSolar)}</b> kWh solar`, `<b>${kWh(impT)}</b> kWh grid`)
      + ratio(WP_SUN_ICON.replace("<svg", '<svg class="ti wsun"'), "Solar used on site", used, "of generation kept on site", `linear-gradient(90deg, #f59e0b, ${WPE_C.solar})`, `<b>${kWh(genT != null ? Math.max(0, genT - (expT || 0)) : null)}</b> kWh used`, `<b>${kWh(expT)}</b> kWh exported`)
      + money(en.export_comp, icon("lu:circle-dollar-sign", "ti g"), "Export Earnings", compT, expT != null ? `${kWh(expT)} kWh${cents(compT, expT) ? ` × ${cents(compT, expT)}` : ""}` : "", st?.mComp, "g")
      + money(en.import_cost, icon("lu:circle-dollar-sign", "ti p"), "Import Cost", costT, impT != null ? `${kWh(impT)} kWh${cents(costT, impT) ? ` · avg ${cents(costT, impT)}/kWh` : ""}` : "", st?.mCost, ""));
  }
  _flow(solar, home, gridW, ev) {
    const c = this._config;
    const band = (w) => (w > 20 ? Math.max(0.8, Math.min(5, 3.6 / Math.sqrt(Math.max(w, 30) / 1000))).toFixed(1) : "0");
    const line = (d, w, color, rev) => { const b = band(w); return b === "0" ? `<path d="${d}" class="fl idle"/>` : `<path d="${d}" class="fl" style="stroke:${color}"/>${[0, 1, 2].map((k) => `<circle r="4.5" fill="${color}" class="dot" style="color:${color}"><animateMotion dur="${b}s" begin="-${((k * b) / 3).toFixed(2)}s" repeatCount="indefinite" path="${d}" ${rev ? 'keyPoints="1;0" keyTimes="0;1" calcMode="linear"' : ""}/></circle>`).join("")}`; };
    // portrait layout: solar on top, home in the middle, EV charger and grid below
    const H = [200, 222], S = [200, 58], E = [92, 362], G = [308, 362];
    const node = (xy, r, color, inner, on, cls = "") => `<g class="node ${on ? "on" : ""} ${cls}" style="--nc:${color}"><circle cx="${xy[0]}" cy="${xy[1]}" r="${r + 10}" class="halo"/><circle cx="${xy[0]}" cy="${xy[1]}" r="${r}" class="ring"/>
      <foreignObject x="${xy[0] - r}" y="${xy[1] - r}" width="${r * 2}" height="${r * 2}"><div class="ni">${inner}</div></foreignObject></g>`;
    const lab = (x, y, val, sub, cls, anchor = "middle") => `<text x="${x}" y="${y}" text-anchor="${anchor}" class="nv">${kW(val)}<tspan class="nu"> kW</tspan></text><text x="${x}" y="${y + 21}" text-anchor="${anchor}" class="ns ${cls}">${$esc(sub)}</text>`;
    const evOn = ev > 50, gImp = gridW > 0, gExp = gridW < 0, sOn = solar > 50;
    const night = this._hass.states["sun.sun"]?.state === "below_horizon";
    const toward = (a, b, ra, rb) => { const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy); return `M${(a[0] + (dx / L) * ra).toFixed(1)},${(a[1] + (dy / L) * ra).toFixed(1)} L${(b[0] - (dx / L) * rb).toFixed(1)},${(b[1] - (dy / L) * rb).toFixed(1)}`; };
    return {
      lines: line(toward(S, H, 38, 54), solar, WPE_C.solar) + line(toward(H, E, 54, 42), ev, WPE_C.ev) + line(toward(G, H, 42, 54), Math.abs(gridW), gExp ? WPE_C.exp : WPE_C.imp, gExp),
      nodes: node(S, 28, WPE_C.solar, WP_SUN_ICON, sOn, "sun") + node(H, 44, WPE_C.home, icon("lu:house"), true, "hub") + node(E, 32, WPE_C.ev, icon("lu:plug-zap"), evOn) + node(G, 32, gExp ? WPE_C.exp : WPE_C.imp, WP_PYLON_ICON, gImp || gExp),
      labels: lab(S[0] + 46, S[1] - 4, solar, sOn ? "Solar · generating" : night ? "Solar · night" : "Solar · idle", sOn ? "y" : "", "start")
        + lab(H[0] + 64, H[1] - 4, home, "Home", "", "start")
        + lab(E[0], E[1] + 66, ev, `${c.ev_name || "EV charger"} · ${evOn ? "charging" : "idle"}`, evOn ? "c" : "")
        + lab(G[0], G[1] + 66, Math.abs(gridW), gImp ? "Grid · importing" : gExp ? "Grid · exporting" : "Grid · idle", gImp ? "p" : gExp ? "g" : ""),
    };
  }
  // the biggest loads right now (shown under the flow diagram)
  _top() {
    const h = this._hass, c = this._config, n = c.top_devices ?? 4;
    const rows = (c.devices || []).map((d) => ({ ...d, w: Math.max(0, stateNum(h, d.entity) || 0) })).filter((d) => d.w >= 5).sort((a, b) => b.w - a.w).slice(0, n);
    const max = Math.max(...rows.map((d) => d.w), 1);
    const fmtW = (w) => (w >= 1000 ? `${(w / 1000).toFixed(2)} kW` : `${Math.round(w)} W`);
    return `<h5>Biggest loads now</h5>${rows.length ? rows.map((d) => `<div class="dv on" data-more="${$esc(d.entity)}" style="--dc:${d.color || WPE_C.home}"><span class="dvi">${icon(d.icon || "mdi:flash")}</span><div class="dvb"><div class="dvt"><span>${$esc(d.name)}</span><b>${fmtW(d.w)}</b></div><div class="dvbar"><i style="width:${(d.w / max) * 100}%"></i></div></div></div>`).join("") : `<p class="none">Nothing significant running</p>`}`;
  }
  _devSub(total) {
    const h = this._hass, tracked = (this._config.devices || []).reduce((a, d) => a + Math.max(0, stateNum(h, d.entity) || 0), 0), other = total - tracked;
    return `Live power by circuit${other > 30 ? ` · ${other >= 1000 ? `${(other / 1000).toFixed(2)} kW` : `${Math.round(other)} W`} on other circuits` : ""}`;
  }
  _devices(total) {
    const h = this._hass, c = this._config, max = c.scale_max || 10000;
    const L = (w) => (w <= 0 ? 0 : Math.min(1, Math.log10(1 + w) / Math.log10(1 + max)));
    const fmtW = (w) => (w == null ? "–" : w >= 1000 ? `${(w / 1000).toFixed(2)} kW` : `${Math.round(w)} W`);
    const rows = (c.devices || []).map((d) => { const w = stateNum(h, d.entity); return { ...d, w: w == null ? null : Math.max(0, w) }; });
    const ticks = [10, 100, 1000].map((t) => `<em style="left:${L(t) * 100}%"></em>`).join("");
    const row = (d) => { const on = (d.w || 0) >= 1, col = d.color || WPE_C.home; return `<div class="dv ${on ? "on" : ""}" data-more="${$esc(d.entity)}" style="--dc:${col}">
      <span class="dvi">${icon(d.icon || "mdi:flash")}</span><div class="dvb"><div class="dvt"><span>${$esc(d.name || h.states[d.entity]?.attributes.friendly_name || d.entity)}</span><b>${fmtW(d.w)}</b></div>
      <div class="dvbar">${ticks}<i style="width:${L(d.w || 0) * 100}%"></i></div></div></div>`; };
    return `<div class="dtot" data-more="${$esc(c.power?.home || "")}"><span class="dvi big">${icon("lu:house")}</span><div class="dvb"><div class="dvt"><span>Total consumption</span><b>${fmtW(total)}</b></div>
        <div class="dvbar tot">${ticks}<i style="width:${L(total) * 100}%"></i></div></div></div>
      <div class="dlist">${rows.map(row).join("")}</div>`;
  }
  _chart(st) {
    const hr = new Date().getHours(), frac = new Date().getMinutes() / 60;
    const g = st.g.t, im = st.i.t, ex = st.x.t;
    const pos = g.map((v, k) => v + im[k]), maxP = Math.max(...pos.slice(0, hr + 1), 0.5), maxN = Math.max(...ex.slice(0, hr + 1), 0);
    const P = wpeNice(maxP), N = maxN > 0.05 ? wpeNice(Math.max(maxN, P.step * 0.6)) : { step: P.step, top: 0 };
    const step = Math.max(P.step, N.step); const top = Math.ceil(P.top / step) * step, bot = Math.ceil(N.top / step) * step;
    const span = top + bot, yv = (v) => ((top - v) / span) * 100;   // % from top
    const W = 24, bw = 0.62;
    let bars = "";
    for (let k = 0; k <= hr; k++) {
      const x = k + (1 - bw) / 2; const y0 = yv(0), ys = yv(g[k]), yi = yv(g[k] + im[k]), ye = yv(-ex[k]);
      if (g[k] > 0.005) bars += `<rect x="${x}" y="${ys}" width="${bw}" height="${y0 - ys}" fill="${WPE_C.solar}"/>`;
      if (im[k] > 0.005) bars += `<rect x="${x}" y="${yi}" width="${bw}" height="${ys - yi}" fill="${WPE_C.imp}"/>`;
      if (ex[k] > 0.005) bars += `<rect x="${x}" y="${y0}" width="${bw}" height="${ye - y0}" fill="${WPE_C.exp}" opacity=".9"/>`;
    }
    const pts = st.home.t.slice(0, hr + 1).map((v, k) => `${k + 0.5},${yv(v).toFixed(2)}`).join(" ");
    const ticks = []; for (let v = -bot; v <= top + 1e-9; v += step) ticks.push(+v.toFixed(3));
    const nowX = ((hr + frac) / W) * 100;
    return `<div class="plot"><svg viewBox="0 0 ${W} 100" preserveAspectRatio="none">
        ${ticks.map((v) => `<line x1="0" x2="${W}" y1="${yv(v)}" y2="${yv(v)}" class="gl ${v === 0 ? "zero" : ""}"/>`).join("")}
        ${bars}<polyline points="${pts}" class="ln" style="stroke:${WPE_C.home}"/>
        <line x1="${(hr + frac)}" x2="${(hr + frac)}" y1="0" y2="100" class="nowl"/></svg></div>
      ${ticks.map((v) => `<span class="yl" style="top:calc(6px + (100% - 28px) * ${yv(v) / 100})">${v}</span>`).join("")}
      ${[0, 3, 6, 9, 12, 15, 18, 21].map((k) => `<span class="xl" style="left:calc(34px + (100% - 38px) * ${(k + 0.5) / W})">${String(k).padStart(2, "0")}:00</span>`).join("")}`;
  }
}
const WPE_ENERGY_CSS = `
  .en { grid-template-columns: minmax(0, 3fr) minmax(0, 7fr); grid-template-rows: minmax(0, 1.55fr) minmax(0, 1fr) minmax(0, .9fr); }
  .en .flow { grid-row: 1 / -1; } .en .tiles { grid-column: 2; }
  .pt h2 + p b, #tsub b { color: var(--wp-text); }
  .flow .pt > svg.lu { color: ${WPE_C.solar}; } .today .pt > svg.lu { color: var(--wp-text); }
  .fbody { flex: 1 1 0; min-height: 0; display:flex; flex-direction:column; margin-top: 8px; }
  .fsvg { flex: 1 1 0; min-height: 0; width: 100%; overflow: visible; }
  .dbody { flex: 1 1 0; min-height: 0; display:flex; flex-direction:column; }
  .toplist { flex: none; display:flex; flex-direction:column; gap: 10px; padding-top: 12px; border-top: 1px solid var(--wp-border); }
  .toplist h5 { margin: 0; font-size: 12.5px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--wp-muted); } .toplist .none { margin: 0; font-size: 14px; color: var(--wp-muted); }
  .fl { fill:none; stroke-width: 3.5; stroke-linecap: round; opacity: .55; } .fl.idle { stroke: var(--wp-track); opacity: 1; stroke-dasharray: 2 7; }
  .dot { filter: drop-shadow(0 0 5px currentColor); }
  .node .halo { fill: color-mix(in srgb, var(--nc) 10%, transparent); stroke: none; }
  .node .ring { fill: color-mix(in srgb, var(--nc) 14%, var(--wp-card)); stroke: color-mix(in srgb, var(--nc) 45%, transparent); stroke-width: 2.5; }
  .node.on .ring { stroke: var(--nc); filter: drop-shadow(0 0 9px color-mix(in srgb, var(--nc) 75%, transparent)); }
  .node.on .halo { fill: color-mix(in srgb, var(--nc) 18%, transparent); }
  .ni { width:100%; height:100%; display:grid; place-items:center; color: var(--nc); }
  .ni svg { width: 56%; height: 56%; } .ni svg.lu { --lu-stroke: 2; } .sun .ni svg { width: 78%; height: 78%; overflow: visible; }
  .node:not(.on) .ni { opacity: .55; } .node:not(.on).sun .ni svg { filter: grayscale(1); }
  .hub .ni svg { width: 50%; height: 50%; filter: drop-shadow(0 0 4px color-mix(in srgb, var(--nc) 80%, transparent)); }
  .nv { font-size: 24px; font-weight: 800; fill: var(--wp-text); font-variant-numeric: tabular-nums; } .nu { font-size: 13px; font-weight: 700; fill: var(--wp-muted); }
  .ns { font-size: 14px; font-weight: 600; fill: var(--wp-muted); } .ns.y { fill: #f59e0b; } .ns.p { fill: ${WPE_C.imp}; } .ns.g { fill: ${WPE_C.exp}; } .ns.c { fill: #06b6d4; }
  /* devices */
  .dtot { flex: none; display:flex; align-items:center; gap: 12px; padding: 2px 2px 9px; border-bottom: 1px solid var(--wp-border); cursor: pointer; }
  .dtot .dvb { flex: 1; } .dtot .dvt b { font-size: 19px; } .dtot .dvt span { font-size: 15px; font-weight: 700; }
  .dlist { flex: 1 1 0; min-height: 0; display:grid; grid-template-columns: 1fr; grid-auto-rows: minmax(0, 1fr); padding-top: 4px; }
  .dv { display:flex; align-items:center; gap: 10px; min-width: 0; min-height: 0; cursor: pointer; }
  .dvi { flex: none; width: 34px; height: 34px; border-radius: 10px; display:grid; place-items:center; color: var(--dc, ${WPE_C.home}); background: color-mix(in srgb, var(--dc, ${WPE_C.home}) 14%, transparent); --mdc-icon-size: 19px; --lu-stroke: 2; }
  .dvi.big { width: 38px; height: 38px; border-radius: 12px; --mdc-icon-size: 22px; --dc: ${WPE_C.home}; }
  .dv:not(.on) .dvi { color: var(--wp-faint); background: var(--wp-card-2); }
  .dvb { min-width: 0; flex: 1; } .dvt { display:flex; justify-content:space-between; align-items:baseline; gap: 8px; }
  .dvt span { font-size: 14.5px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; } .dvt b { font-size: 15px; font-weight: 800; white-space: nowrap; font-variant-numeric: tabular-nums; }
  .dv:not(.on) .dvt { color: var(--wp-muted); } .dv:not(.on) .dvt b { font-weight: 600; }
  .dvbar { position:relative; margin-top: 4px; height: 6px; border-radius: 99px; background: var(--wp-track); overflow: hidden; }
  .dvbar i { position:absolute; left:0; top:0; bottom:0; border-radius: 99px; background: linear-gradient(90deg, color-mix(in srgb, var(--dc, ${WPE_C.home}) 55%, transparent), var(--dc, ${WPE_C.home})); }
  .dvbar.tot { height: 8px; } .dvbar.tot i { background: linear-gradient(90deg, #0ea5e9, ${WPE_C.home}); box-shadow: 0 0 10px rgba(56,189,248,.5); }
  .dvbar em { position:absolute; top: 0; bottom: 0; width: 1px; background: var(--wp-card); opacity: .7; z-index: 1; }
  .big.g { color: ${WPE_C.exp}; }
  .unit { position:absolute; left: 0; top: -12px; font-size: 11px; color: var(--wp-faint); }
`;
customElements.define("wp-energy", WpEnergy);

/* ---------------- wp-solar ---------------- */
class WpSolar extends WpEnergyBase {
  getCardSize() { return 12; }
  _ids() { const c = this._config, f = c.forecast || {}; return [c.power, c.generation, c.export, f.today, f.remaining, f.tomorrow, f.now, f.peak_tomorrow, ...(f.days || []), "sun.sun", c.theme_entity]; }
  async _loadStats() {
    const c = this._config;
    try {
      const hs = await this._hourly([c.generation, c.export]);
      let peak = null;
      if (c.power && this._hass.callWS) {
        const r = await this._hass.callWS({ type: "recorder/statistics_during_period", start_time: wpeDay0().toISOString(), end_time: new Date().toISOString(), statistic_ids: [c.power], period: "5minute", types: ["max"] });
        (r[c.power] || []).forEach((p) => { if (p.max != null && (!peak || p.max > peak.w)) peak = { w: p.max, t: p.start }; });
      }
      this._stats = { g: hs[c.generation], x: hs[c.export], peak };
      this._statsAt = Date.now(); this._sig = null; if (this.shadowRoot) this._render();
    } catch (err) { console.warn("wp-solar stats", err); }
  }
  _render() {
    const h = this._hass, c = this._config, r = this.shadowRoot, st = this._stats, f = c.forecast || {};
    const skel = `${this.hasAttribute("dark")}`;
    const kwp = c.array_kwp || 0;
    if (this._skel !== skel) {
      this._skel = skel; this._parts = {};
      const dark = this.hasAttribute("dark"), im = c.image;   // image: "/local/x.jpg" or { dark: ..., light: ... }
      const img = typeof im === "string" ? im : im ? (dark ? im.dark || im.light : im.light || im.dark) : null;
      r.innerHTML = `<style>${WP_PALETTE}${WPE_CSS}${WPE_SOLAR_CSS}</style>
      <div class="wrap so">
        <section class="panel gen">
          <div class="ph"><div class="pt">${WP_SUN_ICON.replace("<svg", '<svg class="wsun glow"')}<div><h2>Solar Generation</h2><p>${kwp ? `${kwp} kWp array` : "Live output"}</p></div></div><span id="gchip"></span></div>
          <div class="now"><div id="gnow"></div><div class="legend"><span><i style="background:${WPE_C.solar}"></i>Actual (kWh per hour)</span><span><i class="dash" style="border-color:var(--wp-text)"></i>Forecast</span></div></div>
          <div class="chart" id="gchart"></div>
        </section>
        <section class="panel fc">
          <div class="ph"><div class="pt">${icon("lu:cloud-sun")}<div><h2>Forecast</h2><p>${$esc(c.forecast_source || "Open-Meteo Solar Forecast")}</p></div></div></div>
          <div class="pimg ${img ? "" : "ph-empty"}">${img ? `<img src="${$esc(img)}" alt="" onerror="this.style.display='none'">` : icon("lu:sun-medium")}</div>
          <div id="fcb" class="fcb"></div>
        </section>
        <section class="panel out">
          <div class="ph"><div class="pt">${icon("lu:calendar-days")}<div><h2>7-Day Outlook</h2><p>Predicted generation (kWh) · today shows actual so far</p></div></div></div>
          <div class="days" id="days"></div>
        </section>
        <div class="tiles mini" id="mini"></div>
      </div>`;
      this._wire();
    }
    const set = (id, html) => { if (this._parts[id] !== html) { this._parts[id] = html; const el = r.getElementById(id); if (el) el.innerHTML = html; } };
    const w = Math.max(0, stateNum(h, c.power) ?? 0), on = w > 50;
    const fNow = stateNum(h, f.now);
    set("gchip", `<span class="chip ${on ? "sol live" : "off"}"><i></i>${on ? "Generating" : "Not generating"}</span>`);
    set("gnow", `<div class="kw" data-more="${$esc(c.power || "")}"><b>${kW(w)}</b><span>kW now</span></div>
      <p class="kwp">${kwp ? `<b>${Math.round((w / (kwp * 1000)) * 100)}%</b> of the ${kwp} kWp array` : ""}${fNow != null ? `${kwp ? " · " : ""}forecast for now <b>${kW(fNow)} kW</b>` : ""}</p>`);
    set("gchart", this._genChart(st, h.states[f.today]?.attributes));
    // forecast panel
    const genT = stateNum(h, c.generation), fT = stateNum(h, f.today), rem = stateNum(h, f.remaining), tom = stateNum(h, f.tomorrow);
    const ratio = genT != null && fT ? genT / fT : null;
    const pkTom = h.states[f.peak_tomorrow]?.state;
    set("fcb", `<div class="pred"><b>${kWh(fT)}</b><span>kWh predicted today</span></div>
      <div class="prog"><i style="width:${Math.min(1, ratio || 0) * 100}%;background:linear-gradient(90deg,#f59e0b,${WPE_C.solar})"></i></div>
      <p class="so-far"><b>${kWh(genT)} kWh</b> generated so far${ratio != null ? ` · <b>${Math.round(ratio * 100)}%</b> of forecast` : ""}</p>
      <div class="frow" data-more="${$esc(f.remaining || "")}">${icon("lu:clock", "fi")}<span>Still to come today</span><b>${kWh(rem)} kWh</b></div>
      <div class="frow" data-more="${$esc(f.tomorrow || "")}">${icon("lu:sunrise", "fi")}<span>Tomorrow</span><b>${kWh(tom)} kWh${pkTom && !isNaN(new Date(pkTom)) ? ` · peak ${wpeHM(pkTom)}` : ""}</b></div>`);
    // 7-day outlook
    const dayIds = [f.today, f.tomorrow, ...(f.days || [])];
    const vals = dayIds.map((id) => stateNum(h, id));
    const mx = Math.max(...vals.filter((v) => v != null), genT || 0, 1);
    set("days", dayIds.map((id, k) => {
      const d = wpeDay0(k), v = vals[k];
      const name = k === 0 ? "Today" : k === 1 ? "Tomorrow" : d.toLocaleDateString("en-AU", { weekday: "short" });
      const date = d.toLocaleDateString("en-AU", { day: "numeric", month: "short" });
      const top = k === 0 ? Math.max(v || 0, genT || 0) : v;
      return `<div class="day ${k === 0 ? "today" : ""}" data-more="${$esc(id || "")}">
        <div class="col">${k === 0 ? `<i class="fcst" style="height:${((v || 0) / mx) * 100}%"></i><i class="act" style="height:${((genT || 0) / mx) * 100}%"></i>` : `<i class="act" style="height:${((top || 0) / mx) * 100}%"></i>`}<b class="dv" style="bottom:calc(${((top || 0) / mx) * 100}% + 4px)">${k === 0 ? kWh(genT) : kWh(v)}</b></div>
        <span class="dn">${name}</span><small>${date}</small></div>`;
    }).join(""));
    // small tiles
    const expT = stateNum(h, c.export);
    const pk = st?.peak && st.peak.w >= w ? st.peak : w > 0 ? { w, t: Date.now() } : st?.peak;
    const sun = h.states["sun.sun"]?.attributes || {};
    const rise = sun.next_rising, set_ = sun.next_setting;
    const mini = (more, ic, title, val, unit, sub, cls = "") => `<div class="tile ${cls}" data-more="${$esc(more || "")}"><div class="th">${ic}<div><h4>${title}</h4><span class="big">${val}${unit ? `<i>${unit}</i>` : ""}</span><span class="sub">${sub}</span></div></div></div>`;
    set("mini", mini(c.generation, WP_SUN_ICON.replace("<svg", '<svg class="ti wsun"'), "Generated Today", kWh(genT), "kWh", st?.g ? `Yesterday ${kWh(wpeSum(st.g.y))} kWh` : "")
      + mini(c.export, WP_PYLON_ICON.replace("<svg", '<svg class="ti g"'), "Exported Today", kWh(expT), "kWh", genT ? `${Math.round(((expT || 0) / genT) * 100)}% of generation` : "")
      + mini(c.power, icon("lu:gauge", "ti o"), "Peak Today", pk ? (pk.w / 1000).toFixed(2) : "–", "kW", pk ? `at ${wpeHM(pk.t)}` : "")
      + mini("sun.sun", icon("lu:sunset", "ti o"), "Daylight", rise && set_ ? `${wpeHM(rise)}–${wpeHM(set_)}` : "–", "", "Next sunrise – sunset", "dl"));
  }
  _genChart(st, fa) {
    const hr = new Date().getHours(), frac = new Date().getMinutes() / 60;
    const act = st?.g?.t || Array(24).fill(0);
    // forecast curve: 15-minute watts (≈ kWh per hour) for today
    const today = wpeDay0();
    const pts = Object.entries(fa?.watts || {}).map(([t, v]) => { const d = new Date(t); return d >= today && d - today < 86400000 ? [(d - today) / 3600000, v / 1000] : null; }).filter(Boolean).sort((a, b) => a[0] - b[0]);
    const mx = Math.max(...act, ...pts.map((p) => p[1]), (this._config.array_kwp || 1) * 0.3, 0.5);
    const N = wpeNice(mx); const top = N.top;
    const yv = (v) => ((top - v) / top) * 100;
    const ticks = []; for (let v = 0; v <= top + 1e-9; v += N.step) ticks.push(+v.toFixed(2));
    const bw = 0.62;
    const bars = act.slice(0, hr + 1).map((v, k) => (v > 0.005 ? `<rect x="${k + (1 - bw) / 2}" y="${yv(v)}" width="${bw}" height="${100 - yv(v)}" rx=".08" fill="url(#gbar)"/>` : "")).join("");
    const line = pts.length ? `<polyline points="${pts.map(([x, v]) => `${x.toFixed(3)},${yv(v).toFixed(2)}`).join(" ")}" class="ln fcl"/>` : "";
    return `<div class="plot"><svg viewBox="0 0 24 100" preserveAspectRatio="none">
        <defs><linearGradient id="gbar" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fde68a"/><stop offset="1" stop-color="${WPE_C.solar}"/></linearGradient></defs>
        ${ticks.map((v) => `<line x1="0" x2="24" y1="${yv(v)}" y2="${yv(v)}" class="gl ${v === 0 ? "zero" : ""}"/>`).join("")}
        ${bars}${line}<line x1="${hr + frac}" x2="${hr + frac}" y1="0" y2="100" class="nowl"/></svg></div>
      ${ticks.map((v) => `<span class="yl" style="top:calc(6px + (100% - 28px) * ${yv(v) / 100})">${v}</span>`).join("")}
      ${[0, 3, 6, 9, 12, 15, 18, 21].map((k) => `<span class="xl" style="left:calc(34px + (100% - 38px) * ${k / 24})">${String(k).padStart(2, "0")}:00</span>`).join("")}`;
  }
}
const WPE_SOLAR_CSS = `
  .so { grid-template-columns: minmax(0, 1.85fr) minmax(0, 1fr); grid-template-rows: minmax(0, 1.5fr) minmax(0, 1fr); }
  .gen .now { display:flex; justify-content:space-between; align-items:flex-end; gap: 12px; margin-top: 8px; flex: none; }
  .kw { display:flex; align-items:baseline; gap: 8px; cursor: pointer; } .kw b { font-size: 54px; font-weight: 800; line-height: 1; letter-spacing: -.02em; font-variant-numeric: tabular-nums; } .kw span { font-size: 20px; font-weight: 600; color: var(--wp-muted); }
  .kwp { margin: 6px 0 0; font-size: 13.5px; color: var(--wp-muted); } .kwp b { color: var(--wp-text); }
  .gen .legend { padding-bottom: 4px; }
  .fcl { stroke: var(--wp-text); stroke-dasharray: 5 4; stroke-width: 2.2; opacity: .85; }
  .fc .pt > svg.lu { color: ${WPE_C.solar}; }
  .pimg { flex: 1 1 0; min-height: 70px; margin: 12px -18px 0; position:relative; overflow:hidden; }
  .pimg img { position:absolute; inset:0; width:100%; height:100%; object-fit: cover; -webkit-mask-image: linear-gradient(to bottom, #000 70%, transparent); mask-image: linear-gradient(to bottom, #000 70%, transparent); }
  .pimg.ph-empty { display:grid; place-items:center; background: radial-gradient(120% 90% at 70% 0%, rgba(251,191,36,.28), transparent 60%), linear-gradient(160deg, #1e3a8a, #0f172a); color: ${WPE_C.solar}; --mdc-icon-size: 54px; --lu-stroke: 1.4; }
  :host(:not([dark])) .pimg.ph-empty { background: radial-gradient(120% 90% at 70% 0%, rgba(251,191,36,.35), transparent 60%), linear-gradient(160deg, #bfdbfe, #e0ecff); }
  .fcb { flex: none; display:flex; flex-direction:column; gap: 7px; margin-top: 4px; }
  .pred { display:flex; align-items:baseline; gap: 8px; } .pred b { font-size: 38px; font-weight: 800; line-height: 1.05; letter-spacing: -.02em; } .pred span { font-size: 17px; font-weight: 600; color: var(--wp-muted); }
  .so-far { margin: 0; font-size: 13px; color: var(--wp-muted); } .so-far b { color: var(--wp-text); }
  .frow { display:flex; align-items:center; gap: 10px; padding-top: 7px; border-top: 1px solid var(--wp-border); font-size: 14.5px; cursor: pointer; } .frow span { flex: 1; font-weight: 600; } .frow b { font-weight: 800; white-space: nowrap; }
  .fi { --mdc-icon-size: 20px; --lu-stroke: 2; color: ${WPE_C.solar}; }
  .fc .prog { margin-top: 2px; }
  .out .pt > svg.lu { color: ${WPE_C.solar}; }
  .days { flex: 1 1 0; min-height: 0; display:grid; grid-template-columns: repeat(8, minmax(0, 1fr)); gap: 14px; margin-top: 10px; }
  .day { display:flex; flex-direction:column; align-items:center; min-height: 0; cursor: pointer; }
  .day .dv { position:absolute; left: -10px; right: -10px; text-align:center; font-size: 15px; font-weight: 800; font-variant-numeric: tabular-nums; }
  .col { position:relative; flex: 1 1 0; min-height: 20px; width: 100%; max-width: 52px; margin-top: 22px; }
  .col i { position:absolute; left:0; right:0; bottom:0; border-radius: 7px 7px 3px 3px; }
  .col .act { background: linear-gradient(180deg, #fde68a, ${WPE_C.solar}); box-shadow: 0 0 14px rgba(251,191,36,.25); }
  .col .fcst { border: 2px dashed color-mix(in srgb, ${WPE_C.solar} 75%, transparent); background: color-mix(in srgb, ${WPE_C.solar} 10%, transparent); }
  .day.today .act { left: 4px; right: 4px; }
  .day .dn { margin-top: 6px; font-size: 13.5px; font-weight: 700; white-space: nowrap; } .day small { font-size: 11.5px; color: var(--wp-muted); white-space: nowrap; }
  .day.today .dn { color: ${WPE_C.solar}; }
  .tiles.mini { grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; }
  .mini .tile { justify-content: center; padding: 14px 16px; } .mini .big { font-size: 30px; } .mini .th h4 { font-size: 15px; } .mini .sub { font-size: 13.5px; } .mini .dl .big { font-size: 25px; letter-spacing: -.02em; } .mini .ti { --mdc-icon-size: 34px; } .mini svg.ti:not(.lu) { width: 34px; height: 34px; }
  .unit { position:absolute; left: 0; top: -12px; font-size: 11px; color: var(--wp-faint); }
`;
customElements.define("wp-solar", WpSolar);
