<template>
<div class="kotak_login shadow-lg border-black bg-light w-50 h-75">
 <form class="container">
  <div class="form-group text-left">
    <label for="exampleInputEmail1" class="font-weight-bold mb-3">Your Position</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <small id="emailHelp" class="form-text text-muted">enter your position such as cashier, head of shop, or managerial</small>
  </div>
  <div class="form-group text-left">
    <label for="exampleInputPassword1" class="font-weight-bold mb-3">Division Password</label>
    <input type="password" class="form-control " id="exampleInputPassword1">
     <small id="emailHelp" class="form-text text-muted">if you do not know your division password ask your division supervisor</small>
  </div>
  <router-link to='/main' type="button" class="btn btn-style btn-lg btn-block mt-5 text-white">LOGIN</router-link>
</form>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.kotak_login{
width: 50%;
margin: 5% auto;
padding: 30px 20px;
}
.btn-style {
    background: #57CAD5;
}
@media (max-width: 520px) {
  .kotak_login {
    width: 100%;
  }
  .text-muted {
    display: none;
  }
}
</style>
