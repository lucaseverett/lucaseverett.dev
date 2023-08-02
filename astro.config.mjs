import { defineConfig } from "astro/config";
import postcssPresetEnv from "postcss-preset-env";

export default defineConfig({
  server: { open: true },
  vite: {
    css: {
      postcss: {
        plugins: [postcssPresetEnv()],
      },
    },
  },
});
