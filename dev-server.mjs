import { spawn } from "node:child_process";

const forwardedArgs = process.argv.slice(2);
const child = spawn(
  process.platform === "win32" ? "npm.cmd" : "npm",
  ["--prefix", "artifacts/jigjiga-portal", "run", "dev", "--", ...forwardedArgs],
  {
    stdio: "inherit",
    shell: false,
    env: process.env,
  },
);

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
