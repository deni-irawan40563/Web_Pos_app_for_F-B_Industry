import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    token: localStorage.getItem('token') || null
  },
  mutations: {
    setProduct (state, payload) {
      state.products = payload
    },
    setToken (state, payload) {
      state.token = payload
    }
  },
  actions: {
    login (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}/users/login`, payload)
          .then((res) => {
            console.log(res)
            context.commit('setToken', res.data.result[0].token)
            localStorage.setItem('token', res.data.result[0].token)
            resolve(res.data.result[0])
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    getProduct (context) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_BASE_URL}/products`)
          .then((res) => {
            context.commit('setProduct', res.data.result)
            resolve(res.data.result)
          })
          .reject((err) => {
            console.log(err)
            reject(err)
          })
      })
    }
  },
  getters: {
    getProduct (state) {
      return state.products
    },
    isLogin (state) {
      return state.token !== null
    }
  },
  modules: {
  }
})
