import { createApp } from 'vue';
import '@/style.css';
import App from '@/App.vue';
import router from '@router/router';
import commons from '@components/commons';
import ui from '@components/UI';

const app = createApp(App);

commons.forEach((common) => app.component(common.name, common));
ui.forEach((elem) => app.component(elem.name, elem));

app.use(router);

app.mount('#app');
