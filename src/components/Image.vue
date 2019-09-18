<template>
	<v-img
	class="white--text mx-5 rounded"
	height="200px"
	max-height="200px"
	:src="src"
	:lazy-src="lazySrc">
    	<template v-slot:placeholder>
			<v-row
			class="fill-height ma-0"
			align="center"
			justify="center">
				<v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
			</v-row>
		</template>
    </v-img>
</template>

<script>
export default {
	computed: {
		src() {
			return 'https://picsum.photos/id/'+ this.index +'/600/400';
		},

		lazySrc() {
			return 'https://picsum.photos/id/'+ this.index +'/40/10';
		},
	},

	props: {
		index: {
			default: 0,
		}
	},
}
</script>