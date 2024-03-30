<template>
 <main>
  <section class="bg-[url('/img/greet.png')] bg-center bg-cover">
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
    <div class="flex justify-between items-center gap-[120px] py-[100px]">
     <div class="flex flex-col">
      <div
       class="i-wrap w-[400px] aspect-[0.875] rounded-[24px] overflow-hidden"
      >
       <img class="i-full" src="/img/about.png" alt="" />
      </div>
      <VueYtframe
       class="relative z-10 w-[400px] aspect-[0.875] rounded-[24px] ml-[130px] mt-[-300px]"
       video-id="RlltfdgjHKM"
       :player-vars="{ autoplay: 0, listType: 'user_uploads' }"
      />
     </div>
     <div class="flex flex-col items-start">
      <p
       class="text-24 font-400 leading-[0.83] text-[var(--t-orange)] mb-[10px]"
      >
       о нашем походе
      </p>
      <h2 class="text-32 font-800 leading-[1.2] mb-[40px]">
       Исследуйте все горные массивы мира вместе с нами
      </h2>
      <p class="text-18 font-400 leading-[1.5] mb-[40px]">
       Его корни уходят в один фрагмент классической латыни 45 года н.э., то
       есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из
       колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов
       в Lorem Ipsum, "consectetur"и занялся его поисками в классической
       латинской литературе.
      </p>
      <v-button>Программа тура</v-button>
     </div>
    </div>
   </v-container>
  </section>
  <section>
   <v-container>
    <div class="">
     <div class="">
      <p class="">наше предложение</p>
      <h2 class="">Лучшие программы для тебя</h2>
      <p class="">
       Его корни уходят в один фрагмент классической латыни 45 года н.э., то
       есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из
       колледжа.
      </p>
      <ul class="">
       <li class="">
        <img src="/img/svg/blog-1.svg" alt="" />
        <div class="">
         <p class="">Опытный гид</p>
         <p class="">
          Для современного мира базовый вектор развития предполагает независимые
          способы реализации соответствующих условий активизации.
         </p>
        </div>
       </li>
       <li class="">
        <img src="" alt="" />
        <div class="">
         <p class="">Безопасный поход</p>
         <p class="">
          Для современного мира базовый вектор развития предполагает независимые
          способы реализации соответствующих условий активизации.
         </p>
        </div>
       </li>
       <li class="">
        <img src="" alt="" />
        <div class="">
         <p class="">Лояльные цены</p>
         <p class="">
          Для современного мира базовый вектор развития предполагает независимые
          способы реализации соответствующих условий активизации.
         </p>
        </div>
       </li>
      </ul>
      <v-button>Стоимость программ</v-button>
     </div>
     <div class="">
      <div class="i-wrap">
       <img src="" alt="" class="i-full" />
      </div>
      <div class="i-wrap">
       <img src="" alt="" class="i-full" />
      </div>
      <div class="i-wrap">
       <img src="" alt="" class="i-full" />
      </div>
      <div class="i-wrap">
       <img src="" alt="" class="i-full" />
      </div>
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
