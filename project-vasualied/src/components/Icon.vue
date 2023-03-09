<template>
  <div class="icon-wrapper">
    <svg class="icon">
      <use :href="iconName"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: String,
    // prefix: {
    //   type: String,
    //   default: 'icon'
    // },
  },//iconData:['money', 'orders', 'biaoqing', 'me'],
  computed:{
     iconName(){
      return `#icon-${this.name}`
     }
  }
}
</script>

<style type="text/css">
.icon-wrapper {
  display: inline-block;
}
.icon {
  width: 100%;
  height: 100%;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>