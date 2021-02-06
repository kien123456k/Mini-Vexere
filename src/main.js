import {createApp} from 'vue';
import App from './App.vue';
import router from './routers';
import store from './store';
import GlobalMixin from './utils/mixins.util';
import GlobalDirective from './utils/directives.util';
import {Layout, Col, Row} from 'ant-design-vue';
import './assets/css/bttn.css';
import './assets/scss/globalStyle.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

const app = createApp(App).use(store).use(router).use(GlobalMixin).use(GlobalDirective);
app.use(Layout).use(Col).use(Row);
app.mount('#app');
