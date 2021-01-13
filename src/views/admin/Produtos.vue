<template>
  <div>
    <FormDialog width="80%" :dialog="dialog">
      <FormProduto :mode="mode" :data="data" />
    </FormDialog>
    <v-container>
      <h2>Produtos</h2>
      <v-card
        :class="{ 'pa-12': !isMobile, 'py-10': isMobile, 'px-2': isMobile }"
        class="mt-8"
      >
        <v-btn @click="openInSubmitMode" color="info" fab absolute top right>
          <v-icon> mdi-plus </v-icon>
        </v-btn>
        <ProdutosTable :items="items" />
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { db } from "../../plugins/firebase";

import FormProduto from "@/components/forms/FormProduto.vue";
import ProdutosTable from "@/components/tables/ProdutosTable.vue";

export default {
  components: {
    FormProduto,
    ProdutosTable,
  },
  data: () => ({
    namespace: "produtos",
  }),
  computed: {
    data() {
      return this.$store.getters[`${this.namespace}/getItem`];
    },
    items() {
      return this.$store.getters[`${this.namespace}/getItems`];
    },
    mode() {
      return this.$store.getters[`${this.namespace}/getMode`];
    },
    dialog() {
      return this.$store.getters[`${this.namespace}/getDialog`];
    },
  },
  methods: {
    bindItems() {
      this.$store.dispatch(`${this.namespace}/bindItems`);
    },

    openInSubmitMode() {
      this.$store.dispatch(`${this.namespace}/openInSubmitMode`);
    },
  },
  created() {
    this.bindItems();
  },
};
</script>

<style>
</style>