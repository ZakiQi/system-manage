<template>
  <div class="log-main">
    <log-header />
    <log-table />
  </div>
</template>

<script>
import logHeader from './conponents/log-header'
import logTable from './conponents/log-table'
export default {
  data () {
    return {}
  },

  components: {
    logHeader,
    logTable
  }
}
</script>

<style lang="less" scoped>
.log-main{
  height: 100%;
}
</style>
