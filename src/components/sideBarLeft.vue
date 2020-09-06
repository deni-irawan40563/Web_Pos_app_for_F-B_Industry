<template>
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
        <button class="btn btn-white style-bottom mt-5 mainHide" @click="toggleModal">
          <img src="../assets/icons/add.svg" />
        </button>
        <button type="button" class="btn btn-white style-bottom mt-5 mainHide" >
          <router-link to="/edit">
              <img src="../assets/icons/edit.svg" width="50" height="50" loading="lazy"/>
          </router-link>
        </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'sideBarLeft'
}
</script>

<style scoped>
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
