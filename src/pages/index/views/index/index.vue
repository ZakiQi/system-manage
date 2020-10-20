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
    <div class="ecpp-center-wrap"></div>

    <!-- footer部分 -->
    <div class="ecpp-footer-wrap"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchVal: ''
    }
  },

  methods: {
    onSearch () {}
  }
}
</script>

<style lang="less" scoped>
.ecpp-main{
  width: 100%;
  text-align: center;

  .ecpp-header-wrap{
    margin: 0 auto;
    width: 1200px;
    border: 1px solid #ccc;
    padding: 20px 0;
  }
  .search-input{
    width: 50vw;
  }

  // banner部分
  .ecpp-banner-wrap {
    width: 100%;
    min-width: 1200px;
    padding: 30px 0;
    background: #3a4965;
  }
  .branner-outside-wrap{
    width:1200px;
    margin: 0 auto;
  }
  .banner-content{
    height: 350px;
    width:100%;
    border: 1px solid #ccc;
  }
  .banner-nav{
    margin-top: 24px;
    height:60px;
    width:100%;
    border: 1px solid #ccc;
  }

}
</style>
