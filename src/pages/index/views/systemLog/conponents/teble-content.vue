<template>
  <div class="table-content">
    <div class="log-title">操作日志</div>
    <a-table
      bordered align="center"
      :pagination="false"
      :columns="columns"
      :data-source="data"
      :rowClassName="tableRowClass"
      :row-key="(e, i) => e.userName + i">
    </a-table>
    <div class="log-pagination">
      <a-pagination
        show-quick-jumper
        :default-current="2"
        size="small"
        :total="500"
        show-less-items
        @change="onChange"
      />
    </div>
  </div>
</template>

<script>

import Bus from '@/store/common/bus'
export default {
  data () {
    return {
      searchData: {},
      columns: [{
        title: '用户名',
        dataIndex: 'userName',
        key: 'userName',
        width: 150
      }, {
        title: '操作名称',
        dataIndex: 'operateName',
        key: 'operateName',
        align: 'center'
      }, {
        title: '操作时间',
        dataIndex: 'time',
        key: 'time',
        width: 150
      }],
      data: [{
        userName: '11111111',
        operateName: '222222222',
        time: '44444'
      }, {
        userName: '11111111',
        operateName: '222222222',
        time: '44444'
      }, {
        userName: '11111111',
        operateName: '222222222',
        time: '44444'
      }, {
        userName: '11111111',
        operateName: '222222222',
        time: '44444'
      }, {
        userName: '11111111',
        operateName: '222222222',
        time: '44444'
      }]
    }
  },

  methods: {
    /**
     * @method 单行的数据背景颜色修改
     */
    tableRowClass (record, index) {
      if (index % 2 !== 0) {
        return 'singleClass'
      }
    },

    /**
     * @method 获取表格数据
     */
    querySystemLog (data = {}) {
      console.log(data, 'data')
    },

    onChange (page, pageSize) {
      this.querySystemLog({ page: page, pageSize: pageSize })
    }
  },

  created () {
    Bus.$on('querySystemLog', params => {
      this.querySystemLog(params)
    })
  }
}
</script>

<style lang="less" scoped>
.table-content{
    margin-top:10px;
    border: 1px solid #ddd;
    overflow: auto;
    height: calc(~"100% - 73px");

    .log-title{
      height: 45px;
      line-height: 45px;
      text-align: left;
      text-indent: 18px;
      background-color: #fbfcfe;
      color: #5e5e5e;
    }
    /deep/ .ant-table-body{
      .singleClass{
        background:#fafafa;
      }
      table{
        border-left: none;
      }
      .ant-table-thead > tr > th {
        padding: 8px 16px;
      }
      .ant-table table{
        border-radius: 0;
      }
      .ant-table-thead > tr > th:last-child, .ant-table-tbody > tr > td:last-child {
        border-right: 0
      }
    }
    .log-pagination {
      text-align: center;
      height: 30px;
      padding-top: 10px;
    }
}
</style>
