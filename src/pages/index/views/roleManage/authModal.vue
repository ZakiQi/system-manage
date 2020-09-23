<!-- 角色管理 数据权限管理 -->
<template>
  <div>
    <a-modal
      title="数据权限管理"
      :visible.sync="authVisible"
      :confirm-loading="confirmLoading"
      @cancel="handleCancel"
    >
      <template slot="footer">
        <a-button key="back" @click="handleCancel">取消</a-button>
        <a-button key="submit" type="primary" @click="handleOk">保存</a-button>
      </template>
    </a-modal>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      confirmLoading: false,
      authVisible: false
    }
  },

  watch: {
    visible: {
      handler (val) {
        this.authVisible = val
      },
      immediate: true
    },
    authVisible (val) {
      this.$emit('update:visible', val)
    }
  },

  methods: {
    handleOk () {
      this.authVisible = false
    },

    handleCancel () {
      this.authVisible = false
    }
  }
}
</script>
