<template>
  <div class="log-table-mian">
    <!-- 表格内容 -->
    <div class="role-table-content">
      <a-table
        :columns="columns"
        :pagination="false"
        :data-source="logData"
        :row-key="record => record.number + '_' + record.roleNumber"
        :scroll="{ y: selfHeight }"
        >
        <!-- 描述 -->
        <!-- <template slot="describe" slot-scope="key, scope">
          <span :title="scope.describe">{{scope.describe}}</span>
        </template> -->
        <!-- 操作栏 -->
        <template slot="operate">
          操作栏
        </template>
      </a-table>
    </div>
  </div>
</template>

<script>
import API from '@/store/api'
import Bus from '@/store/common/bus'

export default {
  props: ['pageType'],

  data () {
    return {
      logData: [],
      selfHeight: 40,
      columns: [{
        title: '序号',
        dataIndex: 'number',
        key: 'number',
        width: 70
      }, {
        title: '操作人名称',
        dataIndex: 'role',
        key: 'role',
        ellipsis: true
      }, {
        title: '所属机构名称',
        dataIndex: 'roleNumber',
        key: 'roleNumber',
        ellipsis: true
      }, {
        title: '操作时间',
        dataIndex: 'founder',
        key: 'founder',
        ellipsis: true
      }, {
        title: '字段名称',
        dataIndex: 'describe',
        key: 'describe1',
        ellipsis: true,
        scopedSlots: { customRender: 'describe' }
      }, {
        title: '所属表名',
        dataIndex: 'describe',
        key: 'describe2',
        ellipsis: true,
        scopedSlots: { customRender: 'describe' }
      }, {
        title: '是否脱敏字段',
        dataIndex: 'describe',
        key: 'describe3',
        ellipsis: true,
        scopedSlots: { customRender: 'describe' }
      }, {
        title: '操作类型',
        dataIndex: 'operate',
        key: 'operate',
        scopedSlots: { customRender: 'operate' }
      }]
    }
  },

  components: {
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
     * @description 获取角色数据
     */
    getRoleInfo (params) {
      API.getRoleData().then(e => {
        console.log(e, 'e')
        this.logData = e
      })
    },

    onChange (val) {
      const params = { page: val }
      this.getRoleInfo(params)
    },

    // 查询表格信息
    searchLog (data) {
      console.log(data, 'data')
      this.getRoleInfo()
    }
  },

  created () {
    Bus.$on('searchLog', data => {
      this.searchLog(data)
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

<style lang="less">
.log-table-mian{
  margin-top:15px;
  height: calc(~"100% - 32px");
  /deep/ .role-table-content{
    border: 1px solid #e8e8e8;
    height: 100%;
    overflow: auto;

    .ant-table-header{
      overflow: hidden !important;
    }
  }
  .role-pagination{
    margin-top:5px;
  }
}
</style>
