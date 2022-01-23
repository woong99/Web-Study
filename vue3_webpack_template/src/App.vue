<template>
	<input v-model="msg" type="text" />
</template>

<script>
export default {
	data() {
		return {
			msg: 'Hello World!',
		};
	},
	watch: {
		msg() {
			console.log(this.msg);
		},
	},
};
</script>
