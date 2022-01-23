<template>
	<p>Parent</p>
	<Child />
</template>
<script>
import Bus from '~/components/Bus';
export default {
	components: {
		Bus,
	},
	created: function () {
		Bus.$on('triggerEventBus', function (value) {
			console.log('이벤트를 전달받음.', value);
		});
	},
};
</script>
