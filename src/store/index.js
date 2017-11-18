import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from '@/modules/login/login/vuex'
import getters from './getters'

Vue.use(Vuex)
console.log(app, getters)
const store = new Vuex.Store({
  modules: {
    app,
    user
  },
  getters
})

export default store
