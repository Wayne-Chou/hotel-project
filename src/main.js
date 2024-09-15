import { createApp } from "vue";

import "./style.css";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import i18n from "./i18n";
const app = createApp(App);
app.use(i18n).use(Antd).use(router).mount("#app");
