<template>
	<v-navigation-drawer v-model="visibility" absolute temporary>
		<v-list-item>
			<v-list-item-avatar>
				<v-img :src="require('../assets/avatar.jpg')"></v-img>
			</v-list-item-avatar>

			<v-list-item-content>
				<v-list-item-title>John Doe</v-list-item-title>
			</v-list-item-content>
		</v-list-item>

		<v-divider></v-divider>

		<v-list dense>

			<v-list-item @click="goTo(item.route)" v-for="item in items" :key="item.title" link :input-value="isOnRoute(item.route)">
				<v-list-item-icon>
					<v-icon>{{ item.icon }}</v-icon>
				</v-list-item-icon>

				<v-list-item-content>
					<v-list-item-title>{{ item.title }}</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
export default {
	methods: {
		toggle() {
			this.visibility = !this.visibility;
		},
	},

	data () {
		return {
			visibility: false,
			items: [
				{ title: 'Products', icon: 'mdi-shopping', route: 'products' },
				{ title: 'Cart', icon: 'mdi-cart', route: 'cart' },
				{ title: 'Config', icon: 'mdi-settings', route: 'config' },
			],
		}
	},
}
</script>