<template>
  <v-footer dark color="bp">
    <v-container>
      <div class="d-flex justify-center">
        <SocialMedias />
      </div>
      <v-divider class="my-8" />
      <Infos />
      <Copyright class="mt-8" />
    </v-container>
  </v-footer>
</template>

<script>
import Copyright from "./Copyright.vue";
import Infos from "./Infos.vue";
import SocialMedias from "./SocialMedias";

export default {
  components: { SocialMedias, Infos, Copyright },
};
</script>

<style>
</style>