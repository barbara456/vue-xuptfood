import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutaions'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  // actions: {
  //   changefood(fdx, food) {
  //     fdx.commit('changeFood',food)
  //   }
  // },
  mutations,
})
