<template>
  <v-navigation-drawer disable-resize-watcher v-model="drawer.isActive" app>
    <v-list>
      <v-list-item
        :to="{ name: item.name }"
        v-for="(item, i) in items"
        :key="i"
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon" />
        </v-list-item-icon>
        <v-list-item-title>
          {{ item.label }}
        </v-list-item-title>
        <v-badge
          class="mr-16"
          v-if="item.name === 'AdminMensagens'"
          :content="messagesLength || '0'"
        />
      </v-list-item>
    </v-list>
    <div class="py-4">
      <v-divider />
      <v-btn @click="handleLogout" color="deep-orange" text>
        <v-icon left> mdi-logout </v-icon>
        <span>Deslogar</span>
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script>
import adminNav from "@/router/admin";
import { mapActions } from "vuex";

export default {
  props: {
    drawer: {
      type: Object,
    },
  },
  computed: {
    items() {
      return adminNav.children.filter(item => item.name !== 'Admin');
    },
    messagesLength() {
      return this.$store.getters["mensagens/getItemLength"];
    },
  },
  methods: {
    ...mapActions({
      logout: "logout",
    }),
    handleLogout() {
      this.logout().then(() => {
        this.$router.push({ name: "Main" });
      });
    },
  },
};
</script>

<style>
</style>