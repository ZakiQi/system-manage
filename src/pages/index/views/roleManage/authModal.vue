<!-- 角色管理 数据权限管理 -->
<template>
  <div>
    <a-modal
      title="数据权限管理"
      :visible.sync="authVisible"
      :confirm-loading="confirmLoading"
      :width="650"
      @cancel="handleCancel"
    >
      <div class="auth-modal">
        <a-transfer
          show-search
          :showSelectAll="false"
          :target-keys="targetKeys"
          :render="item => item.title"
          :filter-option="filterOption"
          :data-source="transferDataSource"
          :titles="['宽表字段', '屏蔽宽表字段']"
          :list-style="{
            width: '280px',
            height: '300px'
          }"
          @change="handleChange"
          @search="handleSearch"
        >
        <template
          slot="children"
          slot-scope="{
            props: { direction, selectedKeys },
            on: { itemSelect }
          }"
        >
          <!-- defaultExpandAll -->
          <a-tree
            v-if="direction === 'left'"
            checkable
            checkStrictly
            :treeData="treeData"
            :expanded-keys="expandedKeys"
            :checkedKeys="[...selectedKeys, ...targetKeys]"
            @expand="onExpand"
            @check="(_, props) => {onChecked(_, props, [...selectedKeys, ...targetKeys],itemSelect)}"
            @select="(_, props) => {onChecked(_, props, [...selectedKeys, ...targetKeys],itemSelect)}">
            <!-- 自定义节点展示，搜索高亮关键字 -->
            <template slot="title" slot-scope="{ title }">
              <span v-if="title.indexOf(treeSearch) > -1">
                {{ title.substr(0, title.indexOf(treeSearch)) }}
                <span style="color: #f50">{{ treeSearch }}</span>
                {{ title.substr(title.indexOf(treeSearch) + treeSearch.length) }}
              </span>
              <span v-else>
                {{ title }}
              </span>
            </template>
          </a-tree>
        </template>
        </a-transfer>
      </div>
      <template slot="footer">
        <a-button key="back" @click="handleCancel">取消</a-button>
        <a-button key="submit" type="primary" @click="handleOk">保存</a-button>
      </template>
    </a-modal>
  </div>
</template>

<script>
import _ from 'lodash'
const treeData = [
  { key: '0-0', title: '0-0', disabled: true, rootNode: true, scopedSlots: { title: 'title' } },
  {
    key: '0-1',
    title: '0-1',
    scopedSlots: { title: 'title' },
    children: [{
      key: '0-1-0', title: '0-1-0', scopedSlots: { title: 'title' }
    }, {
      key: '0-1-1', title: '0-1-1', scopedSlots: { title: 'title' }
    }]
  },
  { key: '0-2', title: '0-3', scopedSlots: { title: 'title' } }
]
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      lightSwitch: false,
      confirmLoading: false,
      authVisible: false,
      expandedKeys: [],
      mockData: [],
      targetKeys: [],
      treeData,
      transferDataSource: [],
      treeSearch: ''
    }
  },

  watch: {
    visible: {
      handler (val) {
        this.authVisible = val
      },
      immediate: true
    },
    authVisible (val) {
      this.$emit('update:visible', val)
    },
    treeData: {
      handler (data) {
        const sourceData = JSON.parse(JSON.stringify(data))
        this.flatten(sourceData)
        this.expandAll(data)
      },
      immediate: true
    }
  },

  computed: {
  },

  methods: {
    // 穿梭框数据源
    flatten (list = []) {
      list.forEach(item => {
        this.transferDataSource.push(item)
        this.flatten(item.children)
      })
    },

    // 提交
    handleOk () {
      this.authVisible = false
    },

    // 退出
    handleCancel () {
      this.authVisible = false
    },

    // 穿梭操作
    handleChange (targetKeys) {
      this.targetKeys = targetKeys
      this.handleTreeData()
    },

    // 递归禁用勾选状态
    handleTreeData (data = this.treeData) {
      data.forEach(item => {
        item.disabled = this.targetKeys.includes(item.key) || item.rootNode
        if (item.children) {
          this.handleTreeData(item.children)
        }
      })
    },

    // 搜索过滤
    filterOption (inputValue, option) {
      return option.title.indexOf(inputValue) > -1
    },

    // 展开事件
    onExpand (expandedKeys) {
      this.expandedKeys = expandedKeys
    },

    // 展开所有节点
    expandAll (data = this.treeData) {
      data.forEach(e => {
        !this.expandedKeys.includes(e.key) && this.expandedKeys.push(e.key)
        if (e.children) e.children.forEach(item => this.expandAll(e.children))
      })
    },

    // 搜索输入框搜索事件
    handleSearch: _.debounce(function (dir, value) {
      this.treeSearch = value
      if (dir === 'left') {
        if (!value) return this.expandAll()
        this.expandedKeys = []
        this.$nextTick(e => {
          this.checkIndexOf(value)
        })
      }
    }, 300),

    // 查找符合条件的节点并展开
    checkIndexOf (val, data = this.treeData) {
      data.forEach(item => {
        if (item.title.indexOf(val) > -1 && !this.expandedKeys.includes(item.key)) {
          this.expandedKeys.push(item.key)
        }
        if (item.children) {
          this.checkIndexOf(val, item.children)
        }
      })
    },

    // 判断是否选中项
    isChecked (selectedKeys, eventKey) {
      return selectedKeys.indexOf(eventKey) !== -1
    },

    // onCheck
    onChecked (_, e, checkedKeys, itemSelect) {
      const { eventKey } = e.node
      itemSelect(eventKey, !this.isChecked(checkedKeys, eventKey))
    }
  },

  mounted () {
  }
}
</script>

<style lang="less" scoped>
/deep/ .auth-modal{
  .ant-transfer-list-header-title{
    left: 12px;
  }
  .ant-transfer-list-header-selected span:first-child{
    opacity: 0;
  }
  .ant-transfer-list-header{
    background: #e8e8e8;
  }
}
</style>
