<template>
  <v-form>
    <div class="pa-4">
      <v-text-field v-model="item.href" label="Url da mídia social" />
      <v-chip-group mandatory v-model="item.icon">
        <v-chip :value="icon" active-class="info" v-for="(icon, i) in icons" :key="i">
          <v-icon>
            {{ icon }}
          </v-icon>
        </v-chip>
      </v-chip-group>
    </div>
    <div class="d-flex justify-end">
      <v-btn @click="handleCloseDialog" color="secondary" class="mr-2">Fechar</v-btn>
      <v-btn @click="handleUpdate" color="warning" v-if="mode === 'update'">Atualizar</v-btn>
      <v-btn @click="handleSubmit" color="info" v-if="mode === 'submit'">Adicionar</v-btn>
    </div>
  </v-form>
</template>

<script>
const namespace = "midiasSociais";

export default {
  props: {
    item: Object,
  },
  computed: {
    icons() {
      return ["mdi-facebook", "mdi-instagram", "mdi-linkedin", "mdi-twitter"];
    },
    mode() {
      return this.$store.getters[`${namespace}/getMode`];
    },
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch(`${namespace}/handleSubmit`)
    },
    handleUpdate() {
      this.$store.dispatch(`${namespace}/handleUpdate`)
    },
    handleCloseDialog() {
      this.$store.dispatch(`${namespace}/closeDialog`)
    }
  }
};
</script>

<style>
</style>