import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//let first = "Witaj,";
//const second = "świecie";
//console.log(`Komunikat ${first} ${second}`);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
