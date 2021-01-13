<template>
  <v-combobox
    light
    color="black"
    background-color="white"
    @input="search"
    @keydown.enter="search"
    :items="items"
    item-text="nome"
    item-value="id"
    v-model="input"
    dense
    label="Qual peça você está procurando?"
    :style="mobileStyle"
    class="mx-4 pa-2"
    hide-details
    outlined
    rounded
    prepend-inner-icon="mdi-magnify"
  />
</template>

<script>
export default {
  data: () => ({
    input: "",
  }),
  computed: {
    mobileStyle() {
      return (
        this.isMobile && {
          position: "fixed",
          width: "100%",
          margin: "16px 0px !important",
        }
      );
    },
    items() {
      return this.$store.getters["produtos/getItems"];
    },
  },
  methods: {
    search() {
      if (this.input ) {
        if (typeof this.input === "object" && this.input !== null) {
          this.$router.push({ name: "Produto", params: { id: this.input.id } }).catch(() => {})
        }
        if (typeof this.input === "string") {
          this.$router.push({ name: 'Produtos', query: { search: this.input } }).catch(() => {})
        }
      }
    },
  },
  
};
</script>

<style>
</style>