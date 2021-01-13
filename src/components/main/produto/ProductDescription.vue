<template>
  <v-card v-if="product" class="my-8 pa-2">
    <span
      class="d-block mb-4 text-h5 font-weight-bold grey--text text--darken-1"
      >Descrição:</span
    >
    <pre class="product-description" v-html="product.descricao" />
  </v-card>
</template>

<script>
export default {
  props: {
    product: Object
  }
};
</script>

<style>
</style>