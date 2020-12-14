<template>
  <div class="ecpp-footer-wrap">
    <div class="index-footer">
      <div class="footer-menu">
        <ul>
          <li>产品介绍</li>
          <li>解决方案</li>
          <li>帮助中心</li>
          <li>关于我们</li>
          <li>更新日志</li>
        </ul>
        <ul>
          <li class="footer-text">技术支持：广州电信IT及业务支持中心（大数据运营中心）</li>
        </ul>
        <div class="qr-code">
          <img src="@/assets/img/erweima.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.ecpp-footer-wrap{
  width: 100%;
  height: 120px;
  background: #1D1F23;
  position: relative;
  .index-footer{
    height: 100%;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    width: 1200px;
    position: relative;
  }
  .footer-menu{
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  ul{
    margin: 0;
    &:first-child{
      margin-bottom: 20px;
    }
  }
  li{
    width: 100px;
    list-style-type: none;
    display: inline-block;
  }
  .footer-text{
    width: 100%;
  }
  .qr-code{
    position: absolute;
    right: 195px;
    top: 50%;
    transform: translate(0px, -50%);
    & img{
      max-height: 92px;
    }
  }
}
</style>
