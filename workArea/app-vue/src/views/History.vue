<template>
<div>
 <Navbar2 />
 <div class="row mt-5">
   <sideBarLeft />
  <div class="col-lg-11 col-sm-12 bg-light">
      <div class="row mt-4 mx-auto container-fluid">
        <CardHistory  class="col-lg-4 leftCard shadow-lg" />
        <CardHistory  class="col-lg-4 centerCard shadow-lg" />
        <CardHistory  class="col-lg-4 rightCard shadow-lg" />
        <img src="../assets/img/Chart.jpg" class="col-lg-12 mt-5 shadow-lg">
        <Table :dataHistory="history" class='shadow-lg col-12'/>
        <buttomnav />
     </div>
  </div>
 </div>
 <modalAdd />
 <ModalSearch />
</div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import Navbar2 from '@/components/Navbar2.vue'
import sideBarLeft from '@/components/sideBarLeft.vue'
import CardHistory from '@/components/CardHistory.vue'
import modalAdd from '@/components/modalAdd.vue'
import Table from '@/components/Table.vue'
import ModalSearch from '@/components/ModalSearch.vue'
import buttomnav from '@/components/buttomnav.vue'

export default {
  name: 'history',
  components: {
    Navbar2,
    sideBarLeft,
    CardHistory,
    modalAdd,
    Table,
    ModalSearch,
    buttomnav
  },
  data () {
    return {
      history: []
    }
  },
  mounted () {
    axios.get('http://localhost:18000/api/v1/history')
      .then((res) => {
        console.log(res.data.result)
        this.history = res.data.result
      })
  }
}
</script>

<style scoped>
.centerCard {
  background: linear-gradient(278.29deg, #29DFFF 30.05%, rgba(41, 223, 255, 0) 133.19%);
  filter: drop-shadow(10px 15px 10px rgba(41, 223, 255, 0.25));
  border-radius: 10px;
}
.leftCard {
  background: linear-gradient(278.29deg, #FBB2B4 30.05%, rgba(255, 143, 178, 0) 133.19%);
  filter: drop-shadow(10px 15px 10px rgba(255, 143, 178, 0.25));
  border-radius: 10px;
}
.rightCard {
  background: linear-gradient(278.29deg, #AB84C8 30.05%, rgba(241, 201, 236, 0) 133.19%);
  filter: drop-shadow(10px 15px 10px rgba(241, 201, 236, 0.25));
  border-radius: 10px;
}

@media (max-width: 1000px) {
    .leftCard {
        margin-top: 10px;
        margin-right: 10px;
    }
    .rightCard {
        margin-top: 10px;
        margin-right: 10px;
    }
}

</style>
