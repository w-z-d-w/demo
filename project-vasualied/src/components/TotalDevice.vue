<template>
  <div class="total-device">
    <div class="total-device-left">
      <div id="total-device-chart">
        <vue-echarts :options="options" />
      </div>
    </div>
    <div class="total-device-right">
      <div class="title-wrapper">
        <div class="total-device-right-left">
          <div class="title">智能家具设备检测</div>
          <div class="sub-title">Distribution of Internet devices</div>
        </div>
        <div class="total-device-right-right">
          <div class="age">
            <count-to
              :startVal="startNum"
              :endVal="num"
              :duration="1000"
            />
            <span class="age-unit">台</span>
          </div>
        </div>
      </div>
      <div class="average-data-wrapper">
        <div class="average-data" v-for="(item, index) in refData" :key="index">
          <div class="average-data-value">
            <count-to
              :startVal="item.startValue"
              :endVal="item.value"
              :duration="1000"
            />
          </div>
          <div class="average-data-axis">
            <div class="point" :style="{background: item.color}" />
            <div class="text">{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VueEcharts from './VueEcharts'

  const color = ['rgb(176,207,120)', 'rgb(157,195,91)', 'rgb(131,167,72)']

  export default {
    name: 'totalDevice',
     components:{
        VueEcharts
      },
      data(){
        return{
          options:{},
          refData:[],
          num:1000,
          startNum:0,
          task:null,
          cureentNum:0,// 0 1
          newData:{
            totalDevices:1037,
            devices:[
                {
                    "key":"Android",
                    "value":411814
                },
                {
                    "key":"iOS",
                    "value":361657
                },
                {
                    "key":"PC",
                    "value":261706
                }
            ]
          }
        }
      },
      mounted() {
        this.loadChart()
        this.startTask()
      },
      beforeDestroy(){
        if(this.task){
          clearInterval(this.task)
        }
      },
      methods:{
         startTask(){
             clearInterval(this.task)
              this.task = setInterval(() => {
                
                this.cureentNum==0 ? this.cureentNum =1: this.cureentNum = 0
                this.startNum = this.num
                this.num += this.newData.totalDevices
                this.loadChart()
              }, 10000)
        },
         loadChart(){
             let myrefData = []
             if (this.cureentNum == 0) {
              myrefData = this.newData.devices.map((item, index) => ({
                startValue: 0,
                value: item.value,
                name: item.key,
                color: color[index]
              }))
            } else {
              myrefData = this.newData.devices.map((item, index) => ({
                startValue: 0,
                value: item.value ,
                name: item.key,
                color: color[index]
              }))
            }
            this.refData = myrefData
           console.log('myrefData',myrefData)
            this.options = {
                series: [{
                  name: '设备总数',
                  type: 'pie',
                  data: myrefData,
                  roseType: 'radius',
                  label: { show: false },
                  emphasis: {
                    itemStyle: {
                      color: 'rgb(140,251,182)'
                    }
                  },
                  radius: '70%',
                  clockwise: true,
                  color,
                  selectedMode: 'multiple',
                  selectedOffset: 10
                }]
            }
         }
    }
  }
</script>

<style lang="scss" scoped>
  .total-device {
    display: flex;
    width: 100%;
    height: 100%;
    background: rgb(43, 44, 46);

    .total-device-left {
      width: 30%;
      height: 100%;

      #total-device-chart {
        width: 100%;
        height: 100%;
      }
    }

    .total-device-right {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 40px 10px 40px 0;

      .title-wrapper {
        display: flex;
        align-items: center;

        .total-device-right-left {
          .title {
            font-size: 32px;
          }

          .sub-title {
            font-size: 16px;
            margin-top: 10px;
          }
        }

        .total-device-right-right {
          flex: 1;
          margin-left: 40px;
          font-weight: bold;

          .age {
            font-size: 56px;
            font-family: DIN;

            .age-unit {
              font-size: 20px;
            }
          }
        }
      }

      .average-data-wrapper {
        display: flex;

        .average-data {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          font-weight: bolder;

          .average-data-value {
            width: 100%;
          }

          .average-data-axis {
            display: flex;
            align-items: center;
            width: 100%;
            margin-top: 5px;

            .point {
              width: 10px;
              height: 10px;
              border-radius: 50%;
            }

            .text {
              margin-left: 10px;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
</style>
