<template>
 <main>
  <section
   class="bg-[url('/src/assets/img/greet.png')] bg-[var(--b-darkgray)] bg-center bg-cover"
  >
   <v-container>
    <div class="min-h-dvh flex items-end py-[100px] max-[768px]:pb-[50px]">
     <h1 class="text-50 text-[var(--t-white)] uppercase leading-[150%]">
      Насладись прогулкой в горах<br class="max-[768px]:hidden" />
      с командой единомышленников
     </h1>
    </div>
   </v-container>
  </section>
  <section>
   <v-container>
    <div
     class="flex justify-between items-center gap-[120px] py-[100px] max-[1280px]:gap-[40px] max-[1024px]:flex-col max-[640px]:py-[40px]"
    >
     <div class="flex flex-col max-[640px]:w-full">
      <div
       class="i-wrap w-[400px] aspect-[0.875] rounded-[24px] overflow-hidden max-[640px]:hidden"
      >
       <img class="i-full" src="/src/assets/img/about.png" alt="" />
      </div>
      <VueYtframe
       class="relative z-10 w-[400px] aspect-[0.875] rounded-[24px] ml-[130px] mt-[-300px] max-[640px]:m-0 max-[640px]:w-full"
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
    <div
     class="flex justify-between items-center gap-[90px] py-[100px] max-[640px]:py-[40px] max-[1280px]:gap-[40px] max-[1024px]:flex-col"
    >
     <div class="flex flex-col items-start">
      <p class="overtitle mb-[10px]">наше предложение</p>
      <h2 class="title mb-[40px]">Лучшие программы для тебя</h2>
      <p class="text mb-[40px]">
       Его корни уходят в один фрагмент классической латыни 45 года н.э., то
       есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из
       колледжа.
      </p>
      <ul class="flex flex-col gap-[40px] mb-[40px]">
       <offer-item
        :img="images.offer[0]"
        title="Опытный гид"
        text="Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации."
       />
       <offer-item
        :img="images.offer[1]"
        title="Безопасный поход"
        text="Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации."
       />
       <offer-item
        :img="images.offer[2]"
        title="Лояльные цены"
        text="Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации."
       />
      </ul>
      <v-button class="max-[1024px]:self-center">Стоимость программ</v-button>
     </div>
     <div
      class="shrink-0 grid grid-cols-[250px_250px] gap-[10px] max-[640px]:grid-cols-[1fr_1fr] max-[640px]:self-stretch"
     >
      <div class="i-wrap aspect-square rounded-[0_50px_0_50px] overflow-hidden">
       <img src="/src/assets/img/program-1.png" alt="" class="i-full" />
      </div>
      <div class="i-wrap aspect-square rounded-[50px_0_50px_0] overflow-hidden">
       <img src="/src/assets/img/program-2.png" alt="" class="i-full" />
      </div>
      <div class="i-wrap aspect-square rounded-[50px_0_50px_0] overflow-hidden">
       <img src="/src/assets/img/program-3.png" alt="" class="i-full" />
      </div>
      <div class="i-wrap aspect-square rounded-[0_50px_0_50px] overflow-hidden">
       <img src="/src/assets/img/program-4.png" alt="" class="i-full" />
      </div>
     </div>
    </div>
   </v-container>
  </section>
  <section>
   <v-container>
    <div class="flex flex-col items-center py-[100px] max-[640px]:py-[40px]">
     <p class="overtitle mb-[10px]">по версии отдыхающих</p>
     <h2 class="title mb-[50px] max-[1280px]:text-center">
      Популярные направления
     </h2>
     <div
      class="self-stretch grid grid-cols-3 gap-[20px] mb-[50px] max-[1280px]:grid-cols-[minmax(0,_400px)] max-[1280px]:mx-auto"
     >
      <popular-card
       :img="images.popular[0]"
       title="Озеро возле гор"
       text="романтическое приключение"
       rating="4.9"
       cost="480"
      />
      <popular-card
       :img="images.popular[1]"
       title="Ночь в горах"
       text="в компании друзей"
       rating="4.5"
       cost="500"
      />
      <popular-card
       :img="images.popular[2]"
       title="Йога в горах"
       text="для тех, кто забоится о себе"
       rating="5.0"
       cost="230"
      />
     </div>
     <v-button>Стоимость программ</v-button>
    </div>
   </v-container>
  </section>
  <section class="bg-[var(--b-light)]">
   <v-container>
    <div class="flex flex-col items-center py-[80px] max-[640px]:py-[40px]">
     <p class="overtitle mb-[10px]">делимся впечатлениями</p>
     <h2 class="title mb-[40px]">Блог о путешествиях</h2>
     <div
      class="self-stretch grid grid-cols-2 gap-[20px] mb-[50px] max-[1280px]:grid-cols-[minmax(0,_580px)] max-[1280px]:mx-auto"
     >
      <blog-card
       :img="images.blog[0]"
       title="Красивая Италя, какая она в реальности?"
       text="Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации."
       time="01/04/2023"
       link="#test"
      />
      <blog-card
       :img="images.blog[1]"
       title="Долой сомнения! Весь мир открыт для вас!"
       text="Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации."
       time="01/04/2023"
       link="#test"
      />
      <blog-card
       :img="images.blog[2]"
       title="Как подготовиться к путешествию в одиночку? "
       text="Для современного мира базовый вектор развития предполагает."
       time="01/04/2023"
       link="#test"
      />
      <blog-card
       :img="images.blog[3]"
       title="Индия ... летим?"
       text="Для современного мира базовый."
       time="01/04/2023"
       link="#test"
      />
     </div>
     <v-button>Другие материалы</v-button>
    </div>
   </v-container>
  </section>
  <section>
   <v-container>
    <div class="flex flex-col items-center py-[80px] max-[640px]:py-[40px]">
     <p class="overtitle mb-[10px]">фото-отчет</p>
     <h2 class="title mb-[40px]">Делимся впечатлениями</h2>
     <div
      class="self-stretch grid grid-cols-4 auto-rows-[250px] gap-[20px] mb-[50px] max-[1280px]:grid-cols-1"
     >
      <div class="i-wrap col-[1/3] max-[1280px]:col-auto">
       <img
        class="i-full"
        src="/src/assets/img/gallery-1.jpg"
        alt=""
        loading="lazy"
       />
      </div>
      <div class="i-wrap">
       <img
        class="i-full"
        src="/src/assets/img/gallery-2.jpg"
        alt=""
        loading="lazy"
       />
      </div>
      <div class="i-wrap">
       <img
        class="i-full"
        src="/src/assets/img/gallery-3.jpg"
        alt=""
        loading="lazy"
       />
      </div>
      <div class="i-wrap">
       <img
        class="i-full"
        src="/src/assets/img/gallery-4.jpg"
        alt=""
        loading="lazy"
       />
      </div>
      <div class="i-wrap col-[2/4] max-[1280px]:col-auto">
       <img
        class="i-full"
        src="/src/assets/img/gallery-5.jpg"
        alt=""
        loading="lazy"
       />
      </div>
      <div class="i-wrap">
       <img
        class="i-full"
        src="/src/assets/img/gallery-6.jpg"
        alt=""
        loading="lazy"
       />
      </div>
     </div>
     <v-button>Наш pinterest</v-button>
    </div>
   </v-container>
  </section>
 </main>
</template>

<script lang="ts">
import popular1 from '@/assets/img/popular-1.png';
import popular2 from '@/assets/img/popular-2.png';
import popular3 from '@/assets/img/popular-3.png';
import blog1 from '@/assets/img/blog-1.png';
import blog2 from '@/assets/img/blog-2.png';
import blog3 from '@/assets/img/blog-3.png';
import blog4 from '@/assets/img/blog-4.png';
import offer1 from '@/assets/img/svg/offer-1.svg';
import offer2 from '@/assets/img/svg/offer-2.svg';
import offer3 from '@/assets/img/svg/offer-3.svg';
export default {
 data() {
  return {
   images: {
    popular: [popular1, popular2, popular3],
    blog: [blog1, blog2, blog3, blog4],
    offer: [offer1, offer2, offer3],
   },
  };
 },
};
</script>

<style scoped></style>
