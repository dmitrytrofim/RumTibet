<template>
 <a href="#" class=""><slot></slot></a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
 name: 'v-button',
 props: {
  link: {
   type: String,
  },
 },
});
</script>
