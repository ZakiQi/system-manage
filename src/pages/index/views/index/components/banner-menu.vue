<template>
  <div class="banner-menu">
    <div class="menu-left">
      <i class="iconfont icon-icon-test4 iconfont-menu"></i>
    </div>
    <div class="menu-right">
      <span v-for="item in 6" :key="item" type="link" class="menu-link">触点成功</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
.banner-menu{
  display: block;
  float:left;
  width: 25%;
  height:100%;
  box-sizing: border-box;
  .menu-left{
    width:46px;
    float:left;
    height: 100%;
    margin-right: 10px;
    position: relative;
  }
  .menu-right{
    overflow: hidden;
    height: 100%;
    .Flex-between();
    flex-flow: wrap;
    padding-right: 20px;
  }
  .iconfont-menu{
    color:#fff;
    font-size: 46px;
    .float-md()
  }
  .menu-link{
    .Flex-between();
    flex-flow: wrap;
    width: 30%;
    color:#fff;
    line-height: 30px;
    cursor: pointer;
    &:hover{
      color: #5BB7FF;
    }
  }
}
</style>
