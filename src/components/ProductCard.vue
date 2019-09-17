<template>
	<v-card class="mx-auto fill-height text-center d-flex flex-column">
		<v-card-title class="justify-center subtitle-1 font-weight-bold">{{ item.title }}</v-card-title>
		<v-img
          class="white--text"
          height="200px"
          max-height="200px"
          :src="src"
        ></v-img>
        <div class="fill-height d-flex flex-column">
        	<div class="flex-grow-1 py-2">
        		<v-card-text v-if="item.on_sale" class="py-0">
        			<span class="red--text">SALE! </span>
        			<span class="original-price">{{ toMoney(item.price) }}</span>
        		</v-card-text>
				<v-card-text class="py-0 headline" :class="item.on_sale ? 'sale-price' : ''">{{ price }}</v-card-text>
        	</div>
			<v-card-actions class="pt-0 flex-grow-1 justify-center align-end">
				<v-btn color="primary" small><v-icon left>mdi-cart-arrow-down</v-icon>Add to Cart</v-btn>
			</v-card-actions>	
        </div>
	</v-card>
</template>

<script>
import NumberMixin from '../mixins/number.js';

export default {
	computed: {
		src() {
			return 'https://picsum.photos/id/'+ this.index +'/' + this.randomInt(400, 800) +'/' + this.randomInt(400, 800);
		},

		price() {
			return this.item.on_sale ? this.toMoney(this.item.sale_price) : this.toMoney(this.item.price);
		},
	},

	props: {
		item: {},
		index: {
			default: 1,
		}
	},

	mixins: [ NumberMixin ],
}
</script>

<style scoped>
.original-price {
	font-size: 12px;
	color: #ccc;
	text-decoration: line-through;
}

.sale-price {
	animation:blinkingText 2s infinite;
}

@keyframes blinkingText{
    0% { color: #F44336; }
    50% { color: #fff; }
    100% { color: #F44336; }
}
</style>