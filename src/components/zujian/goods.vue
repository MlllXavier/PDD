<template>
	<!-- 最外层设置跳转 -->
	<div class="goods" v-on:click="goAllGoods">
		<div class="goods-text">
			<span class="goods-textTitle">精彩活动</span>
			<span class="goods-textMore">查看更多></span>
		</div>
		<div class="Img2">
			<img class="img2" src="//mcdn.pinduoduo.com/home/static/images/seckill.png" />
		</div>
		<div>
			<img class="img3" src="//mcdn.pinduoduo.com/home/static/images/sale_index.png" />
			<img class="img4" src="//mcdn.pinduoduo.com/home/static/images/supermarket.png"/>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
            goAllGoods: function(){
                this.$router.push('/allgoods')
            }
        }
	}
</script>

<style>
	.goods{
		width: 100%;
		height: 290px;
		background-color: whitesmoke;
		box-sizing: border-box;
	}
	.goods-text{
		width: 100%;
		height: 35px;
		background-color: white;
		margin-top: 5px;
	}
	.goods-textTitle{
		margin-top: 5px;
		float: left;
		margin-left: 20px;
	}
	.goods-textMore{
		margin-top: 5px;
		float: right;
		margin-right: 10px;
		color: gainsboro;
		font-size: small;
	}
	.Img2{
		width: 100%;
		height: 130px;
	}
	.img2{
		width: 100%;
		height: 130px;
	}
	.img3{
		width: 50%;
		float: left;
		height: 100px;
	}
	.img4{
		width: 50%;
		float: left;
		height: 100px;
	}
</style>