import { createApp } from 'vue'

import router from './router/index'
import store from './store/index'
import 'bootstrap/dist/css/bootstrap.css'

import App from './App.vue'

var app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
