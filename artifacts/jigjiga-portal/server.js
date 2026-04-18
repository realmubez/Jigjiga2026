import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, "dist", "public");
const PORT = process.env.PORT || 3000;

const MIME = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".txt": "text/plain",
  ".xml": "application/xml",
  ".webmanifest": "application/manifest+json",
};

const server = http.createServer((req, res) => {
  let urlPath = req.url.split("?")[0];

  let filePath = path.join(DIST, urlPath);

  const tryFile = (fp) => {
    if (fs.existsSync(fp) && fs.statSync(fp).isFile()) {
      const ext = path.extname(fp).toLowerCase();
      const type = MIME[ext] || "application/octet-stream";
      res.writeHead(200, { "Content-Type": type });
      fs.createReadStream(fp).pipe(res);
      return true;
    }
    return false;
  };

  if (tryFile(filePath)) return;
  if (tryFile(path.join(filePath, "index.html"))) return;

  const index = path.join(DIST, "index.html");
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.createReadStream(index).pipe(res);
});

server.listen(PORT, () => {
  console.log(`Jigjiga Portal running on port ${PORT}`);
});
