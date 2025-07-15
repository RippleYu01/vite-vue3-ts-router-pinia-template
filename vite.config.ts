import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
// import { ElementPlusResolver, AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    //自动导入插件 import { ref, computed, onMounted } from 'vue'....
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      dts: "src/types/auto-imports.d.ts", // 自动生成声明文件   ts开启必须
    }),
    //自动引入你自己写的组件
    Components({
      dirs: ["src/components"], // 扫描这个目录下的组件
      extensions: ["vue"], // 支持哪些后缀
      deep: true, // 是否扫描子目录

      // 也可以定义UI组件库的自动引入
      // resolvers: [
      //   ElementPlusResolver(),      // 你要用哪个 UI 库组件就写哪个
      //   AntDesignVueResolver()      // 支持多个 UI 库
      // ],
      dts: "src/types/components.d.ts", // 组件自动生成类型声明   ts开启必须
    }),
  ],

  resolve: {
    alias: {
      // src映射到 @
      "@": path.resolve(__dirname, "src"),
      // src/components映射到 components
      components: path.resolve(__dirname, "src/components"),
    },
    // 通过import引入时无需写以下后缀名(依次查找)
    extensions: [".js", ".ts", ".vue", ".json"],
  },
  server: {
    port: 520,
    open: true,
    // 设置代理服务器
    proxy: {
      "/api": {
        target: "https://jsonplaceholder.typicode.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },

  css: {
    // 将css预编辑器的全局变量自动插入到每个scss/less 文件头部
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`, // 全局变量引入
      },
      less: {
        // 开启less的js数学函数语法
        javascriptEnabled: true,
        // 全局Less变量
        additionalData: `@import "@/styles/variables.less";`,
      },
    },
    modules: {
      // CSS模块命名规范，避免命名冲突
      generateScopedName:
        mode === "development"
          ? "[name]__[local]__[hash:base64:5]"
          : "[hash:base64:8]",
    },
  },

  build: {
    outDir: "dist",
    // 开启源码与编译映射，报错时更好的找到源码的所在位置，生产模式下关闭！！！会泄露源码
    // sourcemap: true,
    sourcemap: process.env.NODE_ENV !== "production",
    assetsDir: "assets", // 静态资源目录名
    // 定制的打包策略
    rollupOptions: {
      output: {
        entryFileNames: "assets/js/[name]-[hash].js", // 入口文件命名规则
        chunkFileNames: "assets/js/[name]-[hash].js", // 代码分割后的 chunk
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]", // 静态资源文件名

        // 手动代码分包（分离大文件）
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // 把第三方库打成 vendor.js    减少主包体积  加快首屏加载
          }
        },
      },
    },
  },
}));
