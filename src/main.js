import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import VueQrcodeReader from "vue-qrcode-reader";

const app = createApp(App)

app.use(createPinia())
// app.use(VueQrcodeReader)
app.use(router)
app.mount('#app')
