<template>
  <div class="home">
    <navBar />
    <aside />
    <div class="row mt-5 articleParent">
      <div class="col-lg-1">
      <div class="sideBarLeft">
        <button type="button" class="btn btn-white style-bottom mt-5">
          <router-link to="/main">
            <img src="../assets/icons/fork.svg" />
          </router-link>
        </button>
        <button type="button" class="btn btn-white style-bottom mt-5">
          <router-link to="/history">
            <img src="../assets/icons/clipboard.svg" />
          </router-link>
        </button>
        <button type="button" class="btn btn-white style-bottom mt-5" @click="toggleModal">
          <img src="../assets/icons/add.svg" />
        </button>
        <button type="button" class="btn btn-white style-bottom mt-5 mainHide" >
          <router-link to="/edit">
              <img src="../assets/icons/edit.svg" width="50" height="50" loading="lazy"/>
          </router-link>
        </button>
    </div>
  </div>
      <div class="col-lg-7 bg-light pt-4">
       <div class="container text-center">
        <div class="row row-cols-1 row-cols-md-3 ml-1 mr-2">
            <itemCard v-for="product in productstate" :item="product" :key="product.id"/>
        </div>
      </div>
      </div>
      <AsideCard />
    </div>
    <ModalSearch />
    <buttomnav />
    <modalAdd  v-show="modalActive" :closeModal="toggleModal"/>
  </div>
</template>

<script scoped>
// import axios from 'axios'
import navBar from '@/components/navBar.vue'
import AsideCard from '@/components/AsideCard.vue'
import itemCard from '@/components/itemCard'
import modalAdd from '@/components/modalAdd.vue'
import buttomnav from '@/components/buttomnav.vue'
import ModalSearch from '@/components/ModalSearch.vue'
// eslint-disable-next-line no-unused-vars
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Main',
  components: {
    navBar,
    itemCard,
    AsideCard,
    modalAdd,
    ModalSearch,
    buttomnav
  },
  data () {
    return {
      modalActive: true,
      products: [],
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['getProduct']),
    toggleModal () {
      this.modalActive = !this.modalActive
      if (!this.modalActive) {
        this.clearModal()
      }
    }
  },
  computed: {
    ...mapGetters({
      productstate: 'getProduct'
    }),
    product () {
      return this.$store.getters.getProduct
    }
  },
  mounted () {
    this.getProduct()
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
.sideBarLeft {
  text-align: center;
  margin-right: 10%;
}
@media (max-width: 720px) {
  .sideBarLeft2 {
    display: none;
  }
}
@media (max-width: 1000px) {
  .sideBarLeft {
    display: none;
  }
}
</style>
