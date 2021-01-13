<template>
  <div class="d-flex">
    <v-icon v-if="icon" class="mr-2" size="32">
      {{ icon }}
    </v-icon>
    <span :class="isMobile ? 'text-h6' : 'text-h4'" class="font-weight-bold grey--text text--darken-2">{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    icon: String
  }
}
</script>
