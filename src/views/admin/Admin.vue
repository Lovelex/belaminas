<template>
  <div>
    <Nav />
    <router-view id="main-content"/>
    <Footer />
  </div>
</template>

<script>
import Nav from '@/layout/admin/nav/Nav'
import Footer from '@/layout/admin/footer/Footer'

export default {
  components: { Nav, Footer },
  methods: {
    bindMessages() {
      this.$store.dispatch('mensagens/bindItems')
    }
  },
  created() {
    this.bindMessages()
  }
}
</script>

<style>

</style>