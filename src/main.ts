import { createApp } from 'vue';
import '@/style.css';
import App from '@/App.vue';
import router from '@router/router';
import commons from '@components/commons';

const app = createApp(App);

commons.forEach((common) => app.component(common.name, common));

app.use(router);

app.mount('#app');
