import Vue from 'vue'
import App from './App.vue'
// import { VTooltip } from 'v-tooltip'
export const bus = new Vue();
// Vue.directive('tooltip', VTooltip)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
