import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		modal: {
			strict: true,
			namespaced: true,
			state:{
				open: false,
				type: null,
				title: null,
				message: null,
				options: {}
			},

			mutations: {
				toggle(state) {
					state.open = !state.open;
				},

				show(state, values) {
					state.open = true;
					
					state.type = values.type;
					state.title = values.title;
					state.message = values.message;

					state.options = values.options;
				},

				hide(state) {
					state.open = false;
				}
			}
		},
	},
})