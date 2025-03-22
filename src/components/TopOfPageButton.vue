<script setup lang="ts">
	function onClick() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<template>
	<button @click="onClick">Back to top</button>
</template>