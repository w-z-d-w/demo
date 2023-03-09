<template>
  <div id="app">
  	 <Index/>
  </div>
</template>

<script>
import Index from './pages/index.vue'
export default {
  name: 'App',
  data(){
    return{
      
    }
  },
  components: {
	   Index
  }
}
</script>
<style lang="scss">
html,body,#app{
  width:100%;
  height:100%;
  padding:0;
  margin:0;
  font-size:100px;
}

</style>