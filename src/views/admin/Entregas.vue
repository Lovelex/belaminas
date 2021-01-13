<template>
  <v-container>
    <h2>Detalhes Das Entregas</h2>
    <v-card class="pa-4">
      <div>
        <Quill :item="item && item"/>
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
      return this.$store.getters['entregas/getItem']
    }
  },
  methods: {
    bindItem() {
      this.$store.dispatch('entregas/bindItem')
    },
    handleUpdate() {
      this.$store.dispatch('entregas/handleUpdate')
    }
  },
  created() {
    this.bindItem()
  }
}
</script>

<style>

</style>