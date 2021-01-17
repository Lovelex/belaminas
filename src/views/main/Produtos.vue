<template>
  <div class="bbl1">
    <v-container>
      <h2 class="text-h4 font-weight-bold">Produtos</h2>
      <span class="caption">Encontrados: {{ items.length }}</span>
      <div @click="toggleOrderPrice">
        <span>Filtrar por preço</span>
        <v-icon>{{ orderPriceIcon }}</v-icon>
      </div>
      <v-card class="pa-4 d-flex">
        <v-row>
          <v-col
            class="d-flex d-sm-block justify-center"
            cols="12"
            sm="6"
            md="3"
            v-for="product in items"
            :key="product.id"
          >
            <ProductCard width="240" :product="product" class="mx-2" />
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    orderPrice: "none",
  }),
  computed: {
    items() {
      const items = this.$store.getters["produtos/getFilteredBySearchItems"](
        this.$route.query.search
      );
      if (this.orderPrice === "none") {
        return items;
      }
      if (this.orderPrice === "asc") {
        return this.filteredAsc(items);
      }
      if (this.orderPrice === "desc") {
        return this.filteredDesc(items);
      }
    },
    orderPriceIcon() {
      if(this.orderPrice === 'none') {
        return ``
      }
      if(this.orderPrice === 'asc') {
        return `mdi-arrow-down`
      }
      if(this.orderPrice === 'desc') {
        return `mdi-arrow-up`
      }
    }
  },
  methods: {
    filteredAsc(items) {
      return items.sort((a, b) => {
        return a.calculoDesconto - b.calculoDesconto;
      });
    },
    filteredDesc(items) {
      return items.sort((a, b) => {
        return b.calculoDesconto - a.calculoDesconto;
      });
    },
    toggleOrderPrice() {
      this.orderPrice = this.orderPrice === 'desc' ? 'asc' : 'desc' 
    }
  },
};
</script>
