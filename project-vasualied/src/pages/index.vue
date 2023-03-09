<template>
	<div class="home">
		<Container :options="{ width:3840,height:2160}">
     		<div class="header">
     			<top-header></top-header>
     		</div>
     		<div class="separator"></div>
			<div class="center">
				<div class="left">
					<div class="left1">
						<total-user/>
					</div>
					<div class="left2">
						 <average-age/>
					</div>
					<div class="left3">
						 <total-device/>
					</div>
					<div class="left4">
						<total-gender/>
					</div>
					<div class="left5">
						<total-rider/>
					</div>
					<div class="left6">
						 <hot-category/>
					</div>
				</div>
				<div class="right">
					<div class="right-top1">
						 <center-header/>
					</div>
					<div class="right-top2">
						<transform-category
			              :data="['ALL', '北京', '上海', '深圳', '杭州', '南京', '武汉']"
			            />
					</div>
					<div class="right-bottom">
						<div class="right-left">
							<div class="right-left1">
								<order-map></order-map>
							</div>
							<div class="right-left2">
								<transform-category
				                  :data="['订单量', '销售额', '用户数', '退单量']"
				                  :color="['rgb(178,209,126)', 'rgb(116,166,49)']"
				                />
							</div>
							<div class="right-left3">
								 <fly-box>
				                    <real-time-order></real-time-order>
				                </fly-box>
							</div>
						</div>
						<div class="right-right">
							<div class="right-right1">
								<sales-list/>
							</div>
							<div class="right-right2">
								 <sales-rank/>
							</div>
						</div>
					</div>
				</div>
			</div>

		</Container>	
	</div>
</template>
<script>
	import Container from '../components/Container.vue'
	import OrderMap from '../components/OrderMap.vue'
	import CenterHeader from '../components/CenterHeader.vue'
	import TopHeader from '../components/TopHeader.vue'
	import FlyBox from '../components/FlyBox.vue'
	import RealTimeOrder from '../components/RealTimeOrder.vue'
	import SalesList from '../components/SalesList.vue'
	 import SalesRank from '../components/SalesRank.vue'
	 import TransformCategory from '../components/TransformCategory.vue'
	 import HotCategory from '../components/HotCategory.vue'
	 import TotalRider from '../components/TotalRider.vue'
	 import TotalGender from '../components/TotalGender.vue'
	 import TotalDevice from '../components/TotalDevice.vue'
	 import AverageAge from '../components/AverageAge.vue'
     import TotalUser from '../components/TotalUser.vue'

	export default{
		components:{
			Container,
			OrderMap,
			CenterHeader,
			TopHeader,
			FlyBox,
			RealTimeOrder,
			SalesList,
			SalesRank,
			TransformCategory,
			HotCategory,
			TotalRider,
			TotalGender,
			TotalDevice,
			AverageAge,
			TotalUser
		}
	}
</script>
<style lang="scss">
.home{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: #1d1d1d;
    color: #fff;
    font-size: 48px;

     .header {
        width: 100%;
        height: 167px;
        background: yellow;
      }

      .separator {
        width: 100%;
        height: 10px;
        background: rgb(92, 88, 89);
      }

       .center {
         flex: 1;
         display: flex;
         width: 100%;

         .left {
	        
	          display: flex;
	          flex-direction: column;
	          justify-content: space-between;
	          width: 860px;
	          height: 100%;
	          box-sizing: border-box;
	         .left1 {
	            height: 300px;
	            background: grey;
	          }

	          .left2 {
	            height: 320px;
	            background: grey;
	          }

	          .left3 {
	            height: 280px;
	            background: grey;
	          }

	          .left4 {
	            height: 230px;
	            background: grey;
	          }

	          .left5 {
	            height: 360px;
	            background: grey;
	          }

	          .left6 {
	            height: 450px;
	            background: grey;
	          }
	      }
	       .right {
	          flex: 1;
	          display: flex;
	          flex-direction: column;
	          margin-left: 10px;

	           .right-top1 {
	            width: 100%;
	            height: 206px;
	            background: grey;
	          }

	          .right-top2 {
	            width: 100%;
	            height: 48px;
	            background: grey;
	            margin: 10px 0;
	          }
	           .right-bottom {
		            flex: 1;
		            display: flex;

		            .right-left {
		              display: flex;
		              flex-direction: column;
		              justify-content: space-between;
		              width: 1917px;

		              .right-left1 {
		                height: 999px;
		                background: grey;
		              }

		              .right-left2 {
		                height: 80px;
		                background: grey;
		              }

		              .right-left3 {
		                height: 550px;
		                background: grey;
		              }
		            }
	               .right-right {
		              flex: 1;
		              display: flex;
		              flex-direction: column;
		              justify-content: space-between;
		              margin-left: 10px;
		              margin-right: 20px;

		              .right-right1 {
		                width: 100%;
		                height: 999px;
		                background: grey;
		              }

		              .right-right2 {
		                flex: 1;
		                width: 100%;
		                margin-top: 20px;
		                background: grey;
		              }
		            }
		        }
	      }

       } 
}

</style>