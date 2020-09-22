<template>
  <div>
    <a-modal
      :title="title"
      :visible.sync="modalVisible"
      :confirm-loading="confirmLoading"
      @cancel="handleCancel"
    >
      <div class="role-manage-modal">
         <a-form :label-col="{ span: 5 }" :wrapper-col="{ span: 16 }">
          <a-form-item label="角色名称">
            <a-input
              placeholder="请输入角色名称"
              v-model="editInfo.role"
            />
          </a-form-item>
          <a-form-item label="角色编码">
            <a-input
              v-model="editInfo.number"
            />
          </a-form-item>
          <a-form-item label="备注">
            <a-textarea
              v-model="editInfo.describe"
              placeholder="请输入备注说明"
              :auto-size="{ minRows: 3, maxRows: 5 }"
            />
          </a-form-item>
        </a-form>
      </div>
      <template slot="footer">
        <a-button key="返回" @click="handleCancel">返回</a-button>
        <a-button key="提交" @click="handleOk" type="primary" :loading="loading">提交</a-button>
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
    },
    editInfo: {
      type: Object,
      default: () => {}
    }
  },

  watch: {
    visible: {
      handler (val) {
        this.modalVisible = val
      },
      immediate: true
    },
    modalVisible (val) {
      this.$emit('update:visible', val)
    },
    editInfo (data) {
      console.log(data, 'data')
      this.title = data.role
    }
  },

  data () {
    return {
      loading: false,
      title: '',
      modalVisible: false,
      confirmLoading: false
    }
  },

  methods: {
    // 提交
    handleOk (e) {
      this.$store.dispatch('Dimension/saveRoleInfo', this.editInfo).then(e => {
        this.$emit('updateRole', e)
      })
      this.modalVisible = false
    },

    // 返回
    handleCancel (e) {
      this.modalVisible = false
    }
  }
}
</script>
