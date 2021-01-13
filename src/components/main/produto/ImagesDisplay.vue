<template>
  <v-sheet :min-height="isMobile ? 0 : 600" v-if="product" elevation="2" class="d-flex pa-2">
    <div style="cursor: pointer">
      <v-img
        @click="changeImage(i)"
        class="my-2 mr-2"
        :width="responsiveSize.width"
        :height="responsiveSize.height"
        :src="imagem"
        v-for="(imagem, i) in product.imagens"
        :key="imagem"
      />
    </div>
    <v-dialog v-if="product.imagens">
      <template v-slot:activator="{ on }">
        <v-img
          aspect-ratio="1.777"
          contain
          v-on="on"
          :src="displayImage"
        ></v-img>
      </template>
      <v-card>
        <v-img contain aspect-ratio="1.777" :src="displayImage"></v-img>
      </v-card>
    </v-dialog>
  </v-sheet>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  data: () => ({
    actualImage: 0,
  }),
  computed: {
    displayImage() {
      return this.product.imagens[this.actualImage];
    },
    responsiveSize() {
      const size = {
        pc: {
          width: 112,
          height: 112,
        },
        mobile: {
          width: 112 / 3,
          height: 112 / 3,
        },
      };
      return this.isMobile ? size.mobile : size.pc;
    },
  },
  methods: {
    changeImage(i) {
      this.actualImage = i;
    },
  },
};
</script>
<style scoped lang="scss">
.product-description {
  max-width: 640px;
}
</style>