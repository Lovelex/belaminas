<template>
  <v-container>
    <h2>Contato</h2>
    <v-card class="pa-4">
      <v-form>
        <v-row>
          <v-col>
            <v-card class="pa-4">
              <span>Seu E-mail</span>
              <v-text-field v-model="item.email" label="E-Mail" />
            </v-card>
          </v-col>
          <v-col>
            <v-card class="pa-4">
              <span>Seu Telefone</span>
              <v-text-field v-mask="[mask.tellPhone, mask.cellPhone]" v-model="item.phone" label="Telefone" />
            </v-card>
          </v-col>
        </v-row>
        <div class="d-flex justify-end mt-6">
          <v-btn color="info" @click="handleUpdate"> Atualizar </v-btn>
        </div>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  computed: {
    item() {
      return this.$store.getters["contato/getItem"];
    },
  },
  methods: {
    bindItem() {
      this.$store.dispatch("contato/bindItem");
    },
    handleUpdate() {
      this.$store.dispatch('contato/handleUpdate')
    }
  },
  created() {
    this.bindItem();
  },
};
</script>

<style>
</style>