<!-- 角色管理 / 数据权限管理模块 -->
<template>
  <div class="role-main">
    <!-- 头部搜索 -->
    <div class="role-top-search">
      <a-input-search v-if="authCode([6], 'some')" placeholder="请输入关键字搜索" style="width: 300px" v-model="searchVal" @search="onSearch" />
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
          <a class="iconfont icon-icon-test7 operat-icon" title="编辑" v-if="pageType === 'role'" @click="showModal('modalVisible', scope)"></a>
          <a class="iconfont icon-icon-test28 operat-icon" title="关联模块" v-if="pageType === 'role'" @click="showModal('relateVisible', scope)"></a>
          <a class="iconfont icon-icon-test18 operat-icon" title="添加数据权限管理" v-if="pageType === 'role'" @click="showModal('authVisible', scope)"></a>
          <a class="iconfont icon-icon-test32 operat-icon operat-del" title="删除" v-if="pageType === 'role'"></a>
          <a class="iconfont icon-icon-test10 operat-icon" title="权限管理" v-if="pageType === 'auth'" @click="showModal('settingVisible', scope)"></a>
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
    <relate-modal :visible.sync="relateVisible"></relate-modal>
    <auth-modal :visible.sync="authVisible"></auth-modal>
    <auth-dialog :visible.sync="settingVisible"></auth-dialog>
  </div>
</template>

<script>
import API from '@/store/api'
import editModal from '../roleManage/components/editModal'
import relateModal from '../roleManage/components/relateModal'
import authModal from '../roleManage/components/authModal'
import authDialog from '../dataAuthManage/components/authDialog'

export default {
  props: ['pageType'],

  data () {
    return {
      modalVisible: false,
      relateVisible: false,
      authVisible: false,
      settingVisible: false,
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
    editModal,
    relateModal,
    authModal,
    authDialog
  },

  computed: {
    fixedHg: function () {
      return 240
    }
  },

  methods: {
    /**
     * @description 让表格高度自适应并固定表头，-48为预留表头和分页的位置
     */
    setSelfHeight () {
      this.$nextTick(function () {
        const tableContent = document.getElementsByClassName('role-table-content')[0]
        tableContent && (this.selfHeight = tableContent.offsetHeight - 48)
      })
    },

    /**
     * @description 显示对应对话框
     */
    showModal (modal, scope) {
      this[modal] = true
      switch (modal) {
        case 'modalVisible':
          this.editInfo = scope
          break
      }
    },

    /**
     * @description 获取角色数据
     */
    getRoleInfo (params) {
      API.getRoleData().then(e => {
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
    height: calc(~"100% - 74px");
    overflow: auto;

    .ant-table-header{
      overflow: hidden !important;
    }
  }

  .operat-icon{
    color: @primary;
    margin-right:3px;
    &:hover{
      color: red;
    }
  }

  .operat-del{
    color: red;
  }

  .role-pagination{
    text-align: center;
    height:30px;
    padding-top: 10px;
  }
}
</style>
