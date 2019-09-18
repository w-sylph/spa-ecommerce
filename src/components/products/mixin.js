import Image from '../Image.vue';
import NumberMixin from '../../mixins/number.js';

export default {
	computed: {
		price() {
			return this.item.on_sale ? this.item.sale_price : this.item.price;
		},

		formatted_price() {
			return this.toMoney(this.price);
		},

		cart_items() {
			return this.$store.state.cart.cart_items;
		},
	},

	props: {
		item: {},
		index: {
			default: 0,
		}
	},

	components: {
		'custom-image': Image,
	},

	mixins: [ NumberMixin ],
}