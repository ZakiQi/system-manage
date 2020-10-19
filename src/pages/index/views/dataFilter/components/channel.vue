<!-- 渠道组件 -->
<template>
  <div class="channel-wrap">
    <a-form>
      <a-form-item label="渠道" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" v-if="tab === 'channel'">
        <a-select style="width: 120px">
        </a-select>
      </a-form-item>
      <div class="line" v-if="tab === 'channel'"></div>
      <a-form-item label="脱敏说明" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-textarea
          v-model="queryParam.explain"
          placeholder="请输入脱敏说明"
          :auto-size="{ minRows: 3, maxRows: 5 }"
        />
      </a-form-item>
      <a-form-item label="脱敏字段" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <channelTable />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 17 }" :style="{ textAlign: 'right' }">
        <a-button type="primary" >保存</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import channelTable from './channel-table'
export default {
  props: {
    tab: {
      default: 'channel'
    }
  },

  data () {
    return {
      queryParam: {
        channel: '',
        explain: ''
      }
    }
  },

  components: {
    channelTable
  },

  methods: {
    handleSubmit () {
      console.log(this.queryParam)
    }
  }
}
</script>

<style lang="less" scoped>
.channel-wrap{
  .line{
    width: 100%;
    border:1px dashed #e8e8e8;
    position: relative;
    top: -6px;
  }
  .ant-form-item{
    margin-bottom: 15px;
  }
}
</style>
