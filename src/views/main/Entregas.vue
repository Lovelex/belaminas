<template>
  <div class="bbl1">
    <v-container>
      <ResponsiveTitle
        icon="mdi-sync"
        title="Entregas e Envios"
      />
      <v-card class="pa-4 my-2">
        <pre v-if="item" v-html="item.descricao" />
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    item() {
      return this.$store.getters["entregas/getItem"];
    },
  },
  methods: {
    bindItem() {
      return this.$store.dispatch("entregas/bindItem");
    },
  },
  created() {
    this.bindItem();
  },
};
</script>

<style>
</style>