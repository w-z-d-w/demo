<template>
	<div class="base-scroll-list">
		<div class="base-scroll-list-header">
        	<div class="header-item base-scroll-list-text"  v-for="(headerItem, index) in headerData" :key="index"  v-html="headerItem">
        		
        	</div>
        </div>

        	<div class="base-scroll-list-rows-wrapper">
        	  <div class="base-scroll-list-rows" :style="{backgroundColor: index % 2 === 0 ? rowBg[1] : rowBg[0]}"  v-for="(rowData, index) in currentRowsData" :key="index">
        	  <div class="base-scroll-list-columns base-scroll-list-text" style="width:50px;">
        	 	<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:rgb(40,40,40)">
        	 		<div style="width:15px;height:15px;background:rgb(72,122,72);border-radius:50%;border:1px solid #fff;">
        	 		</div>
        	 	</div>
		      </div>
		       <div class="base-scroll-list-columns base-scroll-list-text" v-for="(colData, colIndex) in rowData" :key="colIndex" style="width:194.6px;">
		       		<div v-show="colIndex%2 ==0" style="color:rgb(178,209,126)" >{{colData}}</div>
		       		<div v-show="colIndex%2 !=0">{{colData}}</div>
        		</div>
        	</div>
    	</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				// 标题数据，格式：['a','b','c']
   				 headerData: ['城市订单量', '店铺数', '网点人数', '新网点数量', '人均订单量'],
   				 currentRowsData:[
   				  ['北京 +15.4','上海 -13.3','沈阳 +1.2','河北 -0.3','吉林 +2.2'],
	   				['北京 -2.4','上海 -3.3','沈阳 +2.2','河北 -1.3','吉林 +22.2'],
	   				['北京 +1.4','上海 -13.3','沈阳 +3.2','河北 -2.3','吉林 +12.2'],
	   				['北京 -5.4','上海 -3.3','沈阳 +4.2','河北 -3.3','吉林 +4.2'],
	   				['北京 +13.4','上海 -13.3','沈阳 +5.2','河北 -4.3','吉林 +5.2'],
	   				['北京 -23.4','上海 -3.3','沈阳 +6.2','河北 -5.3','吉林 +6.2'],
	   				['北京 +55.4','上海 -13.3','沈阳 +7.2','河北 -6.3','吉林 +7.2'],
	   				['北京 -22.4','上海 -3.3','沈阳 +8.2','河北 -7.3','吉林 +8.2'],
	   				['北京 +88.4','上海 -13.3','沈阳 +9.2','河北 -8.3','吉林 +9.2'],
	   				['北京 -66.4','上海 -3.3','沈阳 +10.2','河北 -9.3','吉林 +0.2'],
	   				['北京 +44.4','上海 -13.3','沈阳 +11.2','河北 -10.3','吉林 +12.2'],
	   				['北京 -55.4','上海 -3.3','沈阳 +12.2','河北 -11.3','吉林 +29.2'],
   				 ],//表格内容
   				 animate:false,
   				 rowBg:['rgb(40,40,40)', 'rgb(55,55,55)'],
   				 interval:null,
			}
		},
		mounted () {
            this.interval = setInterval(this.showMarquee, 10000)
        },
        beforeDestroyed(){
        	clearInterval(this.interval)
        },
        methods: {
            showMarquee () {
                this.animate = true;
                setTimeout(()=>{
                	console.log(1)
                  this.currentRowsData.push(this.currentRowsData[0]);
                	this.currentRowsData.shift();
                	this.rowBg.reverse();  //定时器交换背景色的位置
               	 	this.animate = false;
           		 },300)
            },
    
        }
	}
</script>

<style lang="scss" scoped>
  .base-scroll-list {
    width: 100%;
    height: 100%;

    .base-scroll-list-text {
      padding: 0 10px;
      white-space: nowrap;
      overflow: hidden;
      display:flex;
      justify-content:center;
      text-overflow: ellipsis;
      box-sizing: border-box;

    }

    .base-scroll-list-header {
       display: flex;
       align-items: center;
       justify-content: space-around;
	    background-color: rgb(80, 80, 80);
	    height: 55px;
	    font-size: 24px;
	    color: rgb(255, 255, 255);

      .header-item {
      }
    }
    .animate-up{
    	 background-color: rgb(55, 55, 55);
    }
    .base-scroll-list-rows-wrapper {
      height:944px;
      overflow: hidden;

      .base-scroll-list-rows {
        display: flex;
        align-items: center;
        justify-content: space-around;
		height: 94.4px;
	    line-height: 94.4px;
	    background-color: rgb(55, 55, 55);
	    font-size: 24px;
	    color: rgb(255, 255, 255);
	    transition: all 0.3s linear;

        .base-scroll-list-columns {
          height: 100%;
          align:center;
        }
      }
    }
  }
</style>
