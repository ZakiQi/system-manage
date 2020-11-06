<template>
  <div class="ecpp-main-wrap">
      <!-- kpi -->
    <div class="kpi-wrap">
      <div class="kpi">
        <kpi-box v-for="(item, key) in kpiArr" :key="key"></kpi-box>
      </div>
    </div>
    <!-- 业务发展情况 -->
    <div class="develop-wrap">
      <div class="develop-title">业务发展情况</div>
      <div class="develop-box">
        <div class="develop-item">
          <charts-preview :options="pieData" :theme="'light'" />
        </div>
        <div class="develop-item">
          <charts-preview :options="pieData" :theme="'light'" />
        </div>
        <div class="develop-item">
          <charts-preview :options="pieData" :theme="'light'" />
        </div>
      </div>
    </div>

    <!-- 热门多维看板、热门自助清单 -->
    <popular-content v-for="item in hotArr" :data="item" :key="item.title"></popular-content>
  </div>
</template>

<script>
import kpiBox from './kpi-box'
import popularContent from './popular-content'
export default {
  data () {
    return {
      pieData: {
        title: {
          text: '会员数据统计',
          subtext: '动态数据',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          show: true,
          orient: 'vertical',
          left: 'left',
          data: ['微信访问', '公众号访问', '扫码进入', '分享进入', '搜索访问']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data:[
              { value: 335, name: '微信访问' },
              { value: 310, name: '公众号访问' },
              { value: 234, name: '扫码进入' },
              { value: 135, name: '分享进入' },
              { value: 1548, name: '搜索访问' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      },
      kpiArr: [
        {
          img: '',
          title: '',
          kpi: '',
          count: ''
        },
        {
          img: '',
          title: '',
          kpi: '',
          count: ''
        },
        {
          img: '',
          title: '',
          kpi: '',
          count: ''
        },
        {
          img: '',
          title: '',
          kpi: '',
          count: ''
        }
      ],
      hotArr: [
        {
          title: '热门多维看板',
          content: '本月使用、浏览最多的多维看板，可查看、复制、分享使用，数据实时更新。'
        },
        {
          title: '热门自助清单',
          content: '本月使用、浏览最多的自助清单，可查看、复制、分享使用，数据实时更新。',
          recommend: true
        }
      ]
    }
  },

  components: {
    kpiBox,
    popularContent
  }
}
</script>

<style lang="less">
@mw: 1200px;
.Flex-between () {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.ecpp-main-wrap{
  width: 100%;
  .kpi-wrap{
    padding: 20px 0;
    background-color: #F5F5F5;
    .kpi{
      height: 100px;
      width: @mw;
      margin: 0 auto;
      .Flex-between();
    }
  }
  .develop-wrap{
    background: #E9E9E9;
    padding: 20px 0;
  }
  .develop-title{
    text-align: center;
    font-size: 20px;
    height: 32px;
    line-height: 32px;
    font-family: PingFangSC-Regular;
    color: #555556;
    margin-bottom: 15px;
  }
  .develop-box{
    width: @mw;
    margin: 0 auto;
    .Flex-between();
  }
  .develop-item{
    width: 32.5%;
    height: 250px;
    background: #FFFFFF;
  }
}
</style>
