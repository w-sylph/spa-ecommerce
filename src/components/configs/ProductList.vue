<template>
	<div>
		<v-list-item v-for="(item, i) in list" :key="i">
			<v-list-item-content>
				<v-list-item-title class="text--hoverable">
					<v-row>
						<v-col cols="10">
							<p>{{ item.title }}</p>
						</v-col>
						<v-col cols="2" class="text-right">
							<span class="text__item--hoverable">
								<v-btn icon @click="select(item)">
					            	<v-icon color="grey lighten-1">mdi-pen</v-icon>
					            </v-btn>
								<v-btn icon @click="remove(item)">
					            	<v-icon color="grey lighten-1">mdi-close</v-icon>
					            </v-btn>
							</span>
						</v-col>
					</v-row>
				</v-list-item-title>
			</v-list-item-content>
		</v-list-item>

		<v-list-item @click="create">
			<v-list-item-icon>
				<v-icon>mdi-plus</v-icon>
			</v-list-item-icon>
			<v-list-item-content>
				<v-list-item-title>Add Product</v-list-item-title>
			</v-list-item-content>
		</v-list-item>

		<v-dialog v-model="dialog" width="500">
			<v-form v-model="valid" @submit.prevent="store">
				<v-card>
					<v-card-title class="headline grey lighten-2" primary-title>
						{{ selected.id ? 'Update' : 'Add' }} Brand <span v-if="selected.title">({{ selected.title }})</span>
					</v-card-title>

					<v-card-text>
						<v-text-field v-model="title" label="Title" :rules="[rules.required]"></v-text-field>
						<v-text-field v-model="order" label="Order" :rules="[rules.required, rules.number]"></v-text-field>
						<v-text-field v-model="price" label="Price" :rules="[rules.required, rules.price]"></v-text-field>
						<v-checkbox v-model="on_sale" label="On Sale"></v-checkbox>
						<v-text-field v-model="sale_price" label="Sale Price" :rules="[rules.required, rules.number, saleRule]"></v-text-field>
					</v-card-text>

					<v-divider></v-divider>

					<v-card-actions>
						<v-btn type="submit" color="primary" class="flex-grow-1" text :disabled="!valid">
							Save
						</v-btn>
						<v-btn type="button" color="error" class="flex-grow-1" text @click="close">
							Cancel
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-form>
		</v-dialog>
	</div>
</template>

<script>
import ConfigMixin from './mixin.js';

export default {
	mounted() {
		this.list = this.items;
	},

	methods: {
		select(item) {
			this.selected = item;
			this.title = item.title;
			this.order = item.order;
			this.price = item.price;
			this.on_sale = item.on_sale;
			this.sale_price = item.sale_price;
			this.open();
		},

		create() {
			this.selected = {};
			this.title = null;
			this.order = null;
			this.price = null;
			this.on_sale = null;
			this.sale_price = null;
			this.open();
		},

		store() {
			let id = this.selected.id;
			let message = this.selected.title + ' has successfully been updated';
			let parent_id = this.selected.parent_id;

			if (!this.selected.id) {
				id = this.selected.id ? this.selected.id : this.generateUuid();
				parent_id = this.selected.parent_id ? this.selected.parent_id : this.parentId;
				message = this.title + ' has successfully been created';
			}

			let params = {
				id: id,
				parent_id: parent_id,
				category_id: this.itemParentId,
				title: this.title,
				order: this.order,
				price: this.price,
				on_sale: this.on_sale,
				sale_price: this.sale_price,
			}

			this.alert.success(message);
			
			this.$store.commit('resources/updateProduct', params);
			this.close();
		},

		remove(item) {
			this.alert.success(item.title + ' has successfully been removed');
			this.$store.commit('resources/removeProduct', item);
			this.close();
		},

		saleRule() {
			return this.sale_price < this.price || 'Sale Price cannot be equal or greater than Price';
		},
	},

	data() {
		return {
			list: [],

			title: null,
			order: null,
			price: null,
			on_sale: false,
			sale_price: null,
		}
	},

	watch: {
		items(value) {
			this.list = value;
		},
	},

	props: {
		items: {},
		itemParentId: {},
		parentId: {},
	},

	mixins: [ ConfigMixin ],
}
</script>