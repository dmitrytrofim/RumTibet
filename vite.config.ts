import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { ViteAliases } from 'vite-aliases';

// https://vitejs.dev/config/
export default defineConfig({
 plugins: [
  vue(),
  ViteAliases({
   dir: 'src',
   prefix: '@',
  }),
  viteStaticCopy({
   targets: [
    {
     src: 'src/assets/img/*',
     dest: 'assets/img',
    },
    {
     src: 'src/assets/files/*',
     dest: 'assets/files',
    },
    {
     src: 'src/assets/fonts/*',
     dest: 'assets/fonts',
    },
   ],
  }),
 ],
});
