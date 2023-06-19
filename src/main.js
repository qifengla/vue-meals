import { createApp } from "vue";
import router from "./router";
import store from "./store";
import "./style.css";
import App from "./App.vue";
import * as filters from './filters'
import VueSocialSharing from "vue-social-sharing";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEnvelope, faMessage } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook, faFacebookMessenger, faSkype, faReddit, faTelegram, faWeibo, faWhatsapp } from '@fortawesome/free-brands-svg-icons'


library.add(faEnvelope, faMessage, faTwitter, faFacebook, faFacebookMessenger, faSkype, faReddit, faTelegram, faWeibo, faWhatsapp)

const app = createApp(App);
app.use(router).use(store).use(VueSocialSharing).component('font-awesome-icon', FontAwesomeIcon).mount("#app");

app.config.globalProperties.$filters = filters
