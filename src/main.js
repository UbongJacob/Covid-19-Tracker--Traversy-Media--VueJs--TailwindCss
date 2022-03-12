import { createApp, h } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';

const app = createApp({
  render: () => h(App),
});

app.use(router).mount('#app');
