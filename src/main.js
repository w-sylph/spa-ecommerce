import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

import AlertPlugin from './components/alert';

require('./mixins/global');
require('./scss/app.scss');

Vue.config.productionTip = false;

Vue.use(AlertPlugin);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
