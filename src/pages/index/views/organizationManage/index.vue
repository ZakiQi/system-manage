<template>
  <div id="organization-manstatus">
    组织管理
    <a-table
      :columns="columns"
      :data-source="data"
      :defaultExpandAllRows="openNum"
      :defaultExpandedRowKeys="defaultExpandedRowKeys"
      :pagination="false"
      bordered=bordered >
      <span slot="operation" slot-scope="key, scope">
        <router-link class="btn" :to="{path: '/userDetails', query: { userName: scope.name, name: scope.name, password: scope.password, tel: scope.tel, org: scope.org, nameSpell: scope.nameSpell }}"><span class="iconfont icon-icon-test7 edit"></span></router-link>
        <span class="btn iconfont icon-icon-test10 setting"></span>
        <span class="btn iconfont close-btn"><a-icon type="close-circle" :style="{fontWeight: 'bold'}" /></span>
        <span class="btn iconfont arrow-up" @click="toUp(this)"><a-icon type="up-circle" /></span>
        <span class="btn iconfont arrow-down" @click="toDown"><a-icon type="down-circle" /></span>
      </span>
    </a-table>
    <!-- 按钮 -->
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="openAll()">全部展开</a-button>
      <a-button style="margin-left: 10px" @click="closeAll()">全部收缩</a-button>
    </a-form-model-item>
  </div>
</template>

<script>
const columns = [
  {
    title: '组织名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    width: '12%',
    align: 'center'
  },
  {
    title: '操作',
    dataIndex: 'operation',
    width: '30%',
    scopedSlots: { customRender: 'operation' },
    key: 'operation',
    align: 'center'
  }
]

const data = [
  {
    key: 1,
    name: 'John Brown sr.',
    status: '已发布',
    operation: 'New York No. 1 Lake Park',
    children: [
      {
        key: 11,
        name: 'John Brown',
        status: '已发布',
        operation: 'New York No. 2 Lake Park'
      },
      {
        key: 12,
        name: 'John Brown jr.',
        status: '已发布',
        operation: 'New York No. 3 Lake Park',
        children: [
          {
            key: 121,
            name: 'Jimmy Brown',
            status: '已发布',
            operation: 'New York No. 3 Lake Park'
          }
        ]
      },
      {
        key: 13,
        name: 'Jim Green sr.',
        status: '已发布',
        operation: 'London No. 1 Lake Park',
        children: [
          {
            key: 131,
            name: 'Jim Green',
            status: '已发布',
            operation: 'London No. 2 Lake Park',
            children: [
              {
                key: 1312,
                name: 'Jimmy Green sr.',
                status: '已发布',
                operation: 'London No. 4 Lake Park'
              }, {
                key: 1311,
                name: 'Jim Green jr.',
                status: '已发布',
                operation: 'London No. 3 Lake Park'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    key: 2,
    name: 'Joe Black',
    status: '已发布',
    operation: 'Sidney No. 1 Lake Park'
  }
]

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows)
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows)
  }
}

export default {
  data () {
    return {
      data,
      columns,
      rowSelection,
      openNum: false,
      defaultExpandedRowKeys: [1]
    }
  },
  methods: {
    openAll () {
      this.openNum = true
      console.log(this.openNum)
    },
    closeAll () {},
    toUp () {
      console.log(this)
    },
    toDown () {
      console.log('向下移动')
    }
  }
}
</script>

<style lang="less" scoped>
  #organization-manstatus {
    width: 95%;
    margin: 40px auto;

    .btn {
      margin-left: 5px;
    }
    .iconfont {
      font-size: 16px;
      padding: 3px;
      border-radius: 2px;
      color: #fff;
    }
    .btn.iconfont:first-child {
      margin-left: 0;
    }
    .edit {
      background-color: #f0ad4e;
    }
    .setting {
      background-color: #f0ad4e;
    }
    .close-btn {
      background-color: #d9534f;
    }
    .arrow-up {
      background-color: #d9534f;
    }
    .arrow-down {
      background-color: #5cb85c;
    }
    .iconfont:hover {
      opacity: .8;
    }
  }
</style>
