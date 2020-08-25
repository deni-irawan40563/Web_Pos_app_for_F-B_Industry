/* eslint-disable no-undef */
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
        <itemCardEdit :img="product.image" :name="product.name" :price="product.price" v-for="product in products" :key="product.id" />
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
    // eslint-disable-next-line vue/no-unused-components
    AsideCard,
    modalAdd,
    ModalSearch,
    buttomnav,
    modalEdit
  },
  data () {
    return {
      products: [],
      form: {
        id: '',
        name: '',
        image: '',
        price: '',
        idCategory: ''
      }
    }
  },
  mounted () {
    axios.get(process.env.VUE_APP_BACK_END)
      .then((res) => {
        console.log(res.data.result)
        this.products = res.data.result
      })
  },
  add () {
    axios.post(process.env.VUE_APP_BACK_END, this.form).then(res => {
      this.load()
      this.form.name = ''
      this.form.image = ''
      this.form.price = ''
      this.form.idCategory = ''
    })
  },
  del (user) {
    axios.delete('http://localhost:18000/products/' + this.product.id).then(res => {
      this.load()
      const index = this.products.indexOf(this.form)
      this.product.splice(index, 1)
    })
  }
}
</script>

<style scoped>
.articleParent {
  min-height: 720px;
}
</style>
