<template>
  <div class="bbl1">
    <Navs />
    <BtnMessage />
    <BtnAdmin />
    <router-view id="main-content" :class="isMobile ? 'pt-16' : 'pt-2'" />
    <Footer />
  </div>
</template>

<script>
import BtnMessage from "@/layout/main/sidebar/BtnMessage.vue";
import Footer from "@/layout/main/footer/Footer.vue";
import Navs from "@/layout/main/nav/Navs.vue";
import BtnAdmin from '@/layout/main/sidebar/BtnAdmin.vue';

export default {
  components: { BtnMessage, Footer, Navs, BtnAdmin },
  methods: {
    bindProdutos() {
      this.$store.dispatch("produtos/bindItems");
    },
    bindMidias() {
      this.$store.dispatch("midiasSociais/bindItems");
    },
    bindContato() {
      this.$store.dispatch("contato/bindItem");
    },
  },
  created() {
    this.bindMidias();
    this.bindProdutos();
    this.bindContato();
  },
};
</script>

<style lang="scss">
pre {
  font-family: 'roboto';
  white-space: pre-wrap;
  white-space: -moz-pre-wrap; /* Mozilla*/
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word;
  p {
    margin: 0 !important;
    padding: 0 !important;
  }
  ul {
    margin-left: 16px;
  }
}
</style>