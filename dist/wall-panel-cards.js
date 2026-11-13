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
"tv": "<rect width=\"20\" height=\"15\" x=\"2\" y=\"7\" rx=\"2\" ry=\"2\" /><polyline points=\"17 2 12 7 7 2\" />",
"leaf": "<path d=\"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z\" /><path d=\"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12\" />",
"circle-dollar-sign": "<circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8\" /><path d=\"M12 18V6\" />",
"dollar-sign": "<line x1=\"12\" x2=\"12\" y1=\"2\" y2=\"22\" /><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\" />",
"clock": "<circle cx=\"12\" cy=\"12\" r=\"10\" /><polyline points=\"12 6 12 12 16 14\" />",
"gauge": "<path d=\"m12 14 4-4\" /><path d=\"M3.34 19a10 10 0 1 1 17.32 0\" />",
"sunrise": "<path d=\"M12 2v8\" /><path d=\"m4.93 10.93 1.41 1.41\" /><path d=\"M2 18h2\" /><path d=\"M20 18h2\" /><path d=\"m19.07 10.93-1.41 1.41\" /><path d=\"M22 22H2\" /><path d=\"m8 6 4-4 4 4\" /><path d=\"M16 18a4 4 0 0 0-8 0\" />",
"sunset": "<path d=\"M12 10V2\" /><path d=\"m4.93 10.93 1.41 1.41\" /><path d=\"M2 18h2\" /><path d=\"M20 18h2\" /><path d=\"m19.07 10.93-1.41 1.41\" /><path d=\"M22 22H2\" /><path d=\"m16 6-4 4-4-4\" /><path d=\"M16 18a4 4 0 0 0-8 0\" />",
"server": "<rect width=\"20\" height=\"8\" x=\"2\" y=\"2\" rx=\"2\" ry=\"2\" /><rect width=\"20\" height=\"8\" x=\"2\" y=\"14\" rx=\"2\" ry=\"2\" /><line x1=\"6\" x2=\"6.01\" y1=\"6\" y2=\"6\" /><line x1=\"6\" x2=\"6.01\" y1=\"18\" y2=\"18\" />",
"air-vent": "<path d=\"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\" /><path d=\"M6 8h12\" /><path d=\"M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12\" /><path d=\"M6.6 15.6A2 2 0 1 0 10 17v-5\" />",
"shower-head": "<path d=\"m4 4 2.5 2.5\" /><path d=\"M13.5 6.5a4.95 4.95 0 0 0-7 7\" /><path d=\"M15 5 5 15\" /><path d=\"M14 17v.01\" /><path d=\"M10 16v.01\" /><path d=\"M13 13v.01\" /><path d=\"M16 10v.01\" /><path d=\"M11 20v.01\" /><path d=\"M17 14v.01\" /><path d=\"M20 11v.01\" />",
"chef-hat": "<path d=\"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z\" /><path d=\"M6 17h12\" />",
"cooking-pot": "<path d=\"M2 12h20\" /><path d=\"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8\" /><path d=\"m4 8 16-4\" /><path d=\"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8\" />",
"refrigerator": "<path d=\"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z\" /><path d=\"M5 10h14\" /><path d=\"M15 7v6\" />",
"utensils-crossed": "<path d=\"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8\" /><path d=\"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7\" /><path d=\"m2.1 21.8 6.4-6.3\" /><path d=\"m19 5-7 7\" />",
"shirt": "<path d=\"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z\" />",
"washing-machine": "<path d=\"M3 6h3\" /><path d=\"M17 6h.01\" /><rect width=\"18\" height=\"20\" x=\"3\" y=\"2\" rx=\"2\" /><circle cx=\"12\" cy=\"13\" r=\"5\" /><path d=\"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5\" />",
"activity": "<path d=\"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2\" />",
"list": "<path d=\"M3 12h.01\" /><path d=\"M3 18h.01\" /><path d=\"M3 6h.01\" /><path d=\"M8 12h13\" /><path d=\"M8 18h13\" /><path d=\"M8 6h13\" />",
"chart-column": "<path d=\"M3 3v16a2 2 0 0 0 2 2h16\" /><path d=\"M18 17V9\" /><path d=\"M13 17V5\" /><path d=\"M8 17v-3\" />",
"sun-medium": "<circle cx=\"12\" cy=\"12\" r=\"4\" /><path d=\"M12 3v1\" /><path d=\"M12 20v1\" /><path d=\"M3 12h1\" /><path d=\"M20 12h1\" /><path d=\"m18.364 5.636-.707.707\" /><path d=\"m6.343 17.657-.707.707\" /><path d=\"m5.636 5.636.707.707\" /><path d=\"m17.657 17.657.707.707\" />",
"cloud-sun": "<path d=\"M12 2v2\" /><path d=\"m4.93 4.93 1.41 1.41\" /><path d=\"M20 12h2\" /><path d=\"m19.07 4.93-1.41 1.41\" /><path d=\"M15.947 12.65a4 4 0 0 0-5.925-4.128\" /><path d=\"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z\" />",
"microwave": "<rect width=\"20\" height=\"15\" x=\"2\" y=\"4\" rx=\"2\" /><rect width=\"8\" height=\"7\" x=\"6\" y=\"8\" rx=\"1\" /><path d=\"M18 8v7\" /><path d=\"M6 19v2\" /><path d=\"M18 19v2\" />",
"layers": "<path d=\"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z\" /><path d=\"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65\" /><path d=\"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65\" />",
"trending-up": "<polyline points=\"22 7 13.5 15.5 8.5 10.5 2 17\" /><polyline points=\"16 7 22 7 22 13\" />",
"trending-down": "<polyline points=\"22 17 13.5 8.5 8.5 13.5 2 7\" /><polyline points=\"16 17 22 17 22 11\" />",
"sparkles": "<path d=\"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z\" /><path d=\"M20 3v4\" /><path d=\"M22 5h-4\" /><path d=\"M4 17v2\" /><path d=\"M5 18H3\" />",
"battery": "<rect width=\"16\" height=\"10\" x=\"2\" y=\"7\" rx=\"2\" ry=\"2\" /><line x1=\"22\" x2=\"22\" y1=\"11\" y2=\"13\" />",
"calendar": "<path d=\"M8 2v4\" /><path d=\"M16 2v4\" /><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\" /><path d=\"M3 10h18\" />",
"cctv": "<path d=\"M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97\" /><path d=\"M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z\" /><path d=\"M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15\" /><path d=\"M2 21v-4\" /><path d=\"M7 9h.01\" />",
"bell": "<path d=\"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9\" /><path d=\"M10.3 21a1.94 1.94 0 0 0 3.4 0\" />",
"bell-ring": "<path d=\"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9\" /><path d=\"M10.3 21a1.94 1.94 0 0 0 3.4 0\" /><path d=\"M4 2C2.8 3.7 2 5.7 2 8\" /><path d=\"M22 8c0-2.3-.8-4.3-2-6\" />",
"bell-off": "<path d=\"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5\" /><path d=\"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7\" /><path d=\"M10.3 21a1.94 1.94 0 0 0 3.4 0\" /><path d=\"m2 2 20 20\" />",
"video": "<path d=\"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5\" /><rect x=\"2\" y=\"6\" width=\"14\" height=\"12\" rx=\"2\" />",
"circle-dot": "<circle cx=\"12\" cy=\"12\" r=\"10\" /><circle cx=\"12\" cy=\"12\" r=\"1\" />",
"paw-print": "<circle cx=\"11\" cy=\"4\" r=\"2\" /><circle cx=\"18\" cy=\"8\" r=\"2\" /><circle cx=\"20\" cy=\"16\" r=\"2\" /><path d=\"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z\" />",
"person-standing": "<circle cx=\"12\" cy=\"5\" r=\"1\" /><path d=\"m9 20 3-6 3 6\" /><path d=\"m6 8 6 2 6-2\" /><path d=\"M12 10v4\" />",
"history": "<path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\" /><path d=\"M3 3v5h5\" /><path d=\"M12 7v5l4 2\" />",
"hard-drive": "<line x1=\"22\" x2=\"2\" y1=\"12\" y2=\"12\" /><path d=\"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\" /><line x1=\"6\" x2=\"6.01\" y1=\"16\" y2=\"16\" /><line x1=\"10\" x2=\"10.01\" y1=\"16\" y2=\"16\" />",
"moon": "<path d=\"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z\" />",
"eye": "<path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\" /><circle cx=\"12\" cy=\"12\" r=\"3\" />",
"scan-eye": "<path d=\"M3 7V5a2 2 0 0 1 2-2h2\" /><path d=\"M17 3h2a2 2 0 0 1 2 2v2\" /><path d=\"M21 17v2a2 2 0 0 1-2 2h-2\" /><path d=\"M7 21H5a2 2 0 0 1-2-2v-2\" /><circle cx=\"12\" cy=\"12\" r=\"1\" /><path d=\"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0\" />",
"x": "<path d=\"M18 6 6 18\" /><path d=\"m6 6 12 12\" />",
"shield-check": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\" /><path d=\"m9 12 2 2 4-4\" />",
"minus": "<path d=\"M5 12h14\" />",
"plus": "<path d=\"M5 12h14\" /><path d=\"M12 5v14\" />",
"wifi-off": "<path d=\"M12 20h.01\" /><path d=\"M8.5 16.429a5 5 0 0 1 7 0\" /><path d=\"M5 12.859a10 10 0 0 1 5.17-2.69\" /><path d=\"M19 12.859a10 10 0 0 0-2.007-1.523\" /><path d=\"M2 8.82a15 15 0 0 1 4.177-2.643\" /><path d=\"M22 8.82a15 15 0 0 0-11.288-3.764\" /><path d=\"m2 2 20 20\" />",
"volume-2": "<path d=\"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z\" /><path d=\"M16 9a5 5 0 0 1 0 6\" /><path d=\"M19.364 18.364a9 9 0 0 0 0-12.728\" />",
"volume-x": "<path d=\"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z\" /><line x1=\"22\" x2=\"16\" y1=\"9\" y2=\"15\" /><line x1=\"16\" x2=\"22\" y1=\"9\" y2=\"15\" />",
"lock": "<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\" /><path d=\"M7 11V7a5 5 0 0 1 10 0v4\" />",
"lock-open": "<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\" /><path d=\"M7 11V7a5 5 0 0 1 9.9-1\" />",
"route": "<circle cx=\"6\" cy=\"19\" r=\"3\" /><path d=\"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15\" /><circle cx=\"18\" cy=\"5\" r=\"3\" />",
"cloud-upload": "<path d=\"M12 13v8\" /><path d=\"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242\" /><path d=\"m8 17 4-4 4 4\" />"
};

/* Wall Panel cards for Home Assistant — wp-page (shell + nav) and wp-climate.
 * Joshua's 13.1" Galaxy Tab S10 FE+ wall panel. Local-only, no external deps. */
const WP_VERSION = "0.9.5";

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
    return [...(c.rooms || []).flatMap((r) => [r.climate, r.temperature, r.target_entity]), ...(c.hot_water ? Object.values(c.hot_water) : []), ...(c.people || []).map((p) => p.entity), c.tv?.media_player, c.theme_entity];
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
    return `Live power by circuit${other > 30 ? ` · ${Math.round(other).toLocaleString("en-AU")} W on other circuits` : ""}`;
  }
  _devices(total) {
    const h = this._hass, c = this._config, max = c.scale_max || 10000;
    const L = (w) => (w <= 0 ? 0 : Math.min(1, Math.log10(1 + w) / Math.log10(1 + max)));
    const fmtW = (w) => (w == null ? "–" : `${Math.round(w).toLocaleString("en-AU")} W`);   // always watts on this view
    // biggest draw first (unavailable sensors last); ties keep the configured order
    const rows = (c.devices || []).map((d, k) => { const w = stateNum(h, d.entity); return { ...d, k, w: w == null ? null : Math.max(0, w) }; })
      .sort((a, b) => (b.w ?? -1) - (a.w ?? -1) || a.k - b.k);
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
if (!customElements.get("wp-energy")) customElements.define("wp-energy", WpEnergy);

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
if (!customElements.get("wp-solar")) customElements.define("wp-solar", WpSolar);


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
  set hass(h) { super.hass = h; if (this._vid) { this._vid.hass = h; if (this._vid._wpEntity && h.states[this._vid._wpEntity] !== this._vid.stateObj) this._vid.stateObj = h.states[this._vid._wpEntity]; } wpRingGrab.hass(h); }
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
      const ent = cam.live_camera || cam.camera;
      let el;
      if (customElements.get("ha-camera-stream")) {
        // HA's stream element directly, un-muted: the picture card always negotiates the stream without an audio track
        el = document.createElement("ha-camera-stream");
        el.hass = this._hass; el.stateObj = this._hass.states[ent]; el.muted = false; el.controls = false; el.allowExoPlayer = true; el._wpEntity = ent;
      } else {
        el = helpers.createCardElement({ type: "picture-entity", entity: ent, camera_view: "live", show_name: false, show_state: false, tap_action: { action: "none" }, hold_action: { action: "none" } });
        el.hass = this._hass;
      }
      this._vid = el; r.getElementById("vid")?.appendChild(el);
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
  .vid { width: 100%; max-height: 100%; } .vid ha-camera-stream { display:block; width: 100%; } .vid > * { display:block; --ha-card-border-radius: 0; --ha-card-border-width: 0; --ha-card-box-shadow: none; }
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
if (!customElements.get("wp-security")) customElements.define("wp-security", WpSecurity);


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
        <section class="panel evcc"><div id="e-head"></div><div class="rate" id="e-rate"><div class="fx"><i></i><i></i><i></i></div><div class="rc" id="e-ratec"></div></div><div id="e-top"></div><div id="e-bot"></div></section>
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
    const ep = this._evcc(); set("e-head", ep.head || ""); set("e-ratec", ep.rate || ""); set("e-top", ep.top); set("e-bot", ep.bot);
    const rb = r.getElementById("e-rate"); if (rb) { rb.classList.toggle("on", !!ep.charging); rb.style.display = ep.rate ? "" : "none"; rb.dataset.more = (c.evcc || {}).charge_power || ""; }
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
    return { charging, head: `<div class="ph"><div class="pt">${icon("lu:plug-zap")}<div><h2>Smart Charging</h2><p>evcc${mode ? ` · ${$esc(mode.replace(/^./, (m) => m.toUpperCase()))} mode` : ""}</p></div></div>
        <span class="chip ${charging ? "go" : connected ? "pl" : ""}"><i></i>${charging ? "Charging" : connected ? "Connected" : "Idle"}</span></div>`,
      rate: `<div class="kw">${charging ? icon("lu:zap", "bolt") : ""}<b>${kw == null ? "–" : kw.toFixed(1)}</b><span>kW</span></div>
        <div class="rt"><b>Charge rate</b><span>${charging && amps != null ? `${Math.round(amps)} A${ph ? ` · ${ph} phase${ph > 1 ? "s" : ""}` : ""}` : "Not charging"}${remTxt ? ` · ${remTxt} to go` : ""}</span></div>`,
      top: `
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
  .rate { position:relative; overflow:hidden; flex:none; display:flex; align-items:center; gap: 18px; margin-top: 22px; padding: 18px 20px; border-radius: 20px; background: linear-gradient(135deg, rgba(34,211,238,.14), rgba(59,130,246,.10)); border: 1px solid rgba(34,211,238,.28); cursor: pointer; }
  .rc { position:relative; z-index:1; display:flex; align-items:center; gap: 18px; min-width:0; }
  .fx { position:absolute; inset:0; pointer-events:none; opacity:0; transition: opacity .6s; }
  .rate.on { border-color: rgba(34,211,238,.6); animation: wpvglow 2.6s ease-in-out infinite; }
  .rate.on .fx { opacity: 1; }
  .fx::before { content:""; position:absolute; top:0; bottom:0; width: 45%; left: -50%; background: linear-gradient(100deg, transparent, rgba(34,211,238,.28), rgba(125,249,255,.38), rgba(34,211,238,.28), transparent); animation: wpvsweep 2.4s linear infinite; }
  .fx i { position:absolute; bottom: 0; width: 6px; height: 6px; border-radius: 50%; background: #67e8f9; box-shadow: 0 0 8px #22d3ee; opacity: 0; animation: wpvrise 2.4s ease-in infinite; }
  .fx i:nth-child(1) { left: 58%; } .fx i:nth-child(2) { left: 74%; animation-delay: .8s; } .fx i:nth-child(3) { left: 88%; animation-delay: 1.6s; }
  .bolt { --mdc-icon-size: 34px; --lu-stroke: 2.2; color: #22d3ee; filter: drop-shadow(0 0 8px rgba(34,211,238,.9)); animation: wpvbolt 1.3s ease-in-out infinite; align-self: center; margin-right: 4px; }
  @keyframes wpvglow { 0%, 100% { box-shadow: 0 0 0 0 rgba(34,211,238,.0), 0 0 18px rgba(34,211,238,.18); } 50% { box-shadow: 0 0 0 3px rgba(34,211,238,.18), 0 0 34px rgba(34,211,238,.45); } }
  @keyframes wpvsweep { from { left: -50%; } to { left: 110%; } }
  @keyframes wpvrise { 0% { transform: translateY(0); opacity: 0; } 15% { opacity: 1; } 100% { transform: translateY(-110px); opacity: 0; } }
  @keyframes wpvbolt { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: .55; transform: scale(.88); } }
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
if (!customElements.get("wp-ev")) customElements.define("wp-ev", WpEv);
