<template>
	<div class="skip">
		<!-- 添加点击事件跳转页面 -->
		<div v-bind:class=" index1 == 1 ? 'act' : 'item' " v-on:click="goHome">首页</div>
		<div v-bind:class=" index1 == 2 ? 'act' : 'item' " v-on:click="goSellers">商家入驻</div>
		<div v-bind:class=" index1 == 3 ? 'act' : 'item' " v-on:click="goHelpCenter">帮助中心</div>
	</div>
</template>

<script>
	export default{
		props:{
			index : Number
		},
		data(){
			return{
				index1: this.index
			}
		},
		methods:{
            goHome: function(){
                this.$router.push('/')
            },
            goSellers: function(){
                this.$router.push('/sellers')
            },
            goHelpCenter: function(){
                this.$router.push('/helpcenter')
            },
        }
	}
</script>

<style>
	.skip{
		width: 100%;
		height: 50px;
		display: flex;
		background-color: whitesmoke;
		box-sizing: border-box;
		border-bottom:1px solid rgb(7,17,27,0.1);
	}
	.item{
		float: left;
		margin-left: 20px;
		font-size: 14px;
		color: rgb(77,85,93);
		line-height: 14px;
		margin-top: 16px;
	}
	.act{
		float: left;
		font-size: 14px;
		color: rgb(240,20,20);
		line-height: 14px;
		margin-left: 20px;
		margin-top: 16px;
	}
</style>