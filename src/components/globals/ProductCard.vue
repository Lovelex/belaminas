<template>
  <v-sheet max-width="280" v-if="product">
    <v-card height="320" style="position: relative" class="pa-1">
      <div
        style="position: absolute; z-index: 1"
        v-if="product.desconto"
        class="discount-circle bs elevation-2 d-flex flex-column justify-center rounded-circle align-center pa-6"
      >
        <span
          class="discount-circle-label text-caption white--text font-weight-bold"
        >
          -{{ product.desconto }}%
        </span>
      </div>
      <v-img contain :src="product.imagens[0]" />
    </v-card>
    <div class="d-flex flex-column text-center mt-2">
      <div>
        <span v-if="product.quantidade" class="text-caption d-block">
          Em estoque: {{ product.quantidade }}
        </span>
        <span
          v-if="!product.quantidade"
          class="text-caption d-block berror--text"
        >
          Sem estoque
        </span>
      </div>
      <div>
        <span class="my-1">
          {{ product.nome }}
        </span>
        <div class="my-1">
          <span class="font-weight-bold" v-if="product.desconto">
            {{ discount | currency }} -
          </span>
          <span
            :class="{
              'text-decoration-line-through': product.desconto,
              'grey--text': product.desconto,
              'text--darken-2': product.desconto,
              'font-weight-bold': !product.desconto,
            }"
          >
            {{ product.preco | currency }}
          </span>
        </div>
        <span class="my-1" v-if="product.parcelas"
          >{{ product.parcelas }}x de {{ parcelas | currency }} sem juros</span
        >
      </div>
      <div class="mt-4 mb-2">
        <v-btn
          dark
          :to="{ name: 'Produto', params: { id: product.id } }"
          :color="product.quantidade ? 'binfo' : 'berror'"
          rounded
          >Visualizar</v-btn
        >
      </div>
    </div>
  </v-sheet>
</template>

<script>
import productMixin from "@/mixins/productMixin";

export default {
  props: {
    product: Object,
  },
  mixins: [productMixin],
};
</script>

<style  lang="scss">
.discount-circle {
  position: relative;
  width: 34px;

  .discount-circle-label {
    position: absolute;
  }
}
</style>