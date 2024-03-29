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
