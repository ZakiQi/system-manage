<!-- 数据脱敏管理 -->
<template>
  <div class="data-filter">
    <a-tabs type="card" @change="callback">
      <a-tab-pane key="channel" tab="channel">
        <channel :tab="'channel'" />
      </a-tab-pane>
      <a-tab-pane key="orther" tab="orther">
        <channel :tab="'orther'" />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>

import channel from './components/channel'
export default {
  data () {
    return {
    }
  },

  components: {
    channel
  },

  methods: {
    callback (key) {
    }
  }
}
</script>

<style lang="less" scoped>
.data-filter{
  text-align: left;
}
</style>
