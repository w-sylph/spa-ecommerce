import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		resources: {
			namespaced: true,

			state: {
				categories: [],
			},

			mutations: {
				set(state, value) {
					state.categories = value;
				},

				/**
				 * Categories
				 */
				
				storeCategory(state, value) {
					let index = state.categories.findIndex((category) => {
						return category.id === value.id;
					});

					if (index > -1) {
						let category = state.categories[index];
						category.title = value.title;
						category.order = value.order;
					} else {
						state.categories.push(value);
					}
				},

				removeCategory(state, value) {
					let index = state.categories.findIndex((category) => {
						return category.id === value.id;
					});

					if (index > -1) {
						let cart_items = this.state.cart.cart_items.filter((item) => { return item.category_id !== value.id });
						this.state.cart.cart_items = cart_items;

						state.categories.splice(index, 1);
					}
				},

				/**
				 * Brands
				 */
				
				storeBrand(state, value) {
					let category_index = state.categories.findIndex((category) => {
						return category.id === value.parent_id;
					});

					let index = state.categories[category_index].brands.findIndex((brand) => {
						return brand.id === value.id;
					});

					if (index > -1) {
						let brand = state.categories[category_index].brands[index];
						brand.title = value.title;
						brand.order = value.order;
					} else {
						state.categories[category_index].brands.push(value);
					}
				},

				removeBrand(state, value) {
					let category_index = state.categories.findIndex((category) => {
						return category.id === value.parent_id;
					});

					let index = state.categories[category_index].brands.findIndex((brand) => {
						return brand.id === value.id;
					});

					if (index > -1) {
						let cart_items = this.state.cart.cart_items.filter((item) => { return item.parent_id !== value.id });
						this.state.cart.cart_items = cart_items;

						state.categories[category_index].brands.splice(index, 1);
					}
				},

				/**
				 * Products
				 */

				updateProduct(state, value) {
					let category_index = state.categories.findIndex((category) => {
						return category.id === value.category_id;
					});

					let brand_index = state.categories[category_index].brands.findIndex((brand) => {
						return brand.id === value.parent_id;
					});

					let index = state.categories[category_index].brands[brand_index].products.findIndex((product) => {
						return product.id === value.id;
					});

					if (index > -1) {
						let product = state.categories[category_index].brands[index].products[index];
						product.title = value.title;
						product.order = value.order;
						product.price = value.price;
						product.on_sale = value.on_sale;
						product.sale_price = value.sale_price;

						let product_index = this.state.cart.cart_items.findIndex((item) => {
							return item.id === value.id;
						});

						let cart_item = this.state.cart.cart_items[product_index];
						cart_item.title = value.title;
						cart_item.order = value.order;
						cart_item.price = value.price;
						cart_item.on_sale = value.on_sale;
						cart_item.sale_price = value.sale_price;

					} else {
						state.categories[category_index].brands[brand_index].products.push(value);
					}
				},

				removeProduct(state, value) {
					let category_index = state.categories.findIndex((category) => {
						return category.id === value.category_id;
					});

					let brand_index = state.categories[category_index].brands.findIndex((brand) => {
						return brand.id === value.parent_id;
					});

					let index = state.categories[category_index].brands[brand_index].products.findIndex((product) => {
						return product.id === value.id;
					});

					if (index > -1) {
						let cart_items = this.state.cart.cart_items.filter((item) => { return item.id !== value.id });
						this.state.cart.cart_items = cart_items;

						state.categories[category_index].brands[brand_index].products.splice(index, 1);
					}
				},
			}
		},

		cart: {
			namespaced: true,

			state: {
				cart_items: [],
			},

			mutations: {
				add(state, value) {
					state.cart_items = value;
				},

				update(state, value) {
					let index = state.cart_items.findIndex((cart_item) => {
						return cart_item.id == value.id; 
					});

					if (index > -1) {
						state.cart_items[index].quantity = value.quantity;
					}
				},
			}
		},

		topNav: {
			namespaced: true,

			state: {
				title: null,
			},

			mutations: {
				setTitle(state, value) {
					state.title = value;
				},
			}
		},
	}
})
