import Mock from 'mockjs'

const Random = Mock.Random
const data = []

for (let i = 1; i <= 10; i++) { // 可自定义生成的个数
  const template = {
    number: i,
    role: Random.name(),
    roleNumber: Random.integer(1, 100),
    founder: Random.name(),
    describe: Random.paragraph(2, 5)
  }
  data.push(template)
}
export default data
