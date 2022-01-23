<template>
	<div>하위 컴포넌트 영역입니다.<button @click="showLog">show</button></div>
</template>
<script>
import Bus from '~/components/Bus';
export default {
	components: {
		Bus,
	},
	methods: {
		showLog() {
			Bus.$emit('triggerEventBus', 100);
		},
	},
};
</script>
