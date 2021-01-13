<template>
  <div>
    <div class="d-flex justify-center">
      <span class="my-4 text-h5 font-weight-bold">Mande uma mensagem!</span>
    </div>
    <FormMensagens />
  </div>
</template>

<script>
import FormMensagens from '../forms/FormMensagens.vue';
export default {
  components: { FormMensagens },
  
};
</script>

<style>
</style>