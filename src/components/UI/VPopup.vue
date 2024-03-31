<template>
 <div
  @click.stop="closePopup"
  v-if="$store.state.popup"
  class="fixed top-0 left-0 w-full h-full flex z-[1000] bg-[rgba(0,0,0,0.2)] backdrop-blur-[2px] overflow-auto"
 >
  <div
   @click.stop
   class="relative flex flex-col items-center gap-[10px] bg-[var(--b-white)] m-auto rounded-[10px] p-[30px]"
  >
   <p class="text-32">Свяжитесь с нами!</p>
   <a href="tel:+111222333" class="text-24">+111222333</a>
   <button
    @click="closePopup"
    class="absolute top-[10px] right-[10px] text-18"
    type="button"
   >
    x
   </button>
  </div>
 </div>
</template>

<script lang="ts">
export default {
 name: 'v-popup',
 methods: {
  closePopup() {
   this.$store.commit('closePopup');
   document.querySelector('body')?.classList.remove('j-lock');
  },
 },
};
</script>
