import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import IconBtn from "./components/general/IconBtn.vue";

Vue.config.productionTip = false;
Vue.component("IconBtn", IconBtn);

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
