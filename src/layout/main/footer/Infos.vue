<template>
  <v-row>
    <v-col>
      <div>
        <span>Formas de pagamento</span>
        <div class="d-flex">
          <v-img class="mx-2" max-width="64" :src="pagamento" v-for="(pagamento, i) in pagamentos" :key="i"/>
        </div>
      </div>
    </v-col>
    <v-col>
      <div>
        <span>Meios de Envio</span>
        <div class="d-flex">
          <v-img class="mx-2" max-width="64" :src="envio" v-for="(envio, i) in envios" :key="i"/>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    pagamentos: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    envios: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  }),
};
</script>

<style>
</style>