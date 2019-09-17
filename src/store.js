import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
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
