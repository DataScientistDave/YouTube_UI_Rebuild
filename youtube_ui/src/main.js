import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import IconBtn from "./components/general/IconBtn.vue";
import Chip from "./components/general/Chip.vue";

Vue.config.productionTip = false;
Vue.component("IconBtn", IconBtn);
Vue.component("Chip", Chip);

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
