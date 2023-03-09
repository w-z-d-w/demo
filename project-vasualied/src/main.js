import Vue from 'vue'
import App from './App.vue'

import './icons' //引入全局注册的图标组件
import VueCountTo from './components/vueCountTo/vue-countTo.vue'
Vue.component(VueCountTo.name, VueCountTo)


new Vue({
  render: h => h(App),
}).$mount('#app')
