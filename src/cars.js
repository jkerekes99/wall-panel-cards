
/* =====================================================================
 * Cars tab: wp-ev (car panel + evcc charging panel)
 * ===================================================================== */
const wpvAgo = (t) => { const m = Math.max(0, Math.round((Date.now() - t) / 60000)); return m < 1 ? "just now" : m < 60 ? `${m} min ago` : m < 1440 ? `${Math.floor(m / 60)} h ${m % 60} min ago` : `${Math.floor(m / 1440)} d ago`; };
const wpvNum = (h, id, d = 1) => { const v = stateNum(h, id); return v == null ? "–" : v.toLocaleString("en-AU", { maximumFractionDigits: d, minimumFractionDigits: d }); };

class WpEv extends WpBase {
  getCardSize() { return 12; }
  _ids() {
    const c = this._config, car = c.car || {}, e = c.evcc || {};
    return [...Object.values(car).filter((v) => typeof v === "string"), ...Object.values(e).filter((v) => typeof v === "string"), c.theme_entity];
  }
  _extraSig() { return `${Math.floor(Date.now() / 60000)}|${this._busy || ""}|${this._tempPending ?? ""}`; }
  _firstHass() { this._tick = setInterval(() => { this._sig = null; this._render(); }, 60000); }
  disconnectedCallback() { clearInterval(this._tick); this._tick = null; }
  connectedCallback() { if (this._hass && !this._tick) this._firstHass(); }

  _render() {
    const h = this._hass, c = this._config, car = c.car || {}, ev = c.evcc || {}, r = this.shadowRoot;
    const skel = `${this.hasAttribute("dark")}`;
    if (this._skel !== skel) {
      this._skel = skel; this._parts = {};
      r.innerHTML = `<style>${WP_PALETTE}${WPV_CSS}</style>
      <div class="wrap">
        <section class="panel car">
          <div class="ph" id="c-h"></div>
          <div class="hero">${c.image ? `<img src="${$esc(c.image)}" alt="">` : icon("lu:car-front")}</div>
          <div id="c-bat"></div>
          <div class="grid" id="c-grid"></div>
          <div class="btns" id="c-btns"></div>
        </section>
        <section class="panel evcc"><div id="e-top"></div><div id="e-bot"></div></section>
      </div>`;
      if (!this._wired) { this._wired = true; r.addEventListener("click", (e) => this._click(e)); }
    }
    const set = (id, html) => { if (this._parts[id] !== html) { this._parts[id] = html; const el = r.getElementById(id); if (el) el.innerHTML = html; } };
    const st = (id) => h.states[id];
    const on = (id) => st(id)?.state === "on";
    const charging = on(car.charging) || on(ev.charging), plugged = on(car.plugged) || on(ev.connected);
    const chip = charging ? `<span class="chip go"><i></i>Charging</span>` : plugged ? `<span class="chip pl"><i></i>Plugged in</span>` : `<span class="chip"><i></i>Not plugged in</span>`;
    const asleep = on(car.asleep);
    set("c-h", `<div class="pt">${icon("lu:car-front")}<div><h2>${$esc(c.name || "Car")}</h2><p>${$esc(c.subtitle || "")}</p></div></div><div class="chips">${asleep ? `<span class="chip">${icon("lu:moon")}Asleep</span>` : ""}${chip}</div>`);
    // battery
    const soc = stateNum(h, car.battery), rng = stateNum(h, car.range);
    const lastT = Date.parse(st(car.last_update)?.state || "") || null, poll = stateNum(h, car.polling_interval);
    const col = soc == null ? "var(--wp-track)" : soc >= 50 ? "linear-gradient(90deg,#16a34a,#4ade80)" : soc >= 20 ? "linear-gradient(90deg,#f59e0b,#fbbf24)" : "linear-gradient(90deg,#dc2626,#f87171)";
    set("c-bat", `<div class="bat"><div class="soc">${soc == null ? "–" : Math.round(soc)}<i>%</i></div><div class="bt"><b>${rng == null ? "–" : Math.round(rng).toLocaleString("en-AU")} km range</b>
      <span>${lastT ? `Last reading ${wpvAgo(lastT)}` : ""}${poll ? ` · refreshes every ${Math.round(poll / 60)} min` : ""}</span></div></div>
      <div class="bar"><i style="width:${Math.max(0, Math.min(100, soc || 0))}%;background:${col}"></i></div>`);
    // info grid
    const loc = st(car.location)?.state;
    const locTxt = loc === "home" ? "Home" : loc === "not_home" ? "Away" : loc && loc !== "unavailable" ? loc.replace(/_/g, " ") : "–";
    const lock = st(car.lock)?.state;
    const tyres = (car.tyres || []).map((id) => stateNum(h, id)).filter((v) => v != null);
    const sentry = st(car.sentry)?.state;
    const odo = stateNum(h, car.odometer);
    const cell = (ic, label, val, cls = "", more = "") => `<div class="cell ${cls}" ${more ? `data-more="${$esc(more)}"` : ""}><span class="ci">${icon(ic)}</span><span class="cl">${label}</span><b>${val}</b></div>`;
    set("c-grid", [
      cell("lu:map-pin", "Location", $esc(locTxt.replace(/^./, (m) => m.toUpperCase())), "", car.location),
      cell(lock === "locked" ? "lu:lock" : "lu:lock-open", "Doors", lock === "locked" ? "Locked" : lock === "unlocked" ? "Unlocked" : "–", lock === "unlocked" ? "warn" : "", car.lock),
      cell("lu:thermometer", "Cabin", `${wpvNum(h, car.inside_temp)} °C`, "", car.inside_temp),
      cell("lu:battery-charging", "Charge limit", `${wpvNum(h, car.charge_limit, 0)}%`, "", car.charge_limit),
      cell("lu:shield", "Sentry mode", sentry === "on" ? "On" : sentry === "off" ? "Off" : "–", "", car.sentry),
      cell("lu:sun", "Outside", `${wpvNum(h, car.outside_temp)} °C`, "", car.outside_temp),
      cell("lu:gauge", "Tyres (min)", tyres.length ? `${Math.min(...tyres).toFixed(0)} psi` : "–", tyres.length && Math.min(...tyres) < (c.tyre_warn || 38) ? "warn" : ""),
      cell("lu:route", "Odometer", odo == null ? "–" : `${Math.round(odo).toLocaleString("en-AU")} km`, "", car.odometer),
    ].join(""));
    // buttons
    const cl = st(car.climate), clOn = cl && cl.state !== "off" && cl.state !== "unavailable";
    const tgt = this._tempPending ?? (cl ? +cl.attributes.temperature : null);
    set("c-btns", `<button class="b" data-act="wake" ${this._busy === "wake" ? "disabled" : ""}>${icon("lu:history")}${this._busy === "wake" ? "Waking…" : "Wake & refresh"}</button>
      <div class="tset"><button data-act="t" data-v="-1">${icon("lu:minus")}</button><b>${tgt == null || isNaN(tgt) ? "–" : tgt.toFixed(1)}<i>°C</i></b><button data-act="t" data-v="1">${icon("lu:plus")}</button></div>
      <button class="b ${clOn ? "lit" : "pri"}" data-act="clon">${icon("lu:fan")}${clOn ? "Climate on" : "Start climate"}</button>
      <button class="b" data-act="cloff" ${clOn ? "" : "disabled"}>${icon("lu:power")}Stop</button>`);
    const ep = this._evcc(); set("e-top", ep.top); set("e-bot", ep.bot);
  }

  _evcc() {
    const h = this._hass, c = this._config, ev = c.evcc || {};
    if (!ev.charge_power) return { top: "", bot: "" };
    const st = (id) => h.states[id];
    const kw = stateNum(h, ev.charge_power), amps = stateNum(h, ev.charge_current), ph = stateNum(h, ev.phases);
    const charging = st(ev.charging)?.state === "on", connected = st(ev.connected)?.state === "on";
    const lim = stateNum(h, ev.price_limit), grid = stateNum(h, ev.grid_price);
    const presets = c.price_presets || [{ value: 0.05, label: "Cheap power (12am-4am)", sub: "≤ 5.0c/kWh", icon: "lu:plug-zap" }, { value: 0.045, label: "Solar only", sub: "≤ 4.5c/kWh", icon: "lu:sun", color: "#f59e0b" }];
    const socOpts = c.limit_options || [80, 100], socLim = stateNum(h, ev.limit_set), carSoc = stateNum(h, (c.car || {}).battery);
    const near = (a, b) => a != null && Math.abs(a - b) < 0.0005;
    const cheapNow = st(ev.smart_cost_active)?.state === "on";
    const mode = st(ev.mode)?.state;
    const status = st(ev.pv_status)?.state;
    const sess = stateNum(h, ev.session_energy), solar = stateNum(h, ev.session_solar), cost = stateNum(h, ev.session_cost), ppk = stateNum(h, ev.session_price_kwh);
    const rem = stateNum(h, ev.remaining), dur = stateNum(h, ev.duration);
    const tot = stateNum(h, ev.total_energy), avg = stateNum(h, ev.avg_price), tsol = stateNum(h, ev.total_solar);
    const c$ = (v) => (v == null ? "–" : `${(v * 100).toFixed(1)}c`);
    const stat = (label, val, sub = "") => `<div class="st"><span>${label}</span><b>${val}</b>${sub ? `<small>${sub}</small>` : ""}</div>`;
    const remTxt = rem ? (rem >= 3600 ? `${Math.floor(rem / 3600)} h ${Math.round((rem % 3600) / 60)} min` : `${Math.round(rem / 60)} min`) : null;
    return { top: `<div class="ph"><div class="pt">${icon("lu:plug-zap")}<div><h2>Smart Charging</h2><p>evcc${mode ? ` · ${$esc(mode.replace(/^./, (m) => m.toUpperCase()))} mode` : ""}</p></div></div>
        <span class="chip ${charging ? "go" : connected ? "pl" : ""}"><i></i>${charging ? "Charging" : connected ? "Connected" : "Idle"}</span></div>
      <div class="rate" data-more="${$esc(ev.charge_power)}"><div class="kw"><b>${kw == null ? "–" : kw.toFixed(1)}</b><span>kW</span></div>
        <div class="rt"><b>Charge rate</b><span>${charging && amps != null ? `${Math.round(amps)} A${ph ? ` · ${ph} phase${ph > 1 ? "s" : ""}` : ""}` : "Not charging"}${remTxt ? ` · ${remTxt} to go` : ""}</span></div></div>
      ${status && status !== "unknown" ? `<p class="why">${icon("lu:sun")}${$esc(status)}</p>` : ""}
      <h5>Grid charging</h5>
      <div class="seg2">${presets.map((p) => `<button class="${near(lim, p.value) ? "on" : ""}" data-act="limit" data-v="${p.value}"><b style="${p.color ? `--ic:${p.color}` : ""}">${p.icon ? icon(p.icon) : ""}${$esc(p.label)}</b><span>${$esc(p.sub)}</span></button>`).join("")}</div>
      <p class="lim">${lim == null ? "" : `Price limit <b>${c$(lim)}/kWh</b>`}${grid != null ? ` · grid now <b>${c$(grid)}</b>` : ""}${cheapNow ? ` · <span class="okc">cheap power active</span>` : ""}</p>
      ${ev.limit_set ? `<h5>Charge limit</h5>
      <div class="seg2 soc">${socOpts.map((v) => `<button class="${socLim != null && Math.round(socLim) === v ? "on" : ""}" data-act="soc" data-v="${v}"><b>${v}%</b></button>`).join("")}</div>
      <p class="lim">${carSoc != null ? `Car is at <b>${Math.round(carSoc)}%</b> · ` : ""}evcc stops charging at the limit</p>` : ""}
`, bot: `
      <h5>This session</h5>
      <div class="stats">${stat("Energy", sess == null ? "–" : `${sess.toFixed(1)} kWh`)}${stat("From solar", solar == null ? "–" : `${Math.round(solar)}%`)}${stat("Cost", cost == null ? "–" : `$${cost.toFixed(2)}`, ppk != null ? `${c$(ppk)}/kWh` : "")}${stat("Charging for", dur == null ? "–" : dur >= 3600 ? `${Math.floor(dur / 3600)} h ${Math.round((dur % 3600) / 60)} m` : `${Math.round(dur / 60)} min`)}</div>
      <h5>All time</h5>
      <div class="stats three">${stat("Charged", tot == null ? "–" : `${Math.round(tot).toLocaleString("en-AU")} kWh`)}${stat("Solar", tsol == null ? "–" : `${Math.round(tsol)}%`)}${stat("Avg price", c$(avg), "per kWh")}</div>` };
  }

  async _click(e) {
    const m = e.target.closest("[data-more]");
    const a = e.target.closest("[data-act]");
    if (!a) { if (m && m.dataset.more) wpeMoreInfo(this, m.dataset.more); return; }
    if (a.disabled) return;
    const h = this._hass, car = this._config.car || {}, ev = this._config.evcc || {}, act = a.dataset.act;
    if (act === "wake") {
      this._busy = "wake"; this._render();
      try { if (car.wake) await this._call("button", "press", { entity_id: car.wake }); } catch (_) {}
      setTimeout(async () => { try { if (car.refresh) await this._call("button", "press", { entity_id: car.refresh }); } catch (_) {} this._busy = null; this._sig = null; this._render(); }, 15000);
    } else if (act === "t") {
      const cl = h.states[car.climate]; if (!cl) return;
      const step = cl.attributes.target_temp_step || 0.5;
      const cur = this._tempPending ?? +cl.attributes.temperature;
      this._tempPending = Math.min(+cl.attributes.max_temp || 28, Math.max(+cl.attributes.min_temp || 15, Math.round((cur + step * +a.dataset.v) * 2) / 2));
      this._sig = null; this._render();
      clearTimeout(this._tempT);
      this._tempT = setTimeout(async () => { const v = this._tempPending; try { await this._call("climate", "set_temperature", { entity_id: car.climate, temperature: v }); } catch (_) {} setTimeout(() => { this._tempPending = null; this._sig = null; this._render(); }, 4000); }, 900);
    } else if (act === "clon") this._call("climate", "turn_on", { entity_id: car.climate });
    else if (act === "cloff") this._call("climate", "turn_off", { entity_id: car.climate });
    else if (act === "limit") this._call("number", "set_value", { entity_id: ev.price_limit, value: +a.dataset.v });
    else if (act === "soc") this._call("number", "set_value", { entity_id: ev.limit_set, value: +a.dataset.v });
  }
}

const WPV_CSS = `
  :host { display:block; height:100%; } * { box-sizing:border-box; }
  .wrap { height:100%; display:grid; gap: var(--wp-gap); grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr); }
  .panel { display:flex; flex-direction:column; min-width:0; min-height:0; padding: 18px 20px; background: var(--wp-card); border:1px solid var(--wp-border); border-radius: var(--wp-radius); box-shadow: var(--wp-shadow); overflow:hidden; }
  .ph { display:flex; justify-content:space-between; align-items:flex-start; gap: 10px; flex:none; }
  .pt { display:flex; gap: 12px; align-items:center; min-width:0; } .pt > svg.lu { --mdc-icon-size: 28px; --lu-stroke: 1.8; color: var(--wp-accent); flex:none; }
  .pt h2 { margin:0; font-size: 22px; font-weight: 750; } .pt p { margin: 1px 0 0; font-size: 14px; color: var(--wp-muted); }
  .chips { display:flex; gap: 6px; }
  .chip { display:inline-flex; align-items:center; gap: 6px; padding: 5px 12px; border-radius: 999px; font-size: 13px; font-weight: 700; background: var(--wp-card-2); border: 1px solid var(--wp-border); color: var(--wp-muted); white-space:nowrap; --mdc-icon-size: 14px; --lu-stroke: 2.2; }
  .chip i { width: 8px; height: 8px; border-radius: 50%; background: var(--wp-faint); } .chip.go { color: #16a34a; } .chip.go i { background: #22c55e; animation: wpvp 1.4s infinite; } .chip.pl { color: var(--wp-accent); } .chip.pl i { background: var(--wp-accent); }
  :host([dark]) .chip.go { color: #4ade80; } @keyframes wpvp { 50% { opacity: .25; } }
  .hero { flex: 1 1 0; min-height: 80px; display:flex; align-items:center; justify-content:center; padding: 6px 0; color: var(--wp-faint); --mdc-icon-size: 90px; }
  .hero img { max-width: 92%; max-height: 100%; object-fit: contain; filter: drop-shadow(0 18px 22px rgba(0,0,0,.35)); }
  .bat { display:flex; align-items:flex-end; gap: 22px; flex:none; } .soc { font-size: 64px; font-weight: 800; line-height: .95; letter-spacing: -.03em; } .soc i { font-style: normal; font-size: 24px; font-weight: 700; color: var(--wp-muted); margin-left: 2px; }
  .bt { display:flex; flex-direction:column; padding-bottom: 6px; } .bt b { font-size: 17px; font-weight: 700; } .bt span { font-size: 13px; color: var(--wp-muted); }
  .bar { flex:none; height: 9px; margin: 12px 0 10px; border-radius: 99px; background: var(--wp-track); overflow:hidden; } .bar i { display:block; height:100%; border-radius: 99px; }
  .grid { flex:none; display:grid; grid-template-columns: 1fr 1fr; column-gap: 22px; }
  .cell { display:flex; align-items:center; gap: 10px; padding: 9px 2px; border-bottom: 1px solid var(--wp-border); min-width:0; cursor: pointer; }
  .ci { flex:none; color: var(--wp-muted); --mdc-icon-size: 18px; --lu-stroke: 2; display:flex; } .cl { flex:1; font-size: 14.5px; color: var(--wp-muted); white-space:nowrap; } .cell b { font-size: 15px; font-weight: 750; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; } .cell.warn b { color: #f59e0b; }
  .btns { flex:none; display:flex; gap: 8px; margin-top: 14px; }
  .b { all: unset; cursor:pointer; flex: 1; display:inline-flex; align-items:center; justify-content:center; gap: 7px; padding: 11px 10px; border-radius: 13px; background: var(--wp-card-2); border: 1px solid var(--wp-border); font-size: 14.5px; font-weight: 700; white-space:nowrap; --mdc-icon-size: 17px; --lu-stroke: 2.2; }
  .b.pri { background: var(--wp-accent); color: var(--wp-accent-text); border-color: transparent; box-shadow: 0 0 16px rgba(59,130,246,.4); }
  .b.lit { background: rgba(34,197,94,.16); color: #16a34a; border-color: rgba(34,197,94,.4); } :host([dark]) .b.lit { color: #4ade80; }
  .b[disabled] { opacity: .45; cursor: default; }
  .tset { flex: none; display:flex; align-items:center; gap: 4px; padding: 3px; border-radius: 13px; background: var(--wp-card-2); border: 1px solid var(--wp-border); }
  .tset button { all: unset; cursor:pointer; width: 38px; height: 38px; border-radius: 10px; display:grid; place-items:center; background: var(--wp-card); border: 1px solid var(--wp-border); --mdc-icon-size: 17px; --lu-stroke: 2.4; }
  .tset b { min-width: 74px; text-align:center; font-size: 18px; font-weight: 800; font-variant-numeric: tabular-nums; } .tset b i { font-style: normal; font-size: 13px; color: var(--wp-muted); margin-left: 2px; }
  /* evcc */
  .evcc .st { padding: 10px 12px; } .evcc .st b { font-size: 20px; }
  .evcc .rate { padding: 16px 20px; margin-top: 16px; } .evcc .kw b { font-size: 54px; } .evcc h5 { margin: 14px 2px 7px; }
  .rate { flex:none; display:flex; align-items:center; gap: 18px; margin-top: 22px; padding: 18px 20px; border-radius: 20px; background: linear-gradient(135deg, rgba(34,211,238,.14), rgba(59,130,246,.10)); border: 1px solid rgba(34,211,238,.28); cursor: pointer; }
  .kw { display:flex; align-items:baseline; gap: 6px; } .kw b { font-size: 56px; font-weight: 800; line-height: 1; letter-spacing: -.03em; font-variant-numeric: tabular-nums; } .kw span { font-size: 20px; font-weight: 700; color: var(--wp-muted); }
  .rt { display:flex; flex-direction:column; min-width:0; } .rt b { font-size: 17px; font-weight: 750; } .rt span { font-size: 13.5px; color: var(--wp-muted); }
  .why { flex:none; display:flex; align-items:center; gap: 7px; margin: 10px 2px 0; font-size: 13px; color: var(--wp-muted); --mdc-icon-size: 15px; --lu-stroke: 2.2; } .why svg { color: #f59e0b; flex:none; }
  h5 { flex:none; margin: 18px 2px 8px; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; color: var(--wp-muted); }
  .seg2 { flex:none; display:grid; grid-template-columns: 1fr 1fr; gap: 6px; padding: 4px; border-radius: 16px; background: var(--wp-track); }
  .seg2 button { all: unset; cursor:pointer; display:flex; flex-direction:column; align-items:center; gap: 1px; padding: 11px 8px; border-radius: 12px; color: var(--wp-muted); }
  .seg2 button b { font-size: 15.5px; font-weight: 750; } .seg2 button span { font-size: 12.5px; }
  .seg2 button.on { background: var(--wp-card); color: var(--wp-text); box-shadow: 0 2px 8px rgba(0,0,0,.18); } .seg2 button.on span { color: var(--wp-muted); }
  .lim { flex:none; margin: 8px 4px 0; font-size: 13px; color: var(--wp-muted); } .lim b { color: var(--wp-text); } .okc { color: #16a34a; font-weight: 700; } :host([dark]) .okc { color: #4ade80; }
  .seg2 button b { display:inline-flex; align-items:center; gap: 7px; --mdc-icon-size: 17px; --lu-stroke: 2.2; } .seg2 button.on b svg { color: var(--ic, var(--wp-accent)); }
  .seg2.soc button { padding: 12px 8px; } .seg2.soc button b { font-size: 19px; }
  .stats { flex:none; display:grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px; } .stats.three { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .st { display:flex; flex-direction:column; padding: 10px 12px; border-radius: 14px; background: var(--wp-card-2); border: 1px solid var(--wp-border); min-width:0; }
  .st span { font-size: 12px; color: var(--wp-muted); font-weight: 600; } .st b { font-size: 18px; font-weight: 800; white-space:nowrap; } .st small { font-size: 11.5px; color: var(--wp-muted); }
`;
customElements.define("wp-ev", WpEv);
