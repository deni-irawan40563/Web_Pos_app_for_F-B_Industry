/* eslint-disable no-unused-vars */
<template>
  <div class="home">
    <navBar />
    <aside />
    <div class="row mt-5 articleParent">
      <sideBarLeft />
      <div class="col-lg-7 bg-light pt-4">
       <div class="container text-center">
        <div class="row row-cols-1 row-cols-md-3 ml-1 mr-2 ">
            <itemCard v-for="product in products"  :img="product.image" :name="product.name" :price="product.price" :key="product.id"/>
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
import axios from 'axios'
import navBar from '@/components/navBar.vue'
import sideBarLeft from '@/components/sideBarLeft.vue'
import AsideCard from '@/components/AsideCard.vue'
import itemCard from '@/components/itemCard.vue'
import modalAdd from '@/components/modalAdd.vue'
import buttomnav from '@/components/buttomnav.vue'
import ModalSearch from '@/components/ModalSearch.vue'
// import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Main',
  components: {
    navBar,
    sideBarLeft,
    itemCard,
    AsideCard,
    modalAdd,
    ModalSearch,
    buttomnav
  },
  data () {
    return {
      products: [],
      username: '',
      password: ''
    }
  },
  methods: {
  },
  computed: {
    product () {
      return this.$store.getters.getProduct
    }
  },
  mounted () {
    axios.get('http://backend.posapp.desk.my.id/api/v1/products/')
      .then((res) => {
        console.log(res.data.result)
        this.products = res.data.result
        this.getBooks()
      })
    // this.$store.dispatch('getProduct')
  }
}
</script>

<style scoped>
.articleParent {
  min-height: 720px;
}
.mainHide {
  display: none;
}
</style>
