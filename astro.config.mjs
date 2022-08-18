import { defineConfig } from "astro/config";
import postcssPresetEnv from "postcss-preset-env";

export default defineConfig({
  vite: {
    css: {
      postcss: {
        plugins: [postcssPresetEnv({ stage: 1 })],
      },
    },
  },
});
