<!-- 角色管理 数据权限管理 -->
<template>
  <div>
    <a-modal
      :title="`${dialogTitle}` + '组织'"
      :visible.sync="orgVisible"
      :confirm-loading="confirmLoading"
      @cancel="handleCancel"
    >
      <div class="role-manage-modal">
         <a-form :label-col="{ span: 5 }" :wrapper-col="{ span: 16 }">
          <a-form-item label="组织名称">
            <a-input
              placeholder="请输入组织名称"
            />
          </a-form-item>
          <a-form-item label="备注">
            <a-textarea
              placeholder="请输入备注说明"
              :auto-size="{ minRows: 3, maxRows: 5 }"
            />
          </a-form-item>
          <a-form-item label="是否有子节点">
            <a-switch />
          </a-form-item>
          <a-form-item label="父组织名称">
            <a-select default-value="lucy" style="width: 120px">
              <a-select-option value="jack">
                Jack
              </a-select-option>
              <a-select-option value="lucy">
                Lucy
              </a-select-option>
              <a-select-option value="disabled" disabled>
                Disabled
              </a-select-option>
              <a-select-option value="Yiminghe">
                yiminghe
              </a-select-option>
            </a-select>
          </a-form-item>
        </a-form>
      </div>
      <template slot="footer">
        <a-button key="back" @click="handleCancel">取消</a-button>
        <a-button key="submit" type="primary" @click="handleCancel">保存</a-button>
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
    type: {
      type: String,
      default: 'add'
    }
  },

  data () {
    return {
      confirmLoading: false,
      orgVisible: false,
      expandedKeys: [],
      mockData: [],
      targetKeys: [],
      transferDataSource: [],
      treeSearch: ''
    }
  },

  watch: {
    visible: {
      handler (val) {
        this.orgVisible = val
      },
      immediate: true
    },
    orgVisible (val) {
      console.log(val, 'val===')
      this.$emit('update:visible', val)
    }
  },

  computed: {
    dialogTitle: function (val) {
      const title = this.type === 'edit' ? '编辑' : '新增'
      return title
    }
  },

  methods: {
    handleCancel () {
      this.orgVisible = false
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .auth-modal{
  .ant-transfer-list-header-title{
    left: 12px;
  }
  .ant-transfer-list-header-selected span:first-child{
    opacity: 0;
  }
  .ant-transfer-list-header{
    background: #e8e8e8;
  }
}
</style>
