import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const portalDir = path.join(__dirname, "artifacts", "jigjiga-portal");
const viteBin = path.join(portalDir, "node_modules", "vite", "bin", "vite.js");
const forwardedArgs = process.argv.slice(2);

const child = spawn(
  process.execPath,
  [viteBin, "--config", "vite.config.ts", "--host", "0.0.0.0", ...forwardedArgs],
  {
    cwd: portalDir,
    stdio: "inherit",
    env: process.env,
  },
);

child.on("exit", (code) => {
  process.exit(code ?? 0);
});
