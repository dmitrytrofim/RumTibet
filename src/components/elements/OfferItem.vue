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
export default {
 name: 'offer-item',
 props: ['img', 'title', 'text'],
};
</script>
