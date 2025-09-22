/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/*"],
  serverModuleFormat: "esm",
  server: "./server.ts",
  serverBuildPath: "netlify/functions/server.mjs",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
};
