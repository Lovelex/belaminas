<template>
  <div>
    <quill v-model="item.descricao" />
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";
export default {
  props: ['item'],
  components: {
    quill: quillEditor,
  },
};
</script>

<style>
</style>