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
import ProductList from './ProductList.vue';
import ArrayMixin from '../../mixins/array.js';

export default {
	computed: {
		sortedItems: function() {
			function compare(a, b) {
				if (a.order < b.order) {
					return -1;
				}

				if (a.order > b.order) {
					return 1;
				}

				return 0;
			}

			return this.items.sort(compare);
		}
	},

	props: {
		items: {},
		parentId: {},
	},

	components: {
		'product-list': ProductList,
	},

	mixins: [ ArrayMixin ],
};
</script>
</script>