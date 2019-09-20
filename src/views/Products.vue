<template>
	<v-container class="px-5" fluid>
        <!-- <product-list
		:items="categories"
        ></product-list> -->
        <category-list
		:items="categories"
        ></category-list>
	</v-container>
</template>

<script>
import CategoryList from '../components/products/CategoryList.vue';
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
		'category-list': CategoryList,
		'product-list': ProductList,
	},
};
</script>
