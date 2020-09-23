import API from '@/lib/services/index.js'

// 多维度单页vuex
export default {
  namespaced: true,

  state: {
    name: 'userMutation'
  },

  actions: {
    serviceTest ({ commit }, payoad = {}) {
      return API.get({
        url: '/data/tableData',
        data: payoad
      }).then(data => {
        return data
      })
    },

    // 请求用户信息数据接口
    getUserData ({ commit }, payoad = {}) {
      return API.get({
        url: '/data/userData',
        data: payoad
      }).then(data => {
        return data
      })
    },

    // 保存用户信息接口
    saveUserInfo ({ commit }, payoad = {}) {
      return API.get({
        url: '/data/saveUserInfo',
        data: payoad
      }).then(data => {
        return data
      })
    }
  }
}
