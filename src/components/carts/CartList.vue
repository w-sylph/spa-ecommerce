<template>
	<v-row>
		<v-col sm="12">
			<v-row v-if="array_count(items) > 0">
				<v-col sm="12" class="d-none d-sm-block d-md-block">
					<v-row>
						<v-col sm="4" class="text-center">
							<p>Product</p>
						</v-col>

						<v-col sm="4" class="text-center">
							<p>Quantity</p>
						</v-col>

						<v-col sm="4" class="text-center">
							<p>Total</p>
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="12">
					<v-divider></v-divider>
				</v-col>
			</v-row>
			<v-row>
				<v-col v-for="(item, index) in items" sm="12" :key="item.id">
					<cart-item
					:item="item"
					:index="index"
					></cart-item>
				</v-col>

				<v-col v-if="array_count(items) < 1" cols="12" class="text-center">
					<p>No item found</p>
					<v-btn @click="goTo('products')" outlined color="primary">Go to Products</v-btn>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script>
import CartItem from './CartItem.vue';
import ArrayMixin from '../../mixins/array.js';

export default {
	props: {
		items: {}
	},

	components: {
		'cart-item': CartItem,
	},

	mixins: [ ArrayMixin ],
}
</script>