import eslintPluginAstro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import { defineConfig } from "eslint/config";

export default defineConfig([
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs["jsx-a11y-recommended"],
  eslintConfigPrettier,
]);
