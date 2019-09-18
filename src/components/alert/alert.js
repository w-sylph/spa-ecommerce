export default {
	data() {
		return {
			mdinterval: null,
		};
	},

	computed:{
		modal() {
			return this.$alertstore.state.modal;
		},

		alert() {
			return {
				info:(message, title = null, options = {}) => {
					this.$alertstore.commit('modal/show', {
						type: 'info',
						title: title,
						message: message,
						options: options
						
					});

					return this.create_modal_promise();
				},

				success:(message, title = null, options = {}) => {
					this.$alertstore.commit('modal/show',{
						type: 'success',
						title: title,
						message: message,
						options: options
					});

					return this.create_modal_promise();
				},

				warning:(message, title = null, options = {}) => {
					this.$alertstore.commit('modal/show',{
						type: 'warning',
						title: title,
						message: message,
						options: options
					});

					return this.create_modal_promise();
				},

				error:(message, title = null, options = {}) => {
					this.$alertstore.commit('modal/show',{
						type: 'error',
						title: title,
						message: message,
						options: options
					});

					return this.create_modal_promise();
				},

				close:() => {
					this.$alertstore.commit('modal/hide');
				}
			};
		},
	},

	methods:{
		create_modal_promise() {
			return new Promise((resolve, reject) => {
				this.mdinterval = setInterval(() => {
					if(!this.modal.open) {
						resolve();
						clearInterval(this.mdinterval);
					}
				},750);
			}).then(() => {
				//
			});
		}
	}
}