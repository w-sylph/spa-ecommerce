<template>
	<v-container class="px-5" fluid>
		<category-list
		:items="categories"
		></category-list>
	</v-container>
</template>

<script>
import CategoryList from '../components/configs/CategoryList.vue';

export default {
	mounted() {
		this.setTitle('Config');
	},

	computed: {
		categories() {
			return this.$store.state.resources.categories;
		},
	},

	components: {
		'category-list': CategoryList,
	},
};
</script>
