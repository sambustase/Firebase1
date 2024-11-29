import Vue from "vue";
import App from "./App.vue";
import store from "./store"; // Importa el store

Vue.config.productionTip = false;

new Vue({
  store, // Agrega el store aquí
  render: (h) => h(App),
}).$mount("#app");
