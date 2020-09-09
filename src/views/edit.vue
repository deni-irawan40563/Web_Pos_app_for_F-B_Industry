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
            <itemCardEdit v-for="product in productstate" :item="product" :key="product.id"/>
        </div>
       </div>
    </div>
    </div>
    <modalAdd />
    <ModalSearch />
    <modalEdit />
    <buttomnav />
  </div>
</template>

<script scoped>
import navBar from '@/components/navBar.vue'
import sideBarLeft from '@/components/sideBarLeft.vue'
// import AsideCardEdit from '../components/asideCardEdit'
import itemCardEdit from '@/components/itemCardEdit.vue'
import modalAdd from '@/components/modalAdd.vue'
import buttomnav from '@/components/buttomnav.vue'
import ModalSearch from '@/components/ModalSearch.vue'
import modalEdit from '@/components/modalEdit.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Edit',
  components: {
    navBar,
    sideBarLeft,
    itemCardEdit,
    // AsideCardEdit,
    modalAdd,
    ModalSearch,
    buttomnav,
    modalEdit
  },
  data () {
    return {
      modalActive: false,
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
</style>
