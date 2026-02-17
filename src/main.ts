import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Varlet, { Input } from '@varlet/ui'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Varlet)

import '@varlet/ui/es/style'
import './assets/global.css'

app.mount('#app')

Input.setPropsDefaults({
  clearable: true,
  variant: 'outlined'
})
