<template>
  <div class="send-header">
    <span>内容： </span>
    <a-input placeholder="请输入内容" class="send-content" v-model="content" />
    <span class="user-name-span">状态： </span>
    <a-select class="send-type" @change="handleChange">
      <a-select-option value="1">已推送</a-select-option>
      <a-select-option value="0">未推送</a-select-option>
    </a-select>
    <a-button type="primary" @click="search">查询</a-button>
    <a-button class="add-send" type="primary" @click="search">添加</a-button>
  </div>
</template>

<script>

import Bus from '@/store/common/bus'
export default {
  data () {
    return {
      userName: '',
      date: []
    }
  },

  methods: {
    search () {
      const params = {}
      this.userName && (params.userName = this.userName)
      this.date.length && (params.date = this.date)

      Bus.$emit('querySystemLog', params)
    },
    handleChange () {
    }
  }
}
</script>

<style lang="less" scoped>
.send-header{
  padding: 20px 0 20px 20px;
  border: 1px solid #ddd;
  text-align: left;

  .user-name-span{
    margin-left: 20px;
  }
  .send-content{
    width: 200px;
  }
  .send-type{
    width: 200px;
    margin-right: 20px;
  }
  .add-send{
    border:1px solid #5cb85c;
    margin-left:20px;
    background: #5cb85c;
  }
}
</style>
