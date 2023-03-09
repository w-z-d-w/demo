<template>
  <div class="total-user">
    <div class="title">智能家具用户使用总数</div>
    <div class="sub-title">User Total Count</div>
    <div class="total">
      <count-to :start-val="startVal" :end-val="todayUser" :duration="1000" />
    </div>
    <div class="percent-text">
        <span class="percent-text-1">
          每日增长率:
          <count-to
            :start-val="startPercent"
            :end-val="growthLastDay"
            :duration="1000"
            :decimals="2"
            suffix="%"
          />
        </span>
      <span class="percent-text-2">
        每月增长率:
        <count-to
          :start-val="startPercent2"
          :end-val="growthLastDay2"
          :duration="1000"
          :decimals="2"
          suffix="%"
        />
        </span>
    </div>
    <div class="percent">
      <div class="percent-inner-wrapper">
        <div class="percent-inner" :style="{ width: `${growthLastDay}%` }"/>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'totalUser',
    data(){
      return{
          startVal:0,
          todayUser:0,

          startPercent:0,
          growthLastDay:7.27,

          startPercent2:0,
          growthLastDay2:7.27,
          growthLastMonth:34.09,
          task:null,
      }
    },
     mounted() {
      this.startTask()
    },
    beforeDestroy() {
      if(this.task){
          clearInterval(this.task)
        }
    },
    methods:{
      startTask(){
           clearInterval(this.task)
            this.task = setInterval(() => {
                this.startPercent = this.growthLastDay
                this.growthLastDay = this.startPercent + 1

                
                this.startVal = this.todayUser
                this.todayUser = this.startVal + 900

                this.startPercent2 = this.growthLastDay2
                this.growthLastDay2 = this.startPercent2 + 2
               
            }, 10000)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .total-user {
    width: 100%;
    height: 100%;
    background: rgb(66, 68, 70);
    box-shadow: 0 10px 10px rgba(0, 0, 0, .3);
    padding: 20px 40px;
    box-sizing: border-box;

    .title {
      font-size: 32px;
    }

    .sub-title {
      font-size: 16px;
      letter-spacing: 1px;
      margin-top: 10px;
    }

    .total {
      font-family: DIN;
      font-size: 68px;
      font-weight: bolder;
      letter-spacing: 2px;
      padding: 10px 0;
    }

    .percent-text {
      font-size: 28px;
      font-family: DIN;
      letter-spacing: 2px;

      .percent-text-1 {
        color: rgb(197, 251, 121);
      }

      .percent-text-2 {
        color: rgb(99, 169, 0);
        margin-left: 10px;
      }
    }

    .percent {
      width: 100%;
      height: 20px;
      box-sizing: border-box;
      border: 1px solid #fff;
      margin-top: 10px;
      .percent-inner-wrapper {
        height: 100%;
        padding: 2px;
        box-sizing: border-box;
        overflow: hidden;
        .percent-inner {
          height: 100%;
          background: rgb(150, 150, 150);
          transition: width 1s linear;
        }
      }
    }
  }
</style>
