import Vue from 'vue'
// css reset
import 'normalize.css'
import Store from './store'




  // 使用Antd
  import Antd from 'ant-design-vue'
  import 'ant-design-vue/dist/antd.css'
  Vue.use(Antd)


export default ({ router, states = {}, App }, resolve = () => {}) => {
  const store = Store(states)

  const app = new Vue({
    store,
    router,
    render: h => h(App)
  }).$mount('#app')

  // 回调函数
  resolve(app)
}
