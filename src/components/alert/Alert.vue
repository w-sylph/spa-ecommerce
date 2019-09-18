<template>
	<v-dialog :persistent="modal.options.persistent" v-model="modal.open">
		<v-card :color="modal.type" class="white--text">
			<v-card-title v-show="modal.title">{{ modal.title }}</v-card-title>
			<v-card-text v-html="modal.message" class="white--text pt-4"></v-card-text>
			<v-card-actions v-show="!modal.options.persistent">
				<v-spacer></v-spacer>
				<template v-if="!modal.options.persistent">
					<v-btn text @click="alert.close()" dark>CONTINUE</v-btn>
				</template>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script type="text/javascript">
export default {
	computed: {
		modal() {
			return this.$alertstore.state.modal;
		}
	}
}
</script>
<style type="text/css"></style>