<template>
        <div class="col mb-4">
          <div class="position-relative listening">
          <div class="filter"></div>
            <div class="delete">
          <!-- <span class="ml-3 mr-3"> | </span> -->
          </div>
          <img :src="img" class="card-img-top rounded-top image shadow-lg" />
          </div>
          <div class="card-body">
            <h5 class="card-title">{{name}}</h5>
            <p class="card-text">Rp. {{price}}</p>
            <buttom class="btn btn-outline-danger mr-4" @click="del(product)"> <i class="fas fa-trash-alt"></i> delete </buttom>
            <buttom class="btn btn-outline-info ml-4" data-toggle="modal"
        data-target="#editModal"><i class="far fa-edit"></i> edit</buttom>
          </div>
        </div>
</template>

<script>
export default {
  name: 'ItemCard',
  props: ['name', 'price', 'img']
}
</script>

<style scoped>
.image {
  height: 200px;
}
.image:hover {
  transition: filter 0.3s ease-in;
  filter: brightness(50%);
}
@media (max-width: 1200px) {
.image {
  height: 180px;
  }
}
@media (max-width: 720px) {
  .image {
   height: 250px;
  }
}
</style>
