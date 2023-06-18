import { createApp } from "vue";
import router from "./router";
import store from "./store";
import "./style.css";
import App from "./App.vue";
import * as filters from './filters'
import VueSocialSharing from "vue-social-sharing";

const app = createApp(App);
app.use(router).use(store).use(VueSocialSharing).mount("#app");

app.config.globalProperties.$filters = filters
