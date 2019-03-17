import Vue from 'vue';
import App from './App.vue';
import './plugins/bootstrap-vue';
import './plugins/fontawesome';
import './plugins/axios';

Vue.config.productionTip = false;
Vue.config.devtools = process.env.DEV_TOOLS === 'development';

new Vue({
    render: h => h(App)
}).$mount('#app');
