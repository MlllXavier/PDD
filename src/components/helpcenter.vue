<template>
<html>
  <div>
    <v-header></v-header>
		<v-skip :index="index"></v-skip>
    <div style="font-size: 20px;">
      <div class="helpcenter_header">
    <div class="helpcenter_banner">
      <img class="helpcenter_header-img" src="../assets/help.jpg">
    </div>
    <div class="helpcenter_content" v-for="item in items">
      <span class="taro-text helpcenter_title">{{item.question}}</span>
      <div class="helpcenter_item" v-for="txt in item.text">
        <span class="taro-text">
           · {{txt}}
        </span>
        <div class="taro-img helpcenter_arrow">
          <img class="taro-img__mode-scaletofill" src="../assets/back.png">
        </div>
        <div class="helpcenter_divider"/>
      </div>
    </div>
    <div class="helpcenter_footer">
      <div class="helpcenter_divider"/>
      <span class="helpcenter_taro-text helpcenter_text">版权所有：上海寻梦信息技术有限公司</span>
    </div>
  </div>
    </div>
    
  </div>
</html>
</template>

<script>
import header from './zujian/header.vue'
import skip from './zujian/skip.vue'
export default {
  data(){
    return{
      index: 3,
      items: [
        {question: "新手指南", text: ["购物流程"]},
        {question: "交易问题", text: ["我拍下来后的商品什么时候发货？", "已成团未发货如何退款？", "没有收到货/商家发错地址了怎么办？", "收到商品有问题怎么办？", "如何联系商家客服？", "为什么我的优惠券不能用？", "“全网总售”和“已拼”有什么区别？", "收到的商品能退换货吗？"]},
        {question: "退款&售后", text: ["退换货流程", "退换货规则", "7天无理由退换货"]},
        {question: "账户相关", text: ["账户安全与账户信息"]},
        {question: "联系我们", text: ["如何联系拼多多客服？"]}
      ]
    }
  },
  components:{
			'v-header':header,
			'v-skip':skip,
		} 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.helpcenter_header{
  margin-top: 20px;
  background-color: #f3f3f3;
  font-family: PingFangSC-Regular,Helvetica,STHeiti STXihei,Microsoft JhengHei,Microsoft YaHei,Arial;
}
.helpcenter_banner{
  display: block;
  width: 100%;
  height: auto;
}
.helpcenter_header-img{
  width:100%;
}
.helpcenter_content{
    width: 100%;
    background-color: #fff;
    margin: 10px 0;
    padding-left: 9px;
    line-height: 40px;
    color: #111
}
.helpcenter_content .helpcenter_title {
    width: 100%;
    display: block;
    font-size: 15px;
}
.helpcenter_content .helpcenter_item{
  position: relative;
  width: 100%;
  height: 55px;
  font-size: 14px;
  text-indent: 10px;
}
.helpcenter_content .helpcenter_item .helpcenter_arrow {
  overflow: visible;
  position: absolute;
  top: 3px;
  right: 30px;
  width: 5px;
  height: 8px
}
.taro-img{
  display: inline-block;
  overflow: hidden;
  position: relative;
  font-size: 0;
  width: 320px;
  height: 240px;
}
.taro-img__mode-scaletofill{
  width: 100%;
  height: 100%;
}
.helpcenter_footer{
  width: 100%;
  background-color: #fff;
  margin-top: 10px;
  padding: 15px 15px 0;
}
.helpcenter_divider{
  width: 100%;
  height: 4px;
  border-bottom: 1px solid #d6d6d6;
  -webkit-transform: scaleY(.5);
  -ms-transform: scaleY(.5);
  transform: scaleY(.5);
}
.helpcenter_footer .helpcenter_text{
  display: block;
  font-size: 10px;
  line-height: 2.5;
  text-align: center;
  color: #7a7a7a;
}
.helpcenter_taro-text{
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
