import { createApp } from 'vue'

import router from './router/index'
import 'bootstrap/dist/css/bootstrap.css'

import App from './App.vue'

var app = createApp(App)
app.use(router)
app.mount('#app')
