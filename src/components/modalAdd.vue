<template>
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Item</h5>
        </div>
        <div class="modal-body ">
          <form>
            <div class="container">
              <!-- <input type="hidden" v-model="form.id"> -->
              <div class="form-group row ">
                  <h5 class="col-3 font-weight-bold">Name</h5>
                  <input type="text" v-model="data.name" class="form-control col-9 shadow-sm" id="form"/>
                  <small class="form-text text-muted"></small>
              </div>
              <div class="form-group row">
                  <h5 class="col-3 font-weight-bold">Image</h5>
                  <input type="file" class="shadow-sm col-9" name="image" id="" @change="handleFile"/>
                  <small class="form-text text-muted"></small>
              </div>
              <div class="form-group row">
                  <h5 class="col-3 font-weight-bold">Price</h5>
                  <input type="number" v-model="data.price" class="col-6 shadow-sm" />
              </div>
              <div class="form-group row">
                  <h5 class="col-3 font-weight-bold">idCategory</h5>
                  <input type="number" v-model="data.idCategory" class="col-6 shadow-sm" />
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-lg btn-style font-weight-bold text-white" data-dismiss="modal">Cancel</button>
            <button class="btn btn-lg btn-style2 font-weight-bold text-white" type="submit">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'modalAdd',
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
.modal {
  display: block;
}
.btn-style {
  background: #F24F8A;
  border-radius: 10px;
}
.btn-style2 {
  background: #57CAD5;
  border-radius: 10px;
}
</style>
