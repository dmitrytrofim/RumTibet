<template>
 <a href="#" class="text-[]"><slot></slot></a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
 props: {
  link: {
   type: String,
  },
 },
});
</script>
