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
      axios.get('http://localhost:18000/api/v1/products/')
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
