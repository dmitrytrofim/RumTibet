<template>
 <header class="bg-[black]">
  <v-container class="pt-[200px]">
   <a href="#" class="i-wrap w-[50px] h-[50px]">
    <img src="@/assets/img/svg/logo.svg" alt="" class="inset-full" />
   </a>
   <nav>
    <ul>
     <li><RouterLink class="" to="/">Главная</RouterLink></li>
     <li>
      <RouterLink to="/about">О компании</RouterLink>
     </li>
    </ul>
   </nav>
  </v-container>
 </header>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router';
import { defineComponent } from 'vue';
export default defineComponent({
 components: { RouterLink },
});
</script>

<style scoped>
.router-link-exact-active {
 color: red;
}
</style>
