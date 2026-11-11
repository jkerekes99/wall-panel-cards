#!/usr/bin/env python3
"""Embed a small set of Lucide icons (ISC) as src/icons.js. Usage: gen_icons.py <lucide-static/icons dir>"""
import re, sys, pathlib, json
src = pathlib.Path(sys.argv[1]); root = pathlib.Path(__file__).resolve().parent.parent
NAMES = ["house", "thermometer", "zap", "sun", "car-front", "shield", "droplet", "calendar-days", "utility-pole",
         "arrow-down", "arrow-up", "lightbulb", "fan", "door-open", "plug-zap", "battery-charging", "map-pin", "chevron-right",
         "flame", "snowflake", "power", "timer", "calendar-clock", "sliders-horizontal", "wind", "tv",
         "leaf", "circle-dollar-sign", "dollar-sign", "clock", "gauge", "sunrise", "sunset", "server", "air-vent", "shower-head", "chef-hat", "cooking-pot", "refrigerator", "utensils-crossed", "shirt", "washing-machine", "activity", "list", "chart-column", "sun-medium", "cloud-sun", "microwave", "layers", "trending-up", "trending-down", "sparkles", "battery", "calendar"]
out = {}
for n in NAMES:
    svg = (src / f"{n}.svg").read_text()
    inner = re.search(r"<svg[^>]*>(.*)</svg>", svg, re.S).group(1)
    out[n] = re.sub(r"\s+", " ", inner).replace("> <", "><").strip()
js = "/* Lucide icons (https://lucide.dev), ISC License, Copyright (c) Lucide Contributors 2022; portions Feather (MIT) Cole Bemis 2013-2022. */\n"
js += "const WP_LUCIDE = " + json.dumps(out, indent=0) + ";\n"
(root / "src" / "icons.js").write_text(js)
print(len(out), "icons")
