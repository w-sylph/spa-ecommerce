export default {
	methods: {
		setTitle(title) {
			this.$store.commit('topNav/setTitle', title);
		},
	},
}