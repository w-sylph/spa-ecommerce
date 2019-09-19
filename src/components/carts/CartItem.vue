<template>
	<v-row>
		<v-col cols="12" sm="4" md="4" class="text-center">
			<p>{{ item.title }}</p>

			<custom-image
			:index="index"
			></custom-image>

			<p>{{ formatted_price }}</p>
		</v-col>
		
		<v-col cols="12" sm="4" md="4" class="d-flex justify-center align-center">
			<div style="width: 150px;">
				<v-text-field
				v-model="quantity"
				width="100px"
				label="Quantity"
				outlined
				@click:append-outer="increase"
				@click:prepend="decrease"
				prepend-icon="mdi-arrow-left-drop-circle"
				append-outer-icon="mdi-arrow-right-drop-circle"
	            ></v-text-field>
			</div>
		</v-col>

		<v-col cols="12" sm="4" md="4" class="d-flex justify-center align-center">
			<p><span class="d-inline d-sm-none font-weight-bold">Total: </span>{{ total }}</p>			
		</v-col>
		
		<v-col cols="12">
			<v-divider></v-divider>
		</v-col>
	</v-row>
</template>

<script>
import ProductMixin from '../products/mixin.js';

export default {
	mounted() {
		this.quantity = this.item.quantity;
	},

	methods: {
		increase() {
			this.quantity++;
		},

		decrease() {
			if (this.quantity > 0) {
				this.quantity--;
			}
		},

		remove() {
			let cart_items = this.cart_items.filter(obj => { return obj.id !== this.item.id });
			this.alert.success(this.item.title + ' has successfully been removed from your cart');
			this.$store.commit('cart/set', cart_items);
		},

		update() {
			this.item.quantity = this.quantity;
			this.$store.commit('cart/update', this.item);
		},
	},

	computed: {
		total() {
			return this.toMoney(this.price * this.quantity);
		},
	},

	watch: {
		quantity(value) {
			if (value < 1) {
				this.remove();
			} else {
				this.update(value);
			}
		},
	},

	data() {
		return {
			quantity: 1,
		}
	},

	mixins: [ ProductMixin ],
}
</script>