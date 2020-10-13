import API from '@/lib/services/index.js'

const getData = (params) => {
  return API.get({
    url: '/data/tableData',
    data: params
  })
}

// 获取角色数据
const getRoleData = (params) => {
  return API.get({
    url: '/data/roleData',
    data: params
  })
}

// 保存角色信息
const saveRoleInfo = (params) => {
  return API.post({
    url: '/data/saveRoleInfo',
    data: params
  })
}

// 保存角色信息
const getRelateData = () => {
  return API.get({
    url: '/data/getRelateData'
  })
}

// 提交关联信息
const submitRelate = (params) => {
  return API.get({
    url: '/data/submitRelate',
    data: params
  })
}
export default {
  getData,
  getRoleData,
  saveRoleInfo,
  getRelateData,
  submitRelate
}
