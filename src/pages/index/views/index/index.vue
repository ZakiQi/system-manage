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
    <ecpp-banner/>

    <!-- 主体部分 -->
    <ecpp-main/>

    <!-- footer部分 -->
    <ecpp-footer/>
  </div>
</template>

<script>
import ecppMain from './components/main'
import ecppFooter from './components/footer'
import ecppBanner from './components/banner'

export default {
  data () {
    return {
      searchVal: ''
    }
  },

  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },

  components: {
    ecppMain,
    ecppFooter,
    ecppBanner
  },

  methods: {
    onSearch () {},
    callback () {
    }
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
    padding: 20px 0;
  }
  .search-input{
    width: 50vw;
  }

  // banner部分
  .ecpp-banner-wrap {
    width: 100%;
    min-width: @mw;
    padding: 30px 0 20px 0;
    background: #3a4965;
    overflow: hidden;
  }
}
</style>
