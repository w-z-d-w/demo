<template>
  <div class="fly-box" :ref="refName">
    <svg :width="width" :height="height">
      <defs>
        <path
          :id="pathId"
          :d="path"
          fill="none"
        />
        <radialGradient
          :id="radialGradientId"
          cx="50%"
          cy="50%"
          fx="100%"
          fy="50%"
          r="50%"
        >
          <stop offset="0%" stop-color="#fff" stop-opacity="1"></stop>
          <stop offset="100%" stop-color="#fff" stop-opacity="0"></stop>
        </radialGradient>
        <mask :id="maskId">
          <circle :r="starLength" cx="0" cy="0" :fill="`url(#${radialGradientId})`">
            <animateMotion
              :dur="`${duration}s`"
              :path="path"
              rotate="auto"
              repeatCount="indefinite"
            />
          </circle>
        </mask>
      </defs>
      <use
        :href="`#${pathId}`"
        stroke-width="1"
        :stroke="lineColor"
      />
      <use
        :href="`#${pathId}`"
        stroke-width="20"
        :stroke="starColor"
        :mask="`url(#${maskId})`"
      />
    </svg>
    <div class="imooc-fly-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import { v4 as uuidv4 } from 'uuid'

  export default {
    name: 'flyBox',
    props: {
      lineColor: {
        type: String,
        default: '#fff'
      },
      starColor: {
        type: String,
        default: 'green'
      },
      starLength: {
        type: [String, Number],
        default: 200
      },
      duration: {
        type: [Number, String],
        default: 5
      }
    },
    data(){
      return{
         refName : 'flyBox',
         width:0,
         height:0,
         pathId:'',
         radialGradientId:'',
         maskId:''
      }
    },
    computed:{
      path(){
        return `M5 5 L${this.width - 5} 5 L${this.width - 5} ${this.height - 5} L5 ${this.height - 5} Z`
      }
    },
    mounted(){
      this.init()
    },
    methods:{
        init () {
          const uuid = uuidv4()
          this.pathId = `${this.refName}-path-${uuid}`
          this.radialGradientId = `${this.refName}-gradient-${uuid}`
          this.maskId = `${this.refName}-mask-${uuid}`
          const dom = this.$refs[this.refName]
          this.width = dom.clientWidth
          this.height = dom.clientHeight
      }
    }
  }
</script>

<style lang="scss" scoped>
  .fly-box {
    position: relative;
    width: 100%;
    height: 100%;

    svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .imooc-fly-box-content {
      width: 100%;
      height: 100%;
      padding: 2px;
      box-sizing: border-box;
    }
  }
</style>
