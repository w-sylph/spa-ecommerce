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
	},

	mixins: [ ArrayMixin ],
}