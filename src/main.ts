import { createApp } from 'vue'
import App from './App.vue'
import router from "./router.ts";
import { createPinia } from 'pinia';
import '@/assets/scss/main.scss'
import '@mdi/font/css/materialdesignicons.min.css';

import vuetify from './plugins/vuetify.ts';

const pinia = createPinia();


createApp(App).use(router).use(pinia).use(vuetify).mount('#app')
