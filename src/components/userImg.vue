<template>
    <div class="userImg">
        <icon :name="name" iconType="png" :width="width" />
    </div>
</template>

<script setup>
import { computed } from "@vue/reactivity"

const props = defineProps({
    name: {
        type: String,
        requred: true
    },
    size: {
        type: String,
        default: "1"
    },
    color: {
        type: String,
        default: "#9f9f74"
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