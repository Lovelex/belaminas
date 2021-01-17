<template>
  <div class="bbl1">
    <v-container >
    <h2 class="text-h4 font-weight-bold">Produtos</h2>
    <span class="caption">Encontrados: {{ items.length }}</span>
    <v-card class="pa-4 d-flex">
      <v-row>
        <v-col class="d-flex d-sm-block justify-center" cols="12" sm="6" md="3" v-for="product in items" :key="product.id" >
          <ProductCard width="240" :product="product" class="mx-2" />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.getters["produtos/getFilteredBySearchItems"](
        this.$route.query.search
      );
    },
  },
};
</script>
