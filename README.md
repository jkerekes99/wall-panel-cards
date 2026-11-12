# Wall Panel Cards

Custom Lovelace cards for a landscape wall-mounted tablet dashboard (built for a 13.1" Galaxy Tab running Fully Kiosk). Local-only, no external dependencies.

| Card | Purpose |
|---|---|
| `custom:wp-page` | Full-screen shell: tab bar, weather, 12-hour clock, light/dark palette, CSS grid of child cards |
| `custom:wp-climate` | Whole-home and per-room split-system control (mode, setpoint, fan, vanes, presets, timers, schedules) |
| `custom:wp-power-flow` | Animated live power flow (solar, grid, home, EV) with today's energy tiles from recorder statistics |
| `custom:wp-side` | Climate summary, hot water, people and conditional TV controls with remote |
| `custom:wp-car` | EV summary strip |

## Install
Add this repository to Home Assistant's Marketplace (HACS) as a custom **Dashboard** repository, then install. The resource is registered automatically.

## Light / dark
Set `theme` (`auto` | `light` | `dark`) or `theme_entity` (an `input_select` with Auto/Light/Dark) on `wp-page`; child `wp-*` cards inherit it.

## Theme
`theme_entity` (an input_select) or `theme:` picks `Auto` (HA/device dark mode), `Light`, `Dark` or `Sun` (dark while `sun.sun` is below the horizon; add `sun_elevation: -4` to switch at that solar elevation instead).

Tapping the clock flips light/dark on that device until the automatic choice next changes (e.g. the next sunrise or sunset in Sun mode); tap again to go back to automatic.

## Weather dialog (wp-page)
`weather_popup: dialog` opens a built-in forecast dialog (current conditions, next 24 hours, 7 days) sized to its content; `weather_hourly:` names a separate hourly weather entity if the main one only has daily forecasts. Any other `weather_popup` value is navigated to as a hash (e.g. a Bubble pop-up).

## Status chips (wp-page)
`chips:` adds count chips to the top bar; tapping one opens a list of what is on/open.
```yaml
chips:
  - name: Lights on
    entity: sensor.lights_on_count   # number shown on the chip
    icon: mdi:lightbulb-group
    color: "#fbbf24"
    unit: "on"
    empty: All lights are off
    control: true                     # per-item "Turn off" + "Turn all off"
    items: {domain: light}            # or {entities: [...]} or {group: binary_sensor.all_doors}; optional exclude: [...]
    count_items: true                 # count the (filtered) list instead of using entity
    group_by_area: true               # section the list by area
```

## Climate schedules (wp-climate)
The Schedules buttons open a built-in scheduler on top of the [Scheduler integration](https://github.com/nielsfaber/scheduler-component) (required): per-room or all-rooms lists with pause/delete, and a form for Once (today/tomorrow) or Repeat (weekdays) at a time, turning the AC off or on with a mode and temperature. One-off schedules delete themselves after running.

## Photos (optional)
Images are not shipped in this repo; put your own under `/config/www/...` and reference them as `/local/...`.

- `wp-power-flow`: `image: {light, dark, car_light, car_dark, aspect, focus_y}` (paths under `/local/...`). With `car_plugged: binary_sensor...` the `car_*` photos and the EV flow show only while the car is plugged in (cross-fade); `focus_y` (0–100) picks which part of a cropped photo stays in view. Optional `nodes` (`solar`, `grid`, `home`, `ev` as `[x%, y%]` on the photo) and `labels` (same keys, label box position) place the flow lines. Without `image` the built-in illustration is used.
- `wp-car`: `image: /local/...` (transparent PNG, side profile).
- `wp-side`: `heat_pump_image: /local/...` shows a banner in the climate section; `climate_title` overrides "Climate & Heat Pumps".

## Build
`python3 tools/build.py` concatenates `src/*.js` into `dist/wall-panel-cards.js`.

## Icons
`icon:` values may use `lu:<name>` for the embedded Lucide line icons (see `src/icons.js`; regenerate with `tools/gen_icons.py`). Lucide is ISC-licensed, see `LICENSE-lucide`.


## wp-energy (Energy tab)

```yaml
type: custom:wp-energy
source: Live from the PV inverter       # subtitle under "Current Flow"
ev_name: EV charger
default_view: devices                   # or flow
scale_max: 10000                        # device bars use a log scale up to this many watts
power: { solar: sensor.x, grid_import: sensor.x, grid_export: sensor.x, home: sensor.x, ev: sensor.x }
energy: { generation: sensor.x, import: sensor.x, export: sensor.x, import_cost: sensor.x, export_comp: sensor.x }
devices:                                # shown in this order on the Devices switch
  - { name: Fridge, entity: sensor.fridge_power, icon: "lu:refrigerator", color: "#2dd4bf" }
```

## wp-solar (Solar tab)

```yaml
type: custom:wp-solar
power: sensor.pv_inverter_active_generation
array_kwp: 13.05
generation: sensor.pv_inverter_daily_generation
export: sensor.pv_inverter_daily_export_to_grid
image: { dark: /local/wall-panel/img/solar-night.jpg, light: /local/wall-panel/img/solar-day.jpg }   # optional; a single path also works
forecast: { today: sensor.x, remaining: sensor.x, tomorrow: sensor.x, now: sensor.x, peak_tomorrow: sensor.x, days: [sensor.d2, ...] }
```

## wp-security (Security tab)

```yaml
type: custom:wp-security
refresh: 10                      # seconds between snapshot refreshes
nvr: { record: switch.x_record, push: switch.x_push_notifications }
cameras:                         # 6 tiles in a 3×2 grid; summary panel on the right
  - name: Driveway
    camera: camera.x
    motion: binary_sensor.x_motion
    detections: { person: binary_sensor.x_person, vehicle: binary_sensor.x_vehicle, animal: binary_sensor.x_animal }
    record: switch.x_record
    manual_record: switch.x_manual_record
    ir: switch.x_infra_red_lights_in_night_mode
    day_night: select.x_day_night_mode
    day_night_state: sensor.x_day_night_state
  - name: Doorbell
    type: doorbell
    camera: camera.doorbell_live_view
    ding: event.doorbell_ding
    motion_event: event.doorbell_motion
    motion_switch: switch.doorbell_motion_detection
    volume: number.doorbell_volume
```

Security notes: `live_camera` (optional) is the stream the Live pop-up opens (e.g. the Reolink *Balanced* entity) while `camera` feeds the tile snapshots. Doorbell tiles (`type: doorbell`) take their preview from a short off-screen Live View after each ring/motion event (stored on the device); set `preview: camera` to use the camera's own snapshot instead.

## wp-ev (Cars tab)

Car panel (battery, range, location, doors, cabin/outside temperature, charge limit, sentry, tyres, odometer, wake & refresh, climate ± / start / stop) plus an evcc panel (charge rate, grid-charging price-limit presets, session and all-time stats). Keys: `car: { battery, range, charging, plugged, asleep, location, lock, inside_temp, outside_temp, charge_limit, sentry, odometer, tyres: [..], climate, wake, refresh, last_update, polling_interval }`, `evcc: { charge_power, charge_current, phases, charging, connected, price_limit, grid_price, smart_cost_active, mode, pv_status, session_energy, session_solar, session_cost, session_price_kwh, limit_soc, remaining, total_energy, avg_price, total_solar }`, optional `price_presets: [{ value: 0.05, label, sub }]`.
