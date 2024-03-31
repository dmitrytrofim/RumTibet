<template>
 <li class="flex items-center gap-[15px]">
  <img class="shrink-0 w-[50px] aspect-square" :src="img" alt="" />
  <div class="flex flex-col gap-[5px]">
   <p class="text-18">{{ title }}</p>
   <p class="font-400 leading-[1.42]">{{ text }}</p>
  </div>
 </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
 name: 'offer-item',
 props: {
  img: {
   type: String,
  },
  title: {
   type: String,
  },
  text: {
   type: String,
  },
 },
});
</script>
