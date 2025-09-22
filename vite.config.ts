// vite.config.ts
import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import netlifyPlugin from "@netlify/vite-plugin-react-router";

export default defineConfig({
  plugins: [
    reactRouter(),
    tsconfigPaths(),
    tailwindcss(),
    netlifyPlugin(), // generates the Netlify serverless function for SSR
  ],
});
