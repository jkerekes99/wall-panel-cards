/* Wall Panel cards for Home Assistant — wp-page (shell + nav) and wp-climate.
 * Joshua's 13.1" Galaxy Tab S10 FE+ wall panel. Local-only, no external deps. */
const WP_VERSION = "0.9.9";

/* ---------- helpers ---------- */
const $esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const num = (v) => { const n = parseFloat(v); return Number.isFinite(n) ? n : null; };
const fmt1 = (n) => (n == null ? "–" : (Math.round(n * 10) / 10).toFixed(1));
const fmtT = (n, step = 0.5) => (n == null ? "–" : step < 1 ? (Math.round(n * 2) / 2).toFixed(n % 1 ? 1 : 0) : Math.round(n).toString());
function navigate(path, replace = false) {
  if (replace) history.replaceState(null, "", path); else history.pushState(null, "", path);
  window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace } }));
}
/* Manual light/dark flip (tap the clock). It holds only until the automatic choice next changes (sunrise/sunset in Sun mode),
 * then the automatic choice takes over again. Kept per device in localStorage so a page reload keeps it. */
const WP_OV_KEY = "wall-panel-theme-override";
let wpThemeOv;
try { wpThemeOv = JSON.parse(localStorage.getItem(WP_OV_KEY) || "null"); } catch (e) { wpThemeOv = null; }
function wpSetOv(v) { wpThemeOv = v; try { v ? localStorage.setItem(WP_OV_KEY, JSON.stringify(v)) : localStorage.removeItem(WP_OV_KEY); } catch (e) { /* storage unavailable */ } }
function wpIsDark(hass, cfg) {
  const base = wpAutoDark(hass, cfg);
  const ov = wpThemeOv;
  if (ov && (ov.base !== base || (ov.until && Date.now() > ov.until))) { wpSetOv(null); return base; }
  return ov ? ov.dark : base;
}
function wpToggleTheme(hass, cfg) {
  const base = wpAutoDark(hass, cfg), cur = wpIsDark(hass, cfg);
  if (wpThemeOv) { wpSetOv(null); return; }                 // second tap goes back to automatic
  const sun = hass?.states["sun.sun"]?.attributes || {};
  const next = [sun.next_rising, sun.next_setting].map((t) => (t ? Date.parse(t) : NaN)).filter((t) => t > Date.now());
  wpSetOv({ dark: !cur, base, until: next.length ? Math.min(...next) + 60e3 : Date.now() + 12 * 3600e3 });
}
function wpAutoDark(hass, cfg) {
  const ent = cfg.theme_entity && hass?.states[cfg.theme_entity];
  const mode = (ent ? ent.state : cfg.theme || "auto").toLowerCase();
  if (mode === "dark") return true;
  if (mode === "light") return false;
  if (mode === "sun") {
    // Dark while the sun is down. With sun_elevation (e.g. -4) it switches at that elevation instead, i.e. later at dusk.
    const sun = hass?.states["sun.sun"]; if (!sun) return !!hass?.themes?.darkMode;
    const lim = cfg.sun_elevation;
    return lim != null && sun.attributes?.elevation != null ? sun.attributes.elevation < lim : sun.state === "below_horizon";
  }
  return !!hass?.themes?.darkMode;
}
const agoLong = (iso) => { const m = Math.round((Date.now() - new Date(iso).getTime()) / 60000); return m < 1 ? "under a minute" : m < 60 ? `${m} min` : m < 1440 ? `${Math.floor(m / 60)}h ${m % 60}m` : `${Math.floor(m / 1440)}d`; };
// "lu:<name>" draws an embedded Lucide line icon (sized by --mdc-icon-size like ha-icon); anything else is an ha-icon (mdi:...).
const icon = (name, cls = "") => {
  if (typeof name === "string" && name.startsWith("lu:") && typeof WP_LUCIDE !== "undefined" && WP_LUCIDE[name.slice(3)])
    return `<svg class="lu ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="var(--lu-stroke, 2)" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${WP_LUCIDE[name.slice(3)]}</svg>`;
  return `<ha-icon class="${cls}" icon="${name}"></ha-icon>`;
};

/* ---------- shared palette (inherits into every child card) ---------- */
const WP_PALETTE = `
  :host { --wp-radius: 22px; --wp-gap: 16px; font-family: "Inter", Roboto, "Samsung Sans", system-ui, sans-serif;
    --wp-heat:#f97316; --wp-cool:#38bdf8; --wp-dry:#14b8a6; --wp-fan:#94a3b8; --wp-auto:#a78bfa; --wp-ok:#22c55e; --wp-warn:#f59e0b; --wp-bad:#ef4444; }
  :host([dark]) {
    --wp-bg: radial-gradient(1200px 700px at 20% -10%, #17264a 0%, #0a1222 55%, #070d1a 100%);
    --wp-card: rgba(18, 29, 54, 0.82); --wp-card-2: rgba(28, 42, 74, 0.9); --wp-card-hi: rgba(42, 62, 104, 0.95);
    --wp-border: rgba(120, 155, 230, 0.16); --wp-border-hi: rgba(120, 165, 255, 0.45);
    --wp-text: #eaf0fc; --wp-muted: #93a3c4; --wp-faint: #5d6d8f; --wp-accent: #3b82f6; --wp-accent-text:#fff;
    --wp-shadow: 0 10px 30px rgba(0,0,0,.35); --wp-glow: 0 0 0 1px rgba(59,130,246,.55), 0 0 22px rgba(59,130,246,.35);
    --wp-track: rgba(148,163,196,.18);
  }
  :host(:not([dark])) {
    --wp-bg: linear-gradient(180deg, #eef3fa 0%, #e6ecf6 100%);
    --wp-card: #ffffff; --wp-card-2: #f4f7fc; --wp-card-hi: #e9effa;
    --wp-border: #dbe3f0; --wp-border-hi: #9db8ee;
    --wp-text: #0f1a2e; --wp-muted: #56657f; --wp-faint: #8d9ab2; --wp-accent: #2563eb; --wp-accent-text:#fff;
    --wp-shadow: 0 6px 22px rgba(30,50,90,.08); --wp-glow: 0 0 0 1px rgba(37,99,235,.45), 0 6px 18px rgba(37,99,235,.18);
    --wp-track: #e3e9f3;
  }
  :host {
    /* HA + HACS card variables, so button-card / bubble-card / scheduler match */
    --ha-card-background: var(--wp-card); --card-background-color: var(--wp-card);
    --primary-text-color: var(--wp-text); --secondary-text-color: var(--wp-muted);
    --primary-color: var(--wp-accent); --accent-color: var(--wp-accent);
    --ha-card-border-radius: var(--wp-radius); --ha-card-border-color: var(--wp-border); --ha-card-border-width: 1px;
    --ha-card-box-shadow: var(--wp-shadow); --divider-color: var(--wp-border);
    --bubble-main-background-color: var(--wp-card-2); --bubble-pop-up-background-color: var(--wp-card);
    --bubble-accent-color: var(--wp-accent); --bubble-border-radius: 18px;
    color: var(--wp-text);
  }
  svg.lu { width: var(--mdc-icon-size, 24px); height: var(--mdc-icon-size, 24px); flex: none; display: inline-block; vertical-align: middle; }
`;

/* =====================================================================
 * wp-page: full-screen shell (background, nav bar, CSS-grid of child cards)
 * ===================================================================== */
const COND = {
  "clear-night": ["mdi:weather-night", "Clear"], cloudy: ["mdi:weather-cloudy", "Cloudy"], exceptional: ["mdi:alert-circle-outline", "Alert"],
  fog: ["mdi:weather-fog", "Fog"], hail: ["mdi:weather-hail", "Hail"], lightning: ["mdi:weather-lightning", "Storms"],
  "lightning-rainy": ["mdi:weather-lightning-rainy", "Storms"], partlycloudy: ["mdi:weather-partly-cloudy", "Partly cloudy"],
  pouring: ["mdi:weather-pouring", "Heavy rain"], rainy: ["mdi:weather-rainy", "Rain"], snowy: ["mdi:weather-snowy", "Snow"],
  "snowy-rainy": ["mdi:weather-snowy-rainy", "Sleet"], sunny: ["mdi:weather-sunny", "Sunny"], windy: ["mdi:weather-windy", "Windy"],
  "windy-variant": ["mdi:weather-windy-variant", "Windy"],
};
const DEFAULT_TABS = [
  { name: "Overview", icon: "lu:house", path: "overview" },
  { name: "Climate", icon: "lu:thermometer", path: "climate" },
  { name: "Energy", icon: "lu:zap", path: "energy" },
  { name: "Solar", icon: "lu:sun", path: "solar" },
  { name: "Cars", icon: "lu:car-front", path: "cars" },
  { name: "Security", icon: "lu:shield", path: "security" },
];

class WpPage extends HTMLElement {
  setConfig(config) {
    this._config = { tabs: DEFAULT_TABS, ...config };
    this._children = null;
    this._built = false;
    if (this.shadowRoot) this._build();
  }
  getCardSize() { return 12; }
  getGridOptions() { return { columns: "full", rows: "auto" }; }
  connectedCallback() {
    this._tick = setInterval(() => this._updateClock(), 15000);
    this._onLoc = () => this._markActive();
    window.addEventListener("location-changed", this._onLoc);
    window.addEventListener("popstate", this._onLoc);
  }
  disconnectedCallback() {
    clearInterval(this._tick);
    window.removeEventListener("location-changed", this._onLoc);
    window.removeEventListener("popstate", this._onLoc);
  }
  set hass(hass) {
    this._hass = hass;
    window.wpRingGrab?.hass(hass);   // Ring doorbell preview grabs (security.js)
    if (!this.shadowRoot) { this.attachShadow({ mode: "open" }); this._build(); }
    this.toggleAttribute("dark", wpIsDark(hass, this._config));
    this._updateHeader();
    this._renderChips();
    this._renderLayer();
    if (this._wxOpen) this._renderWx();
    (this._children || []).forEach((c) => { c.hass = hass; });
  }
  async _build() {
    const c = this._config;
    const root = this.shadowRoot;
    root.innerHTML = `<style>${WP_PALETTE}${WP_PAGE_CSS}</style>
      <div class="page ${c.fit_screen ? "fit" : ""}">
        <nav class="bar">
          <div class="tabs">${c.tabs.map((t) => `<button class="tab" data-path="${$esc(t.path)}">${icon(t.icon)}<span>${$esc(t.name)}</span></button>`).join("")}</div>
          ${c.chips?.length ? `<div class="chips" id="chips"></div>` : ""}
          <div class="right">
            <button class="wx" id="wx">${icon("mdi:weather-partly-cloudy", "wxi")}<div><b id="wxt">–</b><small id="wxc"></small></div></button>
            <button class="clock" id="clock" aria-label="Switch light or dark"><b id="time">–</b><small id="date"></small></button>
          </div>
        </nav>
        <div id="layer"></div><div id="wxlayer"></div>
        <main class="grid" style="${c.grid ? `grid-template-columns:${c.grid.columns || "1fr"};grid-template-rows:${c.grid.rows || "auto"};grid-template-areas:${c.grid.areas || "none"};` : ""}"></main>
      </div>`;
    root.querySelectorAll(".tab").forEach((b) => b.addEventListener("click", () => {
      const base = c.base || location.pathname.split("/").slice(0, 2).join("/");
      navigate(`${base}/${b.dataset.path}`);
    }));
    root.getElementById("chips")?.addEventListener("click", (e) => {
      const b = e.target.closest("[data-chip]"); if (!b) return;
      this._chipOpen = +b.dataset.chip; this._chipAnim = Date.now() + 450; this._renderLayer();
    });
    root.getElementById("layer").addEventListener("click", (e) => this._layerClick(e));
    root.getElementById("clock").addEventListener("click", () => {
      wpToggleTheme(this._hass, this._config);
      this.hass = this._hass;                              // re-apply to this page and every child card now
    });
    root.getElementById("wx").addEventListener("click", () => {
      if (c.weather_popup === "dialog") { this._wxOpen = true; this._wxAnim = Date.now() + 450; this._wxSubscribe(); this._renderWx(); }
      else if (c.weather_popup) navigate(`${location.pathname}${c.weather_popup}`);
    });
    root.getElementById("wxlayer").addEventListener("click", (e) => {
      if (e.target.closest("[data-close]")) { this._wxOpen = false; this._wxUnsub(); this._renderWx(); }
    });
    this._markActive();
    this._updateClock();
    // child cards
    const helpers = await window.loadCardHelpers();
    const grid = root.querySelector(".grid");
    this._children = (c.cards || []).map((cc) => {
      const { area, style, popup, ...conf } = cc;
      if (conf.type?.startsWith("custom:wp-") && c.theme_entity && !conf.theme_entity) conf.theme_entity = c.theme_entity;
      if (conf.type?.startsWith("custom:wp-") && c.sun_elevation != null && conf.sun_elevation == null) conf.sun_elevation = c.sun_elevation;
      if (conf.type?.startsWith("custom:wp-") && c.theme && !conf.theme) conf.theme = c.theme;
      const el = helpers.createCardElement(conf);
      const isPopup = !!(popup || conf.type === "custom:bubble-card");
      // Bubble Card (3.2+) hides the nearest hui-card ancestor while a standalone pop-up is closed.
      // Here that would be the hui-card holding this whole page, so pop-ups sit in a host whose tag ends in
      // "-view", which Bubble treats as a layout boundary and stops its search at.
      const wrap = document.createElement(isPopup ? "wp-popup-view" : "div");
      wrap.className = "cell" + (isPopup ? " popup" : "");
      if (area) wrap.style.gridArea = area;
      if (style) wrap.setAttribute("style", (wrap.getAttribute("style") || "") + ";" + style);
      wrap.appendChild(el);
      grid.appendChild(wrap);
      if (this._hass) el.hass = this._hass;
      return el;
    });
    this._built = true;
    if (this._hass) this.hass = this._hass;
  }
  /* ---------- weather dialog (daily + hourly forecast, sized to its content) ---------- */
  async _wxSubscribe() {
    this._wxUnsub(); this._wxF = this._wxF || {};
    const c = this._config, conn = this._hass?.connection; if (!conn) return;
    const sub = async (entity_id, forecast_type) => {
      try { return await conn.subscribeMessage((m) => { this._wxF[forecast_type] = m.forecast || []; this._renderWx(); }, { type: "weather/subscribe_forecast", entity_id, forecast_type }); }
      catch (err) { console.warn("wp weather forecast", entity_id, forecast_type, err); return null; }
    };
    this._wxSubs = (await Promise.all([sub(c.weather, "daily"), sub(c.weather_hourly || c.weather, "hourly")])).filter(Boolean);
  }
  _wxUnsub() { (this._wxSubs || []).forEach((u) => { try { u(); } catch (e) { /* already closed */ } }); this._wxSubs = []; }
  _renderWx() {
    const el = this.shadowRoot?.getElementById("wxlayer"); if (!el) return;
    let html = "";
    const h = this._hass, w = h?.states[this._config.weather];
    if (this._wxOpen && w) {
      const a = w.attributes, F = this._wxF || {}, unit = a.temperature_unit || "°C";
      const [ic, label] = COND[w.state] || ["mdi:weather-partly-cloudy", w.state];
      const d = F.daily || [], hr = (F.hourly || []).filter((x) => new Date(x.datetime) > Date.now() - 3600e3).slice(0, 24);
      const today = d[0];
      const r0 = (v) => (v == null ? "–" : Math.round(v));
      const hh = (iso) => new Date(iso).toLocaleTimeString([], { hour: "numeric" }).replace(/\s/g, "").toLowerCase();
      const dn = (iso, i) => (i === 0 ? "Today" : new Date(iso).toLocaleDateString([], { weekday: "short" }));
      const lo = Math.min(...d.map((x) => x.templow ?? x.temperature)), hi = Math.max(...d.map((x) => x.temperature));
      const rain = (p) => (p ? `<span class="rp">${icon("mdi:water")}${Math.round(p)}%</span>` : `<span class="rp none"></span>`);
      const anim = (this._wxAnim || 0) > Date.now() ? " anim" : "";
      html = `<div class="ov${anim}" data-close="1"></div>
        <section class="dlg wxd${anim}" role="dialog">
          <header class="wxh">${icon(ic, "wxbig")}
            <div class="wxnow"><b>${r0(a.temperature)}<i>${unit}</i></b><span>${$esc(label)}</span></div>
            <div class="wxmeta">
              ${today ? `<span>${icon("mdi:arrow-up")}${r0(today.temperature)}°  ${icon("mdi:arrow-down")}${r0(today.templow)}°</span>` : ""}
              ${a.humidity != null ? `<span>${icon("mdi:water-percent")}${Math.round(a.humidity)}% humidity</span>` : ""}
              ${a.wind_speed != null ? `<span>${icon("mdi:weather-windy")}${Math.round(a.wind_speed)} ${$esc(a.wind_speed_unit || "km/h")}${a.wind_bearing != null ? ` ${$esc(String(a.wind_bearing))}` : ""}</span>` : ""}
              ${today?.precipitation_probability ? `<span>${icon("mdi:umbrella-outline")}${Math.round(today.precipitation_probability)}% chance of rain</span>` : ""}
            </div>
            <button class="x" data-close="1" aria-label="Close">${icon("mdi:close")}</button></header>
          ${hr.length ? `<div class="hrs">${hr.map((x) => `<div class="hc"><small>${hh(x.datetime)}</small>${icon((COND[x.condition] || ["mdi:weather-partly-cloudy"])[0])}<b>${r0(x.temperature)}°</b>${x.precipitation_probability ? `<em>${Math.round(x.precipitation_probability)}%</em>` : "<em></em>"}</div>`).join("")}</div>` : ""}
          <div class="days">${d.length ? d.slice(0, 7).map((x, i) => {
            const l = x.templow ?? x.temperature, span = Math.max(1, hi - lo);
            return `<div class="dr"><span class="dn">${dn(x.datetime, i)}</span>${icon((COND[x.condition] || ["mdi:weather-partly-cloudy"])[0], "di")}${rain(x.precipitation_probability)}
              <span class="tl">${r0(x.templow)}°</span><span class="rng"><i style="left:${((l - lo) / span) * 100}%;right:${((hi - x.temperature) / span) * 100}%"></i></span><span class="th">${r0(x.temperature)}°</span></div>`;
          }).join("") : `<div class="empty">Loading forecast…</div>`}</div>
          ${a.attribution ? `<footer>${$esc(a.attribution)}</footer>` : ""}
        </section>`;
    }
    if (html !== this._wxHtml) { this._wxHtml = html; el.innerHTML = html; }
  }
  /* ---------- status chips + "what's on" list dialog ---------- */
  _chipItems(ch) {
    const h = this._hass, src = ch.items || {}, on = ch.on_state || "on";
    let ids = [];
    if (src.entities) ids = src.entities;
    else if (src.group) ids = h.states[src.group]?.attributes?.entity_id || [];
    else if (src.domain) ids = Object.keys(h.states).filter((id) => id.startsWith(`${src.domain}.`) && !Array.isArray(h.states[id].attributes?.entity_id));
    const ex = new Set(src.exclude || []);
    return ids.filter((id) => !ex.has(id)).map((id) => h.states[id]).filter((st) => st && st.state === on)
      .sort((a, b) => (a.attributes.friendly_name || a.entity_id).localeCompare(b.attributes.friendly_name || b.entity_id));
  }
  _renderChips() {
    const el = this.shadowRoot?.getElementById("chips"); if (!el || !this._hass) return;
    const html = this._config.chips.map((ch, i) => {
      const n = ch.entity && !ch.count_items ? num(this._hass.states[ch.entity]?.state) : this._chipItems(ch).length;
      return `<button class="chip ${n ? "" : "zero"}" data-chip="${i}" style="--chip:${$esc(ch.color || "var(--wp-accent)")}" aria-label="${$esc(ch.name || "")}">${icon(ch.icon || "mdi:circle")}<b>${n ?? "–"}</b></button>`;
    }).join("");
    if (html !== this._chipsHtml) { this._chipsHtml = html; el.innerHTML = html; }
  }
  _renderLayer() {
    const el = this.shadowRoot?.getElementById("layer"); if (!el || !this._hass) return;
    let html = "";
    const ch = this._chipOpen != null ? this._config.chips?.[this._chipOpen] : null;
    if (ch) {
      const h = this._hass, items = this._chipItems(ch), ctl = !!ch.control;
      const area = (st) => { const e = h.entities?.[st.entity_id]; const a = e?.area_id || (e?.device_id && h.devices?.[e.device_id]?.area_id); return a ? h.areas?.[a]?.name : null; };
      const row = (st) => {
        const a = st.attributes, bri = a.brightness != null ? `${Math.round((a.brightness / 255) * 100)}%` : null;
        const sub = [ch.group_by_area ? null : area(st), bri, `${ch.since || "on"} for ${agoLong(st.last_changed)}`].filter(Boolean).join(" · ");
        return `<div class="li"><span class="lic" style="--chip:${$esc(ch.color || "var(--wp-accent)")}">${icon(a.icon || ch.item_icon || ch.icon)}</span>
          <div class="lit"><b>${$esc(a.friendly_name || st.entity_id)}</b><small>${$esc(sub)}</small></div>
          ${ctl ? `<button class="off" data-off="${$esc(st.entity_id)}">${icon("mdi:power")}Turn off</button>` : ""}</div>`;
      };
      let rows;
      if (ch.group_by_area) {
        const groups = new Map();
        items.forEach((st) => { const k = area(st) || "Other"; if (!groups.has(k)) groups.set(k, []); groups.get(k).push(st); });
        rows = [...groups.entries()].sort((x, y) => (x[0] === "Other") - (y[0] === "Other") || x[0].localeCompare(y[0]))
          .map(([name, list]) => `<div class="sec"><h5>${$esc(name)}<span>${list.length}</span></h5>${list.map(row).join("")}</div>`).join("");
      } else rows = items.map(row).join("");
      const anim = (this._chipAnim || 0) > Date.now() ? " anim" : "";
      html = `<div class="ov${anim}" data-close="1"></div>
        <section class="dlg${anim}" role="dialog">
          <header><span class="lic big" style="--chip:${$esc(ch.color || "var(--wp-accent)")}">${icon(ch.icon || "mdi:circle")}</span>
            <div><h3>${$esc(ch.name || "")}</h3><p>${`${items.length} ${$esc(ch.unit || "")}`.trim()}</p></div>
            ${ctl && items.length > 1 ? `<button class="alloff" data-alloff="1">${icon("mdi:power")}Turn all off</button>` : ""}
            <button class="x" data-close="1" aria-label="Close">${icon("mdi:close")}</button></header>
          <div class="list">${rows || `<div class="empty">${icon(ch.icon || "mdi:check")}<span>${$esc(ch.empty || "Nothing to show")}</span></div>`}</div>
        </section>`;
    }
    if (html !== this._layerHtml) { this._layerHtml = html; el.innerHTML = html; }
  }
  _layerClick(e) {
    const t = e.target.closest("[data-close],[data-off],[data-alloff]"); if (!t) return;
    const ch = this._config.chips?.[this._chipOpen];
    if (t.dataset.close) { this._chipOpen = null; this._renderLayer(); return; }
    if (!ch) return;
    const ids = t.dataset.off ? [t.dataset.off] : this._chipItems(ch).map((st) => st.entity_id);
    const byDomain = {};
    ids.forEach((id) => { (byDomain[id.split(".")[0]] ||= []).push(id); });
    Object.entries(byDomain).forEach(([d, list]) => this._hass.callService(d, "turn_off", { entity_id: list }));
    t.disabled = true; t.classList.add("busy");
  }
  _markActive() {
    const seg = location.pathname.split("/").filter(Boolean).pop();
    this.shadowRoot?.querySelectorAll(".tab").forEach((b) => b.classList.toggle("on", b.dataset.path === (this._config.active || seg)));
  }
  _updateClock() {
    const r = this.shadowRoot; if (!r) return;
    const d = new Date();
    const t = d.toLocaleTimeString("en-AU", { hour: "numeric", minute: "2-digit", hour12: true }).replace(" ", " ");
    r.getElementById("time").textContent = t;
    r.getElementById("date").textContent = d.toLocaleDateString("en-AU", { weekday: "short", day: "numeric", month: "short" });
  }
  _updateHeader() {
    const r = this.shadowRoot; const h = this._hass; if (!r || !h) return;
    const w = h.states[this._config.weather];
    if (w) {
      const [ic, label] = COND[w.state] || ["mdi:weather-partly-cloudy", w.state];
      r.querySelector(".wxi").setAttribute("icon", ic);
      const t = num(w.attributes.temperature);
      r.getElementById("wxt").textContent = t == null ? "–" : `${Math.round(t)}°C`;
      r.getElementById("wxc").textContent = label;
    }
  }
}
const WP_PAGE_CSS = `
  :host { display:block; }
  .page { min-height: 100vh; box-sizing: border-box; background: var(--wp-bg); padding: 14px 18px 18px; display:flex; flex-direction:column; gap: 14px; }
  .bar { display:flex; align-items:center; gap: 12px; background: var(--wp-card); border: 1px solid var(--wp-border); border-radius: 20px; padding: 8px 10px; box-shadow: var(--wp-shadow); }
  .tabs { display:flex; gap: 4px; flex: 1; overflow-x: auto; scrollbar-width: none; padding: 4px; margin: -4px; }
  .tab { all: unset; cursor: pointer; display:flex; align-items:center; gap: 10px; padding: 12px 17px; border-radius: 16px; color: var(--wp-text); font-size: 17.5px; font-weight: 700; letter-spacing: -.005em; white-space: nowrap; transition: background .25s, box-shadow .25s; }
  .tab ha-icon, .tab svg.lu { --mdc-icon-size: 23px; --lu-stroke: 2.1; }
  .tab:active { transform: scale(.97); }
  .tab.on { color: #fff; background: linear-gradient(180deg, #3d8bff 0%, #1f5fe6 100%);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.25), 0 0 0 1px rgba(96,165,250,.55), 0 6px 18px rgba(37,99,235,.45), 0 0 28px rgba(59,130,246,.35); }
  .right { display:flex; align-items:center; gap: 10px; padding-left: 10px; border-left: 1px solid var(--wp-border); }
  .wx { all: unset; cursor:pointer; display:flex; align-items:center; gap: 10px; padding: 6px 12px; border-radius: 14px; }
  .wx:active, .clock:active { background: var(--wp-card-hi); }
  .clock { all: unset; cursor: pointer; padding: 6px 10px; border-radius: 14px; text-align: right; }
  .wx ha-icon { --mdc-icon-size: 34px; color: #fbbf24; }
  .wx b, .clock b { display:block; font-size: 20px; line-height: 1.1; }
  .wx small, .clock small { display:block; color: var(--wp-muted); font-size: 13px; }
  .clock { text-align: right; padding: 0 8px; min-width: 104px; }
  .clock b { font-size: 24px; }
  .chips { display:flex; gap: 8px; flex: none; margin-left: 6px; }
  #layer, #wxlayer { display: contents; }  /* dialog hosts: no box of their own, so they don't add a flex gap to the page */
  .chip { all: unset; cursor: pointer; display:flex; align-items:center; gap: 7px; height: 46px; padding: 0 14px 0 12px; border-radius: 14px; background: color-mix(in srgb, var(--chip) 16%, transparent); color: var(--wp-text); font-size: 19px; font-weight: 700; transition: opacity .2s, background .2s; }
  .chip ha-icon { --mdc-icon-size: 24px; color: var(--chip); }
  .chip.zero { background: var(--wp-card-2); opacity: .5; } .chip.zero ha-icon { color: var(--wp-muted); }
  .chip:active { transform: scale(.96); }
  .ov { position: fixed; inset: 0; z-index: 40; background: rgba(3, 8, 20, .55); backdrop-filter: blur(6px); } .ov.anim { animation: wpfade .2s; }
  .dlg { position: fixed; z-index: 41; left: 50%; top: 50%; transform: translate(-50%, -50%); width: min(640px, 92vw); max-height: 82vh; display:flex; flex-direction:column; background: var(--wp-card); border: 1px solid var(--wp-border); border-radius: 28px; box-shadow: 0 30px 80px rgba(0,0,0,.45); overflow:hidden; color: var(--wp-text); }
  :host(:not([dark])) .dlg { background: #fff; }
  .dlg.anim { animation: wppop .22s cubic-bezier(.2,.9,.3,1.2); }
  @keyframes wpfade { from { opacity: 0; } } @keyframes wppop { from { opacity: 0; transform: translate(-50%, -48%) scale(.96); } }
  .dlg header { display:flex; align-items:center; gap: 14px; padding: 20px 20px 16px 22px; border-bottom: 1px solid var(--wp-border); }
  .dlg header > div { flex: 1; min-width: 0; }
  .dlg h3 { margin: 0; font-size: 24px; } .dlg header p { margin: 2px 0 0; color: var(--wp-muted); font-size: 15px; }
  .lic { flex:none; width: 48px; height: 48px; border-radius: 14px; display:grid; place-items:center; background: color-mix(in srgb, var(--chip) 16%, transparent); }
  .lic ha-icon { --mdc-icon-size: 26px; color: var(--chip); } .lic.big { width: 54px; height: 54px; }
  .x, .off, .alloff { all: unset; cursor: pointer; display:flex; align-items:center; justify-content:center; gap: 8px; border-radius: 14px; font-weight: 700; }
  .x { width: 52px; height: 52px; border-radius: 50%; background: var(--wp-card-2); } .x ha-icon { --mdc-icon-size: 26px; }
  .off, .alloff { height: 50px; padding: 0 18px; font-size: 17px; background: var(--wp-card-2); color: var(--wp-text); } .off ha-icon, .alloff ha-icon { --mdc-icon-size: 22px; color: #f87171; }
  .alloff { background: color-mix(in srgb, #ef4444 16%, transparent); }
  .off.busy, .alloff.busy { opacity: .5; }
  .list { overflow-y: auto; padding: 8px 12px 14px; }
  .li { display:flex; align-items:center; gap: 14px; padding: 12px 10px; border-bottom: 1px solid var(--wp-border); } .li:last-child { border-bottom: 0; }
  .lit { flex: 1; min-width: 0; } .lit b { display:block; font-size: 19px; } .lit small { display:block; color: var(--wp-muted); font-size: 15px; margin-top: 2px; }
  .sec h5 { display:flex; align-items:center; gap: 8px; margin: 14px 10px 4px; font-size: 14px; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; color: var(--wp-muted); }
  .sec:first-child h5 { margin-top: 6px; } .sec h5 span { font-size: 12px; padding: 1px 8px; border-radius: 999px; background: var(--wp-card-2); letter-spacing: 0; }
  .wxd { width: min(860px, 94vw); }
  .wxh { gap: 18px; padding: 20px 20px 18px 24px; }
  .wxbig { --mdc-icon-size: 64px; color: #fbbf24; flex: none; }
  .wxnow { display:flex; flex-direction:column; flex: none; } .wxnow b { font-size: 52px; font-weight: 800; line-height: 1; } .wxnow b i { font-style: normal; font-size: 24px; color: var(--wp-muted); margin-left: 2px; } .wxnow span { font-size: 18px; font-weight: 700; margin-top: 4px; }
  .wxh .wxmeta { flex: 1; display:flex; flex-wrap: wrap; gap: 8px 18px; color: var(--wp-muted); font-size: 16px; font-weight: 600; }
  .wxmeta span { display:flex; align-items:center; gap: 5px; white-space: nowrap; } .wxmeta ha-icon { --mdc-icon-size: 19px; color: var(--wp-accent); }
  .hrs { display:flex; gap: 6px; overflow-x: auto; padding: 14px 16px; border-bottom: 1px solid var(--wp-border); scrollbar-width: none; }
  .hc { flex: none; width: 62px; display:flex; flex-direction:column; align-items:center; gap: 4px; padding: 8px 0; border-radius: 14px; background: var(--wp-card-2); }
  .hc small { font-size: 13px; color: var(--wp-muted); font-weight: 700; } .hc ha-icon { --mdc-icon-size: 26px; color: #fbbf24; } .hc b { font-size: 18px; } .hc em { font-style: normal; font-size: 12px; font-weight: 700; color: #38bdf8; min-height: 15px; }
  .days { padding: 6px 18px 10px; }
  .dr { display:grid; grid-template-columns: 70px 34px 64px 40px 1fr 40px; align-items:center; gap: 12px; padding: 9px 0; border-bottom: 1px solid var(--wp-border); font-size: 18px; } .dr:last-child { border-bottom: 0; }
  .dn { font-weight: 700; } .di { --mdc-icon-size: 28px; color: #fbbf24; }
  .rp { display:flex; align-items:center; gap: 2px; font-size: 14px; font-weight: 700; color: #38bdf8; } .rp ha-icon { --mdc-icon-size: 16px; }
  .tl { color: var(--wp-muted); text-align: right; font-weight: 600; } .th { font-weight: 800; }
  .rng { position: relative; height: 8px; border-radius: 999px; background: var(--wp-track); } .rng i { position:absolute; top:0; bottom:0; border-radius: 999px; background: linear-gradient(90deg, #38bdf8, #fbbf24 60%, #f97316); }
  .wxd footer { padding: 8px 20px 14px; font-size: 12px; color: var(--wp-faint); }
  .empty { display:flex; flex-direction:column; align-items:center; gap: 10px; padding: 36px 10px; color: var(--wp-muted); font-size: 18px; } .empty ha-icon { --mdc-icon-size: 40px; opacity: .6; }
  .grid { flex:1; display:grid; gap: var(--wp-gap); min-height: 0; }
  .page.fit { height: 100vh; height: 100dvh; min-height: 0; overflow: hidden; } .page.fit .grid > .cell:not(.popup) { min-height: 0; overflow: hidden; }
  .cell { min-width: 0; min-height: 0; }
  .cell.popup { position: absolute; width: 0; height: 0; overflow: visible; }
`;
customElements.define("wp-page", WpPage);
if (!customElements.get("wp-popup-view")) customElements.define("wp-popup-view", class extends HTMLElement {});

/* =====================================================================
 * wp-climate: whole-home + per-room AC control (Sensibo-style)
 * ===================================================================== */
const MODES = {
  heat: { label: "Heat", icon: "mdi:fire", c: "heat" },
  cool: { label: "Cool", icon: "mdi:snowflake", c: "cool" },
  dry: { label: "Dry", icon: "mdi:water-percent", c: "dry" },
  fan_only: { label: "Fan", icon: "mdi:fan", c: "fan" },
  heat_cool: { label: "Auto", icon: "mdi:sun-snowflake-variant", c: "auto" },
  auto: { label: "Auto", icon: "mdi:sun-snowflake-variant", c: "auto" },
  off: { label: "Off", icon: "mdi:power", c: "off" },
};
const MODE_ORDER = ["heat", "cool", "dry", "fan_only", "heat_cool", "auto"];
const ACTION = { heating: "Heating", cooling: "Cooling", drying: "Drying", fan: "Fan", idle: "Idle", off: "Off", defrosting: "Defrosting", preheating: "Pre-heating" };
// semantic level -> raw option candidates (ProtoART first, then Sensibo)
const FAN_SEM = [["auto", "Auto", ["auto"]], ["quiet", "Quiet", ["silent", "quiet"]], ["low", "Low", ["low"]], ["medlow", "Med-low", ["medium_low"]],
  ["medium", "Medium", ["med", "medium"]], ["medhigh", "Med-high", ["medium_high"]], ["high", "High", ["high"]], ["max", "Max", ["superhigh", "strong"]]];
const VANE_SEM = [["auto", "Auto", ["auto", "stopped"]], ["swing", "Swing", ["swing", "rangefull"]], ["top", "Top", ["1", "fixedtop"]],
  ["upper", "Upper", ["2", "fixedmiddletop"]], ["middle", "Middle", ["3", "fixedmiddle"]], ["lower", "Lower", ["4", "fixedmiddlebottom"]], ["bottom", "Bottom", ["5", "fixedbottom"]]];
const HVANE_SEM = [["auto", "Auto", ["auto", "stopped"]], ["swing", "Swing", ["swing"]], ["farleft", "Far left", ["maxleft", "fixedleft"]],
  ["left", "Left", ["left", "fixedcenterleft"]], ["centre", "Centre", ["middle", "fixedcenter"]], ["right", "Right", ["right", "fixedcenterright"]], ["farright", "Far right", ["maxright", "fixedright"]]];
const VANE_ANGLE = { top: 8, upper: 26, middle: 44, lower: 62, bottom: 80 };
const HVANE_ANGLE = { farleft: -50, left: -25, centre: 0, right: 25, farright: 50 };
const PRESET_LABEL = { normal: "Normal", quiet: "Quiet", powerful: "Powerful", none: "None", eco: "Eco", boost: "Boost", comfort: "Comfort" };

function semOptions(raw, SEM) {
  if (!raw) return [];
  const out = [];
  for (const [key, label, cands] of SEM) {
    const r = cands.find((c) => raw.includes(c));
    if (r) out.push({ key, label, raw: r });
  }
  return out;
}
const semFor = (raw, SEM, key) => { const e = SEM.find((s) => s[0] === key); return e && raw ? e[2].find((c) => raw.includes(c)) : undefined; };
const semKeyOf = (value, SEM) => (SEM.find((s) => s[2].includes(value)) || [])[0];

function vaneSvg(key, horizontal) {
  if (key === "swing") return `<svg viewBox="0 0 32 32" class="vsvg"><path d="M6 10 Q16 4 26 10 M6 22 Q16 28 26 22" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path d="M23 6 l3 4 -4 1 M9 26 l-3 -4 4 -1" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  if (key === "auto") return `<svg viewBox="0 0 32 32" class="vsvg"><text x="16" y="21" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">A</text><circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" stroke-width="2"/></svg>`;
  const a = horizontal ? HVANE_ANGLE[key] : VANE_ANGLE[key];
  if (horizontal) {
    const rad = a * Math.PI / 180; const x = 16 + Math.sin(rad) * 21, y = 7 + Math.cos(rad) * 21;
    return `<svg viewBox="0 0 32 32" class="vsvg"><rect x="5" y="2" width="22" height="5" rx="2.5" fill="currentColor" opacity=".35"/><line x1="16" y1="7" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.6" fill="currentColor"/></svg>`;
  }
  const rad = a * Math.PI / 180; const x = 6 + Math.cos(rad) * 20, y = 7 + Math.sin(rad) * 20;
  return `<svg viewBox="0 0 32 32" class="vsvg"><rect x="3" y="3" width="4" height="8" rx="2" fill="currentColor" opacity=".35"/><line x1="6" y1="7" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`;
}

class WpClimate extends HTMLElement {
  setConfig(config) {
    if (!config.rooms || !config.rooms.length) throw new Error("wp-climate: define rooms");
    this._config = { timer_entity: "sensor.quick_timer_monitor", ...config };
    this._pending = {};   // entity -> { temperature?, hvac?, until }
    this._sendTimers = {};
    this._modal = null;   // { kind: 'room'|'all', idx, sel:Set }
    if (this.shadowRoot) this._render();
  }
  getCardSize() { return 10; }
  connectedCallback() { this._tick = setInterval(() => this._render(), 20000); }
  disconnectedCallback() { clearInterval(this._tick); }
  set hass(hass) {
    const first = !this._hass;
    this._hass = hass;
    if (!this.shadowRoot) { this.attachShadow({ mode: "open" }); }
    this.toggleAttribute("dark", wpIsDark(hass, this._config));
    // re-render only when something we display changed
    const sig = this._signature();
    if (first || sig !== this._sig) { this._sig = sig; this._render(); }
  }
  _signature() {
    const h = this._hass; const ids = [];
    for (const r of this._config.rooms) ids.push(r.climate, r.target_entity, r.temperature, r.humidity, r.power, r.preset, ...(r.extras || []));
    ids.push(this._config.outdoor, this._config.power_total, this._config.timer_entity, this._config.theme_entity);
    return ids.filter(Boolean).map((id) => { const s = h.states[id]; return s ? s.last_updated + s.state : "x"; }).join("|") + JSON.stringify(this._pending);
  }

  /* ---------- model ---------- */
  _room(i) {
    const r = this._config.rooms[i]; const h = this._hass; const st = h.states[r.climate];
    const pend = this._pending[r.climate] || {};
    const live = pend.until && pend.until > Date.now();
    const a = st ? st.attributes : {};
    const unavailable = !st || st.state === "unavailable" || st.state === "unknown";
    const mode = live && pend.hvac ? pend.hvac : st ? st.state : "unavailable";
    if (st && !["off", "unavailable", "unknown"].includes(st.state)) (this._lastSeen ||= {})[r.climate] = st.state;
    const sensT = r.temperature && num(h.states[r.temperature]?.state);
    const sensH = r.humidity && num(h.states[r.humidity]?.state);
    // target_entity: an input_number that holds the wanted room temperature (an automation turns it into the AC setpoint)
    const tg = r.target_entity ? h.states[r.target_entity] : null, ta = tg?.attributes || {};
    return {
      cfg: r, i, st, a, unavailable, mode, on: !unavailable && mode !== "off",
      cur: sensT ?? num(a.current_temperature), hum: sensH ?? num(a.current_humidity),
      target: live && pend.temperature != null ? pend.temperature : tg ? num(tg.state) : num(a.temperature),
      step: tg ? ta.step || 0.5 : a.target_temp_step || (a.min_temp != null ? 0.5 : 1),
      min: tg ? ta.min ?? 16 : a.min_temp ?? 16, max: tg ? ta.max ?? 30 : a.max_temp ?? 30,
      action: a.hvac_action, fan: a.fan_mode, swing: a.swing_mode, hswing: a.swing_horizontal_mode,
      power: r.power ? num(h.states[r.power]?.state) : null,
      full: !!r.full,
    };
  }
  _timer(taskId) {
    const t = this._hass.states[this._config.timer_entity]?.attributes?.active_tasks?.[taskId];
    if (!t) return null;
    const left = t.end_timestamp * 1000 - Date.now();
    if (left <= 0) return null;
    return { left, label: t.task_label, off: (t.finish_actions?.[0]?.service || "").endsWith("turn_off") };
  }
  _taskId(i) { return i === "all" ? "wp_ac_all" : `wp_ac_${this._config.rooms[i].climate.split(".")[1]}`; }

  /* ---------- actions ---------- */
  _call(domain, service, data) { return this._hass.callService(domain, service, data).catch((e) => this._toast(e.message || String(e))); }
  _setPending(eid, patch) { this._pending[eid] = { ...(this._pending[eid] || {}), ...patch, until: Date.now() + 6000 }; this._sig = null; this._render(); setTimeout(() => { this._sig = null; this.hass = this._hass; }, 6100); }
  _power(i, on) {
    const r = this._room(i);
    this._setPending(r.cfg.climate, { hvac: on ? this._lastMode(r) : "off" });
    this._call("climate", on ? "turn_on" : "turn_off", { entity_id: r.cfg.climate });
  }
  _lastMode(r) {
    const seen = this._lastSeen?.[r.cfg.climate];
    const modes = r.a.hvac_modes || [];
    return seen || (modes.includes("heat") ? "heat" : modes.find((m) => m !== "off")) || "heat";
  }
  _mode(ids, mode) {
    ids.forEach((eid) => {
      const st = this._hass.states[eid]; const modes = st?.attributes.hvac_modes || [];
      const m = modes.includes(mode) ? mode : mode === "heat_cool" && modes.includes("auto") ? "auto" : mode === "auto" && modes.includes("heat_cool") ? "heat_cool" : null;
      if (!m) return;
      this._setPending(eid, { hvac: m });
      this._call("climate", "set_hvac_mode", { entity_id: eid, hvac_mode: m });
    });
  }
  _nudge(ids, delta, base) {
    // debounce: show immediately, send once taps stop (avoids repeated AC beeps)
    ids.forEach((eid) => {
      const st = this._hass.states[eid]; if (!st) return;
      const tgt = this._targetEntity(eid), tg = tgt && this._hass.states[tgt];
      const a = st.attributes; const step = tg ? tg.attributes.step || 0.5 : a.target_temp_step || 1;
      const lo = tg ? tg.attributes.min ?? 16 : a.min_temp ?? 16, hi = tg ? tg.attributes.max ?? 30 : a.max_temp ?? 30;
      const p = this._pending[eid];
      const cur = base != null ? base : p && p.until > Date.now() && p.temperature != null ? p.temperature : (tg ? num(tg.state) : num(a.temperature)) ?? 21;
      let v = base != null ? base + delta : cur + delta * step;
      v = Math.min(hi, Math.max(lo, Math.round(v / step) * step));
      this._setPending(eid, { temperature: v });
      clearTimeout(this._sendTimers[eid]);
      this._sendTimers[eid] = setTimeout(() => (tgt
        ? this._call("input_number", "set_value", { entity_id: tgt, value: v })
        : this._call("climate", "set_temperature", { entity_id: eid, temperature: v })), 1100);
    });
  }
  _targetEntity(eid) { return this._config.rooms.find((r) => r.climate === eid)?.target_entity || null; }
  _sem(ids, svc, attrList, SEM, key, field) {
    ids.forEach((eid) => {
      const raw = this._hass.states[eid]?.attributes[attrList];
      const v = semFor(raw, SEM, key);
      if (v != null) this._call("climate", svc, { entity_id: eid, [field]: v });
    });
  }
  _startTimer(i, minutes, only) {
    const ids = only && only.length ? only : i === "all" ? this._config.rooms.map((r) => r.climate) : [this._config.rooms[i].climate];
    const anyOn = ids.some((eid) => { const s = this._hass.states[eid]; return s && s.state !== "off" && s.state !== "unavailable"; });
    const name = i === "all" ? "All rooms" : this._config.rooms[i].name;
    this._call("quick_timer", "run_action", {
      task_id: this._taskId(i), delay: minutes, unit: "minutes", task_label: `${name} ${anyOn ? "off" : "on"}`,
      // Quick Timer keys its bookkeeping on each action's target entity_id, so it must be a single string (a list raises "unhashable type: 'list'")
      finish_actions: ids.map((eid) => ({ service: anyOn ? "climate.turn_off" : "climate.turn_on", target: { entity_id: eid } })),
    });
  }
  /* ---------- schedules (Scheduler integration backend, own UI) ---------- */
  async _loadSched() {
    try { this._sched = await this._hass.callWS({ type: "scheduler" }); } catch (e) { this._sched = []; this._toast("Couldn't load schedules (is the Scheduler integration installed?)"); }
    this._render();
  }
  _schedScope() {
    const S = this._ssheet, rooms = this._config.rooms;
    if (S.scope !== "all") return [S.scope];
    return S.only && S.only.length ? S.only : rooms.map((_, j) => j);
  }
  _schedDefaults() {
    const S = this._ssheet, idx = this._schedScope(), r0 = this._room(idx[0]);
    const t = new Date(Date.now() + 60 * 60e3); let h = t.getHours(), m = Math.ceil(t.getMinutes() / 5) * 5; if (m === 60) { m = 0; h = (h + 1) % 24; }
    const mode = r0.on && ["heat", "cool", "dry", "fan_only", "heat_cool", "auto"].includes(r0.mode) ? r0.mode : (this._lastSeen || {})[r0.cfg.climate] || "heat";
    return { when: "once", day: "today", wd: new Set(["mon", "tue", "wed", "thu", "fri", "sat", "sun"]), h: (h % 12 || 12) - 1, m: m / 5, p: h >= 12 ? 1 : 0,
      act: "on", mode, temp: r0.target ?? 21, step: Math.max(...idx.map((j) => this._room(j).step || 1)), rooms: new Set(idx) };
  }
  _schedTime(f) { const h12 = f.h + 1, hh = (h12 % 12) + (f.p ? 12 : 0); return { hh, mm: f.m * 5, label: `${h12}:${String(f.m * 5).padStart(2, "0")} ${f.p ? "pm" : "am"}` }; }
  _updSched() {
    const el = this.shadowRoot.querySelector(".ssum"); const f = this._ssheet?.f; if (!el || !f) return;
    el.innerHTML = this._schedSummary(f);
  }
  _schedSummary(f) {
    const t = this._schedTime(f), DAYS = { mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat", sun: "Sun" };
    const what = f.act === "off" ? "Turn off" : `${MODES[f.mode]?.label || f.mode}${["heat", "cool", "heat_cool", "auto"].includes(f.mode) ? ` ${fmtT(f.temp, f.step)}°` : ""}`;
    const when = f.when === "once" ? (f.day === "today" ? "today" : "tomorrow") : f.wd.size === 7 ? "every day" : [...f.wd].map((k) => DAYS[k]).join(", ") || "no days picked";
    return `<b>${$esc(what)}</b> at <b>${t.label}</b> ${$esc(when)}`;
  }
  _saveSched() {
    const f = this._ssheet.f, rooms = this._config.rooms, t = this._schedTime(f);
    const idx = [...f.rooms]; if (!idx.length) { this._toast("Pick at least one room"); return; }
    const start = `${String(t.hh).padStart(2, "0")}:${String(t.mm).padStart(2, "0")}:00`;
    const ymd = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    const data = { timeslots: [{ start, actions: idx.flatMap((j) => {
      const eid = rooms[j].climate, tgt = rooms[j].target_entity;
      if (f.act === "off") return [{ service: "climate.turn_off", entity_id: eid }];
      if (["heat", "cool", "heat_cool", "auto"].includes(f.mode)) {
        return tgt ? [{ service: "input_number.set_value", entity_id: tgt, service_data: { value: f.temp } }, { service: "climate.set_hvac_mode", entity_id: eid, service_data: { hvac_mode: f.mode } }]
          : [{ service: "climate.set_temperature", entity_id: eid, service_data: { hvac_mode: f.mode, temperature: f.temp } }];
      }
      return [{ service: "climate.set_hvac_mode", entity_id: eid, service_data: { hvac_mode: f.mode } }];
    }) }] };
    if (f.when === "once") {
      const d = new Date(); if (f.day === "tomorrow") d.setDate(d.getDate() + 1);
      d.setHours(t.hh, t.mm, 0, 0);
      if (d.getTime() <= Date.now() + 30e3) { this._toast("That time has already passed today"); return; }
      Object.assign(data, { weekdays: ["daily"], start_date: ymd(d), end_date: ymd(d), repeat_type: "single" });
    } else {
      if (!f.wd.size) { this._toast("Pick at least one day"); return; }
      Object.assign(data, { weekdays: f.wd.size === 7 ? ["daily"] : ["mon", "tue", "wed", "thu", "fri", "sat", "sun"].filter((k) => f.wd.has(k)), repeat_type: "repeat" });
    }
    const who = idx.length === rooms.length ? "All rooms" : idx.map((j) => rooms[j].name).join(", ");
    data.name = `${who} · ${this._schedSummary(f).replace(/<[^>]+>/g, "")}`.slice(0, 120);
    this._call("scheduler", "add", data);
    this._ssheet.view = "list"; this._render(); setTimeout(() => this._loadSched(), 500);
  }
  _schedSheet() {
    const S = this._ssheet, rooms = this._config.rooms;
    const scopeIdx = this._schedScope(), scopeIds = new Set(scopeIdx.map((j) => rooms[j].climate));
    const who = S.scope === "all" ? (S.only ? `${scopeIdx.length} selected room${scopeIdx.length === 1 ? "" : "s"}` : "All rooms") : rooms[S.scope].name;
    const head = (sub, back) => `<header><div class="sh-title">${back ? `<button class="x sm" data-act="sback" aria-label="Back">${icon("mdi:arrow-left")}</button>` : icon("mdi:calendar-clock")}<div><h2>${back ? "New schedule" : "Schedules"}</h2><p>${$esc(sub)}</p></div></div>
      <button class="x" data-act="sclose" aria-label="Close">${icon("mdi:close")}</button></header>`;
    if (S.view === "list") {
      const items = (this._sched || []).filter((it) => it.timeslots?.some((ts) => ts.actions?.some((a) => scopeIds.has(a.entity_id))));
      const DAYS = { mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat", sun: "Sun" };
      const rowHtml = (it) => {
        const ts = it.timeslots[0] || {}, acts = ts.actions || [];
        const a = acts.find((x) => (x.entity_id || "").startsWith("climate.")) || acts[0] || {};
        const tval = a.service_data?.temperature ?? acts.find((x) => x.service === "input_number.set_value")?.service_data?.value;
        const [hh, mm] = (ts.start || "00:00").split(":").map(Number);
        const tl = `${hh % 12 || 12}:${String(mm).padStart(2, "0")} ${hh >= 12 ? "pm" : "am"}`;
        const md = a.service === "climate.turn_off" ? null : a.service_data?.hvac_mode;
        const what = !md ? "Turn off" : `${MODES[md]?.label || md}${tval != null ? ` ${tval}°` : ""}`;
        const once = it.repeat_type === "single";
        const day = once ? (() => { const d = new Date(`${it.start_date}T00:00:00`), t0 = new Date(); t0.setHours(0, 0, 0, 0); const diff = Math.round((d - t0) / 864e5); return diff === 0 ? "Today" : diff === 1 ? "Tomorrow" : d.toLocaleDateString([], { weekday: "short", day: "numeric", month: "short" }); })()
          : it.weekdays?.includes("daily") ? "Every day" : (it.weekdays || []).map((k) => DAYS[k] || k).join(", ");
        const names = [...new Set(it.timeslots.flatMap((x) => x.actions.map((y) => y.entity_id)).filter((e) => (e || "").startsWith("climate.")))].map((e) => rooms.find((r) => r.climate === e)?.name || e);
        const on = this._hass.states[it.entity_id]?.state === "on";
        const del = this._sdel === it.entity_id;
        return `<div class="srow ${on ? "" : "paused"}">
          <span class="sic ${md ? `m-${MODES[md]?.c || "auto"}` : "m-off"}">${icon(md ? MODES[md]?.icon || "mdi:power" : "mdi:power-off")}</span>
          <div class="stx"><b>${$esc(what)} · ${tl}</b><small>${once ? "Once · " : ""}${$esc(day)}${S.scope === "all" || names.length > 1 ? ` · ${$esc(names.join(", "))}` : ""}</small></div>
          <button class="tgl ${on ? "on" : ""}" data-act="stoggle" data-e="${$esc(it.entity_id)}" aria-label="${on ? "Pause" : "Resume"}"><i></i></button>
          <button class="sdel ${del ? "arm" : ""}" data-act="sdel" data-e="${$esc(it.entity_id)}">${icon("mdi:trash-can-outline")}${del ? "Delete" : ""}</button></div>`;
      };
      return `<div class="scrim top" data-act="sclose"></div><div class="sheet small tsheet ssheet">${head(who, false)}
        <div class="slist">${this._sched == null ? `<p class="sempty">Loading…</p>` : items.length ? items.map(rowHtml).join("") : `<p class="sempty">${icon("mdi:calendar-blank-outline")}No schedules yet</p>`}</div>
        <div class="sfoot"><button class="bigbtn on wide" data-act="sadd">${icon("mdi:plus")}Add schedule</button></div></div>`;
    }
    const f = S.f, idx = [...f.rooms].length ? [...f.rooms] : scopeIdx;
    const modes = MODE_ORDER.filter((m) => idx.some((j) => (this._room(j).a.hvac_modes || []).includes(m)))
      .filter((m, k, arr) => arr.findIndex((x) => MODES[x].label === MODES[m].label) === k);   // heat_cool and auto both read "Auto"
    const showT = f.act === "on" && ["heat", "cool", "heat_cool", "auto"].includes(f.mode);
    const seg = (act, opts, cur) => `<div class="seg">${opts.map(([k, l]) => `<button class="${cur === k ? "on" : ""}" data-act="${act}" data-k="${k}">${l}</button>`).join("")}</div>`;
    const col = (w, labels) => `<div class="wheel" data-store="s" data-w="${w}">${labels.map((l, k) => `<div class="wi" data-v="${k}">${l}</div>`).join("")}</div>`;
    return `<div class="scrim top" data-act="sclose"></div><div class="sheet small tsheet ssheet wide">${head(who, true)}
      ${S.scope === "all" ? `<div class="chips">${rooms.map((r, j) => `<button class="chip ${f.rooms.has(j) ? "on" : ""}" data-act="sroom" data-i="${j}">${icon(f.rooms.has(j) ? "mdi:checkbox-marked-circle" : "mdi:checkbox-blank-circle-outline")}${$esc(r.name)}</button>`).join("")}</div>` : ""}
      <div class="sform">
        <div class="scol">
          <h4>When</h4>${seg("swhen", [["once", "Once"], ["repeat", "Repeat"]], f.when)}
          ${f.when === "once" ? seg("sday", [["today", "Today"], ["tomorrow", "Tomorrow"]], f.day)
            : `<div class="wds">${["mon", "tue", "wed", "thu", "fri", "sat", "sun"].map((k) => `<button class="${f.wd.has(k) ? "on" : ""}" data-act="swd" data-k="${k}">${k[0].toUpperCase() + k.slice(1, 2)}</button>`).join("")}</div>`}
          <h4>Time</h4>
          <div class="wheels sm"><div class="band"></div>${col("h", Array.from({ length: 12 }, (_, k) => k + 1))}<span class="wl">:</span>${col("m", Array.from({ length: 12 }, (_, k) => String(k * 5).padStart(2, "0")))}${col("p", ["am", "pm"])}</div>
        </div>
        <div class="scol">
          <h4>Do</h4>${seg("sact", [["on", "Turn on"], ["off", "Turn off"]], f.act)}
          ${f.act === "on" ? `<div class="opts smodes">${modes.map((m) => `<button class="opt ${f.mode === m ? "on" : ""} m-${MODES[m].c}" data-act="smode" data-k="${m}">${icon(MODES[m].icon)}<span>${MODES[m].label}</span></button>`).join("")}</div>
            ${showT ? `<div class="stemp"><button class="round" data-act="stminus">${icon("mdi:minus")}</button><b>${fmtT(f.temp, f.step)}<i>°</i></b><button class="round" data-act="stplus">${icon("mdi:plus")}</button></div>` : ""}` : `<p class="note">${icon("mdi:power-off")}The air conditioning will be switched off.</p>`}
          <p class="ssum">${this._schedSummary(f)}</p>
          <button class="bigbtn on wide" data-act="ssave">${icon("mdi:content-save-outline")}Save schedule</button>
        </div>
      </div></div>`;
  }
  _cancelTimer(i) { this._call("quick_timer", "cancel_action", { task_id: this._taskId(i) }); }
  _toast(msg) {
    const t = this.shadowRoot.querySelector(".toast"); if (!t) return;
    t.textContent = msg; t.classList.add("show"); clearTimeout(this._tt); this._tt = setTimeout(() => t.classList.remove("show"), 4000);
  }

  /* ---------- render ---------- */
  _render() {
    if (!this._hass || !this.shadowRoot) return;
    const rooms = this._config.rooms.map((_, i) => this._room(i));
    const anim = this._animUntil > Date.now() ? " anim" : "";
    const html = `<style>${WP_PALETTE}${WP_CLIMATE_CSS}</style>
      <div class="wrap">${this._homeHtml(rooms)}<div class="rooms n${rooms.length}">${rooms.map((r) => this._roomHtml(r)).join("")}</div></div>
      ${this._modal ? this._modalHtml(rooms).replace(/class="(scrim|sheet)/g, `class="$1${this._tsheet || this._ssheet ? "" : anim}`) : ""}
      ${this._tsheet ? this._timerSheet(this._tsheet.i).replace(/class="(scrim|sheet)/g, `class="$1${anim}`) : ""}
      ${this._ssheet ? this._schedSheet().replace(/class="(scrim|sheet)/g, `class="$1${anim}`) : ""}<div class="toast"></div>`;
    if (html === this._lastHtml) return; // nothing visible changed: keep the DOM (no flicker)
    this._lastHtml = html;
    const scrollY = this.shadowRoot.querySelector(".sheet .right")?.scrollTop;
    this.shadowRoot.innerHTML = html;
    if (scrollY) { const el = this.shadowRoot.querySelector(".sheet .right"); if (el) el.scrollTop = scrollY; }
    this._bind();
    this._bindWheels();
  }
  _open(patch) { Object.assign(this, patch); this._animUntil = Date.now() + 450; this._render(); }
  _homeHtml(rooms) {
    const h = this._hass; const c = this._config;
    const temps = rooms.map((r) => r.cur).filter((v) => v != null);
    const hums = rooms.map((r) => r.hum).filter((v) => v != null);
    const avg = temps.length ? temps.reduce((s, v) => s + v, 0) / temps.length : null;
    const avgH = hums.length ? Math.round(hums.reduce((s, v) => s + v, 0) / hums.length) : null;
    const out = c.outdoor ? (c.outdoor.startsWith("weather.") ? num(h.states[c.outdoor]?.attributes.temperature) : num(h.states[c.outdoor]?.state)) : null;
    const onCount = rooms.filter((r) => r.on).length;
    const tmr = this._timer(this._taskId("all"));
    const modesOn = [...new Set(rooms.filter((r) => r.on).map((r) => r.mode))];
    const accent = modesOn.length === 1 ? MODES[modesOn[0]]?.c || "auto" : onCount ? "auto" : "off";
    return `<section class="home card m-${accent}">
      <div class="hhead"><div><h2>Whole Home</h2><p>${onCount ? `${onCount} of ${rooms.length} rooms on` : "All rooms off"}</p></div>
        ${onCount ? `<span class="pill m-${accent}">${modesOn.map((m) => MODES[m]?.label || m).join(" · ")}</span>` : ""}</div>
      <div class="big"><span class="bt">${fmt1(avg)}<i>°</i></span><span class="bl">average inside</span></div>
      <div class="stats">
        <div>${icon("mdi:water-percent")}<b>${avgH ?? "–"}%</b><small>humidity</small></div>
        <div>${icon("mdi:home-thermometer-outline")}<b>${out == null ? "–" : `${fmt1(out)}°`}</b><small>outside</small></div>
      </div>
      ${this._homeSetHtml(rooms)}
      <div class="allbtns">
        <button class="bigbtn on ${onCount === rooms.length ? "dim" : ""}" data-act="allon">${icon("mdi:power")}All on</button>
        <button class="bigbtn off ${onCount === 0 ? "dim" : ""}" data-act="alloff">${icon("mdi:power-off")}All off</button>
      </div>
      <button class="rowbtn" data-act="openall">${icon("mdi:tune-variant")}<span>Adjust all rooms<small>Mode, temperature, fan &amp; air direction</small></span>${icon("mdi:chevron-right", "chev")}</button>
      <div class="duo">
        <button class="rowbtn sm" data-act="opentimerall">${icon("mdi:timer-outline")}<span>${tmr ? `${tmr.off ? "Off" : "On"} in ${this._fmtLeft(tmr.left)}` : "Timer"}</span></button>
        <button class="rowbtn sm" data-act="schedules">${icon("mdi:calendar-clock")}<span>Schedules</span></button>
      </div>
    </section>`;
  }
  _homeSetHtml(rooms) {
    const on = rooms.filter((r) => r.on && ["heat", "cool", "heat_cool", "auto"].includes(r.mode));
    const ts = on.map((r) => r.target).filter((v) => v != null);
    const live = this._homeT && this._homeT.until > Date.now();
    const t = live ? this._homeT.v : ts.length ? Math.round((ts.reduce((s, v) => s + v, 0) / ts.length) * 2) / 2 : null;
    const mixed = !live && new Set(ts).size > 1;
    return `<div class="allset ${on.length ? "" : "dis"}">
      <button class="round" data-act="homeminus" ${on.length ? "" : "disabled"}>${icon("mdi:minus")}</button>
      <div class="asv"><b>${t == null ? "–" : `${fmtT(t, 0.5)}°`}</b><small>${on.length ? `${mixed ? "avg · " : ""}all ${on.length} room${on.length === 1 ? "" : "s"} on` : "no rooms on"}</small></div>
      <button class="round" data-act="homeplus" ${on.length ? "" : "disabled"}>${icon("mdi:plus")}</button>
    </div>`;
  }
  _fmtLeft(ms) { const m = Math.ceil(ms / 60000); return m >= 60 ? `${Math.floor(m / 60)}h ${String(m % 60).padStart(2, "0")}m` : `${m} min`; }
  _statusText(r) {
    if (r.unavailable) return "Unavailable";
    if (!r.on) return "Off";
    const m = MODES[r.mode]?.label || r.mode;
    if (r.mode === "fan_only") return "Fan only";
    if (r.mode === "dry") return "Drying";
    const act = r.action && ACTION[r.action] && r.action !== r.mode ? ACTION[r.action] : null;
    const verb = r.mode === "heat" ? "Heating to" : r.mode === "cool" ? "Cooling to" : `${m} ·`;
    return act === "Idle" ? `Holding ${fmtT(r.target, r.step)}°` : `${verb} ${fmtT(r.target, r.step)}°`;
  }
  _roomHtml(r) {
    const m = r.on ? MODES[r.mode]?.c || "auto" : "off";
    const tmr = this._timer(this._taskId(r.i));
    const canTemp = r.on && ["heat", "cool", "heat_cool", "auto"].includes(r.mode);
    const img = r.cfg.image;
    const style = img ? (r.cfg.image_style || this._config.image_style || "fade") : "";
    const bg = img ? `<div class="rbg" style="background-image:url('${$esc(img)}');background-position:${$esc(r.cfg.image_position || "center 35%")}"></div>` : "";
    const temp = `<div class="rtemp">${fmt1(r.cur)}<i>°</i></div>`;
    const meta = `<div class="rmeta"><span>${icon("mdi:water-percent")}${r.hum == null ? "–" : Math.round(r.hum)}%</span>
          ${tmr ? `<span class="tchip">${icon("mdi:timer-outline")}${tmr.off ? "Off" : "On"} in ${this._fmtLeft(tmr.left)}</span>` : ""}</div>`;
    const status = `<div class="status m-${m}">${r.on ? icon(MODES[r.mode]?.icon || "mdi:air-conditioner") : ""}<span>${this._statusText(r)}</span></div>`;
    const foot = `<div class="rfoot">
        ${canTemp ? `<button class="round" data-act="minus" data-i="${r.i}">${icon("mdi:minus")}</button>
          <div class="sp"><b>${fmtT(r.target, r.step)}°</b><small>set to</small></div>
          <button class="round" data-act="plus" data-i="${r.i}">${icon("mdi:plus")}</button>`
        : `<button class="more" data-act="openroom" data-i="${r.i}">${r.on ? "More controls" : "Tap the switch to turn on"}${icon("mdi:chevron-right")}</button>`}
      </div>`;
    const body = style === "glass"
      ? `<div class="gap" data-act="openroom" data-i="${r.i}"></div><div class="gl"><div class="rbody" data-act="openroom" data-i="${r.i}">${temp}<div class="gside">${status}${meta}</div></div>${foot}</div>`
      : `<div class="rbody" data-act="openroom" data-i="${r.i}">${temp}${meta}${status}</div>${foot}`;
    return `<section class="room card m-${m} ${r.on ? "is-on" : ""} ${r.unavailable ? "unav" : ""} ${img ? `photo ${style}` : ""}" data-room="${r.i}">
      ${bg}<div class="rhead">
        <div class="rname">${icon(r.cfg.icon || "mdi:air-conditioner", "ricon")}<h3>${$esc(r.cfg.name)}</h3></div>
        <button class="toggle ${r.on ? "on" : ""}" data-act="power" data-i="${r.i}" aria-label="Power"><span></span></button>
      </div>
      ${body}
    </section>`;
  }

  /* ---------- modal ---------- */
  _modalHtml(rooms) {
    const M = this._modal;
    const all = M.kind === "all";
    const sel = all ? rooms.filter((r) => M.sel.has(r.i) && !r.unavailable) : [rooms[M.idx]];
    const r0 = sel[0] || rooms[0];
    const ids = sel.map((r) => r.cfg.climate);
    // representative values
    const targets = sel.map((r) => r.target).filter((v) => v != null);
    const target = all ? (M.target ?? (targets.length ? Math.round((targets.reduce((s, v) => s + v, 0) / targets.length) * 2) / 2 : 21)) : r0.target;
    const anyOn = sel.some((r) => r.on);
    const mode = all ? (new Set(sel.filter((r) => r.on).map((r) => r.mode)).size === 1 ? sel.find((r) => r.on).mode : null) : r0.mode;
    const mc = anyOn && mode ? MODES[mode]?.c || "auto" : "off";
    const lo = Math.min(...sel.map((r) => r.min)), hi = Math.max(...sel.map((r) => r.max));
    const step = all ? Math.max(...sel.map((r) => r.step)) : r0.step;
    const showFanVane = all || r0.full;
    const union = (attr) => [...new Set(sel.flatMap((r) => r.a[attr] || []))];
    const modes = MODE_ORDER.filter((m) => union("hvac_modes").includes(m)).filter((m, k, arr) => arr.findIndex((x) => MODES[x].label === MODES[m].label) === k);
    const fans = semOptions(union("fan_modes"), FAN_SEM).filter((o) => !all || ["auto", "quiet", "low", "medium", "high", "max"].includes(o.key));
    const vanes = semOptions(union("swing_modes"), VANE_SEM);
    const hvanes = semOptions(union("swing_horizontal_modes"), HVANE_SEM);
    const curFan = !all ? semKeyOf(r0.fan, FAN_SEM) : null, curV = !all ? semKeyOf(r0.swing, VANE_SEM) : null, curH = !all ? semKeyOf(r0.hswing, HVANE_SEM) : null;
    const tmr = this._timer(this._taskId(all ? "all" : r0.i));
    const pct = Math.max(0, Math.min(1, ((target ?? lo) - lo) / (hi - lo || 1)));
    const R = 120, C = 2 * Math.PI * R, arc = 0.75; // 270° dial
    const preset = !all && r0.cfg.preset ? this._hass.states[r0.cfg.preset] : null;
    const extras = !all ? (r0.cfg.extras || []).map((e) => this._hass.states[e] ? [e, this._hass.states[e]] : null).filter(Boolean) : [];
    return `<div class="scrim" data-act="close"></div>
    <div class="sheet m-${mc}">
      <header>
        <div class="sh-title">${icon(all ? "mdi:home-thermometer" : r0.cfg.icon || "mdi:air-conditioner")}<div><h2>${all ? "All rooms" : $esc(r0.cfg.name)}</h2>
          <p>${all ? `Changes apply to ${sel.length} selected room${sel.length === 1 ? "" : "s"}` : `${fmt1(r0.cur)}° inside · ${r0.hum == null ? "–" : Math.round(r0.hum)}% humidity`}</p></div></div>
        <button class="x" data-act="close" aria-label="Close">${icon("mdi:close")}</button>
      </header>
      ${all ? `<div class="chips">${rooms.map((r) => `<button class="chip ${M.sel.has(r.i) ? "on" : ""} ${r.unavailable ? "unav" : ""}" data-act="sel" data-i="${r.i}">${icon(M.sel.has(r.i) ? "mdi:checkbox-marked-circle" : "mdi:checkbox-blank-circle-outline")}${$esc(r.cfg.name)}<small>${r.on ? MODES[r.mode]?.label : "Off"}</small></button>`).join("")}</div>` : ""}
      <div class="sbody">
        <div class="left">
          <div class="dial">
            <svg viewBox="0 0 300 300">
              <circle cx="150" cy="150" r="${R}" class="trk" stroke-dasharray="${C * arc} ${C}" transform="rotate(135 150 150)"/>
              <circle cx="150" cy="150" r="${R}" class="val" stroke-dasharray="${C * arc * pct} ${C}" transform="rotate(135 150 150)"/>
            </svg>
            <div class="dc">
              ${anyOn && mode !== "fan_only" && mode !== "dry" ? `<b>${fmtT(target, step)}<i>°</i></b><span>${all ? "set all to" : this._statusText(r0)}</span>` : `<b class="offt">${anyOn ? MODES[mode]?.label || "Mixed" : "Off"}</b><span>${anyOn ? "no set temperature" : "tap power to start"}</span>`}
            </div>
            <button class="round lg dm" data-act="${all ? "allminus" : "minus"}" data-i="${r0.i}" ${anyOn ? "" : "disabled"}>${icon("mdi:minus")}</button>
            <button class="round lg dp" data-act="${all ? "allplus" : "plus"}" data-i="${r0.i}" ${anyOn ? "" : "disabled"}>${icon("mdi:plus")}</button>
          </div>
          <button class="powerbtn ${anyOn ? "is-on" : ""}" data-act="${all ? (anyOn ? "selOff" : "selOn") : "power"}" data-i="${r0.i}">${icon("mdi:power")}${anyOn ? (all ? "Turn selected off" : "Turn off") : (all ? "Turn selected on" : "Turn on")}</button>
          <div class="timerline">${tmr
            ? `${icon("mdi:timer-sand")}<span><b>${tmr.off ? "Turns off" : "Turns on"} in ${this._fmtLeft(tmr.left)}</b></span><button class="link" data-act="tcancel" data-i="${all ? "all" : r0.i}">Cancel</button>`
            : `<button class="tbtn" data-act="topen" data-i="${all ? "all" : r0.i}">${icon("mdi:timer-outline")}Timer</button>`}
            <button class="tbtn" data-act="schedules" data-i="${all ? "all" : r0.i}">${icon("mdi:calendar-clock")}Schedules</button></div>
        </div>
        <div class="right">
          ${this._group("Mode", modes.map((m) => ({ key: m, label: MODES[m].label, icon: MODES[m].icon, on: anyOn && mode === m, cls: `m-${MODES[m].c}` })), all ? "allmode" : "mode")}
          ${showFanVane && fans.length ? this._group("Fan speed", fans.map((o) => ({ key: o.key, label: o.label, svg: this._fanSvg(o.key), on: curFan === o.key })), all ? "allfan" : "fan") : ""}
          ${showFanVane && vanes.length ? this._group("Air direction · up / down", vanes.map((o) => ({ key: o.key, label: o.label, svg: vaneSvg(o.key, false), on: curV === o.key })), all ? "allvane" : "vane") : ""}
          ${showFanVane && hvanes.length ? this._group("Air direction · left / right", hvanes.map((o) => ({ key: o.key, label: o.label, svg: vaneSvg(o.key, true), on: curH === o.key })), all ? "allhvane" : "hvane") : ""}
          ${preset ? this._group("Preset", (preset.attributes.options || []).map((o) => ({ key: o, label: PRESET_LABEL[o] || o, on: preset.state === o })), "preset") : ""}
          ${extras.length ? `<div class="grp"><h4>Comfort features</h4><div class="opts">${extras.map(([e, s]) => `<button class="opt sw ${s.state === "on" ? "on" : ""}" data-act="extra" data-e="${e}">${icon(s.state === "on" ? "mdi:toggle-switch" : "mdi:toggle-switch-off-outline")}<span>${$esc((s.attributes.friendly_name || e).replace(r0.cfg.strip_name || /^.*AC /, ""))}</span></button>`).join("")}</div></div>` : ""}
          ${!all && !r0.full ? `<p class="note">${icon("mdi:information-outline")}Fan and air-direction controls appear here once this room is converted to ProtoART.</p>` : ""}
        </div>
      </div>
    </div>`;
  }
  _fanSvg(key) {
    const lvl = { auto: 0, quiet: 1, low: 2, medlow: 2, medium: 3, medhigh: 4, high: 4, max: 5 }[key];
    if (key === "auto") return `<svg viewBox="0 0 32 32" class="vsvg"><text x="16" y="21" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">A</text><circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" stroke-width="2"/></svg>`;
    return `<svg viewBox="0 0 32 32" class="vsvg">${[0, 1, 2, 3, 4].map((b) => `<rect x="${3 + b * 5.6}" y="${24 - (b + 1) * 4}" width="4" height="${(b + 1) * 4 + 3}" rx="1.5" fill="currentColor" opacity="${b < lvl ? 1 : 0.22}"/>`).join("")}</svg>`;
  }
  _group(title, opts, act) {
    return `<div class="grp"><h4>${title}</h4><div class="opts">${opts.map((o) => `<button class="opt ${o.on ? "on" : ""} ${o.cls || ""}" data-act="${act}" data-k="${$esc(o.key)}">${o.icon ? icon(o.icon) : o.svg || ""}<span>${$esc(o.label)}</span></button>`).join("")}</div></div>`;
  }
  _timerSheet(i) {
    const tmr = this._timer(this._taskId(i));
    const only = this._tsheet?.only;
    const ids = only && only.length ? only : i === "all" ? this._config.rooms.map((r) => r.climate) : [this._config.rooms[i].climate];
    const anyOn = ids.some((eid) => { const s = this._hass.states[eid]; return s && !["off", "unavailable"].includes(s.state); });
    const who = i === "all" ? (only ? `${ids.length} selected room${ids.length === 1 ? "" : "s"}` : "All rooms") : this._config.rooms[i].name;
    const col = (w, n) => `<div class="wheel" data-w="${w}">${Array.from({ length: n }, (_, k) => `<div class="wi" data-v="${k}">${w === "h" ? String(k).padStart(2, "0") : k}</div>`).join("")}</div>`;
    const endAt = tmr ? new Date(Date.now() + tmr.left).toLocaleTimeString("en-AU", { hour: "numeric", minute: "2-digit", hour12: true }) : "";
    return `<div class="scrim top" data-act="tclose"></div><div class="sheet small tsheet">
      <header><div class="sh-title">${icon("mdi:timer-outline")}<div><h2>Timer</h2><p>${$esc(who)}</p></div></div>
      <button class="x" data-act="tclose">${icon("mdi:close")}</button></header>
      ${tmr ? `<div class="tleft"><b>${this._fmtLeft(tmr.left)}</b><span>${tmr.off ? "Turns off" : "Turns on"} at ${endAt}</span></div>
        <button class="bigbtn off wide" data-act="tcancel" data-i="${i}">${icon("mdi:timer-off-outline")}Cancel timer</button>`
      : `<p class="tq">Turn ${i === "all" ? "the rooms" : "the AC"} ${anyOn ? "off" : "on"} in</p>
        <div class="wheels"><div class="band"></div>${col("h", 24)}<span class="wl">hour</span>${col("m", 60)}<span class="wl">min.</span></div>
        <button class="bigbtn on wide" data-act="tstart" data-i="${i}">${icon("mdi:timer-play-outline")}Start timer</button>`}
    </div>`;
  }
  _bindWheels() {
    const IH = 56;
    this._wheel ||= { h: 1, m: 0 };
    this.shadowRoot.querySelectorAll(".wheel").forEach((w) => {
      const store = w.dataset.store === "s" ? this._ssheet?.f : this._wheel; if (!store) return;
      const key = w.dataset.w; const max = w.querySelectorAll(".wi").length - 1;
      const mark = (v) => w.querySelectorAll(".wi").forEach((it) => it.classList.toggle("sel", +it.dataset.v === v));
      w.scrollTop = (store[key] || 0) * IH; mark(store[key] || 0);
      let t;
      w.addEventListener("scroll", () => {
        const v = Math.max(0, Math.min(max, Math.round(w.scrollTop / IH)));
        mark(v); clearTimeout(t); t = setTimeout(() => { store[key] = v; this._updStart(); this._updSched(); }, 90);
      }, { passive: true });
      w.querySelectorAll(".wi").forEach((it) => it.addEventListener("click", () => w.scrollTo({ top: +it.dataset.v * IH, behavior: "smooth" })));
    });
    this._updStart();
  }
  _updStart() { const b = this.shadowRoot.querySelector('[data-act="tstart"]'); if (b) b.disabled = !(this._wheel.h * 60 + this._wheel.m); }

  _bind() {
    this.shadowRoot.querySelectorAll("[data-act]").forEach((el) => el.addEventListener("click", (ev) => {
      ev.stopPropagation();
      const d = el.dataset; const i = d.i === "all" ? "all" : d.i != null ? +d.i : null; const k = d.k;
      const M = this._modal; const rooms = this._config.rooms;
      const selIds = M && M.kind === "all" ? [...M.sel].map((j) => rooms[j].climate) : M && M.kind === "room" ? [rooms[M.idx].climate] : i != null && i !== "all" ? [rooms[i].climate] : [];
      switch (d.act) {
        case "power": { const r = this._room(i); this._power(i, !r.on); break; }
        case "openroom": this._open({ _modal: { kind: "room", idx: i } }); break;
        case "openall": { const on = rooms.map((_, j) => j).filter((j) => this._room(j).on); this._open({ _modal: { kind: "all", sel: new Set(on.length ? on : rooms.map((_, j) => j)) } }); break; }
        case "opentimerall": this._wheel = { h: 1, m: 0 }; this._open({ _tsheet: { i: "all", only: null } }); break;
        case "topen": this._wheel = { h: 1, m: 0 }; this._open({ _tsheet: { i, only: M?.kind === "all" ? selIds : null } }); break;
        case "tclose": this._tsheet = null; this._render(); break;
        case "tstart": { const mins = this._wheel.h * 60 + this._wheel.m; if (!mins) break; this._startTimer(i, mins, this._tsheet?.only); this._tsheet = null; this._render(); setTimeout(() => this._render(), 600); break; }
        case "close": this._modal = null; this._render(); break;
        case "sel": M.sel.has(i) ? M.sel.delete(i) : M.sel.add(i); this._render(); break;
        case "allon": rooms.forEach((_, j) => !this._room(j).on && this._power(j, true)); break;
        case "alloff": rooms.forEach((_, j) => this._room(j).on && this._power(j, false)); break;
        case "selOn": [...M.sel].forEach((j) => this._power(j, true)); break;
        case "selOff": [...M.sel].forEach((j) => this._power(j, false)); break;
        case "homeminus": case "homeplus": {
          const on = rooms.map((_, j) => this._room(j)).filter((r) => r.on && ["heat", "cool", "heat_cool", "auto"].includes(r.mode));
          const step = Math.max(...on.map((r) => r.step));
          const ts = on.map((r) => r.target).filter((v) => v != null);
          const base = this._homeT && this._homeT.until > Date.now() ? this._homeT.v : ts.length ? Math.round((ts.reduce((s, v) => s + v, 0) / ts.length) / step) * step : 21;
          const v = Math.min(30, Math.max(16, base + (d.act === "homeplus" ? step : -step)));
          this._homeT = { v, until: Date.now() + 6000 };
          this._nudge(on.map((r) => r.cfg.climate), 0, v); break;
        }
        case "minus": this._nudge([rooms[i].climate], -1); break;
        case "plus": this._nudge([rooms[i].climate], +1); break;
        case "allminus": case "allplus": {
          const sel = [...M.sel].map((j) => this._room(j));
          const ts = sel.map((r) => r.target).filter((v) => v != null);
          const base = M.target ?? (ts.length ? Math.round((ts.reduce((s, v) => s + v, 0) / ts.length) * 2) / 2 : 21);
          const st = Math.max(...sel.map((r) => r.step));
          M.target = Math.min(30, Math.max(16, Math.round(base / st) * st + (d.act === "allplus" ? st : -st)));
          this._nudge(selIds, 0, M.target); break;
        }
        case "mode": case "allmode": this._mode(selIds, k); break;
        case "fan": case "allfan": this._sem(selIds, "set_fan_mode", "fan_modes", FAN_SEM, k, "fan_mode"); break;
        case "vane": case "allvane": this._sem(selIds, "set_swing_mode", "swing_modes", VANE_SEM, k, "swing_mode"); break;
        case "hvane": case "allhvane": this._sem(selIds, "set_swing_horizontal_mode", "swing_horizontal_modes", HVANE_SEM, k, "swing_horizontal_mode"); break;
        case "preset": this._call("select", "select_option", { entity_id: rooms[M.idx].preset, option: k }); break;
        case "extra": this._call("switch", "toggle", { entity_id: d.e }); break;
        case "tcancel": this._cancelTimer(i); this._tsheet = null; this._render(); setTimeout(() => this._render(), 600); break;
        case "schedules": {
          const scope = i == null ? "all" : i;
          const only = scope === "all" && M?.kind === "all" ? [...M.sel] : null;
          this._ssheet = { scope, only, view: "list" }; this._sdel = null; this._open({}); this._loadSched(); break;
        }
        case "sclose": this._ssheet = null; this._render(); break;
        case "sadd": this._ssheet.view = "form"; this._ssheet.f = this._schedDefaults(); this._render(); break;
        case "sback": this._ssheet.view = "list"; this._render(); break;
        case "swhen": this._ssheet.f.when = k; this._render(); break;
        case "sday": this._ssheet.f.day = k; this._render(); break;
        case "swd": { const w = this._ssheet.f.wd; w.has(k) ? w.delete(k) : w.add(k); this._render(); break; }
        case "sact": this._ssheet.f.act = k; this._render(); break;
        case "smode": this._ssheet.f.mode = k; this._render(); break;
        case "stminus": case "stplus": { const f = this._ssheet.f; f.temp = Math.max(16, Math.min(30, f.temp + (d.act === "stplus" ? 1 : -1) * f.step)); this._render(); break; }
        case "sroom": { const r = this._ssheet.f.rooms; r.has(i) ? r.delete(i) : r.add(i); this._render(); break; }
        case "ssave": this._saveSched(); break;
        case "stoggle": this._call("switch", this._hass.states[d.e]?.state === "on" ? "turn_off" : "turn_on", { entity_id: d.e }); break;
        case "sdel": if (this._sdel === d.e) { this._call("scheduler", "remove", { entity_id: d.e }); this._sdel = null; setTimeout(() => this._loadSched(), 500); } else { this._sdel = d.e; this._render(); } break;
      }
    }));
  }
}
const WP_CLIMATE_CSS = `
  :host { display:block; height: 100%; }
  * { box-sizing: border-box; }
  button { font: inherit; color: inherit; }
  ha-icon { --mdc-icon-size: 24px; }
  .card { background: var(--wp-card); border: 1px solid var(--wp-border); border-radius: var(--wp-radius); box-shadow: var(--wp-shadow); }
  .wrap { display:grid; grid-template-columns: minmax(330px, 0.85fr) 2fr; gap: var(--wp-gap); height: 100%; min-height: calc(100vh - 140px); }
  /* mode colour plumbing */
  .m-heat { --mc: var(--wp-heat); } .m-cool { --mc: var(--wp-cool); } .m-dry { --mc: var(--wp-dry); } .m-fan { --mc: var(--wp-fan); } .m-auto { --mc: var(--wp-auto); } .m-off { --mc: var(--wp-faint); }
  /* whole home */
  .home { padding: 24px; display:flex; flex-direction:column; gap: 18px; position:relative; overflow:hidden; }
  .home::before { content:""; position:absolute; right:-35%; top:-35%; width: 90%; aspect-ratio: 1; background: radial-gradient(closest-side, color-mix(in srgb, var(--mc) 26%, transparent), transparent); pointer-events:none; }
  .hhead { display:flex; justify-content:space-between; align-items:flex-start; gap: 8px; }
  h2 { margin:0; font-size: 26px; font-weight: 700; letter-spacing: -.2px; }
  .hhead p { margin: 4px 0 0; color: var(--wp-muted); font-size: 17px; }
  .pill { padding: 6px 12px; border-radius: 999px; font-size: 15px; font-weight: 700; color: var(--mc); background: color-mix(in srgb, var(--mc) 16%, transparent); border: 1px solid color-mix(in srgb, var(--mc) 40%, transparent); }
  .big { display:flex; flex-direction:column; }
  .bt { font-size: 84px; font-weight: 300; line-height: 1; letter-spacing: -3px; } .bt i { font-style: normal; font-size: 48px; vertical-align: top; color: var(--wp-muted); }
  .bl { color: var(--wp-muted); font-size: 17px; margin-top: 4px; }
  .stats { display:grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
  .stats > div { background: var(--wp-card-2); border: 1px solid var(--wp-border); border-radius: 16px; padding: 12px; display:flex; flex-direction:column; gap: 2px; }
  .stats ha-icon { color: var(--wp-muted); --mdc-icon-size: 20px; }
  .stats b { font-size: 21px; } .stats small { color: var(--wp-muted); font-size: 14px; }
  .allset { display:flex; align-items:center; justify-content:space-between; gap: 10px; padding: 12px; border-radius: 20px; background: var(--wp-card-2); border: 1px solid var(--wp-border); }
  .allset.dis { opacity: .5; } .asv { text-align:center; } .asv b { display:block; font-size: 38px; font-weight: 700; line-height:1.1; } .asv small { color: var(--wp-muted); font-size: 15px; }
  .allbtns { display:grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: auto; }
  .bigbtn { border: 0; cursor:pointer; height: 76px; border-radius: 20px; font-size: 22px; font-weight: 700; display:flex; align-items:center; justify-content:center; gap: 10px; transition: transform .1s, opacity .2s; }
  .bigbtn ha-icon { --mdc-icon-size: 28px; }
  .bigbtn.on { background: var(--wp-accent); color: #fff; box-shadow: var(--wp-glow); }
  .bigbtn.off { background: var(--wp-card-hi); color: var(--wp-text); border: 1px solid var(--wp-border); }
  .bigbtn.dim { opacity: .45; } .bigbtn:active { transform: scale(.97); } .bigbtn.wide { width: 100%; margin-top: 18px; }
  .rowbtn { all: unset; box-sizing:border-box; cursor:pointer; display:flex; align-items:center; gap: 14px; padding: 16px 18px; background: var(--wp-card-2); border: 1px solid var(--wp-border); border-radius: 18px; font-size: 19px; font-weight: 600; }
  .rowbtn span { flex:1; display:flex; flex-direction:column; } .rowbtn small { color: var(--wp-muted); font-size: 14px; font-weight: 500; margin-top: 2px; }
  .rowbtn .chev { color: var(--wp-muted); } .rowbtn:active { background: var(--wp-card-hi); }
  .rowbtn.sm { padding: 14px 16px; font-size: 17px; }
  .duo { display:grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  /* rooms */
  .rooms { display:grid; gap: var(--wp-gap); grid-template-columns: 1fr 1fr; grid-auto-rows: 1fr; }
  .room { padding: 20px 22px; display:flex; flex-direction:column; gap: 8px; position: relative; overflow:hidden; transition: border-color .3s; }
  .room.is-on { border-color: color-mix(in srgb, var(--mc) 55%, var(--wp-border)); }
  .room.is-on::after { content:""; position:absolute; left:0; right:0; top:0; height: 4px; background: var(--mc); opacity:.9; }
  .room.unav { opacity: .55; }
  /* photo background (rooms[].image). The wash colour is the card colour of the current theme (navy in dark, white in light),
     so the tile blends into the tab and text keeps the theme's own colours. image_style: fade (default) | glass */
  :host([dark]) { --tint: 16, 27, 52; } :host(:not([dark])) { --tint: 255, 255, 255; }
  .room.photo { background: rgb(var(--tint)); }
  .room.photo > :not(.rbg) { position: relative; z-index: 1; }
  .room.is-on::after { z-index: 2; }
  .rbg { position:absolute; inset:0; z-index:0; background-size: cover; background-repeat: no-repeat; transition: filter .5s, opacity .5s; }
  .rbg::after { content:""; position:absolute; inset:0; }
  .room.photo:not(.is-on) .rbg { filter: saturate(.35); opacity: .8; }
  .room.photo .toggle:not(.on) { background: color-mix(in srgb, var(--wp-faint) 50%, rgb(var(--tint))); }
  .room.photo .round { background: rgba(var(--tint), .72); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); }
  .room.photo .status { align-self: flex-start; padding: 5px 13px 5px 9px; border-radius: 999px; font-size: 18px;
    background: color-mix(in srgb, var(--mc) 16%, rgba(var(--tint), .85)); border: 1px solid color-mix(in srgb, var(--mc) 45%, transparent); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); }
  .room.photo .status.m-off { background: rgba(var(--tint), .8); border-color: var(--wp-border); }
  /* fade: photo shows top-right and melts into the card colour toward the text (left) and the controls (bottom) */
  .room.fade .rbg::after { background:
      linear-gradient(90deg, rgba(var(--tint),.96) 0%, rgba(var(--tint),.82) 28%, rgba(var(--tint),.30) 60%, rgba(var(--tint),0) 85%),
      linear-gradient(0deg, rgba(var(--tint),.97) 0%, rgba(var(--tint),.70) 26%, rgba(var(--tint),0) 55%),
      linear-gradient(180deg, rgba(var(--tint),.60) 0%, rgba(var(--tint),0) 28%); }
  .room.fade h3, .room.fade .rtemp, .room.fade .rmeta, .room.fade .sp { text-shadow: 0 0 12px rgba(var(--tint), .95), 0 0 3px rgba(var(--tint), .8); }
  /* glass: full photo, name and controls on frosted card-coloured glass */
  .room.glass { padding: 14px; }
  .room.glass .rbg::after { background: linear-gradient(180deg, rgba(var(--tint),.25) 0%, rgba(var(--tint),0) 35%); }
  .room.glass .rname { padding: 6px 16px 6px 10px; border-radius: 999px; }
  .room.glass .rname, .room.glass .gl { background: rgba(var(--tint), .68); border: 1px solid rgba(var(--tint), .5); backdrop-filter: blur(16px) saturate(1.4); -webkit-backdrop-filter: blur(16px) saturate(1.4); box-shadow: 0 6px 20px rgba(0,0,0,.15); }
  .room.glass h3 { font-size: 21px; }
  .room.glass .gap { flex: 1; cursor: pointer; }
  .room.glass .gl { border-radius: 20px; padding: 12px 14px; display:flex; flex-direction:column; gap: 8px; }
  .room.glass .rbody { flex: none; flex-direction: row; align-items: center; justify-content: space-between; gap: 10px; }
  .room.glass .rtemp { font-size: 52px; }
  .room.glass .gside { display:flex; flex-direction:column; align-items:flex-end; gap: 6px; }
  .room.glass .status { align-self: auto; font-size: 16px; }
  .room.glass .rmeta { font-size: 16px; }
  .room.glass .rfoot { min-height: 56px; } .room.glass .round { width: 56px; height: 56px; background: rgba(var(--tint), .6); }
  .room.glass .more { padding: 10px 0; }
  .rhead { display:flex; align-items:center; justify-content:space-between; gap: 10px; }
  .rname { display:flex; align-items:center; gap: 12px; min-width:0; }
  .ricon { --mdc-icon-size: 30px; color: var(--mc); }
  h3 { margin: 0; font-size: 24px; font-weight: 700; white-space: nowrap; overflow:hidden; text-overflow: ellipsis; }
  .toggle { flex: none; position:relative; width: 76px; height: 44px; border-radius: 999px; border: 0; cursor:pointer; background: var(--wp-track); transition: background .25s; }
  .toggle span { position:absolute; top: 4px; left: 4px; width: 36px; height: 36px; border-radius: 50%; background: #fff; box-shadow: 0 2px 6px rgba(0,0,0,.3); transition: transform .25s; }
  .toggle.on { background: var(--mc); } .toggle.on span { transform: translateX(32px); }
  .rbody { flex:1; cursor:pointer; display:flex; flex-direction:column; justify-content:center; gap: 6px; }
  .rtemp { font-size: 64px; font-weight: 300; line-height: 1; letter-spacing: -2px; } .rtemp i { font-style: normal; font-size: 36px; vertical-align: top; color: var(--wp-muted); }
  .rmeta { display:flex; gap: 14px; align-items:center; color: var(--wp-muted); font-size: 18px; }
  .rmeta span { display:flex; align-items:center; gap: 4px; } .rmeta ha-icon { --mdc-icon-size: 20px; }
  .tchip { color: var(--wp-warn) !important; font-weight: 600; }
  .status { display:flex; align-items:center; gap: 8px; font-size: 19px; font-weight: 600; color: var(--mc); }
  .status.m-off { color: var(--wp-muted); }
  .rfoot { display:flex; align-items:center; justify-content: space-between; gap: 10px; min-height: 62px; }
  .round { width: 62px; height: 62px; flex:none; border-radius: 50%; border: 1px solid var(--wp-border); background: var(--wp-card-2); cursor:pointer; display:grid; place-items:center; box-shadow: var(--wp-shadow); transition: transform .1s; }
  .round ha-icon { --mdc-icon-size: 30px; } .round:active { transform: scale(.92); background: var(--wp-card-hi); } .round[disabled] { opacity: .35; }
  .sp { text-align:center; } .sp b { display:block; font-size: 34px; font-weight: 700; } .sp small { color: var(--wp-muted); font-size: 14px; }
  .more { all: unset; cursor:pointer; color: var(--wp-muted); font-size: 17px; display:flex; align-items:center; gap: 4px; padding: 14px 0; }
  /* modal */
  .scrim { position: fixed; inset: 0; background: rgba(3, 8, 20, .55); backdrop-filter: blur(6px); z-index: 20; } .scrim.anim { animation: fade .2s; } .scrim.top { z-index: 30; }
  .sheet { position: fixed; z-index: 21; inset: 3vh 3vw; background: var(--wp-card); border: 1px solid var(--wp-border); border-radius: 28px; box-shadow: 0 30px 80px rgba(0,0,0,.45); display:flex; flex-direction:column; overflow:hidden; } .sheet.anim { animation: pop .22s cubic-bezier(.2,.9,.3,1.2); }
  :host(:not([dark])) .sheet { background: #fff; }
  .sheet.small { inset: auto; left: 50%; top: 50%; transform: translate(-50%, -50%); width: min(720px, 90vw); padding-bottom: 24px; } .sheet.small.anim { animation: fade .2s; } .sheet.tsheet { z-index: 31; width: min(560px, 90vw); }
  @keyframes pop { from { transform: scale(.96); opacity: 0; } } @keyframes fade { from { opacity: 0; } }
  header { display:flex; justify-content:space-between; align-items:center; padding: 20px 24px; border-bottom: 1px solid var(--wp-border); }
  .sh-title { display:flex; align-items:center; gap: 14px; } .sh-title > ha-icon { --mdc-icon-size: 34px; color: var(--mc, var(--wp-accent)); }
  .sh-title p { margin: 2px 0 0; color: var(--wp-muted); font-size: 17px; }
  .x { width: 60px; height: 60px; border-radius: 50%; border: 1px solid var(--wp-border); background: var(--wp-card-2); cursor:pointer; display:grid; place-items:center; }
  .x ha-icon { --mdc-icon-size: 30px; }
  .chips { display:flex; gap: 10px; padding: 14px 24px 0; flex-wrap: wrap; }
  .chip { cursor:pointer; display:flex; align-items:center; gap: 8px; padding: 10px 16px; border-radius: 999px; border: 1px solid var(--wp-border); background: var(--wp-card-2); font-size: 17px; font-weight: 600; }
  .chip small { color: var(--wp-muted); font-weight: 500; } .chip.on { border-color: var(--wp-accent); background: color-mix(in srgb, var(--wp-accent) 18%, var(--wp-card-2)); } .chip.on ha-icon { color: var(--wp-accent); } .chip.unav { opacity:.4; pointer-events:none; }
  .sbody { flex:1; min-height: 0; display:grid; grid-template-columns: minmax(380px, 0.9fr) 1.4fr; }
  .left { padding: 18px 24px 24px; display:flex; flex-direction:column; align-items:center; justify-content:center; gap: 18px; border-right: 1px solid var(--wp-border); }
  .dial { position:relative; width: min(340px, 42vh); aspect-ratio: 1; }
  .dial svg { width:100%; height:100%; }
  .dial circle { fill:none; stroke-width: 18; stroke-linecap: round; } .trk { stroke: var(--wp-track); } .val { stroke: var(--mc); transition: stroke-dasharray .3s; filter: drop-shadow(0 0 8px color-mix(in srgb, var(--mc) 55%, transparent)); }
  .dc { position:absolute; inset: 0; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; }
  .dc b { font-size: 76px; font-weight: 600; line-height: 1; letter-spacing: -2px; } .dc b i { font-style:normal; font-size: 40px; vertical-align: top; color: var(--wp-muted); } .dc b.offt { font-size: 44px; letter-spacing: 0; }
  .dc span { color: var(--mc); font-size: 18px; font-weight: 600; margin-top: 6px; max-width: 190px; }
  .round.lg { position:absolute; bottom: 2%; width: 72px; height: 72px; } .dm { left: -4%; } .dp { right: -4%; }
  .powerbtn { border: 1px solid var(--wp-border); cursor:pointer; width: 100%; max-width: 380px; height: 68px; border-radius: 20px; font-size: 21px; font-weight: 700; display:flex; align-items:center; justify-content:center; gap: 10px; background: var(--wp-accent); color: #fff; box-shadow: var(--wp-glow); }
  .powerbtn.is-on { background: var(--wp-card-2); color: var(--wp-bad); box-shadow: none; } .powerbtn ha-icon { --mdc-icon-size: 28px; }
  .timerline { display:flex; align-items:center; gap: 10px; flex-wrap: wrap; justify-content:center; color: var(--wp-muted); font-size: 17px; }
  .timerline b { color: var(--wp-warn); } .tbtn { cursor:pointer; display:flex; align-items:center; gap: 8px; border: 1px solid var(--wp-border); background: var(--wp-card-2); border-radius: 14px; padding: 12px 20px; font-size: 18px; font-weight: 700; }
  .tq { text-align:center; color: var(--wp-muted); font-size: 22px; margin: 22px 0 6px; }
  .wheels { position: relative; display:flex; justify-content:center; align-items:center; gap: 6px; height: 280px; margin: 0 24px; }
  .wheels .band { position:absolute; left: 0; right: 0; top: 112px; height: 56px; border-radius: 14px; background: var(--wp-card-hi); }
  .wheel { position: relative; width: 96px; height: 280px; overflow-y: auto; scroll-snap-type: y mandatory; scrollbar-width: none; padding: 112px 0; box-sizing: border-box; -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent); mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent); }
  .wheel::-webkit-scrollbar { display: none; }
  .wi { height: 56px; line-height: 56px; text-align: center; font-size: 26px; color: var(--wp-muted); scroll-snap-align: center; cursor: pointer; font-variant-numeric: tabular-nums; }
  .wi.sel { color: var(--wp-text); font-size: 34px; font-weight: 700; }
  .wheels.sm { height: 168px; margin: 0; } .wheels.sm .band { top: 56px; } .wheels.sm .wheel { height: 168px; padding: 56px 0; width: 80px; }
  .wheels.sm .wl { font-size: 28px; font-weight: 700; color: var(--wp-muted); }
  .sheet.ssheet { width: min(640px, 92vw); max-height: 90vh; padding-bottom: 0; } .sheet.ssheet.wide { width: min(940px, 95vw); }
  .x.sm { width: 48px; height: 48px; } .x.sm ha-icon { --mdc-icon-size: 24px; }
  .slist { overflow-y: auto; padding: 8px 20px; min-height: 120px; }
  .srow { display:flex; align-items:center; gap: 14px; padding: 12px 4px; border-bottom: 1px solid var(--wp-border); } .srow:last-child { border-bottom: 0; } .srow.paused .stx, .srow.paused .sic { opacity: .45; }
  .sic { width: 50px; height: 50px; flex: none; border-radius: 14px; display:grid; place-items:center; background: color-mix(in srgb, var(--mc) 18%, var(--wp-card-2)); } .sic ha-icon { --mdc-icon-size: 28px; color: var(--mc); }
  .stx { flex: 1; min-width: 0; } .stx b { display:block; font-size: 20px; } .stx small { display:block; color: var(--wp-muted); font-size: 16px; margin-top: 2px; }
  .tgl { all: unset; cursor: pointer; flex: none; width: 58px; height: 34px; border-radius: 999px; background: var(--wp-track); position: relative; transition: background .2s; }
  .tgl i { position:absolute; top: 4px; left: 4px; width: 26px; height: 26px; border-radius: 50%; background: #fff; box-shadow: 0 2px 6px rgba(0,0,0,.3); transition: left .2s; } .tgl.on { background: var(--wp-ok); } .tgl.on i { left: 28px; }
  .sdel { all: unset; cursor: pointer; flex: none; display:flex; align-items:center; gap: 6px; height: 46px; min-width: 46px; justify-content: center; padding: 0 6px; border-radius: 14px; color: var(--wp-muted); font-weight: 700; font-size: 16px; }
  .sdel ha-icon { --mdc-icon-size: 26px; } .sdel.arm { background: var(--wp-bad); color: #fff; padding: 0 14px; }
  .sempty { display:flex; flex-direction:column; align-items:center; gap: 8px; color: var(--wp-muted); font-size: 19px; padding: 30px 0; margin: 0; } .sempty ha-icon { --mdc-icon-size: 40px; opacity: .6; }
  .sfoot { padding: 0 20px 20px; } .sfoot .bigbtn.wide { margin-top: 8px; height: 66px; }
  .ssheet .chips { padding: 14px 24px 0; }
  .sform { display:grid; grid-template-columns: 1fr 1fr; gap: 26px; padding: 14px 24px 22px; overflow-y: auto; }
  .scol { display:flex; flex-direction:column; gap: 12px; min-width: 0; } .scol h4 { margin: 4px 0 0; font-size: 15px; text-transform: uppercase; letter-spacing: .8px; color: var(--wp-muted); }
  .seg { display:flex; gap: 6px; padding: 5px; border-radius: 18px; background: var(--wp-card-2); border: 1px solid var(--wp-border); }
  .seg button { all: unset; cursor: pointer; flex: 1; text-align: center; padding: 14px 8px; border-radius: 14px; font-size: 19px; font-weight: 700; color: var(--wp-muted); }
  .seg button.on { background: var(--wp-accent); color: #fff; box-shadow: var(--wp-glow); }
  .wds { display:grid; grid-template-columns: repeat(7, 1fr); gap: 6px; }
  .wds button { all: unset; cursor: pointer; text-align: center; padding: 14px 0; border-radius: 14px; border: 1px solid var(--wp-border); background: var(--wp-card-2); font-weight: 700; font-size: 17px; color: var(--wp-muted); }
  .wds button.on { border-color: var(--wp-accent); color: var(--wp-text); background: color-mix(in srgb, var(--wp-accent) 22%, var(--wp-card-2)); }
  .smodes { grid-template-columns: repeat(auto-fit, minmax(78px, 1fr)); } .smodes .opt { min-height: 74px; }
  .stemp { display:flex; align-items:center; justify-content:center; gap: 26px; } .stemp b { font-size: 52px; font-weight: 700; min-width: 110px; text-align: center; } .stemp b i { font-style: normal; font-size: 26px; color: var(--wp-muted); }
  .ssum { margin: 2px 0 0; font-size: 18px; color: var(--wp-muted); } .ssum b { color: var(--wp-text); }
  .scol .bigbtn.wide { margin-top: auto; height: 68px; }
  .wl { position: relative; font-size: 18px; font-weight: 600; width: 52px; }
  .tleft { text-align:center; padding: 26px 24px 4px; } .tleft b { display:block; font-size: 56px; color: var(--wp-warn); } .tleft span { color: var(--wp-muted); font-size: 18px; }
  .bigbtn[disabled] { opacity: .4; }
  .link { all: unset; cursor:pointer; color: var(--wp-accent); font-weight: 700; padding: 8px 10px; }
  .right { padding: 20px 24px 24px; overflow-y: auto; display:flex; flex-direction:column; gap: 20px; }
  .grp h4 { margin: 0 0 10px; font-size: 15px; text-transform: uppercase; letter-spacing: .8px; color: var(--wp-muted); font-weight: 700; }
  .opts { display:grid; grid-template-columns: repeat(auto-fit, minmax(86px, 1fr)); gap: 10px; }
  .opt { cursor:pointer; border: 1px solid var(--wp-border); background: var(--wp-card-2); border-radius: 16px; min-height: 84px; padding: 10px 6px; display:flex; flex-direction:column; align-items:center; justify-content:center; gap: 6px; font-size: 16px; font-weight: 600; color: var(--wp-muted); transition: background .15s, border-color .15s, color .15s; }
  .opt ha-icon { --mdc-icon-size: 30px; } .opt .vsvg { width: 32px; height: 32px; }
  .opt.on { color: var(--wp-text); border-color: var(--oc, var(--wp-accent)); background: color-mix(in srgb, var(--oc, var(--wp-accent)) 20%, var(--wp-card-2)); box-shadow: 0 0 0 1px var(--oc, var(--wp-accent)) inset; }
  .opt.on ha-icon, .opt.on .vsvg { color: var(--oc, var(--wp-accent)); }
  .opt.m-heat { --oc: var(--wp-heat); } .opt.m-cool { --oc: var(--wp-cool); } .opt.m-dry { --oc: var(--wp-dry); } .opt.m-fan { --oc: var(--wp-fan); } .opt.m-auto { --oc: var(--wp-auto); }
  .opt:active { transform: scale(.96); }
  .opt.sw { flex-direction: row; min-height: 64px; justify-content:flex-start; padding: 10px 14px; text-align:left; }
  .note { margin: 0; color: var(--wp-muted); font-size: 16px; display:flex; gap: 8px; align-items:flex-start; } .note ha-icon { --mdc-icon-size: 20px; flex:none; }
  .tgrid { display:grid; grid-template-columns: repeat(5, 1fr); gap: 12px; padding: 22px 24px 0; }
  .tbig { cursor:pointer; border: 1px solid var(--wp-border); background: var(--wp-card-2); border-radius: 18px; padding: 18px 6px; display:flex; flex-direction:column; align-items:center; }
  .tbig b { font-size: 40px; } .tbig small { color: var(--wp-muted); font-size: 15px; } .tbig:active { background: var(--wp-card-hi); }
  .sheet.small .bigbtn.wide { width: calc(100% - 48px); margin: 18px 24px 0; }
  .toast { position: fixed; left: 50%; bottom: 24px; transform: translate(-50%, 160%); opacity: 0; background: var(--wp-bad); color:#fff; padding: 14px 20px; border-radius: 14px; font-size: 17px; z-index: 40; transition: transform .3s; }
  .toast.show { transform: translate(-50%, 0); opacity: 1; }
  @media (max-width: 1100px) { .wrap { grid-template-columns: 1fr; } .sbody { grid-template-columns: 1fr; } .left { border-right: 0; } }
`;
customElements.define("wp-climate", WpClimate);

window.customCards = window.customCards || [];
window.customCards.push(
  { type: "wp-page", name: "Wall Panel page", description: "Full-screen shell with nav bar for the wall panel" },
  { type: "wp-climate", name: "Wall Panel climate", description: "Whole-home and per-room AC control" },
);
console.info(`%c WALL-PANEL %c ${WP_VERSION} `, "background:#2563eb;color:#fff;border-radius:3px 0 0 3px;padding:2px 4px", "background:#0f172a;color:#fff;border-radius:0 3px 3px 0;padding:2px 4px");
