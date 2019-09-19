<template>
	<v-row>
		<v-col cols="12" class="text-xs-center">
			<v-tabs v-if="array_count(items) > 0" v-model="tab" color="primary">
				<v-tab v-for="(item, i) in items" :key="item.id" :href="`#tab-${i}`">{{ item.title }}</v-tab>
				<v-tabs-slider></v-tabs-slider>

				<v-tab-item v-for="(item, i) in items" :key="item.id" :value="'tab-' + i">
					<v-row>
						<v-col cols="12" v-for="item in item.brands" :key="item.id">
							<v-card>
								<v-container fluid>
									<v-card-title class="justify-center">{{ item.title }}</v-card-title>
								    <v-row>
										<v-col v-for="(product, index) in item.products" sm="6" md="4" lg="3" :key="product.id">
											<product-card
											:item="product"
											:index="index"
											></product-card>
										</v-col>
										<v-col v-if="array_count(item.products) < 1" cols="12" class="text-center">
											<p>No item found</p>
										</v-col>
									</v-row>
								</v-container>
							</v-card>
						</v-col>

						<v-col v-if="array_count(item.brands) < 1" cols="12" class="text-center">
							<p>No item found</p>
						</v-col>

					</v-row>

				</v-tab-item>

			</v-tabs>
			<p v-else>No item found</p>
		</v-col>
	</v-row>
</template>

<script>
import ProductCard from './ProductCard.vue';
import ArrayMixin from '../../mixins/array.js';

export default {
	props: {
		items: {},
	},

	data() {
		return {
			tab: 'tab-0',
		}
	},

	components: {
		'product-card': ProductCard,
	},

	mixins: [ ArrayMixin ],
};
</script>
