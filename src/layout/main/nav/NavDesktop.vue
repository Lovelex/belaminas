<template>
  <div>
    <Drawer :dialog="dialog" />
    <v-app-bar dark class="bp" height="112" app>
      <v-app-bar-nav-icon
        @click="dialog.isActive = !dialog.isActive"
        class="mr-4 d-block d-md-none"
      />
      <div>
        <router-link :to="{ name: 'Main' }">
          <v-img contain max-width="134" src="@/assets/img/b-logo-trans.png" />
        </router-link>
      </div>
      <NavSearch/>

      <v-list color="bp" dense class="d-none d-md-flex">
        <v-list-item
          exact
          :to="{ name: item.name }"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item.label }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-app-bar>
  </div>
</template>

<script>
import main from "@/router/main";
import Drawer from "./Drawer.vue";
import NavSearch from './NavSearch.vue';

export default {
  components: { Drawer, NavSearch },
  data: () => ({
    dialog: {
      isActive: false,
    },
  }),
  computed: {
    items() {
      return main.children.filter((item) => {
        const removeItems = ["NotFound", "Produto"];
        return !removeItems.includes(item.name);
      });
    },
  },
};
</script>

<style>
</style>