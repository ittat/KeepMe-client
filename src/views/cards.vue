<template>
    <div id="warper">
        <router-view></router-view>
    </div>
</template>

<script setup>

</script>

<style>
#warper {
    /* background-color: lawngreen; */
    margin-right: 17px;
    height: calc(100vh - 15%);
    margin-top: 14px;
    margin-left: 8px;
        box-shadow: 
      0 0px 8px 2px rgba(0, 0, 0, 0.2), 
      3px 3px 0 0 #f6f6f6, 
      5px 3px 8px 2px rgba(0, 0, 0, 0.2), 
      7px 6px 0 0 #f6f6f6, 
      9px 6px 8px 2px rgba(0, 0, 0, 0.2),
      10px 9px 0 0 #f6f6f6,
      15px 9px 8px 2px rgba(0, 0, 0, 0.2)
    ;
}
</style>