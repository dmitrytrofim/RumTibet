<template>
 <footer class="bg-[var(--b-darkgray)] text-[var(--t-white)]">
  <v-container>
   <div class="flex justify-between items-center py-[10px]">
    <div class="flex items-center gap-[10px]">
     <a
      href="#"
      class="w-[20px] h-[20px] bg-[url('/src/assets/img/svg/sprite.svg#vk')]"
     ></a>
     <a
      href="#"
      class="w-[20px] h-[20px] bg-[url('/src/assets/img/svg/sprite.svg#telega')]"
     ></a>
     <a
      href="#"
      class="w-[20px] h-[20px] bg-[url('/src/assets/img/svg/sprite.svg#skype')]"
     ></a>
     <a
      href="#"
      class="w-[20px] h-[20px] bg-[url('/src/assets/img/svg/sprite.svg#pint')]"
     ></a>
    </div>
    <p>Все права защищены</p>
   </div>
  </v-container>
 </footer>
</template>

<script lang="ts">
export default {
 name: 'the-footer',
};
</script>

<style scoped></style>
