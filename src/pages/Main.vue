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
       loading="lazy"
       :player-vars="{ autoplay: 0, listType: 'user_uploads' }"
      />
     </div>
     <div class="flex flex-col items-start">
      <p class="overtitle mb-[10px]">о нашем походе</p>
      <h2 class="title mb-[40px]">
       Исследуйте все горные массивы мира вместе с нами
      </h2>
      <p class="text mb-[40px]">
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
  <section class="bg-[var(--b-light)]">
   <v-container>
    <div class="flex justify-between items-center gap-[90px] py-[100px]">
     <div class="flex flex-col items-start">
      <p class="overtitle mb-[10px]">наше предложение</p>
      <h2 class="title mb-[40px]">Лучшие программы для тебя</h2>
      <p class="text mb-[40px]">
       Его корни уходят в один фрагмент классической латыни 45 года н.э., то
       есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из
       колледжа.
      </p>
      <ul class="flex flex-col gap-[40px] mb-[40px]">
       <li class="flex items-center gap-[15px]">
        <img
         class="shrink-0 w-[50px] aspect-square"
         src="/img/svg/blog-1.svg"
         alt=""
        />
        <div class="flex flex-col gap-[5px]">
         <p class="text-18">Опытный гид</p>
         <p class="font-400 leading-[1.42]">
          Для современного мира базовый вектор развития предполагает независимые
          способы реализации соответствующих условий активизации.
         </p>
        </div>
       </li>
       <li class="flex items-center gap-[15px]">
        <img
         class="shrink-0 w-[50px] aspect-square"
         src="/img/svg/blog-2.svg"
         alt=""
        />
        <div class="flex flex-col gap-[5px]">
         <p class="text-18">Безопасный поход</p>
         <p class="font-400 leading-[1.42]">
          Для современного мира базовый вектор развития предполагает независимые
          способы реализации соответствующих условий активизации.
         </p>
        </div>
       </li>
       <li class="flex items-center gap-[15px]">
        <img
         class="shrink-0 w-[50px] aspect-square"
         src="/img/svg/blog-3.svg"
         alt=""
        />
        <div class="flex flex-col gap-[5px]">
         <p class="text-18">Лояльные цены</p>
         <p class="font-400 leading-[1.42]">
          Для современного мира базовый вектор развития предполагает независимые
          способы реализации соответствующих условий активизации.
         </p>
        </div>
       </li>
      </ul>
      <v-button>Стоимость программ</v-button>
     </div>
     <div class="shrink-0 grid grid-cols-[250px_250px] gap-[10px]">
      <div class="i-wrap aspect-square rounded-[0_50px_0_50px] overflow-hidden">
       <img src="/img/program-1.png" alt="" class="i-full" />
      </div>
      <div class="i-wrap aspect-square rounded-[50px_0_50px_0] overflow-hidden">
       <img src="/img/program-2.png" alt="" class="i-full" />
      </div>
      <div class="i-wrap aspect-square rounded-[50px_0_50px_0] overflow-hidden">
       <img src="/img/program-3.png" alt="" class="i-full" />
      </div>
      <div class="i-wrap aspect-square rounded-[0_50px_0_50px] overflow-hidden">
       <img src="/img/program-4.png" alt="" class="i-full" />
      </div>
     </div>
    </div>
   </v-container>
  </section>
  <section>
   <v-container>
    <div class="flex flex-col items-center py-[100px]">
     <p class="overtitle mb-[10px]">по версии отдыхающих</p>
     <h2 class="title mb-[50px]">Популярные направления</h2>
     <div class="self-stretch grid grid-cols-3 gap-[20px] mb-[50px]">
      <div
       class="i-wrap items-end aspect-[0.76] rounded-[32px] overflow-hidden"
      >
       <img class="i-full" src="/img/popular-1.png" alt="" />
       <span
        class="absolute z-10 top-[10%] flex items-end gap-[8px] right-0 p-[7px_8px] before:relative before:flex before:shrink-0 before:w-[18px] before:aspect-square before:bg-[url('/img/svg/sprite.svg#star')] before:bg-no-repeat before:bg-contain before:bg-center rounded-[4px_0_0_4px] backdrop-blur-[4px] bg-[rgba(253,253,253,0.4)]"
        >4.9</span
       >
       <div
        class="relative w-full flex justify-between items-center p-[20px_32px] backdrop-blur-[6px] z-10"
       >
        <div class="flex flex-col">
         <h3 class="text-24 leading-[1.2] text-[var(--t-white)]">
          Озеро возле гор
         </h3>
         <p class="font-400 leading-[1.28] text-[var(--t-white)]">
          романтическое приключение
         </p>
        </div>
        <span
         class="text-20 text-[var(--t-white)] bg-[rgba(255,255,255,0.3)] rounded-[4px] p-[8px_16px]"
         >480 $</span
        >
       </div>
      </div>
      <div
       class="i-wrap items-end aspect-[0.76] rounded-[32px] overflow-hidden"
      >
       <img class="i-full" src="/img/popular-2.png" alt="" />
       <span
        class="absolute z-10 top-[10%] flex items-end gap-[8px] right-0 p-[7px_8px] before:relative before:flex before:shrink-0 before:w-[18px] before:aspect-square before:bg-[url('/img/svg/sprite.svg#star')] before:bg-no-repeat before:bg-contain before:bg-center rounded-[4px_0_0_4px] backdrop-blur-[4px] bg-[rgba(253,253,253,0.4)]"
        >4.9</span
       >
       <div
        class="relative w-full flex justify-between items-center p-[20px_32px] backdrop-blur-[6px] z-10"
       >
        <div class="flex flex-col">
         <h3 class="text-24 leading-[1.2] text-[var(--t-white)]">
          Озеро возле гор
         </h3>
         <p class="font-400 leading-[1.28] text-[var(--t-white)]">
          романтическое приключение
         </p>
        </div>
        <span
         class="text-20 text-[var(--t-white)] bg-[rgba(255,255,255,0.3)] rounded-[4px] p-[8px_16px]"
         >480 $</span
        >
       </div>
      </div>
      <div
       class="i-wrap items-end aspect-[0.76] rounded-[32px] overflow-hidden"
      >
       <img class="i-full" src="/img/popular-3.png" alt="" />
       <span
        class="absolute z-10 top-[10%] flex items-end gap-[8px] right-0 p-[7px_8px] before:relative before:flex before:shrink-0 before:w-[18px] before:aspect-square before:bg-[url('/img/svg/sprite.svg#star')] before:bg-no-repeat before:bg-contain before:bg-center rounded-[4px_0_0_4px] backdrop-blur-[4px] bg-[rgba(253,253,253,0.4)]"
        >4.9</span
       >
       <div
        class="relative w-full flex justify-between items-center p-[20px_32px] backdrop-blur-[6px] z-10"
       >
        <div class="flex flex-col">
         <h3 class="text-24 leading-[1.2] text-[var(--t-white)]">
          Озеро возле гор
         </h3>
         <p class="font-400 leading-[1.28] text-[var(--t-white)]">
          романтическое приключение
         </p>
        </div>
        <span
         class="text-20 text-[var(--t-white)] bg-[rgba(255,255,255,0.3)] rounded-[4px] p-[8px_16px]"
         >480 $</span
        >
       </div>
      </div>
     </div>
     <v-button>Стоимость программ</v-button>
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
