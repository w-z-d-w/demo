<template>
  <div class="country-category">
    <div class="category"  v-for="(item, index) in data" :key="item" @click="onClick(index)"
      @mouseenter="onMouseEnter(index)" @mousemove="onMouseEnter(index)">
      <div class="selected" v-if="index === selected" :style="{background: color[0]}">
        {{item}}
      </div>
      <div class="hovered" v-else-if="index === hover" :style="{background: color[1],color:'#fff'}">
        {{item}}
      </div>
      <div v-else>{{item}}</div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'TransformCategory',
    props: {
      data: Array,
      color: {
        type: Array,
        default() {
          return ['rgb(140, 160, 173)', 'rgb(80, 80, 80)']
        }
      }
    },
    data(){
      return{
        selected:0,
        hover:-1,
        task:null,
      }
    },
    mounted(){
      this.update()
    },
    beforeDestory(){
       if(this.task){
        clearInterval(this.task)
       }
    },
    methods:{
        onClick(index){
          this.selected = index
        },
        onMouseEnter(index){
          this.hover = index
        },
        update(){
            clearInterval(this.task)
            this.task = setInterval(() => {
              if (this.selected + 1 > this.data.length-1) {  //0 1 2  0 1 2
                this.selected = 0
              } else {
                this.selected += 1
              }
            }, 10000)
          
        }
      }  
  }
</script>

<style lang="scss" scoped>
  .country-category {
    display: flex;
    width: 100%;
    height: 100%;

    .category {
      flex: 1;
      background: rgb(53, 57, 65);
      font-size: 24px;
      color: rgb(144, 160, 174);

      .hovered {
        background: rgb(80, 80, 80);
      }

      .selected {
        background: rgb(140, 160, 173);
        color: #fff;
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
