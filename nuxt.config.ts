import { defineNuxtConfig } from "nuxt";

const lifecycle = process.env.npm_lifecycle_event;

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  //css
    css: ["~/assets/index.css"],
  // build
  build: {
    transpile: lifecycle === "build" ? ["element-plus"] : [],
  },
  // build modules
  buildModules: ["nuxt-windicss"],
});
