import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(__dirname, "..");
const publicDir = path.join(appRoot, "public");
const outDir = path.join(appRoot, "dist", "public");

fs.mkdirSync(outDir, { recursive: true });

for (const fileName of [".htaccess", "_redirects"]) {
  const source = path.join(publicDir, fileName);
  const target = path.join(outDir, fileName);

  if (fs.existsSync(source)) {
    fs.copyFileSync(source, target);
  }
}
