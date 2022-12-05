import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import '@/assets/styles.css'
import router from './router'

createApp(App).use(router).mount('#app')
