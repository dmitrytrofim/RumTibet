<template>
 <div
  class="relative min-h-dvh grid grid-cols-[minmax(300px,_1fr)] grid-rows-[1fr_auto] overflow-hidden"
 >
  <slot></slot>
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
 name: 'v-wrapper',
});
</script>
