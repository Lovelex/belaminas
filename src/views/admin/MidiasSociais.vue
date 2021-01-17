<template>
  <div>
    <FormDialog width="400px" :dialog="dialog">
      <FormMidias :mode="mode" :item="item" />
    </FormDialog>
    <v-container>
      <h2>Produtos</h2>
      <v-card
        :class="{  'py-10': isMobile, 'px-2': isMobile }"
        class="mt-8 pt-16 px-4"
      >
        <v-btn @click="openInSubmitMode" color="info" fab absolute top right>
          <v-icon> mdi-plus </v-icon>
        </v-btn>
        <v-row>
          <v-col cols="12" sm="6" md="4" v-for="item in items" :key="item.id">
            <v-card @click.self="handleOpenInUpdateMode(item)" class="pa-2 py-6">
              <div class="d-flex justify-end">

              <v-btn @click="handleDelete(item.id)" color="error" fab small depressed>
                <v-icon> mdi-delete </v-icon>
              </v-btn>
              </div>
              <v-icon large>
                {{ item.icon }}
              </v-icon>
              <span class="text-caption">{{item.href}}</span>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { db } from "../../plugins/firebase";

import FormProduto from "@/components/forms/FormProduto.vue";
import ProdutosTable from "@/components/tables/ProdutosTable.vue";
import FormMidias from "../../components/forms/FormMidias.vue";

export default {
  components: {
    FormProduto,
    ProdutosTable,
    FormMidias,
  },
  data: () => ({
    namespace: "midiasSociais",
  }),
  computed: {
    item() {
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
    handleOpenInUpdateMode(item) {
      this.$store.dispatch(`${this.namespace}/openInUpdateMode`, item);
    },
    handleDelete(id) {
      this.$store.dispatch('delDoc', { collection: 'midias', id })
    }
  },
  created() {
    this.bindItems();
  },
};
</script>

<style>
</style>