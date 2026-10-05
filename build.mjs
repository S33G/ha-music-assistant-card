import { readFile } from "node:fs/promises";
import { build } from "esbuild";
await build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  format: "esm",
  target: "es2020",
  minify: true,
  outfile: "ha-music-assistant-card.js",
  legalComments: "inline",
  banner: {
    js: `/*! ha-music-assistant-card | MIT\n${await readFile("THIRD_PARTY_NOTICES.md", "utf8")}\n*/`,
  },
});
