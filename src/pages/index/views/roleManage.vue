<template>
  <div class="role-main">
    <div class="role-top-search">
       <a-input-search placeholder="请输入关键字搜索" style="width: 300px" @search="onSearch" />
    </div>
    <div class="role-table-content">
      <a-table
        :columns="columns"
        :pagination="false"
        :data-source="data"
        :row-key="record => record.number"
        :scroll="{ y: selfHeight }">
        <template slot="describe" slot-scope="key, scope">
          <span :title="scope.describe">{{scope.describe}}</span>
        </template>
        <template slot="operate">
          <a href="#" class="iconfont iconjiahao edit-role"></a>
        </template>
      </a-table>
    </div>
    <div class="role-pagination">
      <a-pagination show-quick-jumper size="small" :default-current="2" :total="500" @change="onChange" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selfHeight: 40,
      columns: [{
        title: '序号',
        dataIndex: 'number',
        key: 'number',
        width: 100
      }, {
        title: '角色名称',
        dataIndex: 'role',
        key: 'role',
        ellipsis: true
      }, {
        title: '角色编码',
        dataIndex: 'roleNumber',
        key: 'roleNumber',
        ellipsis: true
      }, {
        title: '创建人',
        dataIndex: 'founder',
        key: 'founder',
        ellipsis: true
      }, {
        title: '角色描述',
        dataIndex: 'describe',
        key: 'describe',
        ellipsis: true,
        scopedSlots: { customRender: 'describe' }
      }, {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
        scopedSlots: { customRender: 'operate' }
      }],
      data: []
    }
  },

  computed: {
    fixedHg: function () {
      return 240
    }
  },

  methods: {
    /**
     * @description 让表格高度自适应并固定表头，-58为预留表头和分页的位置
     */
    setSelfHeight () {
      this.$nextTick(function () {
        const tableContent = document.getElementsByClassName('role-table-content')[0]
        tableContent && (this.selfHeight = tableContent.offsetHeight - 48)
      })
    },
    onSearch () {
      console.log(123123)
    },
    onChange () {
    }
  },

  created () {
    this.$store.dispatch('Dimension/getRoleData').then(e => {
      this.data = e
    })
  },

  mounted () {
    const ts = this
    ts.setSelfHeight()
    window.onresize = () => {
      ts.setSelfHeight()
    }
  }
}
</script>

<style lang="less" scoped>
.role-main{
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: 10px 20px;

  /deep/ .role-top-search{
    text-align: left;
    height:30px;
    margin-bottom: 10px;

    .ant-input {
      border-top:none;
      border-left:none;
      border-right:none;
      border-radius: 0;
    }
  }

  /deep/ .role-table-content{
    border: 1px solid #e8e8e8;
    height: calc(~"100% - 70px");
    overflow: auto;

    .ant-table-header{
      overflow: hidden !important;
    }
  }

  .edit-role{
    font-size:14px;
  }

  .role-pagination{
    text-align: center;
    height:30px;
    padding-top: 10px;
  }
}
</style>
