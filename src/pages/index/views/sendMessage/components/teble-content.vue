<template>
  <div class="table-content">
    <div class="log-title">消息列表</div>
    <a-table
      bordered align="center"
      :pagination="false"
      :columns="columns"
      :data-source="data"
      :rowClassName="tableRowClass"
      :row-key="(e, i) => e.userName + i">
      <template slot="type" slot-scope="key, scope">
        <span class="send-yes" v-if="scope.type">已推送</span>
        <span class="send-no" v-else>未推送</span>
      </template>
      <template slot="operate" slot-scope="key, scope">
        <i class="iconfont send-operation" title="推送">&#xe645;</i>
        <i class="iconfont send-operation" title="编辑推送内容" @click="sendMessage(scope)">&#xe63d;</i>
        <i class="iconfont send-operation del-operation" title="删除推送">&#xe601;</i>
      </template>
    </a-table>
    <div class="log-pagination">
      <a-pagination
        show-quick-jumper
        size="small"
        :total="500"
        show-less-items
        @change="onChange"
      />
    </div>
    <message-editor :sendVisible.sync="sendVisible"></message-editor>
  </div>
</template>

<script>

import Bus from '@/store/common/bus'
import messageEditor from './message-editor'
export default {
  data () {
    return {
      searchData: {},
      columns: [{
        title: '内容',
        dataIndex: 'userName',
        key: 'userName',
        width: 150
      }, {
        title: '编辑人',
        dataIndex: 'operateName',
        key: 'operateName',
        align: 'center'
      }, {
        title: '有效时间',
        dataIndex: 'time',
        key: 'ValidTime'
      }, {
        title: '创建时间',
        dataIndex: 'time',
        key: 'createTime'
      }, {
        title: '状态',
        dataIndex: 'type',
        key: 'type',
        scopedSlots: { customRender: 'type' }
      }, {
        title: '操作',
        dataIndex: 'time',
        key: 'operation',
        scopedSlots: { customRender: 'operate' }
      }],
      data: [{
        userName: '11111111',
        operateName: '222222222',
        time: '44444',
        type: 1
      }, {
        userName: '11111111',
        operateName: '222222222',
        time: '44444',
        type: 0
      }, {
        userName: '11111111',
        operateName: '222222222',
        time: '44444',
        type: 1
      }, {
        userName: '11111111',
        operateName: '222222222',
        time: '44444',
        type: 0
      }, {
        userName: '11111111',
        operateName: '222222222',
        time: '44444',
        type: 1
      }],
      sendVisible: false
    }
  },

  components: {
    messageEditor
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
    },

    sendMessage () {
      this.sendVisible = true
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
    .send-yes{
      color: #5cb85c;
    }
    .send-no {
      color: #ccc;
    }
    .send-operation{
      font-size: 16px;
      cursor: pointer;
      color: #5cb85c;
      margin-right: 5px;

      &:hover {
        color: #1890ff;
      }
    }
    .del-operation{
      color: red;
      &:hover {
        color: red;
      }
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
