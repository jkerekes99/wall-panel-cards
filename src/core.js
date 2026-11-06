/* Wall Panel cards for Home Assistant — wp-page (shell + nav) and wp-climate.
 * Joshua's 13.1" Galaxy Tab S10 FE+ wall panel. Local-only, no external deps. */
const WP_VERSION = "0.3.0";

/* ---------- helpers ---------- */
const $esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const num = (v) => { const n = parseFloat(v); return Number.isFinite(n) ? n : null; };
const fmt1 = (n) => (n == null ? "–" : (Math.round(n * 10) / 10).toFixed(1));
const fmtT = (n, step = 0.5) => (n == null ? "–" : step < 1 ? (Math.round(n * 2) / 2).toFixed(n % 1 ? 1 : 0) : Math.round(n).toString());
function navigate(path, replace = false) {
  if (replace) history.replaceState(null, "", path); else history.pushState(null, "", path);
  window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace } }));
}
function wpIsDark(hass, cfg) {
  const ent = cfg.theme_entity && hass?.states[cfg.theme_entity];
  const mode = (ent ? ent.state : cfg.theme || "auto").toLowerCase();
  if (mode === "dark") return true;
  if (mode === "light") return false;
  return !!hass?.themes?.darkMode;
}
const icon = (name, cls = "") => `<ha-icon class="${cls}" icon="${name}"></ha-icon>`;

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
  { name: "Overview", icon: "mdi:home-variant", path: "overview" },
  { name: "Climate", icon: "mdi:thermometer", path: "climate" },
  { name: "Energy", icon: "mdi:lightning-bolt", path: "energy" },
  { name: "Solar", icon: "mdi:solar-power-variant", path: "solar" },
  { name: "Cars", icon: "mdi:car-electric", path: "cars" },
  { name: "Security", icon: "mdi:shield-home", path: "security" },
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
    (this._children || []).forEach((c) => { c.hass = hass; });
  }
  async _build() {
    const c = this._config;
    const root = this.shadowRoot;
    root.innerHTML = `<style>${WP_PALETTE}${WP_PAGE_CSS}</style>
      <div class="page">
        <nav class="bar">
          <div class="tabs">${c.tabs.map((t) => `<button class="tab" data-path="${$esc(t.path)}">${icon(t.icon)}<span>${$esc(t.name)}</span></button>`).join("")}</div>
          <div class="right">
            <button class="wx" id="wx">${icon("mdi:weather-partly-cloudy", "wxi")}<div><b id="wxt">–</b><small id="wxc"></small></div></button>
            <div class="clock"><b id="time">–</b><small id="date"></small></div>
          </div>
        </nav>
        <main class="grid" style="${c.grid ? `grid-template-columns:${c.grid.columns || "1fr"};grid-template-rows:${c.grid.rows || "auto"};grid-template-areas:${c.grid.areas || "none"};` : ""}"></main>
      </div>`;
    root.querySelectorAll(".tab").forEach((b) => b.addEventListener("click", () => {
      const base = c.base || location.pathname.split("/").slice(0, 2).join("/");
      navigate(`${base}/${b.dataset.path}`);
    }));
    root.getElementById("wx").addEventListener("click", () => {
      if (c.weather_popup) navigate(`${location.pathname}${c.weather_popup}`);
    });
    this._markActive();
    this._updateClock();
    // child cards
    const helpers = await window.loadCardHelpers();
    const grid = root.querySelector(".grid");
    this._children = (c.cards || []).map((cc) => {
      const { area, style, popup, ...conf } = cc;
      if (conf.type?.startsWith("custom:wp-") && c.theme_entity && !conf.theme_entity) conf.theme_entity = c.theme_entity;
      if (conf.type?.startsWith("custom:wp-") && c.theme && !conf.theme) conf.theme = c.theme;
      const el = helpers.createCardElement(conf);
      const wrap = document.createElement("div");
      wrap.className = "cell" + (popup || conf.type === "custom:bubble-card" ? " popup" : "");
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
  .tabs { display:flex; gap: 6px; flex: 1; overflow-x: auto; scrollbar-width: none; }
  .tab { all: unset; cursor: pointer; display:flex; align-items:center; gap: 9px; padding: 12px 18px; border-radius: 14px; color: var(--wp-muted); font-size: 17px; font-weight: 600; white-space: nowrap; transition: background .2s, color .2s; }
  .tab ha-icon { --mdc-icon-size: 22px; }
  .tab:active { transform: scale(.97); }
  .tab.on { background: var(--wp-accent); color: var(--wp-accent-text); box-shadow: var(--wp-glow); }
  .right { display:flex; align-items:center; gap: 10px; padding-left: 10px; border-left: 1px solid var(--wp-border); }
  .wx { all: unset; cursor:pointer; display:flex; align-items:center; gap: 10px; padding: 6px 12px; border-radius: 14px; }
  .wx:active { background: var(--wp-card-hi); }
  .wx ha-icon { --mdc-icon-size: 34px; color: #fbbf24; }
  .wx b, .clock b { display:block; font-size: 20px; line-height: 1.1; }
  .wx small, .clock small { display:block; color: var(--wp-muted); font-size: 13px; }
  .clock { text-align: right; padding: 0 8px; min-width: 104px; }
  .clock b { font-size: 24px; }
  .grid { flex:1; display:grid; gap: var(--wp-gap); min-height: 0; }
  .cell { min-width: 0; min-height: 0; }
  .cell.popup { position: absolute; width: 0; height: 0; overflow: visible; }
`;
customElements.define("wp-page", WpPage);

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
      finish_actions: [{ service: anyOn ? "climate.turn_off" : "climate.turn_on", target: { entity_id: ids } }],
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
customElements.define("wp-climate", WpClimate);

window.customCards = window.customCards || [];
window.customCards.push(
  { type: "wp-page", name: "Wall Panel page", description: "Full-screen shell with nav bar for the wall panel" },
  { type: "wp-climate", name: "Wall Panel climate", description: "Whole-home and per-room AC control" },
);
console.info(`%c WALL-PANEL %c ${WP_VERSION} `, "background:#2563eb;color:#fff;border-radius:3px 0 0 3px;padding:2px 4px", "background:#0f172a;color:#fff;border-radius:0 3px 3px 0;padding:2px 4px");
