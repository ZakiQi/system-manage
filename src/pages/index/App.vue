<template>
  <div id="Main">
    <div id="nav" v-if="!$route.name">
      <router-link to="/index">首页</router-link> |
      <router-link to="/roleManage">角色管理</router-link> |
      <router-link to="/moduleManage">模块管理</router-link> |
      <router-link to="/dataAuthManage">数据权限管理</router-link> |
      <router-link to="/operationLog">标签操作日志</router-link> |
      <router-link to="/systemLog">系统操作日志</router-link> |
      <router-link to="/dataFilter">数据脱敏管理</router-link> |
      <router-link to="/sendMessage">消息推送管理</router-link>
    </div>

    <a-config-provider :locale="locale">
      <router-view/>
    </a-config-provider>
  </div>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
export default {
  data () {
    return {
      locale: zhCN
    }
  }
}
</script>

<style>
#Main{
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@import url('../../assets/font/iconfont.css');
@font-face {
  font-family: 'iconfont';
  src: url('../../assets/font/iconfont.eot');
  src: url('../../assets/font/iconfont.eot?#iefix') format('embedded-opentype'),
  url('../../assets/font/iconfont.woff') format('woff'),
  url('../../assets/font/iconfont.ttf') format('truetype'),
  url('../../assets/font/iconfont.svg#iconfont') format('svg');
}

.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
