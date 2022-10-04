<template>
    <img class="rounded-t-lg" :src="src" alt="" />
</template>
<script setup>
const props = defineProps({
    src: String,
})
</script>