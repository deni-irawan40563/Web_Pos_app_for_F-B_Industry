import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    setProduct (state, payload) {
      state.products = payload
    }
  },
  actions: {
    getProduct (setex) {
      axios.get(process.env.VUE_APP_BACK_END)
        .then((res) => {
          setex.commit('setProduct', res.data.result)
        })
    }
  },
  getters: {
    getProduct (state) {
      return state.products
    }
  },
  modules: {
  }
})
