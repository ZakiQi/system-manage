<template>
  <div class="recommend">
    <div class="recommend-content">
      <div class="develop-title">
        <span class="recommend-title">推荐看板、清单</span>
        <a-button class="more-btn" size="small">更多</a-button>
      </div>
      <div class="recommend-wrap">
        <ecpp-hot v-for="item in 10" :key="item" :class="['hot-item', item > 5 && 'hot-item-following']"/>
      </div>
    </div>
  </div>
</template>

<script>
import ecppHot from './hot'
export default {
  data () {
    return {
    }
  },
  components: {
    ecppHot
  }
}
</script>

<style lang="less">
.recommend{
  background-color: #F5F5F5;
  padding: 20px 0;

  .recommend-content{
    width: 1200px;
    margin: 0 auto;
  }
  .recommend-title{
    font-size: 20px;
    color: #555556;
    height: 32px;
    line-height: 32px;
    float: left;
  }
  .recommend-wrap{
    height: 470px;
    .Flex-between();
    flex-flow: wrap;
  }
  .hot-item{
    width: 19.2%;
    height: 48%;
    padding: 10px;
    background: #fff;
  }
  .hot-item-following{
    margin-top: 2%;
  }
  .more-btn{
    float: right;
    margin-top: 7px;
    font-size: 12px;
  }
}
</style>
