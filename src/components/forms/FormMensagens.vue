<template>
  <v-form>
    <v-text-field
      v-model="item.name"
      validate-on-blur
      prepend-inner-icon="mdi-account"
      label="Nome Completo"
    />
    <v-text-field
      v-model="item.email"
      validate-on-blur
      prepend-inner-icon="mdi-email"
      label="E-mail"
    />
    <v-text-field
      v-model="item.phone"
      validate-on-blur
      v-mask="['(##) ####-####', '(##) #####-####']"
      prepend-inner-icon="mdi-phone"
      label="Telefone"
    />
    <v-textarea
      v-model="item.message"
      validate-on-blur
      prepend-inner-icon="mdi-message"
      label="Sua mensagem..."
    />
    <div class="d-flex justify-end">
      <v-btn dark color="bs" @click="handleSubmit">
        <span>Enviar</span>
        <v-icon right>mdi-send</v-icon>
      </v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  computed: {
    item() {
      return this.$store.getters['mensagens/getItem']
    }
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch('mensagens/handleSubmit')
    }
  }
};
</script>

<style>
</style>