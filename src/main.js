import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import i18n from "./i18n";
import "@/mock/index.js";
import { createPinia } from "pinia";
import persist from "pinia-plugin-persistedstate";
import "@/assets/img/css/index.css";
const pinia = createPinia();
pinia.use(persist);
const app = createApp(App);
app.use(i18n).use(pinia).use(Antd).use(router).mount("#app");
