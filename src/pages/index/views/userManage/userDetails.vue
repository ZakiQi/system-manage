<template>
  <div id="user-detail">
    <div class="details-con">
      <a-form-model ref="ruleForm" :model="ruleForm" v-bind="layout">
        <!-- 用户名 -->
        <a-form-item has-feedback label="用户名" prop="uname">
          <a-input
            v-model="userName"
            type="username"
            autocomplete="off"
            disabled>
            <!-- 输入框前置图标 -->
            <a-icon slot="prefix" type="user" />
          </a-input>
        </a-form-item>

        <!-- 姓名 -->
        <a-form-model-item has-feedback label="姓名" prop="name" :validate-status="nameStatus" :help="nameTip">
          <a-input
            v-model="name"
            type="text"
            autocomplete="off"
            allow-clear
            placeholder="请输入姓名"
            @blur="checkName">
            <a-icon slot="prefix" type="user" />
          </a-input>
        </a-form-model-item>

        <!-- 密码 -->
        <a-form-model-item has-feedback label="密码" prop="pass">
          <a-input-password
            v-model="passWord"
            type="password"
            autocomplete="off"
            disabled>
            <a-icon slot="prefix" type="lock" />
          </a-input-password>
        </a-form-model-item>

        <!-- 联系电话 -->
        <a-form-model-item
          has-feedback label="联系电话"
          prop="tel"
          :validate-status="telStatus"
          :help="telTip">
          <a-input
            v-model.number="tel"
            placeholder="请输入联系电话"
            @blur="checkTel"
            autocomplete="on"
            allow-clear>
            <a-icon slot="prefix" type="phone" />
          </a-input>
        </a-form-model-item>

        <!-- 组织 -->
        <a-form-model-item
          has-feedback label="组织"
          prop="organization">
          <a-tree-select
            v-model="value"
            tree-data-simple-mode
            style="width: 100%"
            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
            :tree-data="treeData"
            placeholder="请选择组织"
            allowClear
            @change="changeOrg"
            :defaultValue="org"
            :load-data="onLoadData"
          />
        </a-form-model-item>

        <!-- 用户简拼 -->
        <a-form-model-item has-feedback label="用户简拼" prop="nameSpell">
          <a-input :value="nameSpell" type="text" autocomplete="off" disabled>
            <a-icon slot="prefix" type="tag" />
          </a-input>
        </a-form-model-item>

        <!-- 按钮 -->
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" @click="submitForm('ruleForm')">保存</a-button>
          <a-button style="margin-left: 10px" @click="back('ruleForm')">返回</a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName: this.$route.query.userName,
      name: this.$route.query.name,
      passWord: this.$route.query.password,
      tel: this.$route.query.tel,
      org: this.$route.query.org,
      nameSpell: this.$route.query.nameSpell,
      nameStatus: '',
      telStatus: '',
      nameTip: '',
      telTip: '',
      ruleForm: {
        pass: '',
        checkPass: '',
        age: ''
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 }
      },
      value: undefined,
      treeData: [
        { id: 1, pId: 0, value: '1', title: 'Expand to load' },
        { id: 2, pId: 0, value: '2', title: 'Expand to load' },
        { id: 3, pId: 0, value: '3', title: 'Tree Node', isLeaf: true }
      ]
    }
  },

  methods: {
    abc () {
      return {
        nameTip: '长度1-20，只支持中文、字母、数字、下划线、中划线',
        telTip: '长度为11位数字的手机号码'
      }
    },

    // 校验姓名合法性
    checkName () {
      // 匹配长度1-20，只支持中文、字母、数字、下划线、中划线
      var nameReg = new RegExp(/^[(\w|\-|\u4E00-\u9FA5)]{1,20}$/)
      var checkNameResult = nameReg.test(this.name)
      if (this.name && checkNameResult) {
        // 姓名输入合法
        this.nameStatus = 'success'
        this.nameTip = ''
      } else {
        // 姓名输入不合法
        this.nameStatus = 'error'
        this.nameTip = '长度1-20，只支持中文、字母、数字、下划线、中划线'
      }
    },

    // 校验电话合法性
    checkTel () {
      // 匹配长度为11位数字的手机号码
      var telReg = new RegExp(/^1(3|4|5|7|8)\d{9}$/)
      var checkTelResult = telReg.test(this.tel)
      if (this.tel && checkTelResult) {
        this.telStatus = 'success'
        this.telTip = ''
      } else {
        this.telStatus = 'error'
        this.telTip = '长度为11位数字的手机号码'
      }
    },

    // 选则组织
    changeOrg (val) {
      this.org = val
    },

    // 按钮
    // 确认
    submitForm (params) {
      if (this.nameStatus === 'success' && this.telStatus === 'success') {
        if (this.org) {
          this.$store.dispatch('UserMutation/saveUserInfo', params).then(e => {
            this.roleData = e
          })
        } else {
          this.$message.warning('请选择组织')
        }
      } else {
        this.$message.error('信息填写有误')
        if (this.nameStatus === '') {
          this.nameStatus = 'error'
          this.nameTip = '长度1-20，只支持中文、字母、数字、下划线、中划线'
        }
        if (this.telStatus === '') {
          this.telStatus = 'error'
          this.telTip = '长度为11位数字的手机号码'
        }
      }
    },
    // 返回
    back () {
      this.$router.go(-1)
    },
    genTreeNode (parentId, isLeaf = false) {
      const random = Math.random()
        .toString(36)
        .substring(2, 6)
      return {
        id: random,
        pId: parentId,
        value: random,
        title: isLeaf ? 'Tree Node' : 'Expand to load',
        isLeaf
      }
    },
    onLoadData (treeNode) {
      return new Promise(resolve => {
        const { id } = treeNode.dataRef
        setTimeout(() => {
          this.treeData = this.treeData.concat([
            this.genTreeNode(id, false),
            this.genTreeNode(id, true)
          ])
          resolve()
        }, 300)
      })
    }
  },

  mounted () {
    if (this.name) {
      this.checkName()
    }
    if (this.tel) {
      this.checkTel()
    }
  }
}
</script>

<style lang="less" scoped>
.details-con {
  width: 40rem;
  margin: 80px auto;
}
</style>
