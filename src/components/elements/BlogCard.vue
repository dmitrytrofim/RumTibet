<template>
 <div
  class="flex items-center gap-[24px] bg-[var(--b-white)] rounded-[10px] p-[16px]"
 >
  <div class="i-wrap shrink-0 w-[230px] aspect-[0.82] max-[640px]:hidden">
   <img class="i-full rounded-[6px]" :src="imgUrl" alt="" />
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
export default {
 name: 'blog-card',
 props: ['img', 'title', 'text', 'time', 'link'] as string[],
 setup(props) {
  const imgUrl = window.location.pathname + 'src/assets/img/' + props.img;
  console.log(imgUrl);
  return { props };
 },
};
</script>
