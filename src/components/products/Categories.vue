<template>
	<v-row>
		<v-col cols="12">
			<product-list
			:items="items"
	        ></product-list>
		</v-col>
	</v-row>
</template>

<script>
import ProductList from '../components/products/ProductList.vue';

export default {
	components: {
		'product-list': ProductList,
	},
}
</script>