import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style.css'
import { loadTheme } from '@/theme'
import '@fontsource-variable/plus-jakarta-sans'

const app = createApp(App)
app.use(createPinia())
app.use(router)
loadTheme().finally(() => {
  app.mount('#app')
})
