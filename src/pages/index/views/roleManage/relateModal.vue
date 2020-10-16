<!-- 角色管理 关联模块 -->
<template>
  <div>
    <a-modal
      title="关联模块"
      :visible.sync="relateVisible"
      :confirm-loading="confirmLoading"
      @cancel="handleCancel"
    >
      <div class="relate-modal">
        <a-table
          :columns="columns"
          :data-source="relateData"
          :row-key="record => record.name"
          :pagination="false"
          :expandIcon="expandIcon"
          :scroll="{ y: 300 }"
        >
          <template slot="checkoutStatus" slot-scope="key, scope">
            <a-checkbox :checked="scope.checkout" @change="modalCheckoutHandle(scope, 'checkout')"></a-checkbox>
          </template>
          <template slot="editStatus" slot-scope="key, scope">
            <a-checkbox :checked="scope.editCheckout" @change="modalCheckoutHandle(scope, 'editCheckout')"></a-checkbox>
          </template>
        </a-table>
      </div>
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
      relateVisible: false,
      columns: [{
        title: '模块名称',
        key: 'name',
        dataIndex: 'name'
      }, {
        title: '选中状态',
        key: 'checkout',
        dataIndex: 'checkout',
        align: 'center',
        scopedSlots: { customRender: 'checkoutStatus' }
      }, {
        title: '编辑他人',
        key: 'edit',
        dataIndex: 'edit',
        align: 'center',
        scopedSlots: { customRender: 'editStatus' }
      }],
      relateData: []
    }
  },

  watch: {
    visible: {
      handler (val) {
        this.relateVisible = val
      },
      immediate: true
    },
    relateVisible (val) {
      this.$emit('update:visible', val)
    }
  },

  methods: {
    getEelateData () {
      this.$store.dispatch('Dimension/getEelateData').then(e => {
        this.relateData = e
      })
    },

    handleOk () {
      this.$store.dispatch('Dimension/submitRelate', this.relateData).then(e => {
        console.log(e)
      })
      this.relateVisible = false
    },

    handleCancel () {
      this.relateVisible = false
    },

    expandIcon (props) {
      if (!props.expandable) return <a class="iconfont"></a>
      if (props.expanded) {
        return <a class="iconfont icon-icon-test55 table-expand-icon" onClick={ e => { props.onExpand(props.record, e) }}></a>
      } else {
        return <a class="iconfont icon-icon-test53 table-expand-icon" onClick={ e => { props.onExpand(props.record, e) }}></a>
      }
    },

    /**
     * @description 选中状态栏选中操作
     */
    modalCheckoutHandle (scope, field) {
      this.recursionHandle(scope, field, !scope[field])
    },

    /**
     * @description 递归操作子节点选中
     */
    recursionHandle (data, field, state = false) {
      this.$set(data, field, state)
      if (data.children) {
        data.children.forEach(e => {
          this.recursionHandle(e, field, data[field])
        })
      }
    }
  },

  created () {
    this.getEelateData()
  }
}
</script>

<style lang="less" scoped>
/deep/ .relate-modal{
  td{
    padding: 5px;
  }
  .ant-table-header,.ant-table-body{
    overflow: auto !important;
  }
  .table-expand-icon{
    color: #000;
    font-size: 16px;
  }
}
</style>
