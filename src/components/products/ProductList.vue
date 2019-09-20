<template>
	<v-row>
		<v-col v-for="(item, i) in sortedItems" sm="6" md="4" lg="3" :key="'item-' + i">
			<product-card
			:item="item"
			:index="i"
			:parent-id="parentId"
			></product-card>
		</v-col>

		<v-col v-if="array_count(items) < 1" cols="12" class="text-center">
			<p>No item found</p>
		</v-col>
	</v-row>
</template>

<script>
import ListMixin from './list.js';
import ProductCard from './ProductCard.vue';

export default {
	props: {
		parentId: {},
	},

	components: {
		'product-card': ProductCard,
	},

	mixins: [ ListMixin ],
};
</script>
