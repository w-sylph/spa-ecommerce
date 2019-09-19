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
				add(state, value) {
					state.cart_items = value;
				},

				update(state, value) {
					let index = state.cart_items.findIndex((cart_item) => {
						return cart_item.id == value.id; 
					});
					state.cart_items[index].quantity = value.quantity;
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
