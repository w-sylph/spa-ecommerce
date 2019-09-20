<template>
	<v-card class="mx-auto fill-height text-center d-flex flex-column">
		<v-card-title class="justify-center subtitle-1 font-weight-bold">{{ item.title }}</v-card-title>
		<custom-image
		:index="index"
		></custom-image>
        <div class="d-flex flex-column">
        	<div class="flex-grow-1 py-2">
        		<v-card-text v-if="item.on_sale" class="py-0">
        			<span class="red--text">SALE! </span>
        			<span class="text--strike">{{ toMoney(item.price) }}</span>
        		</v-card-text>
				<v-card-text class="py-0 headline" :class="item.on_sale ? 'text--blink' : ''">{{ formatted_price }}</v-card-text>
        	</div>
			<v-card-actions class="pt-0 flex-grow-1 justify-center align-end">
				<v-btn @click="add" color="primary" small><v-icon left>mdi-cart-arrow-down</v-icon>Add to Cart</v-btn>
			</v-card-actions>
        </div>
	</v-card>
</template>

<script>
import ProductMixin from './mixin.js';

export default {
	methods: {
		add() {
			let cart_items = this.cart_items;
			let item = cart_items.filter(obj => { return obj.id === this.item.id; })[0];
			if (!item) {
				if (this.price > 0) {
					this.item.category_id = this.parentId;
					this.item.quantity = 1;
					this.item.index = this.index;
					cart_items.push(this.item);
					this.$store.commit('cart/add', cart_items);
					this.alert.success(this.item.title + ' has successfully been added to your cart');
				} else {
					this.alert.error(this.item.title + ' sorry product is currently not available');
				}
			} else {
				this.alert.warning(this.item.title + ' is already in your cart');
			}
		},
	},

	props: {
		parentId: {},
	},

	mixins: [ ProductMixin ],
}
</script>