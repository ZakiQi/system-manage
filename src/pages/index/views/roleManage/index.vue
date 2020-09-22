<template>
  <div class="role-main">
    <!-- 头部搜索 -->
    <div class="role-top-search">
       <a-input-search placeholder="请输入关键字搜索" style="width: 300px" v-model="searchVal" @search="onSearch" />
    </div>
    <!-- 表格内容 -->
    <div class="role-table-content">
      <a-table
        :columns="columns"
        :pagination="false"
        :data-source="roleData"
        :row-key="record => record.number + '_' + record.roleNumber"
        :scroll="{ y: selfHeight }"
        >
        <!-- 描述 -->
        <template slot="describe" slot-scope="key, scope">
          <span :title="scope.describe">{{scope.describe}}</span>
        </template>
        <!-- 操作栏 -->
        <template slot="operate" slot-scope="key, scope">
          <a class="iconfont icon-icon-test7 edit-role" @click="editRole(scope)"></a>
        </template>
      </a-table>
    </div>
    <!-- 分页 -->
    <div class="role-pagination">
      <a-pagination
        show-quick-jumper
        :default-current="2"
        size="small"
        :total="500"
        show-less-items
        @change="onChange"
      />
    </div>
    <edit-modal :visible.sync="modalVisible" :editInfo="editInfo" @updateRole="updateRole"></edit-modal>
  </div>
</template>

<script>

import editModal from './editModal'
export default {
  data () {
    return {
      modalVisible: false,
      searchVal: '',
      editInfo: {},
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
      roleData: []
    }
  },

  components: {
    editModal
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

    editRole (scope) {
      this.modalVisible = true
      this.editInfo = scope
    },

    /**
     * @description 获取角色数据
     */
    getRoleInfo (params) {
      this.$store.dispatch('Dimension/getRoleData', params).then(e => {
        console.log(e, 'e')
        this.roleData = e
      })
    },

    /**
     * @description 角色查询
     */
    onSearch () {
      this.getRoleInfo({ keywork: this.searchVal })
    },

    onChange (val) {
      const params = { page: val }
      this.searchVal && (params.keywork = this.searchVal)
      this.getRoleInfo(params)
    },

    // 更新角色编辑信息
    updateRole (data) {
      for (const key in data) {
        this.$set(this.editInfo, key, data[key])
      }
    }
  },

  created () {
    this.getRoleInfo()
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
    font-size:16px;
  }

  .role-pagination{
    text-align: center;
    height:30px;
    padding-top: 10px;
  }
}
</style>
