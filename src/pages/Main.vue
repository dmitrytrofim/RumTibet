<template>
 <main>
  <section class="bg-[url('./assets/img/greet.png')] bg-center bg-cover">
   <v-container>
    <div class="min-h-dvh flex items-end py-[100px]">
     <h1 class="text-[50px] text-[var(--t-white)] uppercase leading-[150%]">
      Насладись прогулкой в горах<br />
      с командой единомышленников
     </h1>
    </div>
   </v-container>
  </section>
  <section>
   <v-container>
    <div class="">
     <div class="">
      <div
       class="i-wrap w-[400px] aspect-[0.875] rounded-[24px] overflow-hidden"
      >
       <img class="i-full" src="../assets/img/about.png" alt="" />
      </div>
      <VueYtframe
       class="w-[400px] aspect-[0.875] rounded-[24px]"
       video-id="7NK_JOkuSVY"
       :player-vars="{ autoplay: 0, listType: 'user_uploads' }"
      />
     </div>
     <div class="flex flex-col items-start">
      <p class="">о нашем походе</p>
      <h2 class="">Исследуйте все горные массивы мира вместе с нами</h2>
      <p class="">Исследуйте все горные массивы мира вместе с нами</p>
      <v-button>Программа тура</v-button>
     </div>
    </div>
   </v-container>
  </section>
 </main>
</template>

<script lang="ts">
export default {
 data() {
  return {};
 },
};
</script>

<style scoped></style>
