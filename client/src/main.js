import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createHead } from "@vueuse/head";
import {Vue3Plausible} from "vue-plausible";

const head = createHead();

createApp(App)
  .use(store)
  .use(router)
  .use(head)
  .use(Vue3Plausible, {
    domain: process.env.VUE_APP_DOMAIN,
    apiHost: process.env.VUE_APP_PLAUSIBLE_API,
    enableAutoPageviews: true,
    enableAutoOutboundTracking: true
  })
  .mount("#app");