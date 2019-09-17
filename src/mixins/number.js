export default {
	methods: {
		toMoney(value, prefix = '₱') {
			if (!value) { return; }
			return prefix + ' ' + (parseFloat(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')).toString();
		},

		randomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1) + min);
		}
	}
}