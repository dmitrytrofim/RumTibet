<template>
 <header class="bg-[gray] text-[var(--b-white)]">
  <v-container>
   <div class="flex">
    <a href="#" class="i-wrap w-[50px] h-[50px] border">
     <img src="@/assets/img/svg/logo.svg" alt="" class="inset-full" />
    </a>
    <nav class="border">
     <ul>
      <li><RouterLink class="" to="/">Главная</RouterLink></li>
      <li>
       <RouterLink to="/about">О компании</RouterLink>
      </li>
     </ul>
    </nav>
    <v-button>test</v-button>
   </div>
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
