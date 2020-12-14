<template>
  <div class="log-header">
    <a-input class="log-header-option" v-model="name" placeholder="请输入操作人名称" />
    <a-input class="log-header-option" v-model="fieldName" placeholder="请输入字段名称" />
    <a-input class="log-header-option" v-model="tableName" placeholder="请输入所属表名称" />
    <a-input class="log-header-option" v-model="organizationName" placeholder="清输入机构名称" />
    <a-range-picker class="picker-option" @change="onChange"/>
    <a-select class="log-header-option log-header-select" v-model="typeName" placeholder="清输选择操作类型">
      <a-select-option value="jack">
        Jack
      </a-select-option>
      <a-select-option value="lucy">
        Lucy
      </a-select-option>
      <a-select-option value="disabled" disabled>
        Disabled
      </a-select-option>
      <a-select-option value="Yiminghe">
        yiminghe
      </a-select-option>
    </a-select>
    <a-button class="operate-btn" type="primary" @click="searchRes()">查询</a-button>
    <a-button type="primary" icon="download" @click="exportExcel()">导出Excel</a-button>
  </div>
</template>

<script>
import Bus from '@/store/common/bus'
export default {
  data () {
    return {
      name: '',
      fieldName: '',
      tableName: '',
      organizationName: '',
      typeName: '',
      date: []
    }
  },

  methods: {
    onChange (date, dateString) {
      this.date = dateString
    },

    // 导出excel
    exportExcel () {
    },

    searchRes () {
      const params = {}
      this.name && (params.name = this.name)
      this.fieldName && (params.fieldName = this.fieldName)
      this.tableName && (params.tableName = this.tableName)
      this.organizationName && (params.organizationName = this.organizationName)
      this.typeName && (params.typeName = this.typeName)
      this.date.length === 2 && (params.date = this.date)

      Bus.$emit('searchLog', params)
    }
  }
}
</script>

<style lang="less" scoped>
.log-header{
  width: 100%;
  text-align: left;
  // 去掉focus阴影
  .ant-input:focus, /deep/ .ant-select-selection:focus, /deep/ .ant-calendar-picker:focus .ant-calendar-picker-input:not(.ant-input-disabled){
    box-shadow:none;
  }
  // 去掉边框
  /deep/ .ant-input, /deep/ .ant-select-selection{
    border: none;
    border-bottom: 1px solid #d9d9d9;
  }
  .log-header-option{
    width: 150px;
    float: left;
    margin-right: 5px;
  }
  .picker-option{
    margin-right: 5px;
    width:260px;
    float:left;
    border: none;
  }
  .log-header-select{
    width:160px;
    border: none;
  }
  .operate-btn{
    margin-right: 5px;
  }
}
</style>
