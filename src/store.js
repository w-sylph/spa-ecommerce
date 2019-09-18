import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		resources: {
			namespaced: true,

			state: {
				categories: [],
			},

			mutations: {
				set(state, value) {
					state.categories = value;
				},
			}
		},

		cart: {
			namespaced: true,

			state: {
				cart_items: [],
			},

			mutations: {
				set(state, value) {
					state.cart_items = value;
				},
			}
		},

		topNav: {
			namespaced: true,

			state: {
				title: null,
			},

			mutations: {
				setTitle(state, value) {
					state.title = value;
				},
			}
		},
	}
})
