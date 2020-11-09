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
          <img src="@/assets/img/banner1.png" alt="">
        </div>
        <div class="banner-nav">
          <banner-menu v-for="item in 4" :key="item"></banner-menu>
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
import bannerMenu from './components/banner-menu'

// import 'swiper/dist/css/swiper.css'

export default {
  data () {
    return {
      searchVal: '',
      swiperOptions: {
      }
    }
  },

  components: {
    ecppMain,
    ecppFooter,
    bannerMenu
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
    padding: 30px 0;
    background: #3a4965;
    overflow: hidden;
  }
  .branner-outside-wrap{
    width:@mw;
    margin: 0 auto;
  }
  .banner-content{
    height: 350px;
    width:100%;
    box-shadow: 0 0 20px 0 #13171D;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .banner-nav{
    margin-top: 24px;
    height:60px;
    width:100%;
  }

}
</style>
