
export default [{
  name: 'John Brown',
  checkout: false,
  status: 1,
  children: [{
    name: '1111',
    checkout: false,
    status: 2,
    children: [{
      name: '二级',
      checkout: false,
      status: 1,
      children: [{
        name: '三级',
        checkout: false,
        status: 1
      }]
    }]
  }, {
    name: '2222',
    status: 2
  }]
}]
