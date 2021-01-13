<template>
  <v-sheet v-if="product" elevation="2" class="pa-2">
    <div class="d-flex flex-column">
      <v-chip v-if="product.isDestacado" color="bs" class="align-self-center mb-4" outlined>
        <span class="font-weight-bold">
          Destaque!
        </span>
      </v-chip>
      <span class="font-weight-bold mb-2">{{ product.nome }}</span>
      <div class="mb-2">
        <span class="mr-2">Preço:</span>
        <span v-if="product.desconto">{{ discount | currency }} - </span>
        <span
          :class="{
            'text-decoration-line-through': product.desconto,
            'grey--text': product.desconto,
            'text--darken-2': product.desconto,
            'font-weight-bold': !product.desconto,
          }"
          >{{ product.preco | currency }}</span
        >
      </div>
      <div class="mb-2">
        <span class="my-1" v-if="product.parcelas"
          ><span class="font-weight-bold">{{ product.parcelas }}</span
          >x de
          <span class="font-weight-bold">{{ parcelas | currency }}</span> sem
          juros</span
        >
      </div>
      <div>
        <span class="mr-2">Unidades:</span>
        <span class="font-weight-bold">{{ product.quantidade }}</span>
      </div>
      <div class="my-2">
        <span class="mr-2">Tamanhos: </span>
        <v-chip
          class="ma-1"
          v-for="tamanho in product.tamanhos"
          :key="tamanho.id"
          >{{ tamanho.name }}</v-chip
        >
      </div>
      <div class="ma-1">
        <span class="mr-2">Cores: </span>
        <v-chip v-for="cor in product.cores" :key="cor.id">
          {{ cor.name }}
        </v-chip>
      </div>
      <div class="my-2">
        <v-btn
          color="bs"
          class="mr-2"
          dark
          :href="whatsappLink"
          target="_blank"
          rounded
        >
          <v-icon left>mdi-whatsapp</v-icon>
          <span>COnversar</span>
        </v-btn>
        <v-btn
          dark
          color="bp"
          :href="product.instagramUrl"
          target="_blank"
          rounded
        >
          <v-icon left>mdi-instagram</v-icon>
          <span>VISITAR</span>
        </v-btn>
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
  computed: {
    phone() {
      const contato = this.$store.getters["contato/getItem"];
      const phoneNumbers = contato?.phone?.replace(/\D/g, "");
      return `55${phoneNumbers}`;
    },

    whatsappText() {
      return `Olá, estou querendo mais informações do produto - Nome: ${this.product.nome}, Preco: R$ ${this.product.preco}, Instagram: ${this.product.instagramUrl}`;
    },
    whatsappLink() {
      return `https://wa.me/${this.phone}?text=${this.whatsappText}`;
    },
  },
};
</script>

<style>
</style>