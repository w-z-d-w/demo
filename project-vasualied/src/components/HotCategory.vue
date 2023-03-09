<template>
  <div class="hot-category">
    <div class="hot-category-wrapper">
      <div class="hot-category-left">
        <div class="title">当前热卖品类</div>
        <div class="sub-title">Hot Categories</div>
      </div>
      <div class="hot-category-right">
        <div class="sub-title">最后更新时间：{{date}} {{time}}</div>
      </div>
    </div>
    <div id="hot-category-chart">
     <div id="HotChart" class="orderArea"></div>
    </div>
  </div>
</template>

<script>
  import { dateFilter,timeFilter } from '../utils/useClock'
  import echarts from 'echarts'
  import echartsTheme from "./theme/westeros.json";

  export default {
    name: 'HotCategory',
    data(){
      return{
         task1:null,
         time:'',
         date:'',
         myChart:null,
         currentChart:0,
         data1:{
          axisX:[
                "粉面粥店",
                "简餐便当",
                "汉堡披萨",
                "香锅冒菜",
                "小吃炸串",
                "地方菜系",
                "轻食简餐"
            ],
             "data1":[
                52,
                0,
                18,
                68,
                3,
                79,
                82
            ],
            "data2":[
                48,
                100,
                82,
                32,
                97,
                21,
                18
            ]
         },
         data2:{
          axisX:[
                "草莓",
                "甘蔗",
                "榴莲",
                "菠萝",
                "香蕉",
                "梨",
                "苹果"
            ],
             "data1":[
                11,
                6,
                62,
                79,
                19,
                47,
                92
            ],
            "data2":[
                89,
                94,
                38,
                21,
                81,
                53,
                8
            ]
         }
      }
    },
    mounted(){
        this.loadChart()
        this.getTackFun()
    },
    beforeDestory(){
        if(this.task1){
          clearInterval(this.task1)
        }
    },
    methods:{
       getTackFun(){
          clearInterval(this.task1)
          // const now = new Date()
          // const date1 = dateFilter(now)
          // const time1 = timeFilter(now)
            this.task1 = setInterval(() => {
               const now = new Date()
               this.date = dateFilter(now)
               this.time = timeFilter(now)
               this.currentChart === 0 ? this.currentChart = 1 : this.currentChart = 0
               this.loadChart()
            }, 10000)
       
     },
     loadChart(){
        this.$nextTick(() => {
            echarts.registerTheme('westeros', echartsTheme)
            this.myChart = echarts.init(document.getElementById('HotChart'),'westeros');
            this.myChart.setOption(this.initOption());
        })
    },
    initOption(){
        const sourceData = []
          if (this.currentChart === 0) {
            this.data1.axisX.forEach((axis, index) => {
              sourceData.push([axis, this.data1.data1[index], this.data1.data2[index]])
            })
          } else {
            this.data2.axisX.forEach((axis, index) => {
              sourceData.push([axis, this.data2.data1[index], this.data2.data2[index]])
            })
          }
          const source = [
            ['指标', '国内', '海外'],
            ...sourceData
          ]

          //console.log(source)

        const _option = {
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            color: ['rgb(209,248,138)', 'rgba(65,65,65,.5)'],
            grid: {
              left: 20,
              right: 0,
              bottom: 30,
              top: 20
            },
            dataset: {
              source
            },
            yAxis: {
              type: 'value',
              splitLine: {
                lineStyle: {
                  type: 'dotted'
                }
              },
              axisLine: {
                onZero: false,
                lineStyle: {
                  color: 'rgb(124,136,146)'
                }
              },
              axisLabel: {
                color: 'rgb(98,105,113)',
                fontSize: 16
              },
              axisTick: { show: false }
            },
            xAxis: {
              type: 'category',
              splitLine: { show: false },
              axisTick: { show: false },
              axisLabel: {
                color: 'rgb(98,105,113)',
                fontSize: 16
              },
              axisLine: {
                onZero: false,
                lineStyle: {
                  color: 'rgb(124,136,146)'
                }
              }
            },
            series: [
              {
                type: 'bar',
                stack: 'total',
                barWidth: 40
              },
              { //两个柱状图叠加效果    
                type: 'bar',
                stack: 'total'
              }
            ]
        }
        return _option
    }  
  }
}
</script>

<style lang="scss" scoped>
  .hot-category {
    width: 100%;
    height: 100%;
    background: rgb(43, 44, 46);
    padding: 20px 40px;
    box-sizing: border-box;

    .hot-category-wrapper {
      display: flex;

      .hot-category-right {
        flex: 1;
        text-align: right;
      }

      .title {
        font-size: 32px;
      }

      .sub-title {
        font-size: 16px;
        margin-top: 10px;
      }
    }

    #hot-category-chart {
      height: 220px;
    }
  }
   .orderArea {
     width: 100%;
     height: 100%;
    }
</style>
