<template>
  <v-card class="pa-4 my-4">
    <v-btn @click="handleDelete" depressed small absolute right fab color="error">
      <v-icon>
        mdi-delete
      </v-icon>
    </v-btn>
    <span v-if="item.newMessage">Nova!</span>
    <div class="my-1">
      <span class="mr-2 grey--text text--darken-2">Enviado em:</span>
      <span class="font-weight-bold">{{ time(item.createdAt, 2) }}</span>
    </div>
    <v-row dense>
      <v-col cols="12" md="4">
        <div>
          <v-icon class="mr-2">mdi-account</v-icon>
          <span class="font-weight-bold">{{ item.name }}</span>
        </div>
      </v-col>
      <v-col cols="12" md="4">
        <div>
          <v-icon class="mr-2">mdi-email</v-icon>
          <span class="font-weight-bold">{{ item.email }}</span>
        </div>
      </v-col>
      <v-col cols="12" md="4">
        <div>
          <v-icon class="mr-2">mdi-phone</v-icon>
          <span class="font-weight-bold">{{ item.phone }}</span>
        </div>
      </v-col>
    </v-row>
    <div class="mb-1 mt-3">
      <div class="message elevation-2">
        <span class="mr-2 mb-2 grey--text text--darken-2 d-block"
          >Mensagem</span
        >
        <span class="font-weight-medium text-caption text-sm-body-1">{{
          item.message
        }}</span>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    item: Object
  },
  methods: {
    handleDelete() {
      this.$store.dispatch('delDoc', {
        collection: 'mensagens',
        id: this.item.id
      })
    }
  }
};
</script>

<style scoped lang="scss">
.newMessage {
  padding: 3px;
  border-radius: 6px;
}
.message {
  border: 1px solid rgba($color: #000000, $alpha: 0.25);
  border-radius: 6px;
  padding: 6px;
}
</style>