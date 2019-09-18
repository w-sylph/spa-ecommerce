<template>
	<v-container class="px-5" fluid>
        <v-row>
        	<v-col sm="12">
				<cart-list
				:items="items"
				></cart-list>
        	</v-col>
		</v-row>
	</v-container>
</template>

<script>
import CartList from '../components/carts/CartList.vue';

export default {
	mounted() {
		this.setTitle('Cart');
	},

	computed: {
		items() {
			return this.$store.state.cart.cart_items;
		},
	},

	components: {
		'cart-list': CartList,
	}
};
</script>
