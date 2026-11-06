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
```

## Photos (optional)
Images are not shipped in this repo; put your own under `/config/www/...` and reference them as `/local/...`.

- `wp-power-flow`: `image: {light: /local/..., dark: /local/..., aspect: 1.777}`. Optional `nodes` (`solar`, `grid`, `home`, `ev` as `[x%, y%]` on the photo) and `labels` (same keys, label box position) place the flow lines. Without `image` the built-in illustration is used.
- `wp-car`: `image: /local/...` (transparent PNG, side profile).
- `wp-side`: `heat_pump_image: /local/...` shows a banner in the climate section; `climate_title` overrides "Climate & Heat Pumps".

## Build
`python3 tools/build.py` concatenates `src/*.js` into `dist/wall-panel-cards.js`.
