import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import '@/styles/index.scss'
import { setupPinia } from '@/pinia'

// 将执行逻辑进行封装
async function bootstrap () {
  const app = createApp(App)
  setupPinia(app)
  await setupRouter(app) // 待路由处理结束之后才挂载app
  app.mount('#app')
}
bootstrap()
