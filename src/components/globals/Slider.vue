<template>
  <v-container class="py-12">
    <h3 class="font-weight-bold text-h4 mb-4 text-center">{{title}}</h3>
    <slider id="slider" ref="slider" :options="options">
      <slideritem
        v-for="item in items"
        :key="item.id"
        :style="{ width: sliderSize }"
        class="mx-1"
      >
        <ProductCard :product="item" />
      </slideritem>
    </slider>
     <div class="mt-2">
        <v-btn fab color="bs" dark x-small class="mr-2" @click="$refs.slider.$emit('slidePre')">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn fab color="bs" dark  x-small @click="$refs.slider.$emit('slideNext')">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
  </v-container>
</template>

<script>
import { slider, slideritem } from "vue-concise-slider";

export default {
  components: { slider, slideritem },
  props: {
    items: Array,
    title: String
  },
  computed: {
    options() {
      return {
        currentPage: 0,
        tracking: false,
        thresholdDistance: 100,
        infinite: 2,
        slidesToScroll: 1,
      };
    },
    sliderSize() {
      const sizes = {
        xs: "99%",
        sm: "49.5%",
        md: "32.5%",
        lg: "24.5%",
      };
      if (this.$vuetify.breakpoint.xs) return sizes.xs;
      if (this.$vuetify.breakpoint.sm) return sizes.sm;
      if (this.$vuetify.breakpoint.md) return sizes.md;
      if (this.$vuetify.breakpoint.lgAndUp) return sizes.lg;
    },
  },
};
</script>

<style >
.slider-wrapper {
  box-sizing: border-box !important;
}
.slider-item {
  font-size: 16px !important;
}
.slider-pagination-bullets {
  display: none;
}
</style>