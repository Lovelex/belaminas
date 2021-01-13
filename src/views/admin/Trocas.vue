<template>
  <v-container>
    <h2>Detalhes Das Trocas</h2>
    <v-card class="pa-4">
      <div >
        <Quill :item="item"/>
      </div>
      <div class="d-flex justify-end my-4">
        <v-btn @click="handleUpdate">Atualizar</v-btn>
      </div>
    </v-card>
  </v-container>
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
      this.$store.dispatch('trocas/bindItem')
    },
    handleUpdate() {
      this.$store.dispatch('trocas/handleUpdate')
    }
  },
  created() {
    this.bindItem()
  }
}
</script>

<style>

</style>