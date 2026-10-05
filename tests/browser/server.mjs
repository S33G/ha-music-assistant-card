import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
const root = resolve(".");
createServer(async (req, res) => {
  const pathname = new URL(req.url, "http://localhost").pathname;
  const file =
    pathname === "/" ? "tests/browser/fixture.html" : pathname.slice(1);
  const path = resolve(root, file);
  if (!path.startsWith(root + "/")) {
    res.writeHead(403).end();
    return;
  }
  try {
    const data = await readFile(path);
    res.setHeader(
      "Content-Type",
      file.endsWith(".js")
        ? "text/javascript"
        : file.endsWith(".svg")
          ? "image/svg+xml"
          : "text/html",
    );
    res.end(data);
  } catch {
    res.writeHead(404).end();
  }
}).listen(4187, "127.0.0.1");
