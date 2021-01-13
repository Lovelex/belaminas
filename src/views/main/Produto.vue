<template>
  <div class="bbl1">
    <v-container>
      <div v-if="product">
        <v-row>
          <v-col cols="12" md="8">
            <ImagesDisplay v-if="product" :product="product" />
          </v-col>
          <v-col cols="12" md="4">
            <ProductInfo v-if="product" :product="product" />
          </v-col>
          <v-col cols="12">
            <ProductDescription v-if="product" :product="product" />
          </v-col>
        </v-row>
      </div>
      <div v-else>
        <span>Produto Não Encontrado</span>
      </div>
    </v-container>
  </div>
</template>

<script>
import ImagesDisplay from "@/components/main/produto/ImagesDisplay.vue";
import ProductInfo from "@/components/main/produto/ProductInfo.vue";
import ProductDescription from "@/components/main/produto/ProductDescription.vue";

export default {
  components: { ImagesDisplay, ProductInfo, ProductDescription },
  computed: {
    product() {
      return this.$store.getters["produto/getItem"];
    },
  },
  methods: {
    bindItem() {
      this.$store.dispatch("produto/bindItem", { id: this.$route.params.id });
    },
  },
  watch: {
    "$route.params.id": {
      immediate: true,
      handler() {
        this.bindItem();
      },
    },
  },
};
</script>

