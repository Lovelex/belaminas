<template>
  <v-container>
    <h2>Mensagens</h2>
    <v-text-field v-model="search" label="procurar" outlined rounded dense />
    <CardMessages v-for="item in newItems" :key="item.id" :item="item" />
    <v-pagination
      v-model="actPage"
      color="info"
      :length="pagTotal"
      class="mb-10"
    />
  </v-container>
</template>

<script>
import CardMessages from "@/components/cards/CardMessages.vue";

export default {
  components: { CardMessages },
  data: () => ({
    limit: 4,
    actPage: 1,
    search: "",
  }),
  computed: {
    items() {
      const items = this.$store.getters["mensagens/getItems"];
      return items.filter((item) => {
        return (
          item.name.includes(this.search) || item.message.includes(this.search)
        );
      });
    },
    newItems() {
      return this.items.slice(this.initial, this.end);
    },
    itemsLength() {
      return this.items.length;
    },
    pagTotal() {
      return Math.ceil(this.itemsLength / this.limit);
    },
    initial() {
      return this.actPage * this.limit - this.limit;
    },
    end() {
      return this.initial + this.limit;
    },
  },
};
</script>

<style>
</style>