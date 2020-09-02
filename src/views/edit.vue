/* eslint-disable no-undef */
/* eslint-disable no-undef */
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
      product: [],
      form: {
        name: '',
        image: '',
        price: '',
        idCategory: ''
      },
      updateSubmit: false
    }
  },
  mounted () {
    this.load()
  },
  methods: {
    load () {
      axios.get(process.env.VUE_APP_BACK_END)
        .then((res) => {
          console.log(res.data.result)
          this.product = res.data
        })
    },
    add () {
      axios.post(process.env.VUE_APP_BACK_END, this.form).then(res => {
        this.load()
        this.form.name = ''
        this.form.price = ''
        this.form.image = ''
        this.form.idCategory = ''
      })
    },
    edit (product) {
      this.updateSubmit = true
      this.form.name = product.name
      this.form.price = product.price
      this.form.image = product.image
      this.form.idCategory = product.idCategory
    },
    update (form) {
      return axios.put(process.env.VUE_APP_BACK_END + form.id, { name: this.form.name, img: this.form.image, price: this.form.price, idCategory: this.form.idCategory }).then(res => {
        this.load()
        this.form.id = ''
        this.form.name = ''
        this.form.price = ''
        this.form.image = ''
        this.form.idCategory = ''
        this.updateSubmit = false
      }).catch((err) => {
        console.log(err)
      })
    },
    del (product) {
      // eslint-disable-next-line no-undef
      axios.delete(process.env.VUE_APP_BACK_END + user.id).then(res => {
        this.load()
        // eslint-disable-next-line no-undef
        const index = this.product.indexOf(form.name)
        this.users.splice(index, 1)
      })
    }
  }
}
</script>

<style scoped>
.articleParent {
  min-height: 720px;
}
</style>
