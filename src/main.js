import { createApp } from 'vue'
import App from './App.vue'
import DemoPlayGround from './components/DemoPlayGround/index.vue'

createApp(App).component(DemoPlayGround.name, DemoPlayGround).mount('#app')
