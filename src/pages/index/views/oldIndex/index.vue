<template>
  <div class="ecpp-main">
    <div class="all-block">
      <!-- 背景轨道图 -->
      <div class="route-line">
        <img class="route-img" src="@/assets/img/old-index/route.png">
      </div>
      <!-- 我的门户 -->
      <div class="block block-0">
        <img class="normal-img" src="@/assets/img/old-index/0.png">
        <img class="myDashboard-img" src="@/assets/img/old-index/myDashboard.png">
      </div>
      <!-- 数据管理 -->
      <div class="block block-1">
        <img class="normal-img" src="@/assets/img/old-index/1.png">
        <img class="t-01" src="@/assets/img/old-index/t_01.png">
      </div>
      <!-- 自助探索 -->
      <div class="block block-2">
        <img class="normal-img" src="@/assets/img/old-index/2.png">
        <img class="t-02" src="@/assets/img/old-index/t_02.png">
      </div>
      <!-- 策略引擎 -->
      <div class="block block-3">
        <img class="normal-img" src="@/assets/img/old-index/3.png">
        <img class="t-3" src="@/assets/img/old-index/03.png">
        <img class="t-03" src="@/assets/img/old-index/t_03.png">
      </div>
      <!-- 多维报告 -->
      <div class="block block-4">
        <img class="normal-img" src="@/assets/img/old-index/4.png">
        <img class="t-04" src="@/assets/img/old-index/t_04.png">
      </div>
      <!-- 模板管理 -->
      <div class="block block-5">
        <img class="normal-img" src="@/assets/img/old-index/5.png">
        <img class="t-5-1" src="@/assets/img/old-index/05_1.png">
        <img class="t-5-2" src="@/assets/img/old-index/05_2.png">
        <img class="t-05" src="@/assets/img/old-index/t_05.png">
      </div>
      <!-- 存量监控 -->
      <div class="block block-6 dataTopline">
        <img class="normal-img" src="@/assets/img/old-index/6.png">
        <img class="t-06" src="@/assets/img/old-index/t_06.png">
      </div>
      <!-- 系统管理 -->
      <div class="block block-7">
        <img class="normal-img" src="@/assets/img/old-index/7.png">
        <img class="t-07" src="@/assets/img/old-index/t_07.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.ecpp-main{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url('../../../../assets/img/old-index/bg.png');
  position: relative;
  .all-block{
    width: 812px;
    max-width: @mw;
    height: 410px;
    .float-md();
  }
  .block {
    position: absolute;
    transition: all 2s;
    transition-delay: 0s, 1s, 0s;
    & img{
      cursor: pointer;
    }
    &:hover{
      transform: scale(1.1);
    }
  }
  .normal-img{
    width: 100%;
  }
  .block-0 {
    width: 330px;
    top: 315px;
    left: -105px;
  }
  .block-1{
    width: 250px;
    top: 95px;
    left: -130px;
    z-index: 5;
  }
  .block-2 {
    width: 250px;
    top: 187px;
    left: 53px;
    z-index: 6;
  }
  .block-3 {
    width: 250px;
    top: 263px;
    left: 236px;
    z-index: 5;
  }
  .block-4 {
    width: 350px;
    top: 112px;
    left: 358px;
    z-index: 4;
  }
  .block-5 {
    width: 350px;
    top: -15px;
    left: 88px;
    z-index: 3;
  }
  .block-6 {
    width: 250px;
    top: 62px;
    left: 641px;
    z-index: 2;
  }
  .block-7 {
    width: 250px;
    top: -48px;
    left: 445px;
  }
  .t-01{
    width: 26%;
    top: -7%;
    position: absolute;
    left: 64%;
  }
  .t-02 {
    width: 26%;
    top: 0%;
    position: absolute;
    left: 65%;
  }
  .t-3 {
    width: 12%;
    position: absolute;
    top: -54px;
    left: 128px;
  }
  .t-03 {
    width: 26%;
    top: 3%;
    position: absolute;
    left: 64%;
  }
  .t-04 {
    width: 19%;
    top: 10%;
    position: absolute;
    left: 68%;
  }
  .t-5-1 {
    width: 25%;
    position: absolute;
    top: -34px;
    left: -36px;
  }
  .t-5-2 {
    width: 25%;
    position: absolute;
    top: -118px;
    left: 77px;
  }
  .t-05 {
    width: 19%;
    top: 3%;
    position: absolute;
    left: 65%;
  }
  .t-06 {
    width: 26%;
    top: -16%;
    position: absolute;
    left: 67%;
  }
  .t-07 {
    width: 26%;
    top: -20%;
    position: absolute;
    left: 67%;
  }
  .myDashboard-img {
    width: 18% !important;
    top: 19%;
    position: absolute;
    left: 50%;
  }
}
</style>
