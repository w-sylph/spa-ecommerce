export default {
	computed: {
		rules() {
			return {
				required: value => !!value || 'Required.',
				number: value => value >= 0 || 'Value must be greater than 0.',
			}
		},
	},

	data() {
		return {
			valid: false,
		}
	},
}