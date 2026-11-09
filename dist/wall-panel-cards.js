/* Lucide icons (https://lucide.dev), ISC License, Copyright (c) Lucide Contributors 2022; portions Feather (MIT) Cole Bemis 2013-2022. */
const WP_LUCIDE = {
"house": "<path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\" /><path d=\"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\" />",
"thermometer": "<path d=\"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z\" />",
"zap": "<path d=\"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z\" />",
"sun": "<circle cx=\"12\" cy=\"12\" r=\"4\" /><path d=\"M12 2v2\" /><path d=\"M12 20v2\" /><path d=\"m4.93 4.93 1.41 1.41\" /><path d=\"m17.66 17.66 1.41 1.41\" /><path d=\"M2 12h2\" /><path d=\"M20 12h2\" /><path d=\"m6.34 17.66-1.41 1.41\" /><path d=\"m19.07 4.93-1.41 1.41\" />",
"car-front": "<path d=\"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8\" /><path d=\"M7 14h.01\" /><path d=\"M17 14h.01\" /><rect width=\"18\" height=\"8\" x=\"3\" y=\"10\" rx=\"2\" /><path d=\"M5 18v2\" /><path d=\"M19 18v2\" />",
"shield": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\" />",
"droplet": "<path d=\"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z\" />",
"calendar-days": "<path d=\"M8 2v4\" /><path d=\"M16 2v4\" /><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\" /><path d=\"M3 10h18\" /><path d=\"M8 14h.01\" /><path d=\"M12 14h.01\" /><path d=\"M16 14h.01\" /><path d=\"M8 18h.01\" /><path d=\"M12 18h.01\" /><path d=\"M16 18h.01\" />",
"utility-pole": "<path d=\"M12 2v20\" /><path d=\"M2 5h20\" /><path d=\"M3 3v2\" /><path d=\"M7 3v2\" /><path d=\"M17 3v2\" /><path d=\"M21 3v2\" /><path d=\"m19 5-7 7-7-7\" />",
"arrow-down": "<path d=\"M12 5v14\" /><path d=\"m19 12-7 7-7-7\" />",
"arrow-up": "<path d=\"m5 12 7-7 7 7\" /><path d=\"M12 19V5\" />",
"lightbulb": "<path d=\"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5\" /><path d=\"M9 18h6\" /><path d=\"M10 22h4\" />",
"fan": "<path d=\"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z\" /><path d=\"M12 12v.01\" />",
"door-open": "<path d=\"M13 4h3a2 2 0 0 1 2 2v14\" /><path d=\"M2 20h3\" /><path d=\"M13 20h9\" /><path d=\"M10 12v.01\" /><path d=\"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z\" />",
"plug-zap": "<path d=\"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z\" /><path d=\"m2 22 3-3\" /><path d=\"M7.5 13.5 10 11\" /><path d=\"M10.5 16.5 13 14\" /><path d=\"m18 3-4 4h6l-4 4\" />",
"battery-charging": "<path d=\"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2\" /><path d=\"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1\" /><path d=\"m11 7-3 5h4l-3 5\" /><line x1=\"22\" x2=\"22\" y1=\"11\" y2=\"13\" />",
"map-pin": "<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\" /><circle cx=\"12\" cy=\"10\" r=\"3\" />",
"chevron-right": "<path d=\"m9 18 6-6-6-6\" />",
"flame": "<path d=\"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z\" />",
"snowflake": "<line x1=\"2\" x2=\"22\" y1=\"12\" y2=\"12\" /><line x1=\"12\" x2=\"12\" y1=\"2\" y2=\"22\" /><path d=\"m20 16-4-4 4-4\" /><path d=\"m4 8 4 4-4 4\" /><path d=\"m16 4-4 4-4-4\" /><path d=\"m8 20 4-4 4 4\" />",
"power": "<path d=\"M12 2v10\" /><path d=\"M18.4 6.6a9 9 0 1 1-12.77.04\" />",
"timer": "<line x1=\"10\" x2=\"14\" y1=\"2\" y2=\"2\" /><line x1=\"12\" x2=\"15\" y1=\"14\" y2=\"11\" /><circle cx=\"12\" cy=\"14\" r=\"8\" />",
"calendar-clock": "<path d=\"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5\" /><path d=\"M16 2v4\" /><path d=\"M8 2v4\" /><path d=\"M3 10h5\" /><path d=\"M17.5 17.5 16 16.3V14\" /><circle cx=\"16\" cy=\"16\" r=\"6\" />",
"sliders-horizontal": "<line x1=\"21\" x2=\"14\" y1=\"4\" y2=\"4\" /><line x1=\"10\" x2=\"3\" y1=\"4\" y2=\"4\" /><line x1=\"21\" x2=\"12\" y1=\"12\" y2=\"12\" /><line x1=\"8\" x2=\"3\" y1=\"12\" y2=\"12\" /><line x1=\"21\" x2=\"16\" y1=\"20\" y2=\"20\" /><line x1=\"12\" x2=\"3\" y1=\"20\" y2=\"20\" /><line x1=\"14\" x2=\"14\" y1=\"2\" y2=\"6\" /><line x1=\"8\" x2=\"8\" y1=\"10\" y2=\"14\" /><line x1=\"16\" x2=\"16\" y1=\"18\" y2=\"22\" />",
"wind": "<path d=\"M12.8 19.6A2 2 0 1 0 14 16H2\" /><path d=\"M17.5 8a2.5 2.5 0 1 1 2 4H2\" /><path d=\"M9.8 4.4A2 2 0 1 1 11 8H2\" />",
"tv": "<rect width=\"20\" height=\"15\" x=\"2\" y=\"7\" rx=\"2\" ry=\"2\" /><polyline points=\"17 2 12 7 7 2\" />"
};

/* Wall Panel cards for Home Assistant — wp-page (shell + nav) and wp-climate.
 * Joshua's 13.1" Galaxy Tab S10 FE+ wall panel. Local-only, no external deps. */
const WP_VERSION = "0.5.6";

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
if (!customElements.get("wp-page")) customElements.define("wp-page", WpPage);
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
    for (const r of this._config.rooms) ids.push(r.climate, r.temperature, r.humidity, r.power, r.preset, ...(r.extras || []));
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
    return {
      cfg: r, i, st, a, unavailable, mode, on: !unavailable && mode !== "off",
      cur: sensT ?? num(a.current_temperature), hum: sensH ?? num(a.current_humidity),
      target: live && pend.temperature != null ? pend.temperature : num(a.temperature),
      step: a.target_temp_step || (a.min_temp != null ? 0.5 : 1), min: a.min_temp ?? 16, max: a.max_temp ?? 30,
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
      const a = st.attributes; const step = a.target_temp_step || 1;
      const p = this._pending[eid];
      const cur = base != null ? base : p && p.until > Date.now() && p.temperature != null ? p.temperature : num(a.temperature) ?? 21;
      let v = base != null ? base + delta : cur + delta * step;
      v = Math.min(a.max_temp ?? 30, Math.max(a.min_temp ?? 16, Math.round(v / step) * step));
      this._setPending(eid, { temperature: v });
      clearTimeout(this._sendTimers[eid]);
      this._sendTimers[eid] = setTimeout(() => this._call("climate", "set_temperature", { entity_id: eid, temperature: v }), 1100);
    });
  }
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
      ${this._modal ? this._modalHtml(rooms).replace(/class="(scrim|sheet)/g, `class="$1${this._tsheet ? "" : anim}`) : ""}
      ${this._tsheet ? this._timerSheet(this._tsheet.i).replace(/class="(scrim|sheet)/g, `class="$1${anim}`) : ""}<div class="toast"></div>`;
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
    return `<section class="room card m-${m} ${r.on ? "is-on" : ""} ${r.unavailable ? "unav" : ""}" data-room="${r.i}">
      <div class="rhead">
        <div class="rname">${icon(r.cfg.icon || "mdi:air-conditioner", "ricon")}<h3>${$esc(r.cfg.name)}</h3></div>
        <button class="toggle ${r.on ? "on" : ""}" data-act="power" data-i="${r.i}" aria-label="Power"><span></span></button>
      </div>
      <div class="rbody" data-act="openroom" data-i="${r.i}">
        <div class="rtemp">${fmt1(r.cur)}<i>°</i></div>
        <div class="rmeta"><span>${icon("mdi:water-percent")}${r.hum == null ? "–" : Math.round(r.hum)}%</span>
          ${tmr ? `<span class="tchip">${icon("mdi:timer-outline")}${tmr.off ? "Off" : "On"} in ${this._fmtLeft(tmr.left)}</span>` : ""}</div>
        <div class="status m-${m}">${r.on ? icon(MODES[r.mode]?.icon || "mdi:air-conditioner") : ""}<span>${this._statusText(r)}</span></div>
      </div>
      <div class="rfoot">
        ${canTemp ? `<button class="round" data-act="minus" data-i="${r.i}">${icon("mdi:minus")}</button>
          <div class="sp"><b>${fmtT(r.target, r.step)}°</b><small>set to</small></div>
          <button class="round" data-act="plus" data-i="${r.i}">${icon("mdi:plus")}</button>`
        : `<button class="more" data-act="openroom" data-i="${r.i}">${r.on ? "More controls" : "Tap the switch to turn on"}${icon("mdi:chevron-right")}</button>`}
      </div>
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
    const modes = MODE_ORDER.filter((m) => union("hvac_modes").includes(m));
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
            : `<button class="tbtn" data-act="topen" data-i="${all ? "all" : r0.i}">${icon("mdi:timer-outline")}${all ? "Timer for selected rooms" : "Timer"}</button>`}</div>
        </div>
        <div class="right">
          ${this._group("Mode", modes.map((m) => ({ key: m, label: MODES[m].label, icon: MODES[m].icon, on: anyOn && mode === m, cls: `m-${MODES[m].c}` })), all ? "allmode" : "mode")}
          ${showFanVane && fans.length ? this._group("Fan speed", fans.map((o) => ({ key: o.key, label: o.label, svg: this._fanSvg(o.key), on: curFan === o.key })), all ? "allfan" : "fan") : ""}
          ${showFanVane && vanes.length ? this._group("Air direction · up / down", vanes.map((o) => ({ key: o.key, label: o.label, svg: vaneSvg(o.key, false), on: curV === o.key })), all ? "allvane" : "vane") : ""}
          ${showFanVane && hvanes.length ? this._group("Air direction · left / right", hvanes.map((o) => ({ key: o.key, label: o.label, svg: vaneSvg(o.key, true), on: curH === o.key })), all ? "allhvane" : "hvane") : ""}
          ${preset ? this._group("Preset", (preset.attributes.options || []).map((o) => ({ key: o, label: PRESET_LABEL[o] || o, on: preset.state === o })), "preset") : ""}
          ${extras.length ? `<div class="grp"><h4>Comfort features</h4><div class="opts">${extras.map(([e, s]) => `<button class="opt sw ${s.state === "on" ? "on" : ""}" data-act="extra" data-e="${e}">${icon(s.state === "on" ? "mdi:toggle-switch" : "mdi:toggle-switch-off-outline")}<span>${$esc((s.attributes.friendly_name || e).replace(r0.cfg.strip_name || /^.*AC /, ""))}</span></button>`).join("")}</div></div>` : ""}
          ${!all && !r0.full ? `<p class="note">${icon("mdi:information-outline")}Fan and air-direction controls appear here once this room is converted to ProtoART.</p>` : ""}
          <button class="rowbtn sm" data-act="schedules">${icon("mdi:calendar-clock")}<span>Weekly schedules</span>${icon("mdi:chevron-right", "chev")}</button>
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
      const key = w.dataset.w; const max = key === "h" ? 23 : 59;
      const mark = (v) => w.querySelectorAll(".wi").forEach((it) => it.classList.toggle("sel", +it.dataset.v === v));
      w.scrollTop = this._wheel[key] * IH; mark(this._wheel[key]);
      let t;
      w.addEventListener("scroll", () => {
        const v = Math.max(0, Math.min(max, Math.round(w.scrollTop / IH)));
        mark(v); clearTimeout(t); t = setTimeout(() => { this._wheel[key] = v; this._updStart(); }, 90);
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
        case "schedules": this._modal = null; this._render(); if (this._config.schedules_popup) navigate(`${location.pathname}${this._config.schedules_popup}`); break;
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
  .timerline { display:flex; align-items:center; gap: 8px; flex-wrap: wrap; justify-content:center; color: var(--wp-muted); font-size: 17px; }
  .timerline b { color: var(--wp-warn); } .tbtn { cursor:pointer; display:flex; align-items:center; gap: 8px; border: 1px solid var(--wp-border); background: var(--wp-card-2); border-radius: 14px; padding: 12px 20px; font-size: 18px; font-weight: 700; }
  .tq { text-align:center; color: var(--wp-muted); font-size: 22px; margin: 22px 0 6px; }
  .wheels { position: relative; display:flex; justify-content:center; align-items:center; gap: 6px; height: 280px; margin: 0 24px; }
  .wheels .band { position:absolute; left: 0; right: 0; top: 112px; height: 56px; border-radius: 14px; background: var(--wp-card-hi); }
  .wheel { position: relative; width: 96px; height: 280px; overflow-y: auto; scroll-snap-type: y mandatory; scrollbar-width: none; padding: 112px 0; box-sizing: border-box; -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent); mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent); }
  .wheel::-webkit-scrollbar { display: none; }
  .wi { height: 56px; line-height: 56px; text-align: center; font-size: 26px; color: var(--wp-muted); scroll-snap-align: center; cursor: pointer; font-variant-numeric: tabular-nums; }
  .wi.sel { color: var(--wp-text); font-size: 34px; font-weight: 700; }
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
if (!customElements.get("wp-climate")) customElements.define("wp-climate", WpClimate);

window.customCards = window.customCards || [];
window.customCards.push(
  { type: "wp-page", name: "Wall Panel page", description: "Full-screen shell with nav bar for the wall panel" },
  { type: "wp-climate", name: "Wall Panel climate", description: "Whole-home and per-room AC control" },
);
console.info(`%c WALL-PANEL %c ${WP_VERSION} `, "background:#2563eb;color:#fff;border-radius:3px 0 0 3px;padding:2px 4px", "background:#0f172a;color:#fff;border-radius:0 3px 3px 0;padding:2px 4px");


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
if (!customElements.get("wp-power-flow")) customElements.define("wp-power-flow", WpPowerFlow);

/* ---------------- wp-side: climate summary · people · TV ---------------- */
const TV_ACTIVE = ["playing", "paused", "on", "idle", "buffering"];
class WpSide extends WpBase {
  _ids() {
    const c = this._config;
    return [...(c.rooms || []).flatMap((r) => [r.climate, r.temperature]), ...(c.hot_water ? Object.values(c.hot_water) : []), ...(c.people || []).map((p) => p.entity), c.tv?.media_player, c.theme_entity];
  }
  _render() {
    const h = this._hass, c = this._config;
    const tv = c.tv && h.states[c.tv.media_player];
    const tvOn = tv && TV_ACTIVE.includes(tv.state);
    if (!this._setHtml(`<style>${WP_PALETTE}${WP_SIDE_CSS}</style>
      <div class="col">${this._climateHtml()}${this._peopleHtml()}${tvOn ? this._tvHtml(tv) : ""}</div>
      ${this._tvModal && tvOn ? this._remoteHtml(tv) : ""}`)) return;
    this._bind();
  }
  _climateHtml() {
    const h = this._hass, c = this._config;
    const rooms = (c.rooms || []).map((r) => {
      const s = h.states[r.climate]; const on = s && !["off", "unavailable", "unknown"].includes(s.state);
      return { r, s, on, mode: s?.state, cur: (r.temperature && num(h.states[r.temperature]?.state)) ?? num(s?.attributes.current_temperature), target: num(s?.attributes.temperature) };
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
      return `<button class="card person ${home ? "home" : "away"}" data-go="${p.popup || ""}">
        <div class="av">${pic ? `<img src="${$esc(pic)}" alt="">` : icon("mdi:account")}<i></i></div>
        <div class="pi"><b>${$esc(p.name || s.attributes.friendly_name)}</b><span>${$esc(where)}</span><small>for ${ago(s.last_changed)}</small></div>
        ${icon("mdi:map-marker-outline", "pin")}</button>`;
    }).join("")}</div>`;
  }
  _tvHtml(tv) {
    const a = tv.attributes; const playing = tv.state === "playing";
    return `<section class="card tv">
      ${a.entity_picture ? `<div class="tvbg" style="background-image:url('${$esc(a.entity_picture)}')"></div>` : ""}
      <div class="tvc">
        <div class="tvh">${icon("mdi:television-play")}<span>${$esc(this._config.tv.name || a.friendly_name)} · ${$esc(a.app_name || a.source || tv.state)}</span></div>
        <b class="tvt">${$esc(a.media_title || (tv.state === "idle" ? "Home screen" : "On"))}</b><small>${$esc(a.media_artist || a.media_series_title || "")}</small>
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
  .tvbg { position:absolute; inset: 0; background-size: cover; background-position: center; filter: blur(18px) saturate(1.3); opacity: .45; transform: scale(1.2); }
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
  .apps { display:flex; gap: 8px; flex-wrap: wrap; padding: 14px 26px 0; } .app { border:1px solid var(--wp-border); background: var(--wp-card-2); border-radius: 999px; padding: 12px 18px; font-size: 16px; font-weight: 700; cursor:pointer; } .app.on { border-color: var(--wp-accent); color: var(--wp-accent); }
`;
if (!customElements.get("wp-side")) customElements.define("wp-side", WpSide);

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
if (!customElements.get("wp-car")) customElements.define("wp-car", WpCar);
window.customCards.push(
  { type: "wp-power-flow", name: "Wall Panel power flow", description: "Animated live power flow" },
  { type: "wp-side", name: "Wall Panel side column", description: "Climate summary, people and TV" },
  { type: "wp-car", name: "Wall Panel car", description: "EV summary strip" },
);
