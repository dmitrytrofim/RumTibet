<template>
 <v-wrapper>
  <the-header />
  <router-view></router-view>
  <the-footer />
  <v-popup />
 </v-wrapper>
</template>

<script lang="ts">
import TheHeader from '@components/TheHeader.vue';
export default {};
</script>

<style>
body.j-lock {
 overflow: hidden;
}
</style>
