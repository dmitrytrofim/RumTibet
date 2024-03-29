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
 font-weight: 400;
 font-size: var(--sz-16);
 line-height: normal;
 color: var(--t-dark);
 background-color: var(--b-white);
 &.j-lock {
  overflow: hidden;
 }
}
.i-wrap {
 position: relative;
 display: flex;
}
.i-full {
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 object-fit: cover;
 object-position: center;
}
</style>
