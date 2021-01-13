<template>
  <div class="nav-contact">
    <div class="d-flex">
      <div class="mr-2">
        <v-icon small class="mr-1">mdi-email</v-icon>
        <span class="text-caption font-weight-bold"
          ><a class="grey--text text--darken-3" href="mailto:mail@mail.com"
            >{{ item.email }}</a
          ></span
        >
      </div>
      <div class="mr-2">
        <v-icon small class="mr-1">mdi-phone</v-icon>
        <span class="text-caption font-weight-bold">{{ item.phone }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    item() {
      return this.$store.getters['contato/getItem']
    }
  }
};
</script>

<style scoped lang="scss">
.nav-contact {
  position: fixed;
  right: 0;
}
a {
  text-decoration: none;
}
</style>