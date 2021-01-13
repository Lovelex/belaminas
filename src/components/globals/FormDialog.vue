<template>
  <v-dialog :max-width="isMobile ? '100%' : width" v-model="dialog.isActive" :fullscreen="isMobile">
    <v-card>
      <div class="pa-2 pa-sm-4">
        <div class="d-flex justify-end">
          <v-btn fixed fab depressed @click="dialog.isActive = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <slot />
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '50%'
    },
    dialog: Object,
  },
};
</script>

<style>
</style>