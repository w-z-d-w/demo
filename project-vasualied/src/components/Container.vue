<template>
	<div id="container" ref="refname">
		<template v-if="ready">
			<slot></slot>
		</template>
	</div>
</template>
<script>
	import {debounce} from '../utils/index.js'
	/* 容器组件
	 1.解决定宽定高问题
	 2.解决屏幕缩放自动适配问题
   */
	export default{
		name:'container',
		props:{
			options:Object
		},
		data(){
			return{
				dom:null,
				width:0,//dom的宽度
			    height:0,
			    originalWidth:0,//屏幕宽度
			    originalHeight:0,
			    task:null,
			    ready:false
			}
		},
		mounted(){
			 this.ready = false
			 this.initSize()
		 	 this.updateSize()
			 this.updateScale()
		 	window.addEventListener('resize',debounce(100,this.onResize))
		 	this.ready = true
		},
		beforeDestroy(){
			window.removeEventListener('resize',this.onResize)
		},
		methods:{
            
			initSize(){
				this.dom = this.$refs.refname
				// 获取大屏的真实尺寸
				if (this.options && this.options.width && this.options.height) {
				  this.width = this.options.width
				  this.height = this.options.height
				} else {
				  this.width = this.dom.clientWidth
				  this.height = this.dom.clientHeight
				}
				// 获取画布尺寸
				if (!this.originalWidth || !this.originalHeight) {
				  this.originalWidth = window.screen.width
				  this.originalHeight = window.screen.height
				}
			},
			updateSize(){ //实时更新dom宽和高
			  if (this.width && this.height) {
				  this.dom.style.width = `${this.width}px`
				  this.dom.style.height = `${this.height}px`
				} else {
				  this.dom.style.width = `${this.originalWidth}px`
				  this.dom.style.height = `${this.originalHeight}px`
				}
			},
			updateScale(){ //根绝尺寸比例  缩放整个视口
				// 获取真实的视口尺寸
				const currentWidth = document.body.clientWidth
				const currentHeight = document.body.clientHeight
				// 获取大屏最终的宽高
				const realWidth = this.width || this.originalWidth
				const realHeight = this.height || this.originalHeight
				const widthScale = currentWidth / realWidth
				const heightScale = currentHeight / realHeight
				console.log('缩放比例',widthScale,heightScale)
				this.dom && (this.dom.style.transform = `scale(${widthScale}, ${heightScale})`)
			},
			onResize(){
				this.initSize()
				this.updateScale()
			}
		}
	}
</script>
<style type="scss">
 #container{
   position: fixed;
   top:0;
   left:0;
   overflow:hidden;
   transform-origin:left top; 
   background:#ccc;
   z-index:999;
}	
</style>