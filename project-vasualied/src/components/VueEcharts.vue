<template>
  <div :class="[className, 'orderArea']"></div>
  <!-- <div :class="{className, istrue}"></div> -->
</template>

<script>
  import echarts  from 'echarts'
  import echartsTheme from "./theme/westeros.json";
  import { v4 as uuidv4 } from 'uuid'

  export default {
      name: 'VueEcharts',
      props: {
        options: Object,
      },
      data(){
        return{
          myChart:null,
          className:''
        }
      },
      mounted() {
        this.loadChart()
      },
      beforeDestroy() {
        if (!this.myChart) {
          return
        }
        this.myChart.dispose();
        this.myChart = null;
      },
      methods:{
         loadChart(){
          console.log('uuidv4',uuidv4())
            this.className = `echarts${uuidv4()}`
            this.$nextTick(() => {
                echarts.registerTheme('westeros', echartsTheme)
                this.myChart = echarts.init(document.getElementsByClassName(this.className)[0],'westeros')
                this.myChart.setOption(this.options)
            })
        },
      }
}      

</script>

<style lang="scss" scoped>
  .orderArea {
    width: 100%;
    height: 100%;
  }
</style>
