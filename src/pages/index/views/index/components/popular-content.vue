<template>
  <div :class="['ecpp-hot', data.recommend && 'recommend-style']">
    <div class="hot-content">
      <!-- 左边部分内容 -->
      <div :class="['hot-left', data.recommend && 'recommend-left-style']">
        <div class="left-test-wrap">
          <div class="hot-left-top">{{ data.title }}</div>
          <div class="hot-left-center">{{ data.content }}</div>
          <div class="hot-left-btn">
            <span class="seemore">查看更多</span>
          </div>
        </div>
      </div>

      <!-- 右边部分内容 -->
      <div class="hot-right">
        <ecpp-hot v-for="item in 8" :key="item" :class="['hot-item', item > 4 && 'hot-item-following']"/>
      </div>
    </div>
  </div>
</template>

<script>

import ecppHot from './hot'
export default {
  props: ['data'],

  components: {
    ecppHot
  }
}
</script>

<style lang="less">
.ecpp-hot{
  width: 100%;
  height: 468px;
  padding: 20px 0;
  background:#F5F5F5;
  .hot-content{
    width: @mw;
    margin: 0 auto;
    height: 100%;
  }
  .hot-left{
    background: #00A9EA;
    float: left;
    width: 254px;
    height: 100%;
    color: #fff;
    text-align: left;
    position:relative;
  }
  .recommend-left-style{
    background: #0DCAAC;
  }
  .left-test-wrap{
    .float-md();
    width: 80%;
  }
  .hot-left-top{
    font-size: 20px;
    height: 32px;
    line-height: 32px;
    margin-bottom: 20px;
  }
  .hot-left-btn{
    text-align: center;
    margin-top: 45px;
  }
  .seemore{
    display: inline-block;
    padding: 7px 26px;
    border: 1px solid #FFFFFF;
    cursor: pointer;
  }
  .hot-right{
    height: 100%;
    padding-left: 20px;
    .Flex-between();
    flex-flow: wrap;
  }

  .hot-item{
    width: 23%;
    height: 48%;
    padding: 10px;
    background: #fff;
  }
  .hot-item-following{
    margin-top: 2%;
  }
}
.recommend-style{
  background: #E9E9E9;
}
</style>
