<template>
    <div class="userImg">
        <img v-if="props.imgsrc != null" :src="props.imgsrc" style="width: inherit;
border-radius: inherit;" />
        <icon v-else :name="name" iconType="png" :width="width" />
    </div>
</template>

<script setup>
import { computed } from "@vue/reactivity"

const props = defineProps({
    name: {
        type: String,
        default: "head-funingdady"
    },
    size: {
        type: String,
        default: "1"
    },
    color: {
        type: String,
        default: "#9f9f74"
    },
    imgsrc:{
        type: String,
        default: null
    }
})

const size = computed(() => {
    return (props.size === '3') ? '4rem' : ( (props.size === '2') ? '3rem' : '2rem')
})
const width = computed(() => {
    return (props.size === '3') ? '3rem' : ( (props.size === '2') ? '2rem' : '1rem')
})


</script>

<style scoped>
.userImg {
    width: v-bind(size);
    height: v-bind(size);
    border:v-bind(color);
    border-width: 5px;
    border-radius: 50%;
    border-style: solid;
}
</style>