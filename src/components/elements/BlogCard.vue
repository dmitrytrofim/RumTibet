<template>
 <div
  class="flex justify-between gap-[24px] bg-[var(--b-white)] rounded-[10px] p-[16px]"
 >
  <div class="i-wrap shrink-0 w-[230px] aspect-[0.82]">
   <img class="i-full rounded-[6px]" src="/img/blog-1.png" alt="" />
  </div>
  <div class="flex flex-col py-[16px]">
   <h3 class="text-24 leading-[1.3] mb-[24px]">
    Красивая Италя, какая она в реальности?
   </h3>
   <p class="grow font-400 leading-[1.4]">
    Для современного мира базовый вектор развития предполагает независимые
    способы реализации соответствующих условий активизации.
   </p>
   <div class="flex justify-between">
    <time class="text-[var(--t-orange)]" datetime="2023-04-01">01/04/2023</time>
    <a href="#" class="">читать статью</a>
   </div>
  </div>
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
 name: 'blog-card',
});
</script>
