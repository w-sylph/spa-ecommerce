export default {
	methods: {
		goTo(route) {
			if (!this.isOnRoute(route)) {
				this.$router.push({ name: route });
			}
		},

		goBack() {
			this.$router.go(-1);
		},

		isOnRoute(routeName) {
			return this.activeRoute === routeName;
		},

		areOnRoute(routeArray) {
			return routeArray.indexOf(this.activeRoute) >= 0;
		},
	},

	computed: {
		activeRoute() {
			return this.$route.name;
		},
	},
}