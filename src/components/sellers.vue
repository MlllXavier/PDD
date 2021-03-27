<template>
	<div class="wxindex">
		<div class="top-title">
				<img class="img" src="https://t16img.yangkeduo.com/mms_static/2019-06-20/a3b5eebb-2ed9-4d4a-b888-ac2f4892f363.png"/>
				<span class="words1">拼多多个人店铺入驻</span>	
		</div>
		<div class="feature-box">
			<div class="box1">
                <div>
                    <img class="box1-img" src="https://t16img.yangkeduo.com/mms_static/2019-06-20/3b0836b1-163a-4e3d-a5bd-6530ce58a554.png"/>	
                </div>
				<span class="box1-text">海量用户</span>
			</div>
			<div class="box2">
                <div>
                    <img class="box2-img" src="https://t16img.yangkeduo.com/mms_static/2019-06-20/b98e572e-a37b-4de5-9aa3-3c911cd6a265.png"/>	
                </div>
				<span class="box2-text">0入驻费</span>
			</div>
			<div class="box3">
                <div>
                    <img class="box3-img" src="https://t16img.yangkeduo.com/mms_static/2019-06-20/8a7a00c2-21af-4cd4-ba74-b64bc52fe133.png"/>	
                </div>
				<span class="box3-text">2分钟开店</span>
			</div>
			<div class="box4">
                <div>
                    <img class="box4-img" src="https://t16img.yangkeduo.com/mms_static/2019-06-20/240be0b3-fbb8-455f-a4dd-8f96e837612f.png"/>	
                </div>
				<span class="box4-text" >新商家红包</span>
			</div>
		</div>
		<div class="inputcontainer">
			<div class="input-label">手机号码</div>
			<div class="input-input">
				<div class="input-input-content">
					<input  class="input-text" aria-label="mui-mobile-input" style="border: 0px;outline:none;cursor: pointer;" type="text" maxlength="150" placeholder="请填写入驻人手机号码" pattern="[0-9]*" inputmode="numeric" value="">
				</div>
			</div>
		</div>
		<div>
			<div class="mui-mobile-input-container">
				<div class="mui-mobile-input-label">验证码</div>
				<div class="mui-mobile-input-input">
					<div class="mui-mobile-input-input-content">
						<input class="mui-mobile-input-input-content-text" aria-label="mui-mobile-input" type="text" maxlength="6"
						 placeholder="请填写验证码" pattern="[0-9]*" inputmode="numeric" value="" style="border: 0px;outline:none;cursor: pointer;">
					</div>
				</div>
				<div class="mui-mobile-input-extra">
					<button class="mobile-auth">
						<span class="mobile-auth-text">获取验证码</span>
					</button>
				</div>
			</div>
		</div>
		<div class="mui-mobile-btn">
			<div class="mui-mobile-btn-children">0元入驻</div>
		</div>
		<p class="corp-mall">企业店铺入驻，请在电脑端访问：https://ims.pinduoduo.com</p>
		<div class="qrcode-box">
			<div class="qrcode-wrap">
			<img  class="qrcode-wrap-img" src="https://t16img.yangkeduo.com/mms_static/2019-03-26/14c5b354-ea63-4c6f-b4e6-17e305a93c8d.png" alt="">
			</div>
			<div class="text-wrap">
				<div class="text-title">扫码关注公众号免费领取店铺
			</div>
			<p class="add-text1">长按二维码并保存，<br>打开微信扫描二维码并关注公众号</p>
			</div>
			</div>
	</div>
</template>

<script>
	export default{
		props:{
		},
		data(){
			return{
			}
		}
		
		}
</script>

<style>
	.wxindex{
		height: 360px;
		width: 100%;
		background-color: #fff;
	}
	.top-title{
		height: 22px;
		width: 100%;
		padding: 35px 0px;
	}
	.img{
		width: 30px;
		height: 30px;
		display: block;	
		border: 0;
		float: left;
		margin-left: 72px;
	}
	.words1{
		font-size: 20px;
		color: #f40009;
		margin-left: 8px;
		box-sizing: inherit;
		float: left;
		height: 35px;
	}
	.feature-box{
		width: 360px;
		height: 90px;
		text-align: center;
		display: flex;
		vertical-align: middle;
	}
	.box1{
        flex: 1;
		height: 58px;
		float: left;
	}
	.box1-img
	{
		width: 38px;
		height: 38px;
		display: table-cell;
		vertical-align: middle;
	}
	.box1-text
	{
		width: 48px;
		height: 12px;
		font-size: 12px;
	}
	.box2{
		flex: 1;
		height: 58px;
		float: left;
	}
	.box2-img
	{
		width: 38px;
		height: 38px;
		display: table-cell;
		vertical-align: middle;
	}
	.box2-text
	{
		width: 48px;
		height: 12px;
		font-size: 12px;
	}
	.box3{
		flex: 1;
		height: 58px;
		float: left;
	}
	.box3-img
	{
		width: 38px;
		height: 38px;
		display: table-cell;
		vertical-align: middle;
	}
	.box3-text
	{
		width: 48px;
		height: 12px;
		font-size: 12px;
	}
	.box4{
		flex: 1;
		height: 58px;
		float: left;
	}
	.box4-img
	{
		width: 38px;
		height: 38px;
		display: table-cell;
		vertical-align: middle;
	}
	.box4-text
	{
		width: 48px;
		height: 12px;
		font-size: 12px;
	}
	.inputcontainer{
		width: 100%;
		height: 36px;
		padding: 12px 0;
		margin-left: 15px;
		display: flex;
	}
	.input-label{
		width: 70px;
		height: 20px;
		color: rgba(0,0,0,0.6);
		float: left;
		font-size: 15px;
		display: block;		
	}
	.input-text{
		width: 229px;
		height: 24px;
		font-size: 16px;
		color: rgba(0,0,0,0.4);
	}
	.mui-mobile-input-container{
		width: 100%;
		height: 36px;
		padding: 12px 0;
		margin-left: 15px;
		display: table;
	}
	.mui-mobile-input-label{
		width: 70px;
		height: 20px;
		color: rgba(0,0,0,0.6);
		float: left;
		font-size: 15px;
		
	}
	.mui-mobile-input-input{
		width: 130px;
		height: 24px;
		padding: 0 10px 0 0;
		float: left;
	}
	.mui-mobile-input-input-content{
		width: 130px;
		height: 24px;
		float: left;
	}
	
	.mui-mobile-input-input-content-text{
		height: 24px;
		font-size: 16px;
		color: rgba(0,0,0,0.4);
		width: 146px;
		float: left;
	}
	.mui-mobile-input-extra{
		float: left;
		margin-left:20px ;
	}
	.mobile-auth{
		width: 78px;
		height: 30px;
		background-color: #FFFFFF;
		border: solid .005rem #b1b2b2;
		border-radius: 0.4rem;
		color: #333;
	}
	.mui-mobile-input-container{
		width: 100%;
		height: 48px;
		padding: 12px 0;
		margin-left: 15px;
		display: table;
	}
	input::-webkit-input-placeholder{
		color: rgba(0,0,0,0.1);
	}
	.mui-mobile-btn
	{
		width: 303px;
		height: 44px;
		display: flex;
		display: -webkit-flex;
		justify-content: center;
		align-items:center;
		margin: 18px;
		background-color: #F40009;
	}
	.mui-mobile-btn-children{
		font-size: 16px;
		color: #FFFFFF;
	}
	.corp-mall{
		font-size: 12px;
        margin-left: 10px;
	}
	.qrcode-box{
		width: 100%;
		height: 78px;
		margin: 36px 0 0;
	}
	.qrcode-wrap{
		width: 78px;
		height: 78px;
		float: left;
		margin-left: 34px;
	}
	.qrcode-wrap-img{
		width: 68px;
		height: 68px;
		margin: 5px;
	}
	.text-wrap{
		width: 190px;
		height: 78px;
		float: left;
		margin-left: 7px;
	}
	.text-title{
		font-weight: 700;
		width: 190px;
		height: 19px;
		font-size: 12px;
	}
	.add-text1{
		font-size: 12px;
		margin-top: 28px;
	}
</style>
