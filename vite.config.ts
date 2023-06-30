import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  // lintOnSave: true,
  plugins: [
    vue(),
    vueJsx(),
    VueSetupExtend(), // 自定义组件名
    //配置插件
  	AutoImport({
      // 组件中不用再导入ref，reactive等
  		imports:['vue','vue-router'],
      dts: 'src/auto-import.d.ts',
      resolvers: [ElementPlusResolver()]
  	}),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // '@': path.resolve(__dirname, 'src'),
      _c: path.resolve(__dirname, 'src/components')
    }
  }
})
