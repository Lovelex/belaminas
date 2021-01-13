<template>
  <v-navigation-drawer color="#7F5964" dark app v-model="dialog.isActive">
    <div class="pa-4">
      <v-icon @click="dialog.isActive = !dialog.isActive">mdi-arrow-left</v-icon>
      <v-list class="mr-8">
        <v-list-item exact :to="{ name: item.name }" v-for="(item,i) in items" :key="i">
          <v-list-item-title>
            {{ item.label }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script>
import main from '@/router/main'

export default {
  props: {
    dialog: Object
  },
  computed: {
    items() {
      return main.children.filter(item => {
        const removeItems = [ 'NotFound', 'Produto']
        return !removeItems.includes(item.name)
      })
    }
  }
}
</script>

<style>

</style>