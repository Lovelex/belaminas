<template>
  <v-btn
    v-if="user"
    target="_blank"
    class="btn-admin mb-16"
    :to="{ name: 'Admin' }"
    dark
    fab
    fixed
    bottom
    right
  >
    <v-icon> mdi-cogs </v-icon>
  </v-btn>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
};
</script>

<style>
</style>