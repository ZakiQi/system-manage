<template>
  <div class="field-wrap">
    <table class="table-wrap">
      <tr class="table-tr">
        <td>宽表</td>
        <td>脱敏字段</td>
        <td>脱敏规则</td>
        <td>操作</td>
      </tr>
    </table>
    <div class="data-content">
      <table class="info-content">
        <tr v-for="(item, i) in tableInfo" :key="i">
          <td v-for="list in item" :key="list + '_' + i">
            <a-select :default-value="list" style="width: 120px" @change="handleChange">
              <a-select-option value="jack">
                Jack
              </a-select-option>
              <a-select-option value="lucy">
                Lucy
              </a-select-option>
              <a-select-option value="Yiminghe">
                yiminghe
              </a-select-option>
            </a-select>
          </td>
          <td class="del-item" @click="delItem(item)">
            <i class="iconfont del-icon" title="删除">&#xe601;</i>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableInfo: [{
        tableName: 'lucy',
        fieldName: 'bbb',
        rules: 'ccc'
      }, {
        tableName: 'aaa',
        fieldName: 'lucy',
        rules: 'ccc'
      }, {
        tableName: 'aaa',
        fieldName: 'lucy',
        rules: 'ccc'
      }, {
        tableName: 'aaa',
        fieldName: 'lucy',
        rules: 'ccc'
      }, {
        tableName: 'aaa',
        fieldName: 'lucy',
        rules: 'ccc'
      }, {
        tableName: 'aaa',
        fieldName: 'lucy',
        rules: 'ccc'
      }, {
        tableName: 'aaa',
        fieldName: 'lucy',
        rules: 'ccc'
      }, {
        tableName: 'aaa',
        fieldName: 'lucy',
        rules: 'ccc'
      }]
    }
  },

  methods: {
    handleChange () {
    },

    delItem (data) {
      console.log(data, 'data')
    }
  }
}
</script>

<style lang="less">
.field-wrap{
  border-bottom: 2px solid #e8e8e8;

  .data-content{
    max-height: 300px;
    overflow: auto;
  }

  .info-content{
    width: 100%;
  }
  .table-wrap{
    width: 100%;

    tr:first-child{
      color: #000;
      line-height: 36px;
      border-bottom: 2px solid #e8e8e8;
    }
  }
  .del-icon{
    color: #ff4d4f;
    font-size: 17px;
    position: absolute;
    top: 2px;
    left: 15px;

    &:hover {
      color: red;
      transform: scale(1.2);
      transition: all 0.2s;
    }
  }
  .del-item{
    position: relative;
    user-select: none;
    overflow: hidden;
    text-align: center;
  }
  .table-wrap, .info-content{
    td{
      width: 30%;
    }
    td:last-child{
      width: 10%;
    }
  }
}
</style>
