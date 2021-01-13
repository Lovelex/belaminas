<template>
  <div class="bbl1">
    <v-container >
      <ResponsiveTitle icon="mdi-truck-fast-outline" title="Trocas e Devoluções"/>
    <v-card class="pa-4 my-2">
      <pre v-if="item" v-html="item.descricao"/>
    </v-card>
  </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    item() {
      return this.$store.getters['trocas/getItem']
    }
  },
  methods: {
    bindItem() {
      return this.$store.dispatch('trocas/bindItem')
    }
  },
  created() {
    this.bindItem()
  }
}
</script>

<style>

</style>