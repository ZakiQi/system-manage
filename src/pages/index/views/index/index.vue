<template>
  <div class="ecpp-main">
    <!-- header内容 -->
    <div class="ecpp-header-wrap">
      <a-input-search
        placeholder="请输入关键字进行搜索"
        v-model="searchVal"
        enter-button="搜索"
        size="large"
        class="search-input"
        @search="onSearch"
      />
    </div>

    <!-- banner内容 -->
    <div class="ecpp-banner-wrap">
      <div class="branner-outside-wrap">
        <div class="banner-content">
          <!-- banner内容 -->
        </div>
        <div class="banner-nav">
          <!-- nav -->
        </div>
      </div>
    </div>

    <!-- 主体部分 -->
    <ecpp-main></ecpp-main>

    <!-- footer部分 -->
    <ecpp-footer></ecpp-footer>
  </div>
</template>

<script>
import ecppMain from './components/main'
import ecppFooter from './components/footer'

export default {
  data () {
    return {
      searchVal: ''
    }
  },

  components: {
    ecppMain,
    ecppFooter
  },

  methods: {
    onSearch () {}
  }
}
</script>

<style lang="less" scoped>
// main-width
@mw: 1200px;

.ecpp-main{
  width: 100%;
  text-align: center;

  .ecpp-header-wrap{
    margin: 0 auto;
    width: @mw;
    border: 1px solid #ccc;
    padding: 20px 0;
  }
  .search-input{
    width: 50vw;
  }

  // banner部分
  .ecpp-banner-wrap {
    width: 100%;
    min-width: @mw;
    padding: 30px 0;
    background: #3a4965;
  }
  .branner-outside-wrap{
    width:@mw;
    margin: 0 auto;
    box-shadow: 0 0 20px 0 #13171D;
  }
  .banner-content{
    height: 350px;
    width:100%;
    // border: 1px solid #ccc;
  }
  .banner-nav{
    margin-top: 24px;
    height:60px;
    width:100%;
    border: 1px solid #ccc;
  }

}
</style>
