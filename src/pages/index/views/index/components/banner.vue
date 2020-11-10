<template>
  <div class="ecpp-banner-wrap">
      <div class="branner-outside-wrap">
        <div class="banner-content">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide><img src="@/assets/img/banner1.png" alt=""></swiper-slide>
            <swiper-slide><img src="@/assets/img/banner1.png" alt=""></swiper-slide>
            <swiper-slide><img src="@/assets/img/banner1.png" alt=""></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
          <!-- banner内容 -->
        </div>
        <div class="banner-nav">
          <banner-menu v-for="item in 4" :key="item"></banner-menu>
        </div>
      </div>
    </div>
</template>

<script>
import bannerMenu from './banner-menu'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 显示分页
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },

  components: {
    bannerMenu,
    swiper,
    swiperSlide
  },

  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  }
}
</script>

<style lang="less">
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
</style>
