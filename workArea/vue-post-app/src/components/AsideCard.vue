<template>
  <div class="col-lg-4 bg-test AsideCard">
    <div class="col-12 text-center">
      <img src="../assets/img/food-and-restaurant.png" alt="food-and-restaurant.png" />
      <h3 class="font-bold">Your cart is empty</h3>
      <p class="font-reguler">Please add some items from the menu</p>
    </div>
  </div>
</template>

<script>
</script>
<style scoped>
.AsideCard {
  height: 100%;
}
@media (max-width: 540px) {
  .AsideCard {
    display: none;
  }
}
@media (max-width: 960px) {
  .AsideCard {
    display: none;
  }
}
</style>
