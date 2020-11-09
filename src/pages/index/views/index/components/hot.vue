<template>
  <div>
    <div class="img-wrap">
      <img src="@/assets/img/olap1.png" alt="">
    </div>
    <div class="hot-text-content">
      <div class="hot-name">基本客户面</div>
      <div class="hot-news">
        <div class="left">
          <span class="hot-news-slogan">创建人：</span>
          <span class="userName">业支验证账号1</span>
        </div>
        <div class="right">
          <span class="hot-news-slogan">浏览量：</span>
          <span>569</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.img-wrap{
  width: 100%;
  height: 130px;
  overflow: hidden;
  & img {
    max-width: 100%;
    max-height: 100%;
    transition: all .6s;
  }
  & img:hover{
    transform:scale(1.2, 1.2);
    .hot-name{
      color: #1B73C6;
    }
  }
}
.hot-text-content{
  width: 100%;
  height: calc(~"100% - 130px");
}
.hot-name{
  font-size: 14px;
  color: #000000;
  letter-spacing: 0;
  text-align: left;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: calc(~"100% - 21px");
}
.hot-news{
  height: 21px;
  line-height: 21px;
  overflow: hidden;
  font-size: 12px;
  .hot-news-slogan{
    width: 48px;
    float: left;
    color: #BEBEBE;
  }
  .userName{
    display: inline-block;
    width: calc(~"100% - 48px");
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .left{
    width: 60%;
    float: left;
    text-align: left;
    color: #747474;
  }
  .right{
    width: 40%;
    float:right;
    text-align: right;
    color: #747474;
  }
}
</style>
