<template>
  <div class="modal" tabindex="-1" id="searchModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Search Item</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form class="form-inline my-2 my-lg-0 text-center">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-primary my-2 my-sm-0 font-weight-bold" type="submit">Search</button>
          </form>
        </div>
        <div class="modal-footer">
              <button type="button" class="btn btn-sm btn-color font-weight-bold" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.btn-color {
  background: #F24F8A;
  color: #fff;
}
</style>
