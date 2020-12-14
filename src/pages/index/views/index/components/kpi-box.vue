<template>
  <div :class="['kpi-item-box', 'box-bgc-'+ status]">
    <div class="kpi-left">
      <img src="@/assets/img/1.png" alt="">
    </div>
    <div class="kpi-right">
      <span class="big-num">8</span>
      <p class="slogan">清单上新</p>
      <p class="count">总量： 66</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['status'],
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
.kpi-item-box{
  box-shadow: 0 2px 5px 0 #E7E7E7;
  border-radius: 1px;
  width: 23.5%;
  height: 100%;
  border: 1px solid #ccc;
  overflow: hidden;
  .kpi-left{
    width:112px;
    float: left;
    height: 100%;
    position:relative;
    & img{
      height:100%;
      padding: 10px;
      .float-md();
    }
  }
  .kpi-right{
    height: 100%;
    padding: 5px 5px;
    text-align: left;
    overflow: hidden;
    color: #fff;
    transition: all 0.8s;
    &:hover{
      transform: scale(1.1);
    }
  }
  .big-num{
    font-size: 30px;
  }
  .slogan{
    margin: 0;
    font-size: 14px;
  }
  .count{
    margin: 0;
    font-size: 12px;
  }
}
.box-bgc-1{
  background:#F98D9E;
}
.box-bgc-2{
  background: #00C1DE;
}
.box-bgc-3{
  background:#639BFF;
}
.box-bgc-4{
  background:#56CFB4;
}
</style>
