<template>
 <div class="i-wrap items-end aspect-[0.76] rounded-[32px] overflow-hidden">
  <img class="i-full" :src="img" alt="" />
  <span
   class="absolute z-10 top-[10%] flex items-end gap-[8px] right-0 p-[7px_8px] before:relative before:flex before:shrink-0 before:w-[18px] before:aspect-square before:bg-[url('/img/svg/sprite.svg#star')] before:bg-no-repeat before:bg-contain before:bg-center rounded-[4px_0_0_4px] backdrop-blur-[4px] bg-[rgba(253,253,253,0.4)]"
   >{{ rating }}</span
  >
  <div
   class="relative w-full flex justify-between items-center p-[20px_32px] backdrop-blur-[6px] z-10 max-[640px]:px-[15px]"
  >
   <div class="flex flex-col">
    <h3 class="text-24 leading-[1.2] text-[var(--t-white)]">{{ title }}</h3>
    <p class="font-400 leading-[1.28] text-[var(--t-white)]">
     {{ text }}
    </p>
   </div>
   <span
    class="text-20 text-[var(--t-white)] bg-[rgba(255,255,255,0.3)] rounded-[4px] p-[8px_16px] whitespace-nowrap"
    >{{ cost }} $</span
   >
  </div>
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
 name: 'popular-card',
 props: {
  title: String,
  text: String,
  rating: String,
  cost: String,
  img: String,
 },
});
</script>
