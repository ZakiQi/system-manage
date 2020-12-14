<!-- 消息推送管理 -->
<template>
  <div class="send-main">
    <send-header />
    <teble-content />
  </div>
</template>

<script>
import sendHeader from './components/send-header'
import tebleContent from './components/teble-content'
import quill from 'vue-quill-editor'
console.log(quill, 'quill')
export default {
  data () {
    return {}
  },

  components: {
    sendHeader,
    tebleContent
  }
}
</script>

<style lang="less" scoped>
.send-main{
  height: 100%;
}
</style>
