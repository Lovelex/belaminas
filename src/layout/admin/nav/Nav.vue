<template>
  <div>
    <Drawer :drawer="drawer" />
    <v-app-bar app>
      <v-app-bar-nav-icon @click="toggleDrawer"/>
      <v-spacer/>
      <v-btn exact text :to="{name: 'Main'}">
        <span>Voltar ao site</span>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import Drawer from "./Drawer.vue";
export default {
  components: { Drawer },
  data: () => ({
    drawer: {
      isActive: true,
    },
  }),
  methods: {
    toggleDrawer() {
      this.drawer.isActive = !this.drawer.isActive
    }
  }
};
</script>

<style>
</style>