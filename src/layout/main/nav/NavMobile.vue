<template>
  <div>
    <Drawer :dialog="dialog" />
    <v-app-bar app dark class="bp" height="112">
      <v-app-bar-nav-icon @click="dialog.isActive = !dialog.isActive"/>
      <div class="mob">
        <v-img contain width="140" src="@/assets/img/b-logo-trans.png" />
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import Drawer from './Drawer.vue';
export default {
  components: { Drawer },
  data: () => ({
    dialog: {
      isActive: false
    }
  }),
};
</script>

<style scoped>
.mob {
  position: absolute;
  left: calc(50% - 70px);
}
</style>