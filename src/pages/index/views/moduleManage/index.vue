<!-- 模块管理 -->
<template>
  <div class="module-main">
    <a-table
      :columns="columns"
      :data-source="relateData"
      :row-key="record => record.name"
      :pagination="false"
      :expandIcon="expandIcon"
    >
      <template slot="status" slot-scope="key, scope">
        <div :class="scope.status === 1 ? 'shangxian': 'xiaxian'">{{ statusFormat(scope.status) }}</div>
      </template>
      <!-- 操作栏 -->
      <template slot="operate" slot-scope="key, scope">
        <a class="iconfont icon-icon-test7 operat-icon" title="编辑" @click="showModal('edit', scope)"></a>
        <a class="iconfont icon-weibiaoti-6 operat-icon" title="添加" @click="showModal('add', scope)"></a>
        <a class="iconfont icon-shangxian operat-icon" title="上线" @click="activeOperation(true, scope)"></a>
        <a class="iconfont icon-xiaxian operat-icon" title="下线" @click="activeOperation(false, scope)"></a>
        <a class="iconfont icon-shanchu operat-icon operat-del" title="删除" @click="deleteItem(scope)"></a>
      </template>
    </a-table>
    <organization :visible.sync="organizationVisible" :type="organizationType"/>
  </div>
</template>

<script>
import organization from './components/organization'
import API from '@/store/api.js'

export default {
  data () {
    return {
      columns: [{
        title: '模块名称',
        key: 'name',
        dataIndex: 'name'
      }, {
        title: '状态',
        key: 'status',
        dataIndex: 'status',
        align: 'center',
        scopedSlots: { customRender: 'status' }
      }, {
        title: '操作',
        key: 'operate',
        dataIndex: 'operate',
        align: 'center',
        scopedSlots: { customRender: 'operate' }
      }],
      relateData: [],
      organizationVisible: false,
      organizationType: 'add'
    }
  },

  computed: {
  },

  components: {
    organization
  },

  methods: {
    expandIcon (props) {
      if (!props.expandable) return <a class="iconfont"></a>
      if (props.expanded) {
        return <a class="iconfont icon-icon-test55 table-expand-icon" onClick={ e => { props.onExpand(props.record, e) }}></a>
      } else {
        return <a class="iconfont icon-icon-test53 table-expand-icon" onClick={ e => { props.onExpand(props.record, e) }}></a>
      }
    },

    statusFormat (status) {
      return status === 1 ? '已上线' : '已下线'
    },

    showModal (type = 'add', data) {
      this.organizationType = type
      this.organizationVisible = true
    },

    getRelateData () {
      this.$store.dispatch('Dimension/getRelateData').then(e => {
        this.relateData = e
      })
    },

    activeOperation (status, scope) {
      console.log(status, scope)
    },

    deleteItem (status, scope) {
      console.log(status, scope)
    }
  },

  created () {
    this.getRelateData()

    API.getData({ type: 1 }).then(e => {
      console.log(e, '222222')
    })
  },

  mounted () {
  }
}
</script>

<style lang="less" scoped>
.module-main{
  height: 100%;
  width: 100%;
  overflow: hidden;
  .icon-shangxian,.icon-xiaxian {
    font-size: 13px;
  }
  .operat-icon{
    color: @primary;
    margin-right: 5px;
    &:hover{
      color: @hover;
    }
  }
  .operat-del{
    color: @danger;
  }
}
.shangxian{
  color: #5CB85C;
}
.xiaxian{
  color: #ccc;
}
</style>
