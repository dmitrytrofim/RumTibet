<script setup lang="ts">
const imgUrl = window.location.pathname + 'img/';
</script>

<template>
 <div class="flex gap-[24px] bg-[var(--b-white)] rounded-[10px] p-[16px]">
  <div class="i-wrap shrink-0 w-[230px] aspect-[0.82] max-[640px]:hidden">
   <img class="i-full rounded-[6px]" :src="imgUrl + img" alt="" />
  </div>
  <div class="grow flex flex-col py-[16px]">
   <h3 class="text-24 leading-[1.3] mb-[24px]">
    {{ title }}
   </h3>
   <p class="grow font-400 leading-[1.4] mb-[20px]">
    {{ text }}
   </p>
   <div class="flex justify-between">
    <time
     class="text-[var(--t-orange)]"
     :datetime="time?.split('/').reverse().join('-')"
     >{{ time }}</time
    >
    <a :href="link" class="">читать статью</a>
   </div>
  </div>
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
 name: 'blog-card',
 props: {
  img: String,
  title: String,
  text: String,
  time: String,
  link: String,
 },
});
</script>
