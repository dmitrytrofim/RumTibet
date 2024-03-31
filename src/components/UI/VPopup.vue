<template>
 <div
  class="fixed top-0 left-0 w-full h-full flex z-[1000] bg-[rgba(0,0,0,0.2)] backdrop-blur-[2px] overflow-auto"
 >
  <div
   class="relative flex flex-col items-center gap-[10px] bg-[var(--b-white)] m-auto rounded-[10px] p-[30px]"
  >
   <p class="text-32">Свяжитесь с нами!</p>
   <a href="tel:+111222333" class="text-24">+111222333</a>
   <button class="absolute top-[10px] right-[10px] text-18" type="button">
    x
   </button>
  </div>
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
 name: 'v-popup',
});
</script>
