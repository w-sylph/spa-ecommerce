<template>
	<v-container class="px-5" fluid>
        <product-list
		:items="categories"
        ></product-list>
	</v-container>
</template>

<script>
import ProductList from '../components/products/ProductList.vue';

export default {
	mounted() {
		this.setTitle('Products');
	},

	computed: {
		categories() {
			return this.$store.state.resources.categories;
		},
	},

	components: {
		'product-list': ProductList,
	},
};
</script>
