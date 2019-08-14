import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import storage from "good-storage";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);
Vue.config.productionTip = false;

const i18n = new VueI18n({
  locale: window.LANG, // 语言标识
  messages: {
    zh: require("./lang/zh"), // 中文语言包
    en: require("./lang/en") // 英文语言包
  }
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
