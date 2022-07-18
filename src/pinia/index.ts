import { App } from 'Vue'
import { createPinia } from 'pinia'

export function setupPinia (app: App) {
  app.use(createPinia())
}
