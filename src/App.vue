<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions({
      onAuthChange: "onAuthChange",
    }),
  },
  created() {
    this.onAuthChange();
  },
};
</script>

<style>
#main-content {
  min-height: 100vh;
}
</style>