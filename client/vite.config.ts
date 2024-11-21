import { defineConfig } from "vite";
// import copy from "rollup-plugin-copy";

// import fs from "fs";
// import path from "path";
// import react from "@vitejs/plugin-react";

// const wasmContentTypePlugin = {
//   name: "wasm-content-type-plugin",
//   // @ts-expect-error: Don't know the type
//   configureServer(server) {
//     server.middlewares.use(async (req, res, next) => {
//       if (req.url.endsWith(".wasm")) {
//         res.setHeader("Content-Type", "application/wasm");
//         const newPath = req.url.replace("deps", "dist");
//         const targetPath = path.join(__dirname, newPath);
//         const wasmContent = fs.readFileSync(targetPath);
//         return res.end(wasmContent);
//       }
//       next();
//     });
//   },
// };

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
