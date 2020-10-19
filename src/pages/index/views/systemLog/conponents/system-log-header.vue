<template>
  <div class="log-header">
    <span>时间： </span>
    <a-range-picker class="log-picker" @change="onChange" />
    <span class="user-name-span">用户名： </span>
    <a-input placeholder="请输入用户名" class="user-name" v-model="userName" />
    <a-button type="primary" @click="search">查询</a-button>
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
    onChange (time, timeString) {
      this.date = timeString
    }
  }
}
</script>

<style lang="less" scoped>
.log-header{
  padding: 20px 0 20px 20px;
  border: 1px solid #ddd;
  text-align: left;

  .log-picker{
    width:260px;
  }
  .user-name-span{
    margin-left: 20px;
  }
  .user-name{
    width: 200px;
    margin-right: 20px;
  }
}
</style>
