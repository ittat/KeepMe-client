<template>
    <img :src="imgPath" :class="imgClass" :style="{width:picWidth}" alt />
</template>

<script setup>

import { defineProps, computed } from "vue";

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    picWidth: {
        type: String,
        default: '2rem'
    }
})

const iconName = computed(() => `#icon-${props.name}`);
const svgClass = computed(() => {
    if (props.name) {
        return `img-icon icon-${props.name}`
    }
    return 'img-icon'
});
</script>

<style scoped>
.img-icon {
    fill: currentColor;
    vertical-align: middle;
}
</style>
