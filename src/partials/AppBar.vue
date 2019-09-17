<template>
	<div>
		<v-app-bar color="deep-purple accent-4" dark>
			<v-app-bar-nav-icon
			@click="toggle"
			></v-app-bar-nav-icon>

			<v-toolbar-title>{{ page_title }}</v-toolbar-title>

			<div class="flex-grow-1"></div>

			<v-badge class="mr-5" color="blue lighten-1">
				<template v-slot:badge>0</template>
				<v-icon>mdi-cart</v-icon>
			</v-badge>

		</v-app-bar>

		<navigation-drawer 
		ref="drawer"
		></navigation-drawer>
	</div>
</template>

<script>
import NavigationDrawer from './NavigationDrawer.vue';

export default {
	methods: {
		toggle() {
			this.$refs.drawer.toggle();
		},
	},

	data() {
		return {
			drawer: false,
		}
	},

	computed: {
		page_title() {
			return this.$store.state.topNav.title;
		},
	},

	components: {
		'navigation-drawer': NavigationDrawer,
	},
}
</script>