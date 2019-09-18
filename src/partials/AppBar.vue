<template>
	<div>
		<v-app-bar color="deep-purple accent-4" dark>
			<v-app-bar-nav-icon
			@click="toggle"
			></v-app-bar-nav-icon>

			<v-toolbar-title>{{ page_title }}</v-toolbar-title>

			<div class="flex-grow-1"></div>
			
				<v-badge :value="array_count(cart_items) > 0" class="mr-5" color="blue lighten-1">
					<template v-slot:badge>{{ array_count(cart_items) }}</template>
					<v-btn @click="goTo('cart')" icon small>
						<v-icon>mdi-cart</v-icon>
					</v-btn>
				</v-badge>


		</v-app-bar>

		<navigation-drawer 
		ref="drawer"
		></navigation-drawer>
	</div>
</template>

<script>
import NavigationDrawer from './NavigationDrawer.vue';
import ArrayMixin from '../mixins/array.js';

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

		cart_items() {
			return this.$store.state.cart.cart_items;
		},
	},

	components: {
		'navigation-drawer': NavigationDrawer,
	},

	mixins: [ ArrayMixin ],
}
</script>