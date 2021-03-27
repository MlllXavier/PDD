<template>
	<div>
		<v-header></v-header>
		<v-skip :index="index"></v-skip>
		<div class="webbody">
			<div class="img1">
				 <img class="img1Img" src="http://mcdn.pinduoduo.com/home/static/images/banner_index_v2.jpg"/> 
			</div>
			<v-goods></v-goods>
			<!-- 以下为不跳转 -->
			<div class="body">
				<div class="body-text">
					<span class="body-textTitle">精选专题</span>
					<span class="body-textMore">查看更多></span>
				</div>
				<div class="img5">
					<img class="img5Img" src="//mcdn.pinduoduo.com/home/static/images/girlclothes.jpg" />
				</div>
			</div>
		</div>
		<div class="bottom"></div>
	</div>
</template>

<script>
import header from './zujian/header.vue'
import skip from './zujian/skip.vue'
import goods from './zujian/goods.vue'
export default {

  data () {
    return {
        index: 1,
    }
  },
components:{
			'v-header':header,
			'v-skip':skip,
			'v-goods':goods
		} 
	
}
</script>

<style >
	.img1Img{
		width: 100%;
		height: 140px;
	}
	.body-text{
		width: 100%;
		height: 35px;
		background-color: white;
		margin-top: 5px;
	}
	.body-textTitle{
		margin-top: 5px;
		float: left;
		margin-left: 20px;
	}
	.body-textMore{
		margin-top: 5px;
		float: right;
		margin-right: 10px;
		color: gainsboro;
		font-size: small;
	}
	.img5Img{
		width: 100%;
		height: 160px;
	}
	.webbody{
		height: calc(100% - 250px); 
		overflow: hidden;
		width: 100%;
	}
	
</style>