<template>
	<div>
		<v-list-group v-for="(item, i) in list" sub-group :key="i">
			<template v-slot:activator>
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
			</template>

			<product-list
			:items="item.products"
			:parent-id="item.id"
			:item-parent-id="item.parent_id"
			></product-list>

		</v-list-group>

		<v-list-item @click="create">
			<v-list-item-icon>
				<v-icon>mdi-plus</v-icon>
			</v-list-item-icon>
			<v-list-item-content>
				<v-list-item-title>Add Brand</v-list-item-title>
			</v-list-item-content>
		</v-list-item>

		<v-dialog v-model="dialog" width="500">
			<v-form v-model="valid" @submit.prevent="store">
				<v-card>
					<v-card-title class="headline grey lighten-2" primary-title>
						{{ selected.id ? 'Update' : 'Add' }} Brand <span v-if="selected.title">({{ selected.title }})</span>
					</v-card-title>

					<v-card-text>
						<v-text-field v-model="title" :rules="[rules.required]" label="Title"></v-text-field>
						<v-text-field v-model="order" :rules="[rules.required, rules.number]" label="Order"></v-text-field>
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
import ProductList from './ProductList.vue';

export default {
	mounted() {
		this.list = this.items;
	},

	methods: {
		select(item) {
			this.selected = item;
			this.title = item.title;
			this.order = item.order;
			this.open()
		},

		create() {
			this.selected = {};
			this.title = null;
			this.order = null;
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
				title: this.title,
				order: this.order,
				products: this.selected.products ? this.selected.products : [],
			}

			this.alert.success(message);

			this.$store.commit('resources/storeBrand', params);
			this.close();
		},

		remove(item) {
			this.alert.success(item.title + ' has successfully been removed');
			this.$store.commit('resources/removeBrand', item);
			this.close();
		},
	},

	data() {
		return {
			list: [],
			
			title: null,
			order: null,
		}
	},

	watch: {
		items(value) {
			this.list = value;
		},
	},

	props: {
		items: {},
		parentId: {},
	},

	components: {
		'product-list': ProductList,
	},

	mixins: [ ConfigMixin ],
}
</script>