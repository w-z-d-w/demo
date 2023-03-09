<template>
  <div class="line-chart">
    <div class="title-wrapper">
      <div class="title">智能家具概况</div>
      <div class="sub-title">Rider Growth rate</div>
    </div>
    <div id="total-rider-chart">
       <div id="TotalChart" class="orderArea"></div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import echartsTheme from "./theme/westeros.json";

  const colors = ['rgb(209,248,139)', 'rgb(115,201,245)', 'rgb(124,136,146)']

  export default {
    name: 'TotalRider',
     data(){
      return{
         task1:null,
         time:'',
         date:'',
         myChart:null,
         currentChart:0,
         axisData:[
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
        ],
         orderData:{
            "legend1":"去年网点月销量",
            "legend2":"今年网点月销量",
            "data1":[
                "330",
                "420",
                "560",
                "450",
                "610",
                "890",
                "720",
                "610",
                "580",
                "750",
                "770",
                "600"
            ],
            "data2":[
                "430",
                "510",
                "660",
                "550",
                "710",
                "990",
                "620",
                "550",
                "760",
                "810",
                "930",
                "720"
            ]
        },
         rateData:{
             "legend1":"去年网点月销量",
            "legend2":"今年网点月销量",
            "data1":[
                "129",
                "223",
                "202",
                "197",
                "300",
                "112",
                "333",
                "249",
                "178",
                "322",
                "401",
                "167"
            ],
            "data2":[
                "179",
                "263",
                "282",
                "297",
                "330",
                "344",
                "222",
                "299",
                "190",
                "455",
                "566",
                "233"
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
               this.task1 = setInterval(() => {
               this.currentChart === 0 ? this.currentChart = 1 : this.currentChart = 0
               this.loadChart()
            }, 10000)
       
     },
     loadChart(){
        this.$nextTick(() => {
            echarts.registerTheme('westeros', echartsTheme)
            this.myChart = echarts.init(document.getElementById('TotalChart'),'westeros');
            this.myChart.setOption(this.initOption());
        })
    },
    initOption(){
       
          let legendData = []
          let data1 = []
          let data2 = []
          if (this.currentChart === 0) {
            legendData = [this.orderData.legend1, this.orderData.legend2]
            data1 = this.orderData.data1
            data2 = this.orderData.data2
          } else {
            legendData = [this.rateData.legend1, this.rateData.legend2]
            data1 = this.rateData.data1
            data2 = this.rateData.data2
          }

          //console.log(legendData)

        const _option = {
              color: colors,
            tooltip: {
              trigger: 'none',
              axisPointer: {
                type: 'cross'
              }
            },
            legend: {
              top: 20,
              right: 40,
              icon: 'rect',
              textStyle: {
                fontSize: 16,
                color: colors[2]
              },
              data: legendData
            },
            grid: {
              top: 60,
              bottom: 30,
              left: 80,
              right: 40
            },
            xAxis: [{
              type: 'category',
              axisTick: { show: false },
              axisLine: {
                onZero: false,
                lineStyle: {
                  color: colors[2]
                }
              },
              axisLabel: {
                fontSize: 16
              },
              data: this.axisData
            }, {
              type: 'category',
              axisTick: { show: false },
              axisLine: { show: false }
            }],
            yAxis: [{
              type: 'value',
              axisTick: { show: false },
              axisLine: {
                onZero: false,
                lineStyle: {
                  color: colors[2]
                }
              },
              axisLabel: {
                fontSize: 16
              },
              splitLine: {
                lineStyle: {
                  type: 'dotted'
                }
              }
            }],
            series: [{
              name: legendData[0],
              type: 'line',
              xAxisIndex: 1,
              smooth: true,
              lineStyle: {
                width: 2
              },
              symbol: 'none',
              data: data1
            }, {
              name: legendData[1],
              type: 'line',
              smooth: true,
              lineStyle: {
                width: 2
              },
              symbol: 'none',
              data: data2
            }]
        }
        return _option
    }  
  }
  }
</script>

<style lang="scss" scoped>
  .line-chart {
    width: 100%;
    height: 100%;
    background: rgb(43, 44, 46);

    .title-wrapper {
      padding: 20px 40px 0;
      box-sizing: border-box;

      .title {
        font-size: 32px;
      }

      .sub-title {
        font-size: 16px;
        margin-top: 10px;
      }
    }

    #total-rider-chart {
      width: 100%;
      height: 250px;
    }
  }
   .orderArea {
     width: 100%;
     height: 100%;
    }
</style>
