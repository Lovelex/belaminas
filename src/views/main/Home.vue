<template>
  <div>
    <div class="bbl1">
      <Slider title="Destaques" :items="itemsIsDestacado" />
    </div>
    <div class="bbl2">
      <Slider title="Lançamentos" :items="items" />
    </div>
    <div class="bbl1">
      <Slider title="Promoções" :items="itemsIsDesconto" />
    </div>
  </div>
</template>

<script>
import { db } from "../../plugins/firebase";

export default {
  computed: {
    itemsIsDestacado() {
      return this.$store.getters["produtos/getItemsByExact"](
        "isDestacado",
        true
      ).slice(0, 12);
    },
    itemsIsDesconto() {
      return this.$store.getters["produtos/getItemsByMoreThan"](
        "desconto",
        0
      ).slice(0, 12);
    },
    items() {
      return this.$store.getters["produtos/getItems"].slice(0, 12);
    },
  },
};
</script>

<style>
</style>