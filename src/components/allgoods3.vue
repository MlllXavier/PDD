<template>
  <div class="allgoods">
    <v-header></v-header>
    <v-skip :index="index"></v-skip>
  	<div class="allgoodshead">
  		<div :class="index2==1?'allgoodsactive':'allgoodsitem'" v-on:click="goMS">限时秒杀</div>
  		<div :class="index2==2?'allgoodsactive':'allgoodsitem'" v-on:click="goTM">9.9特卖</div>
  		<div :class="index2==3?'allgoodsactive':'allgoodsitem'" v-on:click="goCS">食品超市</div>
  	</div>
  	
  	<img class="allgoodspic1" src="http://mcdn.pinduoduo.com/home/static/images/supermarket.jpg"/>
  	
  	<div class="allgoodsdata1">食品超市</div>
  	<div class="allgoodsdata2">优选全球美食，品类丰富，全网超低价，闪电发货到您家！</div>
	<div class="good">
		<div class="goodelement">
  		<div class="goodgoods-groups" v-for="(item,index) in goods">
			  <div class="gooditem">
				  <img class="goodgoods-img" :src="item.hd_thumb_url" />
    		<div class="gooddetail">{{item.goods_name}}</div>
    		<div class="goodgoods-price">
      		<span class="goodprice">￥{{item.group_price}}</span>
      		<span class="goodold-price">￥{{item.market_price}}</span>
			  </div>
    		</div>
  		</div>
 		 </div>
	</div>
  </div>
</template>

<script>
import header from './zujian/header.vue'
import skip from './zujian/skip.vue'
	export default{
		data(){
			return{
				index: 1,
				index2: 3,
				goods: []
			}
		},
		created() {
      		this.$ajax({
          		methods: 'get', 
         		url: '../../static/data3.json'
      		}).then(res => {
        		console.log(res);
        		this.goods = res.data.goods;
      		}).catch(error => {
        		console.log(error);
      		})
    	},
        components:{
			'v-header':header,
			'v-skip':skip,
		},
		methods:{
			goMS: function(){
				this.$router.push('/allgoods')
			},
			goTM: function(){
				this.$router.push('/allgoods2')
			},
			goCS: function(){
				this.$router.push('/allgoods3')
			}
		}
	}
</script>

<style>
.allgoodshead{
	background-color: rgb(237,68,91);
	width: 360px;
	height: 38px;
	color: white;
}
.allgoodsitem{
	float: left;
	font-size: 12px;
	width: 75px;
	text-align: center;
	line-height: 38px;
	vertical-align: middle;
}
.allgoodsactive{
	float: left;
	font-size: 12px;
	width: 75px;
	text-align: center;
	line-height: 38px;
	vertical-align: middle;
	background-color: rgb(213,55,88);
}
.allgoodspic1{
	height: 160px;
	width: 100%;
}
.allgoodsdata1{
	font-size: 16px;
	padding-top: 10px;
	padding-left: 15px;
	padding-bottom: 5px;
	border-bottom: 1px lightgrey solid;
}
.allgoodsdata2{
	padding-left: 15px;
	font-size: 14px;
	color: grey;
	padding-top: 5px;
}
  .gooddiv{
    display: block;
  }
  .goodelement{
    display: block;
    background-color: white;

  }
  .gooditem{
	  padding: 4px;
	  background-color: white;
  }
  .goodgoods-groups{
    background-color: rgb(243, 243, 243);
    float: left;
    width: 180px;
    overflow: hidden;
	box-sizing: border-box;
	padding: 8px;
  }
  .goodgoods-img{
    display: inline-block;
    overflow: hidden;
    position: relative;
    width: 160px;
    height: 160px;
  }
  .gooddetail{
    display: block;
    width: 160px;
    color: #686868;
    font-size: 12px;
    line-height: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 2px;
  }
  .goodprice{
    color: #ff2741;
  }
  .goodold-price{
    text-decoration: line-through;
    color: #868686;
  }

</style>
