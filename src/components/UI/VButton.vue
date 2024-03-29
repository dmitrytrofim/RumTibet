<template>
 <a
  href="#"
  class="text-16 font-600 text-[var(--t-white)] bg-[var(--b-darkgray)] rounded-[4px] p-[12px_24px]"
  ><slot></slot
 ></a>
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
