import { createApp } from 'vue';
import '@/style.css';
import App from '@/App.vue';
import router from '@router/router';
import components from '@components/index.ts';
import VueYtframe from 'vue3-ytframe';
import store from '@/store';

const app = createApp(App);

components.forEach((comp: any) => app.component(comp.name, comp));

app.use(store);
app.use(VueYtframe);
app.use(router);

app.mount('#app');
