<template>
  <div class="d-flex flex-column align-center">
    <span>Mídias Sociais</span>
    <div>
      <v-btn
        color="bs"
        dark
        class="mx-2"
        small
        target="_blank"
        :href="item.href"
        v-for="(item, i) in items"
        :key="i"
        fab
      >
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    items() {
      return this.$store.getters['midiasSociais/getItems']
    }
  }
};
</script>

<style>
</style>