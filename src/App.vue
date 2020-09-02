<template>
  <div>
    <router-view/>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions(['interceptorsRequest', 'interceptorsResponse'])
  },
  created () {
    console.log('hello')
    this.interceptorsRequest()
    this.interceptorsResponse()
  }
}
</script>
<style>

</style>
