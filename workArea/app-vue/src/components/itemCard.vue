<template>
  <div class="col mb-4">
    <div class="position-relative listening">
        <div class="filter"></div>
        <!-- <div class="delete">
            <buttom>delete </buttom>
            <span> | </span>
            <buttom> edit</buttom>
        </div> -->
        <img :src="img" class="card-img-top rounded-top image shadow-lg" />
    </div>
    <div class="card-body">
        <h5 class="card-title">{{name}}</h5>
        <p class="card-text">Rp. {{price}}</p>
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
.filter {
  height: 100%;
  width: 100%;
  background-color : rgb(0, 0, 0,0.5);
  z-index: 1;
  position: absolute;
  background-image: url('../assets/icons/tick.svg');
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
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
