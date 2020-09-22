<template>
  <div id="user-manage">
    <div class="search">
      <span class="iconfont icon-icon-test33 add"></span>
      <div class="search-content">
        <input type="text" class="search-input" @blur="searchBlur"/>
        <span class="iconfont icon-icon-test6 search-icon"></span>
      </div>
    </div>
    <a-table :columns="columns" :data-source="data" bordered=bordered>
      <!-- <a slot="name" slot-scope="text">{{ text }}</a> -->
      <template slot="name" slot-scope="key, scope">
        <a :title="scope.name">{{scope.name}}</a>
      </template>
      <span slot="tags" slot-scope="key, scope">
        <router-link class="btn" :to="{path: '/userDetails', query: { id: scope.key, userName: scope.name }}"><span class="iconfont icon-icon-test7 edit"></span></router-link>
        <router-link class="btn" :to="{path: '/userDetails', query: { id: scope.key, userName: scope.name }}"><span class="iconfont icon-icon-test10 setting"></span></router-link>
        <router-link class="btn" :to="{path: '/userDetails', query: { num: 1, userName: scope.id }}"><span class="iconfont icon-icon-test25 password"></span></router-link>
        <router-link class="btn" :to="{path: '/userDetails', query: { num: 4, userName: scope.id }}"><span class="iconfont icon-icon-test34 forbid"></span></router-link>
        <router-link class="btn" :to="{path: '/userDetails', query: { num: 5, userName: scope.id }}"><span class="iconfont icon-icon-test29 refresh"></span></router-link>
      </span>
    </a-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bordered: true,
      columns: [
        {
          title: '序号',
          dataIndex: 'key',
          key: 'key',
          align: 'center'
        },
        {
          title: '用户名称',
          dataIndex: 'name',
          key: 'name',
          ellipsis: true,
          align: 'center',
          scopedSlots: { customRender: 'name' }
        },
        {
          title: '简拼',
          dataIndex: 'simple',
          key: 'simple',
          ellipsis: true,
          align: 'center'
        },
        {
          title: '组织',
          dataIndex: 'management',
          key: 'management 2',
          ellipsis: true,
          align: 'center'
        },
        {
          title: '创建人',
          dataIndex: 'creator',
          key: 'creator',
          ellipsis: true,
          align: 'center'
        },
        {
          title: '用户状态',
          dataIndex: 'userStatus',
          key: 'userStatus',
          ellipsis: true,
          align: 'center'
        },
        {
          title: '操作',
          dataIndex: 'tags',
          key: 'tags',
          scopedSlots: { customRender: 'tags' },
          ellipsis: true,
          align: 'center'
        }
      ],
      data: [
        {
          key: '1',
          name: '开发测试1(kaifa_cs1)',
          simple: 'KFCS1',
          management: '广州分公司',
          creator: 'yezhiyz1',
          userStatus: '已激活',
          tags: ['nice', 'developer']
        },
        {
          key: '2',
          name: '测试团队(testgroup)',
          simple: 'CSTD',
          management: '广州分公司',
          creator: 'yezhiyz1',
          userStatus: '已激活',
          tags: ['loser']
        },
        {
          key: '3',
          name: '南沙演示(nsys123)',
          simple: 'NSYS',
          management: '南沙分公司',
          creator: 'yezhiyz1',
          userStatus: '已激活',
          tags: ['cool', 'teacher']
        },
        {
          key: '4',
          name: '开发测试1(kaifa_cs1)',
          simple: 'KFCS1',
          management: '广州分公司',
          creator: 'yezhiyz1',
          userStatus: '已激活',
          tags: ['nice', 'developer']
        },
        {
          key: '5',
          name: '测试团队(testgroup)',
          simple: 'CSTD',
          management: '广州分公司',
          creator: 'yezhiyz1',
          userStatus: '已激活',
          tags: ['loser']
        },
        {
          key: '6',
          name: '南沙演示(nsys123)',
          simple: 'NSYS',
          management: '南沙分公司',
          creator: 'yezhiyz1',
          userStatus: '已激活',
          tags: ['cool', 'teacher']
        },
        {
          key: '7',
          name: '开发测试1(kaifa_cs1)',
          simple: 'KFCS1',
          management: '广州分公司',
          creator: 'yezhiyz1',
          userStatus: '已激活',
          tags: ['nice', 'developer']
        },
        {
          key: '8',
          name: '测试团队(testgroup)',
          simple: 'CSTD',
          management: '广州分公司',
          creator: 'yezhiyz1',
          userStatus: '已激活',
          tags: ['loser']
        },
        {
          key: '9',
          name: '南沙演示(nsys123)',
          simple: 'NSYS',
          management: '南沙分公司',
          creator: 'yezhiyz1',
          userStatus: '已激活',
          tags: ['cool', 'teacher']
        },
        {
          key: '10',
          name: '开发测试1(kaifa_cs1)',
          simple: 'KFCS1',
          management: '广州分公司',
          creator: 'yezhiyz1',
          userStatus: '已激活',
          tags: ['nice', 'developer']
        },
        {
          key: '11',
          name: '测试团队(testgroup)',
          simple: 'CSTD',
          management: '广州分公司',
          creator: 'yezhiyz1',
          userStatus: '已激活',
          tags: ['loser']
        },
        {
          key: '12',
          name: '南沙演示(nsys123)',
          simple: 'NSYS',
          management: '南沙分公司',
          creator: 'yezhiyz1',
          userStatus: '已激活',
          tags: ['cool', 'teacher']
        },
        {
          key: '13',
          name: '开发测试1(kaifa_cs1)',
          simple: 'KFCS1',
          management: '广州分公司',
          creator: 'yezhiyz1',
          userStatus: '已激活',
          tags: ['nice', 'developer']
        },
        {
          key: '14',
          name: '测试团队(testgroup)',
          simple: 'CSTD',
          management: '广州分公司',
          creator: 'yezhiyz1',
          userStatus: '已激活',
          tags: ['loser']
        },
        {
          key: '15',
          name: '南沙演示(nsys123)',
          simple: 'NSYS',
          management: '南沙分公司',
          creator: 'yezhiyz1',
          userStatus: '已激活',
          tags: ['cool', 'teacher']
        },
        {
          key: '16',
          name: '开发测试1(kaifa_cs1)',
          simple: 'KFCS1',
          management: '广州分公司',
          creator: 'yezhiyz1',
          userStatus: '已激活',
          tags: ['nice', 'developer']
        },
        {
          key: '17',
          name: '测试团队(testgroup)',
          simple: 'CSTD',
          management: '广州分公司',
          creator: 'yezhiyz1',
          userStatus: '已激活',
          tags: ['loser']
        },
        {
          key: '18',
          name: '南沙演示(nsys123)',
          simple: 'NSYS',
          management: '南沙分公司',
          creator: 'yezhiyz1',
          userStatus: '已激活',
          tags: ['cool', 'teacher']
        },
        {
          key: '19',
          name: '开发测试1(kaifa_cs1)',
          simple: 'KFCS1',
          management: '广州分公司',
          creator: 'yezhiyz1',
          userStatus: '已激活',
          tags: ['nice', 'developer']
        },
        {
          key: '20',
          name: '测试团队(testgroup)',
          simple: 'CSTD',
          management: '广州分公司',
          creator: 'yezhiyz1',
          userStatus: '已激活',
          tags: ['loser']
        },
        {
          key: '21',
          name: '南沙演示(nsys123)',
          simple: 'NSYS',
          management: '南沙分公司',
          creator: 'yezhiyz1',
          userStatus: '已激活',
          tags: ['cool', 'teacher']
        }
      ]
    }
  },

  methods: {
    searchBlur: (e) => {
      console.log(e.target.value)
    }
  },
  created () {}
}
</script>

<style lang="less" scoped>
#user-manage {
  padding: 10px 10px 0;
  text-align: left;
  .search {
    margin-bottom: 10px;
    .add {
      color: #4bd083;
      font-size: 18px;
      margin-right: 5px;
      vertical-align: middle;
    }
    .search-content {
      display: inline-block;
      border-bottom: 1px solid #ccc;
      .search-input {
        padding: 5px;
        border: 0;
        outline: none;
      }
      .search-input:focus {
        box-shadow: inset 0 1px rgba(0, 0, 0, 0.075),
          0 0 8px rgba(102, 175, 233, 0.6);
      }
      .search-icon {
        font-size: 18px;
        font-weight: bold;
        margin-left: 5px;
        vertical-align: middle;
      }
    }
  }
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
  .password {
    background-color: #d9534f;
  }
  .forbid {
    background-color: #d9534f;
  }
  .refresh {
    background-color: #5cb85c;
  }
  .iconfont:hover {
    opacity: .8;
  }
}
</style>
