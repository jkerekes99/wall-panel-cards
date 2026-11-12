
/* =====================================================================
 * Security tab: wp-security (camera grid + summary + live pop-up)
 * ===================================================================== */
const WPS_TYPES = {
  person: { icon: "lu:person-standing", label: "Person", plural: "People" },
  vehicle: { icon: "lu:car-front", label: "Vehicle", plural: "Vehicles" },
  animal: { icon: "lu:paw-print", label: "Animal", plural: "Animals" },
  motion: { icon: "lu:activity", label: "Motion", plural: "Motion" },
  ring: { icon: "lu:bell-ring", label: "Ring", plural: "Rings" },
};
const wpsAgo = (t) => {
  if (!t) return null;
  const m = Math.floor((Date.now() - t) / 60000);
  if (m < 1) return "just now";
  if (m < 60) return `${m} min ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h} h ${m % 60} min ago`;
  const d = Math.floor(h / 24);
  return d < 7 ? `${d} day${d > 1 ? "s" : ""} ago` : new Date(t).toLocaleDateString("en-AU", { day: "numeric", month: "short" });
};
const wpsHM = (t) => new Date(t).toLocaleTimeString("en-AU", { hour: "numeric", minute: "2-digit" }).replace(" ", "").toLowerCase();
const wpsBad = (s) => !s || s.state === "unavailable" || s.state === "unknown";
const wpsTs = (s) => { if (wpsBad(s)) return null; const t = Date.parse(s.state); return isNaN(t) ? null : t; };


/* ---------- Ring preview grabber ----------
 * Ring gives Home Assistant no still image without a recording, so after each ring or motion event
 * the tablet opens a short Live View off-screen, saves one frame (localStorage) and closes it.
 * Every wp-page forwards hass here, so grabs happen whichever tab is showing. */
const wpRingGrab = window.wpRingGrab || (window.wpRingGrab = {
  _key: "wp-ring-grab", _busy: false, _last: 0,
  configure(list) { try { localStorage.setItem(this._key, JSON.stringify(list)); } catch (_) {} this._cfg = list; },
  cfg() { if (!this._cfg) { try { this._cfg = JSON.parse(localStorage.getItem(this._key) || "[]"); } catch (_) { this._cfg = []; } } return this._cfg; },
  frame(cam) { try { return JSON.parse(localStorage.getItem(`wp-frame-${cam}`) || "null"); } catch (_) { return null; } },
  save(cam, data) { const f = { t: Date.now(), data }; try { localStorage.setItem(`wp-frame-${cam}`, JSON.stringify(f)); } catch (_) {} this._mem = { ...(this._mem || {}), [cam]: f }; window.dispatchEvent(new CustomEvent("wp-frame", { detail: { camera: cam } })); },
  get(cam) { return this._mem?.[cam] || this.frame(cam); },
  hass(h) {
    this._h = h;
    for (const c of this.cfg()) {
      const sig = [c.ding, c.motion_event].map((id) => h.states[id]?.state).join("|");
      const prev = this._sig?.[c.camera];
      this._sig = { ...(this._sig || {}), [c.camera]: sig };
      if (prev !== undefined && prev !== sig && !sig.includes("unavailable")) this.grab(c.camera, 2500);
      else if (prev === undefined && !this.get(c.camera)) this.grab(c.camera, 4000);
    }
  },
  // find the <video> inside nested shadow roots
  video(n) { if (!n) return null; if (n.localName === "video") return n; for (const r of [n.shadowRoot, n]) { if (!r) continue; for (const c of r.children) { const v = this.video(c); if (v) return v; } } return null; },
  async ready(el, ms = 25000) { const t0 = Date.now(); while (Date.now() - t0 < ms) { const v = this.video(el); if (v && v.readyState >= 2 && v.videoWidth) return v; await new Promise((r) => setTimeout(r, 400)); } return null; },
  shoot(v) { if (!v || v.readyState < 2 || !v.videoWidth) return null; const w = 960, c = document.createElement("canvas"); c.width = w; c.height = Math.round((v.videoHeight / v.videoWidth) * w); c.getContext("2d").drawImage(v, 0, 0, c.width, c.height); return c.toDataURL("image/jpeg", 0.78); },
  async grab(cam, settle) {
    if (this._busy || Date.now() - this._last < 60000 || !this._h || document.visibilityState === "hidden") return;
    this._busy = true; this._last = Date.now();
    const host = document.createElement("div");
    host.style.cssText = "position:fixed;right:0;bottom:0;width:320px;height:180px;opacity:.01;pointer-events:none;z-index:-1;overflow:hidden";
    document.body.appendChild(host);
    try {
      const helpers = await window.loadCardHelpers();
      const el = helpers.createCardElement({ type: "picture-entity", entity: cam, camera_view: "live", show_name: false, show_state: false });
      el.hass = this._h; host.appendChild(el);
      const keep = setInterval(() => { el.hass = this._h; }, 1000);
      await this.ready(el); clearInterval(keep);
      await new Promise((r) => setTimeout(r, settle || 2500));
      const data = this.shoot(this.video(el));
      if (data) this.save(cam, data);
    } catch (err) { console.warn("wp ring grab", err); }
    host.remove(); this._busy = false;
  },
});

class WpSecurity extends WpBase {
  getCardSize() { return 12; }
  setConfig(config) {
    super.setConfig(config);
    wpRingGrab.configure((config.cameras || []).filter((c) => c.type === "doorbell" && c.preview !== "camera").map((c) => ({ camera: c.camera, ding: c.ding, motion_event: c.motion_event })));
    if (!this._frameL) { this._frameL = (e) => this._showFrame(e.detail.camera); window.addEventListener("wp-frame", this._frameL); }
  }
  _showFrame(camera) {
    const i = this._cams().findIndex((c) => c.camera === camera), f = wpRingGrab.get(camera), img = this.shadowRoot?.getElementById(`img-${i}`);
    if (i < 0 || !f || !img) return;
    img.src = f.data; img.classList.add("ok"); this._sig = null; if (this._hass) this._render();
  }
  _grabbed(c) { return c.type === "doorbell" && c.preview !== "camera"; }
  set hass(h) { super.hass = h; if (this._vid) this._vid.hass = h; wpRingGrab.hass(h); }
  get hass() { return this._hass; }
  _cams() { return this._config.cameras || []; }
  _detIds(c) { return Object.entries(c.detections || {}).filter(([, id]) => id); }
  _ids() {
    const n = this._config.nvr || {};
    const ids = [n.record, n.push, this._config.theme_entity];
    for (const c of this._cams()) ids.push(c.camera, c.motion, c.record, c.manual_record, c.ir, c.day_night, c.day_night_state, c.ding, c.motion_event, c.last_activity, c.motion_switch, c.volume, ...this._detIds(c).map(([, id]) => id));
    return ids;
  }
  _extraSig() { return `${Math.floor(Date.now() / 60000)}|${this._histAt || ""}|${this._open ?? ""}`; }
  _firstHass() { this._start(); }
  connectedCallback() { if (this._hass && !this._timers) this._start(); }
  disconnectedCallback() { (this._timers || []).forEach(clearInterval); this._timers = null; this._closeLive(); }
  _start() {
    if (this._timers) return;
    const r = (this._config.refresh || 10) * 1000;
    this._timers = [setInterval(() => this._snaps(), r), setInterval(() => this._loadHist(), 3 * 60000), setInterval(() => { this._sig = null; this._render(); }, 60000)];
    setTimeout(() => this._snaps(), 50); this._loadHist();
  }

  /* ---------- snapshots (double-buffered so tiles never flash) ---------- */
  _snaps() {
    if (!this.isConnected || document.visibilityState === "hidden" || !this.shadowRoot) return;
    this._cams().forEach((c, i) => {
      const st = this._hass.states[c.camera], img = this.shadowRoot.getElementById(`img-${i}`);
      if (this._grabbed(c)) { if (img && !img.classList.contains("ok")) this._showFrame(c.camera); return; }
      if (!img || wpsBad(st) || !st.attributes.entity_picture) return;
      const url = `${st.attributes.entity_picture}&t=${Date.now()}`, pre = new Image();
      pre.onload = () => { img.src = url; img.classList.add("ok"); };
      pre.src = url;
    });
  }

  /* ---------- detection history (last 24 h) ---------- */
  async _loadHist() {
    const h = this._hass; if (!h?.callWS) return;
    const ids = [];
    this._cams().forEach((c) => { if (c.motion) ids.push(c.motion); this._detIds(c).forEach(([, id]) => ids.push(id)); if (c.ding) ids.push(c.ding); if (c.motion_event) ids.push(c.motion_event); });
    if (!ids.length) return;
    try {
      const since = new Date(Date.now() - 24 * 3600000);
      const r = await h.callWS({ type: "history/history_during_period", start_time: since.toISOString(), entity_ids: ids, minimal_response: true, no_attributes: true, significant_changes_only: false });
      const ev = [], lastMotion = {}, lastDet = {};
      const onTimes = (id) => { const rows = r[id] || [], out = []; for (let k = 1; k < rows.length; k++) if (rows[k].s === "on" && rows[k - 1].s !== "on") out.push(rows[k].lu * 1000); return out; };
      const evTimes = (id) => (r[id] || []).slice(1).filter((x) => x.s && x.s !== "unavailable" && x.s !== "unknown").map((x) => x.lu * 1000);
      this._cams().forEach((c, i) => {
        const typed = [];
        this._detIds(c).forEach(([type, id]) => onTimes(id).forEach((t) => typed.push({ t, i, type })));
        typed.forEach((e) => { if (!lastDet[i] || e.t > lastDet[i].t) lastDet[i] = e; });
        const motions = c.motion ? onTimes(c.motion) : c.motion_event ? evTimes(c.motion_event) : [];
        motions.forEach((t) => { lastMotion[i] = Math.max(lastMotion[i] || 0, t); if (!typed.some((e) => Math.abs(e.t - t) < 90000)) ev.push({ t, i, type: "motion" }); });
        ev.push(...typed);
        if (c.ding) evTimes(c.ding).forEach((t) => ev.push({ t, i, type: "ring" }));
      });
      ev.sort((a, b) => b.t - a.t);
      this._hist = { ev, lastMotion, lastDet };
      this._histAt = Date.now(); this._sig = null; if (this.shadowRoot) this._render();
    } catch (err) { console.warn("wp-security history", err); }
  }

  /* ---------- per-camera live state ---------- */
  _camInfo(c, i) {
    const h = this._hass, st = h.states[c.camera];
    const online = !wpsBad(st);
    const motionOn = c.motion && h.states[c.motion]?.state === "on";
    let det = null;
    this._detIds(c).forEach(([type, id]) => { if (h.states[id]?.state === "on") det = { type, t: Date.now() }; });
    det = det || this._hist?.lastDet[i] || null;
    let motionT = motionOn ? Date.now() : this._hist?.lastMotion[i] || null;
    if (!motionT && c.motion_event) motionT = wpsTs(h.states[c.motion_event]);
    if (!motionT && c.motion && !wpsBad(h.states[c.motion])) motionT = Date.parse(h.states[c.motion].last_changed);
    const ringT = c.ding ? wpsTs(h.states[c.ding]) : null;
    const rec = c.record ? h.states[c.record]?.state === "on" : null;
    const night = c.day_night_state ? h.states[c.day_night_state]?.state === "night" : null;
    return { online, motionOn, motionT, det, ringT, rec, night };
  }

  _render() {
    const h = this._hass, c = this._config, r = this.shadowRoot, cams = this._cams();
    const skel = `${this.hasAttribute("dark")}|${cams.length}`;
    if (this._skel !== skel) {
      this._skel = skel; this._parts = {};
      r.innerHTML = `<style>${WP_PALETTE}${WPS_CSS}</style>
      <div class="wrap">
        ${cams.map((cam, i) => `<section class="tile" data-live="${i}">
          <div class="shot"><div class="ph">${icon(cam.type === "doorbell" ? "lu:bell" : "lu:cctv")}</div><img id="img-${i}" alt=""><div class="ov" id="ov-${i}"></div></div>
          <div class="bar" id="bar-${i}"></div></section>`).join("")}
        <section class="sum" id="sum"></section>
      </div><div id="pop"></div>`;
      if (!this._wired) { this._wired = true; r.addEventListener("click", (e) => this._click(e)); }
      setTimeout(() => this._snaps(), 50);
      if (this._open != null) this._buildLive();
    }
    const set = (id, html) => { if (this._parts[id] !== html) { this._parts[id] = html; const el = r.getElementById(id); if (el) el.innerHTML = html; } };
    const infos = cams.map((cam, i) => this._camInfo(cam, i));
    cams.forEach((cam, i) => {
      const f = infos[i], bell = cam.type === "doorbell";
      const det = f.det ? WPS_TYPES[f.det.type] : null;
      const top = bell
        ? (f.ringT ? `<span class="pill">${icon("lu:bell-ring")}Ring ${wpsAgo(f.ringT)}</span>` : "")
        : f.motionOn ? `<span class="pill hot"><i></i>Motion now</span>` : f.motionT ? `<span class="pill">Motion ${wpsAgo(f.motionT)}</span>` : "";
      const bottom = bell
        ? (f.motionT ? `<span class="pill det">${icon("lu:activity")}Motion ${wpsAgo(f.motionT)}</span>` : "")
        : det ? `<span class="pill det">${icon(det.icon)}${det.label} ${wpsAgo(f.det.t)}</span>` : "";
      set(`ov-${i}`, `<span class="pill st ${f.online ? "on" : "off"}"><i></i>${f.online ? "Online" : "Offline"}</span>${top ? `<span class="tr">${top}</span>` : ""}${bottom ? `<span class="bl">${bottom}</span>` : ""}`);
      const sub = bell
        ? (() => { const fr = this._grabbed(cam) && wpRingGrab.get(cam.camera); return fr ? `Preview from ${wpsHM(fr.t)}` : "Preview on next ring"; })()
        : `${f.rec == null ? "" : f.rec ? `<b class="rec"><i></i>Recording</b>` : `<b class="norec">Not recording</b>`}${f.night == null ? "" : ` · ${f.night ? "Night" : "Day"}`}`;
      set(`bar-${i}`, `<span class="cico">${icon(bell ? "lu:bell" : "lu:cctv")}</span><div class="nm"><h3>${$esc(cam.name || h.states[cam.camera]?.attributes.friendly_name || cam.camera)}</h3><p>${sub}</p></div>
        <button class="live" data-live="${i}">${icon("lu:video")}Live</button>`);
    });
    set("sum", this._summary(infos));
    if (this._open != null) this._updateLive(infos);
    // a new detection → refresh the activity history shortly after
    const hot = cams.map((cam) => [cam.motion, cam.ding, cam.motion_event, ...this._detIds(cam).map(([, id]) => id)].filter(Boolean).map((id) => `${id}=${h.states[id]?.state}`).join(",")).join(";");
    if (this._hot !== undefined && hot !== this._hot) { clearTimeout(this._histDebounce); this._histDebounce = setTimeout(() => this._loadHist(), 4000); }
    this._hot = hot;
  }

  _summary(infos) {
    const h = this._hass, c = this._config, n = c.nvr || {}, cams = this._cams();
    const online = infos.filter((f) => f.online).length, nightN = infos.filter((f) => f.night).length;
    const recOn = n.record ? h.states[n.record]?.state === "on" : null, pushOn = n.push ? h.states[n.push]?.state === "on" : null;
    const ev = this._hist?.ev || [];
    const lastM = ev.find((e) => e.type !== "ring");
    const bellI = cams.findIndex((x) => x.type === "doorbell"), bell = cams[bellI];
    const midnight = new Date(); midnight.setHours(0, 0, 0, 0);
    const today = ev.filter((e) => e.t >= midnight.getTime());
    const count = (type) => today.filter((e) => e.type === type).length;
    const row = (ic, title, sub, right, attrs = "", cls = "") => `<div class="row ${cls}" ${attrs}><span class="ri">${icon(ic)}</span><div class="rt"><b>${title}</b><span>${sub}</span></div><div class="rv">${right}</div></div>`;
    const onoff = (v) => (v == null ? "–" : v ? `<span class="ok"><i></i>On</span>` : `<span class="warn">Off</span>`);
    const chev = icon("lu:chevron-right", "chev");
    const rows = [
      n.record ? row("lu:hard-drive", "NVR recording", "24/7 to the NVR", recOn ? `<span class="ok"><i></i>Recording</span>` : `<span class="warn">Not recording</span>`) : "",
      row("lu:cctv", "Cameras online", `${online}/${cams.length} online${nightN ? ` · ${nightN} in night vision` : ""}`, `<span class="${online === cams.length ? "ok" : "warn"}"><i></i>${online}/${cams.length}</span>`),
      row("lu:activity", "Last motion", lastM ? `${$esc(cams[lastM.i].name)} · ${wpsHM(lastM.t)}` : "Nothing in the last 24 h", lastM ? `${WPS_TYPES[lastM.type].label}${chev}` : "", lastM ? `data-live="${lastM.i}"` : ""),
      bell ? row("lu:bell", "Doorbell", infos[bellI].ringT ? `Last ring ${wpsHM(infos[bellI].ringT)}${Date.now() - infos[bellI].ringT > 86400000 ? ` · ${new Date(infos[bellI].ringT).toLocaleDateString("en-AU", { day: "numeric", month: "short" })}` : ""}` : "No rings recorded", bell.motion_switch ? `Motion ${onoff(h.states[bell.motion_switch]?.state === "on")}` : "", `data-live="${bellI}"`) : "",
      n.push ? row("lu:bell-ring", "Push alerts", "Reolink app notifications", onoff(pushOn), `data-more="${$esc(n.push)}"`) : "",
    ].join("");
    const stat = (type) => `<div class="stat"><span>${icon(WPS_TYPES[type].icon)}</span><b>${count(type)}</b><small>${WPS_TYPES[type].plural}</small></div>`;
    const recent = ev.slice(0, 14).map((e) => `<div class="ev" data-live="${e.i}"><span class="ei ${e.type}">${icon(WPS_TYPES[e.type].icon)}</span><div><b>${WPS_TYPES[e.type].label}</b><span>${$esc(cams[e.i].name)}</span></div><time>${wpsHM(e.t)}</time></div>`).join("");
    return `<div class="sh"><span class="si">${icon("lu:shield-check")}</span><div><h2>Security</h2><p>${$esc(c.subtitle || "Reolink & Ring")}</p></div>
        <span class="chip ${online === cams.length ? "good" : "bad"}"><i></i>${online === cams.length ? "All online" : `${cams.length - online} offline`}</span></div>
      <div class="rows">${rows}</div>
      <h5>Today</h5><div class="stats">${stat("person")}${stat("vehicle")}${stat("animal")}${bell ? stat("ring") : ""}</div>
      <h5>Recent activity <small>last 24 h</small></h5>
      <div class="evs">${recent || `<p class="none">${this._hist ? "No detections in the last 24 hours" : "Loading…"}</p>`}</div>`;
  }

  _click(e) {
    const x = e.target.closest("[data-x]"); if (x) { this._closeLive(); return; }
    const a = e.target.closest("[data-act]");
    if (a) {
      const [kind, id, val] = [a.dataset.act, a.dataset.id, a.dataset.val];
      if (kind === "toggle") this._call(id.split(".")[0], "toggle", { entity_id: id });
      else if (kind === "select") this._call("select", "select_option", { entity_id: id, option: val });
      else if (kind === "mute") { this._muted = !this._muted; const v = wpRingGrab.video(this._vid); if (v) { v.muted = this._muted; if (!this._muted) { v.volume = 1; v.play?.(); } } this._muteBtn(); }
      else if (kind === "num") { const s = this._hass.states[id]; const v = Math.min(+s.attributes.max, Math.max(+s.attributes.min, +s.state + +val)); this._call("number", "set_value", { entity_id: id, value: v }); }
      return;
    }
    const m = e.target.closest("[data-more]"); if (m && m.dataset.more) { wpeMoreInfo(this, m.dataset.more); return; }
    const l = e.target.closest("[data-live]"); if (l) { this._open = +l.dataset.live; this._buildLive(); }
  }

  /* ---------- live pop-up ---------- */
  async _buildLive() {
    const r = this.shadowRoot, i = this._open, cam = this._cams()[i]; if (!cam) return;
    const pop = r.getElementById("pop");
    pop.innerHTML = `<div class="scrim" data-x></div><div class="sheet">
      <div class="lh"><span class="cico">${icon(cam.type === "doorbell" ? "lu:bell" : "lu:cctv")}</span><div class="nm"><h3>${$esc(cam.name)}</h3><p id="p-sub"></p></div><button class="x" data-x>${icon("lu:x")}</button></div>
      <div class="lb"><div class="vidbox"><div class="vid" id="vid"></div><button class="mute" id="mute" data-act="mute"></button></div><div class="side" id="p-side"></div></div></div>`;
    this._parts["p-sub"] = this._parts["p-side"] = null; this._muted = false; this._muteBtn();
    this._vid?.remove(); this._vid = null;
    try {
      const helpers = await window.loadCardHelpers();
      if (this._open !== i) return;
      const el = helpers.createCardElement({ type: "picture-entity", entity: cam.live_camera || cam.camera, camera_view: "live", show_name: false, show_state: false, tap_action: { action: "none" }, hold_action: { action: "none" } });
      el.hass = this._hass; this._vid = el; r.getElementById("vid")?.appendChild(el);
      this._audio(el);
      if (this._grabbed(cam)) wpRingGrab.ready(el).then((v) => setTimeout(() => { if (this._vid === el && v) { const d = wpRingGrab.shoot(wpRingGrab.video(el)); if (d) wpRingGrab.save(cam.camera, d); } }, 1500));
    } catch (err) { console.warn("wp-security live", err); }
    this._sig = null; this._render();
  }
  // HA's camera stream starts muted; un-mute it (the tap on Live counts as the user gesture) and keep the speaker button in sync
  _audio(el) {
    clearInterval(this._audioT);
    this._audioT = setInterval(() => {
      if (this._vid !== el) { clearInterval(this._audioT); return; }
      const v = wpRingGrab.video(el); if (!v) return;
      if (v.muted !== !!this._muted) { v.muted = !!this._muted; if (!this._muted) { v.volume = 1; v.play?.().catch(() => { this._muted = true; v.muted = true; this._muteBtn(); }); } }
      this._muteBtn();
    }, 500);
  }
  _muteBtn() { const b = this.shadowRoot?.getElementById("mute"); if (!b) return; const h = `${icon(this._muted ? "lu:volume-x" : "lu:volume-2")}<span>${this._muted ? "Sound off" : "Sound on"}</span>`; if (b._h !== h) { b._h = h; b.innerHTML = h; } }
  _closeLive() { clearInterval(this._audioT); this._open = null; this._vid?.remove(); this._vid = null; const pop = this.shadowRoot?.getElementById("pop"); if (pop) pop.innerHTML = ""; }
  _updateLive(infos) {
    const h = this._hass, i = this._open, cam = this._cams()[i], f = infos[i]; if (!cam) return;
    const set = (id, html) => { if (this._parts[id] !== html) { this._parts[id] = html; const el = this.shadowRoot.getElementById(id); if (el) el.innerHTML = html; } };
    const bell = cam.type === "doorbell";
    set("p-sub", `<span class="pill st ${f.online ? "on" : "off"}"><i></i>${f.online ? "Online" : "Offline"}</span>${!bell && f.rec != null ? (f.rec ? `<span class="pill rec"><i></i>Recording</span>` : `<span class="pill">Not recording</span>`) : ""}${!bell && f.night != null ? `<span class="pill">${icon(f.night ? "lu:moon" : "lu:sun")}${f.night ? "Night vision" : "Day mode"}</span>` : ""}`);
    const tog = (id, title, sub, ic) => { if (!id || !h.states[id]) return ""; const on = h.states[id].state === "on"; return `<button class="ctl ${on ? "on" : ""}" data-act="toggle" data-id="${$esc(id)}"><span class="ri">${icon(ic)}</span><div class="rt"><b>${title}</b><span>${sub}</span></div><span class="sw"><i></i></span></button>`; };
    let ctl = "";
    if (bell) {
      ctl += tog(cam.motion_switch, "Motion alerts", "Ring motion detection", "lu:activity");
      const v = cam.volume && h.states[cam.volume];
      if (v && !wpsBad(v)) ctl += `<div class="ctl"><span class="ri">${icon("lu:volume-2")}</span><div class="rt"><b>Chime volume</b><span>${Math.round(+v.state)} of ${Math.round(+v.attributes.max)}</span></div><div class="pm"><button data-act="num" data-id="${$esc(cam.volume)}" data-val="-1">${icon("lu:minus")}</button><button data-act="num" data-id="${$esc(cam.volume)}" data-val="1">${icon("lu:plus")}</button></div></div>`;
    } else {
      ctl += tog(cam.ir, "Infrared lights", "Night vision illumination", "lu:eye");
      const s = cam.day_night && h.states[cam.day_night];
      if (s && !wpsBad(s)) ctl += `<div class="ctl col"><div class="rt"><b>Day / night mode</b></div><div class="seg">${(s.attributes.options || []).map((o) => `<button class="${o === s.state ? "on" : ""}" data-act="select" data-id="${$esc(cam.day_night)}" data-val="${$esc(o)}">${$esc(o.replace(/_/g, " ").replace(/^./, (m) => m.toUpperCase()))}</button>`).join("")}</div></div>`;
    }
    const mine = (this._hist?.ev || []).filter((e) => e.i === i).slice(0, 7);
    set("p-side", `<h5>Controls</h5><div class="ctls">${ctl || `<p class="none">No controls for this camera</p>`}</div>
      <h5>Recent activity</h5><div class="evs">${mine.map((e) => `<div class="ev"><span class="ei ${e.type}">${icon(WPS_TYPES[e.type].icon)}</span><div><b>${WPS_TYPES[e.type].label}</b><span>${wpsAgo(e.t)}</span></div><time>${wpsHM(e.t)}</time></div>`).join("") || `<p class="none">Nothing in the last 24 hours</p>`}</div>`);
  }
}

const WPS_CSS = `
  :host { display:block; height:100%; } * { box-sizing:border-box; }
  .wrap { height:100%; display:grid; gap: var(--wp-gap); grid-template-columns: repeat(3, minmax(0, 1fr)) minmax(0, .92fr); grid-template-rows: repeat(2, minmax(0, 1fr)); }
  .tile { position:relative; display:flex; flex-direction:column; min-width:0; min-height:0; background: var(--wp-card); border:1px solid var(--wp-border); border-radius: var(--wp-radius); box-shadow: var(--wp-shadow); overflow:hidden; cursor:pointer; }
  .shot { position:relative; flex: 1 1 0; min-height: 0; background: #0b1220; overflow:hidden; }
  .shot img { position:absolute; inset:0; width:100%; height:100%; object-fit: cover; opacity: 0; transition: opacity .4s; } .shot img.ok { opacity: 1; } .shot:has(img.ok) .ph { display:none; }
  .shot .ph { position:absolute; inset:0; display:grid; place-items:center; color: #334155; --mdc-icon-size: 46px; --lu-stroke: 1.4; }
  .ov { position:absolute; inset: 0; pointer-events:none; }
  .pill { display:inline-flex; align-items:center; gap: 6px; padding: 5px 11px; border-radius: 999px; font-size: 13px; font-weight: 700; color: #fff; background: rgba(8,12,24,.62); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); white-space: nowrap; --mdc-icon-size: 14px; --lu-stroke: 2.4; }
  .pill i { width: 8px; height: 8px; border-radius: 50%; background: #94a3b8; } .pill.st.on i { background: #22c55e; box-shadow: 0 0 6px #22c55e; } .pill.st.off { background: rgba(185,28,28,.8); } .pill.st.off i { background: #fff; }
  .pill.hot { background: rgba(220,38,38,.85); } .pill.hot i { background: #fff; animation: wpsp 1.2s infinite; } @keyframes wpsp { 50% { opacity: .2; } }
  .pill.rec i { background: #ef4444; animation: wpsp 1.6s infinite; }
  .ov > .pill.st { position:absolute; top: 10px; left: 10px; } .ov .tr { position:absolute; top: 10px; right: 10px; } .ov .bl { position:absolute; bottom: 10px; left: 10px; }
  .bar { flex: none; display:flex; align-items:center; gap: 12px; padding: 12px 14px; }
  .cico { flex:none; width: 40px; height: 40px; border-radius: 12px; display:grid; place-items:center; background: var(--wp-card-2); border: 1px solid var(--wp-border); color: var(--wp-muted); --mdc-icon-size: 21px; --lu-stroke: 1.9; }
  .nm { flex:1; min-width:0; } .nm h3 { margin:0; font-size: 17px; font-weight: 750; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
  .nm p { margin: 2px 0 0; font-size: 13px; color: var(--wp-muted); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; display:flex; gap: 6px; align-items:center; }
  .rec { display:inline-flex; align-items:center; gap: 5px; font-weight: 700; color: var(--wp-text); } .rec i { width: 7px; height: 7px; border-radius: 50%; background: #ef4444; } .norec { color: #f59e0b; font-weight: 700; }
  .live { all: unset; cursor:pointer; flex:none; display:inline-flex; align-items:center; gap: 7px; padding: 9px 16px; border-radius: 12px; background: var(--wp-accent); color: var(--wp-accent-text); font-size: 15px; font-weight: 700; box-shadow: 0 0 16px rgba(59,130,246,.45); --mdc-icon-size: 17px; --lu-stroke: 2.2; }
  /* summary */
  .sum { grid-column: 4; grid-row: 1 / -1; display:flex; flex-direction:column; min-height:0; padding: 16px 16px 12px; background: var(--wp-card); border:1px solid var(--wp-border); border-radius: var(--wp-radius); box-shadow: var(--wp-shadow); overflow:hidden; }
  .sh { display:flex; align-items:center; gap: 11px; flex:none; } .sh > div { flex:1; min-width:0; }
  .si { color: var(--wp-accent); --mdc-icon-size: 28px; --lu-stroke: 1.9; display:flex; } .sh h2 { margin:0; font-size: 21px; font-weight: 750; } .sh p { margin: 1px 0 0; font-size: 13px; color: var(--wp-muted); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
  .chip { display:inline-flex; align-items:center; gap: 6px; padding: 4px 10px; border-radius: 999px; font-size: 12.5px; font-weight: 700; white-space:nowrap; }
  .chip i { width: 7px; height: 7px; border-radius: 50%; } .chip.good { color: #16a34a; background: rgba(34,197,94,.14); } .chip.good i { background: #22c55e; } .chip.bad { color: #d97706; background: rgba(245,158,11,.16); } .chip.bad i { background: #f59e0b; }
  .rows { flex:none; display:flex; flex-direction:column; gap: 7px; margin-top: 12px; }
  .row, .ctl { display:flex; align-items:center; gap: 11px; padding: 9px 11px; border-radius: 14px; background: var(--wp-card-2); border: 1px solid var(--wp-border); min-width:0; }
  .row[data-more], .row[data-live] { cursor:pointer; }
  .ri { flex:none; width: 30px; height: 30px; border-radius: 9px; display:grid; place-items:center; color: var(--wp-accent); background: color-mix(in srgb, var(--wp-accent) 13%, transparent); --mdc-icon-size: 17px; --lu-stroke: 2; }
  .rt { flex:1; min-width:0; display:flex; flex-direction:column; } .rt b { font-size: 14px; font-weight: 700; } .rt span { font-size: 12px; color: var(--wp-muted); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
  .rv { flex:none; display:flex; align-items:center; gap: 4px; font-size: 13.5px; font-weight: 700; white-space:nowrap; } .rv .chev { --mdc-icon-size: 15px; color: var(--wp-muted); }
  .ok, .warn { display:inline-flex; align-items:center; gap: 5px; } .ok { color: #16a34a; } .ok i { width: 7px; height: 7px; border-radius: 50%; background: #22c55e; } .warn { color: #d97706; }
  :host([dark]) .ok { color: #4ade80; } :host([dark]) .chip.good { color: #4ade80; }
  h5 { margin: 14px 2px 7px; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; color: var(--wp-muted); flex:none; } h5 small { text-transform:none; letter-spacing:0; font-weight: 600; opacity: .8; }
  .stats { flex:none; display:grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 6px; }
  .stat { display:flex; flex-direction:column; align-items:center; padding: 8px 4px 7px; border-radius: 14px; background: var(--wp-card-2); border: 1px solid var(--wp-border); }
  .stat span { color: var(--wp-muted); --mdc-icon-size: 17px; --lu-stroke: 2; display:flex; } .stat b { font-size: 20px; font-weight: 800; line-height: 1.2; } .stat small { font-size: 11px; color: var(--wp-muted); font-weight: 600; }
  .evs { flex: 1 1 0; min-height: 0; overflow:hidden; display:flex; flex-direction:column; gap: 2px; }
  .ev { flex:none; display:flex; align-items:center; gap: 10px; padding: 6px 4px; border-bottom: 1px solid var(--wp-border); cursor:pointer; }
  .ev > div { flex:1; min-width:0; display:flex; flex-direction:column; } .ev b { font-size: 13.5px; font-weight: 700; } .ev span:not(.ei) { font-size: 12px; color: var(--wp-muted); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
  .ev time { font-size: 12.5px; font-weight: 600; color: var(--wp-muted); font-variant-numeric: tabular-nums; }
  .ei { flex:none; width: 28px; height: 28px; border-radius: 9px; display:grid; place-items:center; --mdc-icon-size: 15px; --lu-stroke: 2.2; color: #94a3b8; background: rgba(148,163,184,.14); }
  .ei.person { color: #38bdf8; background: rgba(56,189,248,.14); } .ei.vehicle { color: #a78bfa; background: rgba(167,139,250,.15); } .ei.animal { color: #f59e0b; background: rgba(245,158,11,.15); } .ei.ring { color: #22c55e; background: rgba(34,197,94,.15); }
  .none { margin: 6px 2px; font-size: 13.5px; color: var(--wp-muted); }
  /* live pop-up */
  .scrim { position: fixed; inset: 0; z-index: 30; background: rgba(3,8,20,.6); backdrop-filter: blur(6px); animation: wpsf .2s; } @keyframes wpsf { from { opacity: 0; } }
  .sheet { position: fixed; z-index: 31; inset: 3vh 3vw; display:flex; flex-direction:column; background: var(--wp-card); border: 1px solid var(--wp-border); border-radius: 28px; box-shadow: 0 30px 80px rgba(0,0,0,.45); overflow:hidden; animation: wpsf .2s; }
  .lh { flex:none; display:flex; align-items:center; gap: 12px; padding: 14px 16px 12px 20px; } .lh .nm h3 { font-size: 21px; } .lh .nm p { margin-top: 5px; overflow: visible; }
  .lh .pill { color: var(--wp-text); background: var(--wp-card-2); border: 1px solid var(--wp-border); backdrop-filter: none; }
  .x { all: unset; cursor:pointer; width: 42px; height: 42px; border-radius: 50%; display:grid; place-items:center; background: var(--wp-card-2); border: 1px solid var(--wp-border); --mdc-icon-size: 22px; --lu-stroke: 2.2; }
  .lb { flex: 1 1 0; min-height: 0; display:grid; grid-template-columns: minmax(0, 1fr) 330px; gap: 16px; padding: 0 16px 16px; }
  .vidbox { position:relative; min-height:0; display:flex; align-items:center; justify-content:center; background: #000; border-radius: 20px; overflow:hidden; }
  .mute { all: unset; cursor:pointer; position:absolute; right: 14px; bottom: 14px; z-index: 2; display:inline-flex; align-items:center; gap: 7px; padding: 9px 14px; border-radius: 999px; color:#fff; background: rgba(8,12,24,.62); backdrop-filter: blur(8px); font-size: 14px; font-weight: 700; --mdc-icon-size: 18px; --lu-stroke: 2.2; }
  .vid { width: 100%; max-height: 100%; } .vid > * { display:block; --ha-card-border-radius: 0; --ha-card-border-width: 0; --ha-card-box-shadow: none; }
  .side { min-height:0; display:flex; flex-direction:column; overflow:hidden; } .side h5:first-child { margin-top: 2px; }
  .ctls { flex:none; display:flex; flex-direction:column; gap: 7px; }
  .ctl { all: unset; box-sizing:border-box; display:flex; align-items:center; gap: 11px; padding: 10px 12px; border-radius: 14px; background: var(--wp-card-2); border: 1px solid var(--wp-border); cursor:pointer; }
  .ctl.col { flex-direction:column; align-items:stretch; gap: 8px; cursor: default; }
  .sw { flex:none; width: 42px; height: 24px; border-radius: 99px; background: var(--wp-track); position:relative; transition: background .2s; } .sw i { position:absolute; top: 3px; left: 3px; width: 18px; height: 18px; border-radius: 50%; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,.3); transition: left .2s; }
  .ctl.on .sw { background: var(--wp-accent); } .ctl.on .sw i { left: 21px; }
  .seg { display:flex; padding: 3px; gap: 3px; border-radius: 12px; background: var(--wp-track); } .seg button { all: unset; flex: 1; text-align:center; cursor:pointer; padding: 7px 4px; border-radius: 9px; font-size: 13px; font-weight: 700; color: var(--wp-muted); }
  .seg button.on { background: var(--wp-card); color: var(--wp-text); box-shadow: 0 1px 4px rgba(0,0,0,.18); }
  .pm { display:flex; gap: 6px; } .pm button { all: unset; cursor:pointer; width: 34px; height: 34px; border-radius: 10px; display:grid; place-items:center; background: var(--wp-card); border: 1px solid var(--wp-border); --mdc-icon-size: 17px; --lu-stroke: 2.4; }
`;
customElements.define("wp-security", WpSecurity);
