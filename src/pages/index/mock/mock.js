import Mock from 'mockjs'
import testData from './mockData/testData'
import roleData from './mockData/roleData'

// tableData
Mock.mock('/data/tableData?data=1', 'get', testData)
Mock.mock('/data/roleData', 'get', roleData)
