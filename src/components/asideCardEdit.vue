<template>
  <div class="col-lg-4 bg-test AsideCard">
    <div class="col-12 text-center">
      <form>
            <div class="container mt-5">
              <input type="hidden" v-model="form.id">
              <div class="form-group">
                <label for="formGroupExampleInput">Judul</label>
                <input type="text" v-model="data.name" id="formGroupExampleInput" class="form-control" placeholder="Example input placeholder">
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput2">description</label>
                <input type="text" v-model="data.price" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput2">gambar</label>
               <input type="file" name="image" id="" @change="handleFile">
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput2">kategori</label>
                <input type="text" v-model="data.idCategori" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
            </div>
            </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'asideCardEdit',
  props: {
    data: {
      type: Object
    },
    closeModal: {
      type: Function
    }
  },
  methods: {
    handleFile (e) {
      console.log(e.target.file[0])
    }
  }
}
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
