<template>
	<v-row>
		<v-col cols="12" v-for="(brand, i) in sortedItems" :key="'brand-' + i">
			<v-card>
				<v-container fluid>
					<v-card-title class="justify-center">{{ brand.title }}</v-card-title>
				    <product-list
					:items="brand.products"
					:parent-id="parentId"
				    ></product-list>
				</v-container>
			</v-card>
		</v-col>

		<v-col v-if="array_count(items) < 1" cols="12" class="text-center">
			<p>No item found</p>
		</v-col>

	</v-row>
</template>

<script>
import ListMixin from './list.js';
import ProductList from './ProductList.vue';

export default {
	props: {
		parentId: {},
	},

	components: {
		'product-list': ProductList,
	},

	mixins: [ ListMixin ],
};
</script>
</script>