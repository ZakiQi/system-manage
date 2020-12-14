import Vue from 'vue'
import App from './App.vue'
import router from './router'
import states from './store'
import bootstrap from '@/bootstrap'

import previewUI from 'charts-preview'

Vue.use(previewUI)

if (process.env.NODE_ENV !== 'production') {
  require('./mock/mock.js')
}

bootstrap({ router, states, App })
