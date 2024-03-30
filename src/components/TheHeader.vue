<template>
 <header class="absolute top-0 left-0 w-full text-[var(--b-white)]">
  <v-container>
   <div class="flex items-center gap-[50px]">
    <RouterLink class="i-wrap w-[137px] aspect-[1.9]" to="/">
     <img src="/img/svg/logo.svg" alt="" class="i-full" />
    </RouterLink>
    <nav class="ml-auto">
     <ul class="flex items-center text-18 gap-[24px]">
      <li>
       <RouterLink to="/">Главная</RouterLink>
      </li>
      <li>
       <RouterLink to="/about">О компании</RouterLink>
      </li>
     </ul>
    </nav>
    <v-button>Консультация</v-button>
   </div>
  </v-container>
 </header>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router';
import { defineComponent } from 'vue';

export default defineComponent({
 name: 'the-header',
 components: { RouterLink },
});
</script>

<style scoped>
.router-link-exact-active {
 text-decoration: underline;
}
</style>
