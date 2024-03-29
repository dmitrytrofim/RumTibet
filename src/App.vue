<template>
 <v-wrapper>
  <the-header />
  <router-view></router-view>
 </v-wrapper>
</template>

<script lang="ts">
import TheHeader from '@components/TheHeader.vue';
export default {
 components: { TheHeader },
};
</script>

<style>
body {
 font-family: 'Roboto', sans-serif;
 font-weight: 700;
 font-size: var(--sz-14);
 line-height: normal;
 color: var(--t-dark);
 background-color: var(--b-white);
 &.j-lock {
  overflow: hidden;
 }
}
</style>
