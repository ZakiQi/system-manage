import Vue from 'vue'
// css reset
import 'normalize.css'
import Store from './store'

// 使用Antd
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import './assets/css/global.css'

Vue.use(Antd)

export default ({ router, states = {}, App }, resolve = () => {}) => {
  const store = Store(states)

  const app = new Vue({
    store,
    router,
    render: h => h(App)
  }).$mount('#app')

  const codes = [6, 7, 8, 9]

  Vue.prototype.authCode = (code, type = 'some') => {
    if (code instanceof Array) {
      if (type === 'some') {
        return code.some(item => {
          return codes.includes(item)
        })
      } else {
        return code.every(item => {
          return codes.includes(item)
        })
      }
    } else {
      return codes.includes(code)
    }
  }

  // 回调函数
  resolve(app)
}
