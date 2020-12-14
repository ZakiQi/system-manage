import API from '@/lib/services/index.js'

const getData1 = (data) => {
  return API.get({
    url: '/data/tableData',
    data: data
  })
}

export default {
  getData1
}
