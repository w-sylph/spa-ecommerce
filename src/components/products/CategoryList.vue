<template>
	<v-row>
		<v-col cols="12" class="text-xs-center">
			<v-tabs v-if="array_count(items) > 0" v-model="tab" color="primary">
				<v-tab v-for="(item, i) in sortedItems" :key="item.id" :href="`#tab-${i}`">{{ item.title }}</v-tab>
				<v-tabs-slider></v-tabs-slider>

				<v-tab-item v-for="(item, i) in sortedItems" :key="item.id" :value="'tab-' + i">
					<brand-list
					:items="item.brands"
					:parent-id="item.id"
					></brand-list>
				</v-tab-item>

			</v-tabs>

			<p v-else>No item found</p>
		</v-col>
	</v-row>
</template>

<script>
import ListMixin from './list.js';
import BrandList from './BrandList.vue';

export default {
	data() {
		return {
			tab: 'tab-0',
		}
	},

	components: {
		'brand-list': BrandList,
	},

	mixins: [ ListMixin ],
};
</script>
