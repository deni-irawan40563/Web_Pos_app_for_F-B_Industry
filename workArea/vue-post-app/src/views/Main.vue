/* eslint-disable no-unused-vars */
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
            <itemCard :img="product.image" :name="product.name" :price="product.price" v-for="product in products" :key="product.id"/>
        </div>
      </div>
      </div>
      <AsideCard />
    </div>
    <modalAdd />
    <ModalSearch />
    <buttomnav />
  </div>
</template>

<script scoped>
// @ is an alias to /src
import axios from 'axios'
import navBar from '@/components/navBar.vue'
// eslint-disable-next-line no-unused-vars
import sideBarLeft from '@/components/sideBarLeft.vue'
import AsideCard from '@/components/AsideCard.vue'
import itemCard from '@/components/itemCard.vue'
import modalAdd from '@/components/modalAdd.vue'
import buttomnav from '@/components/buttomnav.vue'
import ModalSearch from '@/components/ModalSearch.vue'

export default {
  name: 'Main',
  components: {
    navBar,
    sideBarLeft,
    itemCard,
    // eslint-disable-next-line vue/no-unused-components
    AsideCard,
    modalAdd,
    ModalSearch,
    buttomnav
  },
  data () {
    return {
      products: []
      // form: {
      //   id: '',
      //   name: '',
      //   image: '',
      //   price: '',
      //   idCategory: ''
      // }
    }
  },
  mounted () {
    axios.get(process.env.VUE_APP_BACK_END)
      .then((res) => {
        // console.log(res.data.result)
        this.products = res.data.result
      })
    // axios.delete(process.env.VUE_APP_BACK_END + this.products.id)
    //   .then(() => {
    //     this.load()
    //     const index = this.users.indexOf(this.products.name)
    //     this.products.splice(index, 1)
    //   })
  }
  // update (form) {
  //   return axios.put(process.env.VUE_APP_BACK_END + form.id, { name: this.form.name, image: this.form.image, price: this.form.price, idCategory: this.form.idCategory }).then(res => {
  //     this.load()
  //     this.form.id = ''
  //     this.form.name = ''
  //     this.form.image = ''
  //     this.form.price = ''
  //     this.form.id = ''
  //     this.updateSubmit = false
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // },
  // del (form) {
  //   axios.delete('http://localhost:3000/users/' + form.id).then(res => {
  //     this.load()
  //     const index = this.product.indexOf(form)
  //     this.products.splice(index, 1)
  //   })
  // }
  // del (user) {
  //   axios.delete(process.env.VUE_APP_BACK_END + user.id).then(res => {
  //     this.load()
  //     const index = this.users.indexOf(form.name)
  //     this.users.splice(index, 1)
  //   })
  // }
}
</script>

<style scoped>
.articleParent {
  min-height: 720px;
}
</style>
