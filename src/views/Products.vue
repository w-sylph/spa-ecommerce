<template>
	<v-container class="px-5" fluid>
        <v-row>
			<v-col v-for="(item, index) in items.data" sm="6" md="4" lg="3" :key="index">
				<product-card
				:item="item"
				:index="index"
				></product-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import ProductList from '../json/exam-data.json';

import ProductCard from '../components/ProductCard.vue';

export default {
	mounted() {
		this.setTitle('Products');
	},

	methods: {

	},

	data() {
		return {
			items: ProductList,
		}
	},

	components: {
		'product-card': ProductCard,
	},
};
</script>
