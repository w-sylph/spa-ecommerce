import Vuetify from 'vuetify';

import Alert from './Alert.vue';
import AlertMixin from './alert.js';
import store from './store.js';

const AlertPlugin = {
	store,
	install(Vue, options) {
		Vue.use(Vuetify);
		
		Vue.prototype.$alertstore = store;

		/* plugin components */
		Vue.component('alert', Alert);

		/* mixed in functions and properties */
		Vue.mixin({
			mixins:[ AlertMixin ]
		});
	}
}

export default AlertPlugin;