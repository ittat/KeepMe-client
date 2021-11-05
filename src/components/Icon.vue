<template>
    <img :src="path" alt="" :style="{'width':width,'height':width}">
</template>


<script setup>

const props = defineProps({
  name:{
    type: String,
    required: true
  },
  iconType:{
    type: String,
    required: true
  },
  width:{
    type: String,
    default: '1rem'
  }
})

const path = '/img/icons/' + props.iconType + '/' + props.name + '.' + props.iconType

</script>

<style scoped>
.svg-icon {
  fill: currentColor;
  vertical-align: middle;
}
</style>
