import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createHead } from "@vueuse/head";

const head = createHead();

createApp(App)
  .use(store)
  .use(router)
  .use(head)
  .mount("#app");
