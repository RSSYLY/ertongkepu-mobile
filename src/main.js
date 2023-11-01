
import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import '@/assets/font/font.css';
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

// app.mount('#app')
app.use(Antd).mount('#app');