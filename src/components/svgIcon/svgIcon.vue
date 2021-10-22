<template>
    <img :src="path" alt="" :style="{width:width}">
</template>


<script setup>

const props = defineProps({
  name:{
    type: String,
    required: true
  },
  width:{
    type: String,
    default: '1rem'
  }
})

const path = '/src/assert/icons/svg/' + props.name + '.svg'

</script>

<style scoped>
.svg-icon {
  fill: currentColor;
  vertical-align: middle;
}
</style>
