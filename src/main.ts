import { createApp } from 'vue';
import '@/style.css';
import App from '@/App.vue';
import router from '@router/router';
import components from '@components/index';

const app = createApp(App);

components.forEach((component) => app.component(component.name, component));

app.use(router);

app.mount('#app');
