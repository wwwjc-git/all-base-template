import Vue from 'vue'
import echarts from './utils/echarts'

import 'normalize.css/normalize.css'

// import ElementUI from 'element-ui'
import { Button } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.less'

import App from './App.vue'
import router from './router/index'
import store from './store/index'

import Waves from '@/directive/waves'
import * as filters from './filters' // global filters
import './assets/icons' // icon

Vue.use(Button)
Vue.use(Waves)

// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
