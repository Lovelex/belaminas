<template>
  <div>
    <v-text-field
      dense
      outlined
      rounded
      v-model="search"
      prepend-inner-icon="mdi-magnify"
      label="Procurar"
      single-line
      hide-details
    ></v-text-field>
    <v-data-table
      :search="search"
      :headers="headers"
      :items="items"
      :items-per-page="5"
      class="elevation-1 my-4"
    >
      <template v-slot:item.actions="{ item, index }">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-icon
              v-on="on"
              color="warning"
              @click="openInUpdateMode(item)"
              class="mr-2"
              >mdi-pencil</v-icon
            >
          </template>
          <span> Editar </span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-icon @click="handleDelDoc(item.id)" v-on="on" color="error"
              >mdi-delete</v-icon
            >
          </template>
          <span>Excluir</span>
        </v-tooltip>
      </template>
      <template v-slot:item.createdAt="{ item, index }">
        <span>
          {{ item.createdAt | time }}
        </span>
      </template>
      <template v-slot:item.isDestacado="{ item, index }">
        <span>
          {{ item.isDestacado | yesOrNo }}
        </span>
      </template>
      <template v-slot:item.preco="{ item, index }">
        <span>
          {{ item.preco | currency }}
        </span>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";
moment.locale("pt-br");

export default {
  props: {
    items: Array,
  },
  data: () => ({
    search: "",
    headers: [
      {
        text: "Nome",
        value: "nome",
      },
      {
        text: "Destacado",
        value: "isDestacado",
      },
      {
        text: "Preço",
        value: "preco",
      },
      {
        text: "Cridado em",
        value: "createdAt",
      },
      {
        text: "Ações",
        value: "actions",
        sortable: false,
      },
    ],
  }),
  computed: {
    ...mapGetters({
      docError: "getDocError",
    }),
  },
  methods: {
    openInUpdateMode(item) {
      this.$store.dispatch(`produtos/openInUpdateMode`, item);
    },
    async handleDelDoc(id) {
      await this.$store.dispatch("delDoc", {
        collection: "produtos",
        id,
      });
    },
  },
};
</script>

<style>
</style>