<template>
  <div class="bbl1">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="pa-2">
            <div class="mb-8">
              <ResponsiveTitle title="Mídias Sociais" />
              <div class="ma-4">
                <v-btn
                  target="_blank"
                  :href="item.href"
                  dark
                  color="bs"
                  fab
                  small
                  v-for="item in midias"
                  :key="item.id"
                >
                  <v-icon>{{ item.icon }} </v-icon>
                </v-btn>
              </div>
            </div>
            <div>
              <ResponsiveTitle title="Telefone e E-mail" />
              <div>
                <div class="my-2">
                  <span class="mr-2">E-mail:</span>
                  <span>{{ contato.email }}</span>
                </div>
                <div>
                  <span class="mr-2">Telefone:</span>
                  <span>{{ contato.phone }}</span>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="pa-2">
            <ResponsiveTitle title="Mensagem" />
            <FormMensagens />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import FormMensagens from "../../components/forms/FormMensagens.vue";
export default {
  components: { FormMensagens },
  computed: {
    midias() {
      return this.$store.getters["midiasSociais/getItems"];
    },
    contato() {
      return this.$store.getters["contato/getItem"];
    },
  },
};
</script>

<style>
</style>