<!-- 系统功能操作日志 -->
<template>
  <div class="system-main">
    <log-header />
    <teble-content />
  </div>
</template>

<script>
import logHeader from './conponents/system-log-header'
import tebleContent from './conponents/teble-content'
export default {
  data () {
    return {}
  },

  components: {
    logHeader,
    tebleContent
  }
}
</script>

<style lang="less" scoped>
.system-main{
  height: 100%;
}
</style>
