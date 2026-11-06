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
