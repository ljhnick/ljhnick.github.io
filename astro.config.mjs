import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://jiahaoli.net",
  integrations: [tailwind()],
  build: {
    format: "directory",
  },
});
