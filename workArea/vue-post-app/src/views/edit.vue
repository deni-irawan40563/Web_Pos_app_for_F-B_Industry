<template>
  <div class="home">
    <navBar />
    <aside />
    <div class="row mt-5 articleParent">
      <sideBarLeft />
      <!-- <itemCard class="pt-4" /> -->
     <div class="col-lg-7 bg-light pt-4">
       <div class="container text-center">
        <div class="row row-cols-1 row-cols-md-3 ml-1 mr-2 ">
            <itemCardEdit :img="product.image" :name="product.name" :id="product.id" :price="product.price" v-for="product in products" :key="product.id"  v-on:delete-btn="deleteItem"/>
        </div>
       </div>
    </div>
    <AsideCard />
    </div>
    <modalAdd />
    <ModalSearch />
    <modalEdit />
    <buttomnav />
  </div>
</template>

<script scoped>
// @ is an alias to /src
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import navBar from '@/components/navBar.vue'
// eslint-disable-next-line no-unused-vars
import sideBarLeft from '@/components/sideBarLeft.vue'
import AsideCard from '@/components/AsideCard.vue'
import itemCardEdit from '@/components/itemCardEdit.vue'
import modalAdd from '@/components/modalAdd.vue'
import buttomnav from '@/components/buttomnav.vue'
import ModalSearch from '@/components/ModalSearch.vue'
import modalEdit from '@/components/modalEdit.vue'

export default {
  name: 'Edit',
  components: {
    navBar,
    sideBarLeft,
    itemCardEdit,
    AsideCard,
    modalAdd,
    ModalSearch,
    buttomnav,
    modalEdit
  },
  data () {
    return {
      products: []
    }
  },

  // mounted () {
  //   this.load()
  // },
  mounted () {
    axios.get(process.env.VUE_APP_BACK_END)
      .then((res) => {
        // console.log(res.data.result)
        this.products = res.data.result
      })
  }
  // methods: {
  //   async load () {
  //     const response = await axios.get(process.env.VUE_APP_BACK_END)
  //     this.products = response.data
  //     console.log(response.data)
  //   }
  // }

  // mounted () {
  //   axios.get(process.env.VUE_APP_BACK_END)
  //     .then((res) => {
  //       console.log(res.data.result)
  //       this.products = res.data.result
  //     })
  // }
  // del (form) {
  //   axios.delete('http://localhost:3000/users/' + form.id).then(res => {
  //     this.load()
  //     const index = this.products.indexOf(form)
  //     this.products.splice(index, 1)
  //   })
  // }
  // methods: {
  //   deleteItem (val) {
  //     this.products.filters((products) => {
  //       return products.id !== val
  //     })
  //   }
  // }
  // methods: {
  //   async addTodo () {
  //     const res = await axios.post(process.env.VUE_APP_BACK_END, this.form)
  //     this.products = [...this.products, res.data]
  //     this.form = ''
  //   }
  // }
}
</script>

<style scoped>
.articleParent {
  min-height: 720px;
}
</style>
