import API from '@/lib/services/index.js'

// 多维度单页vuex
export default {
  namespaced: true,

  state: {
    name: 'dimension',
    userData: []
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

    // 获取角色信息
    getRoleData ({ commit }, payoad = {}) {
      return API.get({
        url: '/data/roleData',
        data: payoad
      }).then(data => {
        return data
      })
    },

    // 保存角色信息
    saveRoleInfo ({ commit }, payoad = {}) {
      return API.post({
        url: '/data/saveRoleInfo',
        data: payoad
      }).then(data => {
        return data
      })
    },

    getRelateData ({ commit }, payoad = {}) {
      return API.get({
        url: '/data/getRelateData',
        data: payoad
      }).then(data => {
        return data
      })
    },

    // 提交关联信息
    submitRelate ({ commit }, payoad = {}) {
      return API.post({
        url: '/data/submitRelate',
        data: payoad
      }).then(data => {
        return data
      })
    }
  }

  // mutations: {
  //   UPDATE_TEXT: (state, payload = {}) => {
  //     console.log(state)
  //     console.log(payload)
  //   }
  // }
}
