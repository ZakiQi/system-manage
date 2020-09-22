import Mock from 'mockjs'
import testData from './mockData/testData'
import roleData from './mockData/roleData'
import saveRole from './mockData/saveRole'

// tableData
Mock.mock(RegExp('/data/tableData' + '.*'), 'get', testData)
Mock.mock(RegExp('/data/roleData' + '.*'), 'get', roleData)
Mock.mock('/data/saveRoleInfo', 'post', saveRole)
