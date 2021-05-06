import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import testResult from './modules/test-result'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    common,
    testResult,
  },
  strict: process.env.NODE_ENV !== 'production',
})

export default store
