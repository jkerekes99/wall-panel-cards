#!/usr/bin/env python3
"""Concatenate src/*.js into dist/wall-panel-cards.js, guarding custom element registration."""
import re, pathlib, sys
root = pathlib.Path(__file__).resolve().parent.parent
parts = [(root / "src" / n).read_text() for n in ("icons.js", "core.js", "overview.js", "energy.js", "security.js", "cars.js")]
out = "\n".join(parts)
out = re.sub(r'customElements\.define\("([a-z-]+)", (\w+)\);', r'if (!customElements.get("\1")) customElements.define("\1", \2);', out)
(root / "dist" / "wall-panel-cards.js").write_text(out)
print("built", len(out), "bytes")
