<template>
  <div>
    <NavMobile v-if="isMobile" />
    <NavSearch style="z-index: 5" v-if="isMobile" />
    <NavContato style="z-index: 5" class="mt-0"/>
    <NavDesktop v-if="!isMobile" />
  </div>
</template>

<script>
import NavDesktop from "@/layout/main/nav/NavDesktop.vue";
import NavMobile from "@/layout/main/nav/NavMobile.vue";
import NavContato from "@/layout/main/nav/NavContato.vue";
import NavSearch from "@/layout/main/nav/NavSearch.vue";
export default {
  components: {
    NavDesktop,
    NavMobile,
    NavContato,
    NavSearch,
  },
};
</script>

<style>
</style>