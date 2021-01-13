<template>
  <div>
    <FormDialog :dialog="dialog">
      <Contato />
    </FormDialog>
    <v-btn @click="openDialog" dark color="bsuccess" fab fixed bottom right>
      <v-icon> mdi-forum </v-icon>
    </v-btn>
  </div>
</template>

<script>
import Contato from '@/components/contato/Contato.vue';
export default {
  components: { Contato },
  computed: {
    dialog() {
      return this.$store.getters['mensagens/getDialog']
    }
  },
  methods: {
    openDialog() {
      return this.$store.dispatch('mensagens/openDialog')
    }
  }
};
</script>

<style>
</style>