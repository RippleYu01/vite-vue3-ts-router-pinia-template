# Ripple Vite-Vue3-TS-Router-Pinia 项目模板

一个基于 Vite + Vue3 + TypeScript + Vue Router + Pinia 的现代化前端项目模板，集成了 Axios、自动导入、代码规范等常用工具，提供了完整的项目结构和最佳实践配置，适合中大型项目开发和团队协作。

---

## 作者

- Ripple_Yu

---

## 🚀 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **Vite** - 下一代前端构建工具
- **TypeScript** - JavaScript 的超集，类型安全
- **Vue Router** - 官方路由管理器
- **Pinia** - Vue3 官方推荐状态管理库
- **Axios** - 基于 Promise 的 HTTP 客户端
- **ESLint + Prettier** - 代码规范与自动格式化
- **unplugin-auto-import** - 自动导入 Vue/Router/Pinia API
- **unplugin-vue-components** - 自动导入组件

---

## 📁 项目结构

```
RippleYu-vite-TS-demo/
├── public/                 # 静态资源目录
├── src/                    # 源代码目录
│   ├── api/                # API 接口管理
│   │   ├── index.ts        # API 统一导出
│   │   └── modules/        # 各模块 API
│   ├── assets/             # 静态资源
│   ├── components/         # 公共组件
│   ├── router/             # 路由配置
│   ├── stores/             # Pinia 状态管理
│   ├── types/              # TypeScript 类型定义
│   ├── utils/              # 工具函数
│   ├── views/              # 页面组件
│   ├── App.vue             # 根组件
│   ├── main.ts             # 应用入口
│   └── style.css           # 全局样式
├── index.html              # HTML 模板
├── package.json            # 项目依赖配置
├── tsconfig.json           # TypeScript 配置
├── vite.config.ts          # Vite 配置文件
├── .eslintrc.js            # ESLint 配置
├── prettier.config.js      # Prettier 配置
└── README.md               # 项目说明文档
```

---

## ✨ 主要功能

### 🔧 开发配置
- **自动导入**：配置了 `unplugin-auto-import` 和 `unplugin-vue-components`，自动导入 Vue、Vue Router、Pinia 的 API 和组件
- **路径别名**：`@` 指向 `src` 目录，`components` 指向 `src/components`
- **代理配置**：开发服务器支持 API 请求代理，便于本地联调
- **构建优化**：代码分割、静态资源优化、sourcemap 配置等

### 🌐 网络请求
- **Axios 封装**：在 `src/utils/` 下封装了 Axios，支持请求/响应拦截、统一错误处理、环境变量配置
- **API 管理**：`src/api/` 目录下统一管理各模块 API

### 🗂️ 状态管理
- **Pinia 集成**：使用 Pinia 进行全局状态管理，类型推断友好
- **示例 Store**：可参考 `stores/` 目录下的示例

### 🛣️ 路由管理
- **Vue Router 4**：支持多页面、嵌套路由
- **懒加载**：路由组件支持懒加载，提升首屏加载速度

### 🧹 代码规范
- **ESLint + Prettier**：统一代码风格，自动格式化，支持 VSCode 保存自动修复

---

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
# 或
yarn install
```

### 2. 启动开发环境

```bash
npm run dev
# 或
yarn dev
```

### 3. 生产环境构建

```bash
npm run build
# 或
yarn build
```

### 4. 预览构建结果

```bash
npm run preview
# 或
yarn preview
```

---

## 📝 使用说明

### 1. 添加新的 API 接口

在 `src/api/modules/` 目录下创建新的 API 文件，例如：

```typescript
// src/api/modules/example.ts
import http from '@/utils/http';

export function getExampleData() {
  return http.get('/api/example');
}
```

然后在 `src/api/index.ts` 中统一导出：

```typescript
export * as exampleApi from './modules/example';
```

### 2. 创建新的页面

在 `src/views/` 目录下创建页面组件，然后在 `src/router/index.ts` 中添加路由配置：

```typescript
{
  path: '/example',
  name: 'Example',
  component: () => import('@/views/exampleView.vue')
}
```

### 3. 创建新的 Store

在 `src/stores/` 目录下创建新的 Store 文件：

```typescript
// src/stores/example.ts
import { defineStore } from 'pinia';

export const useExampleStore = defineStore('example', {
  state: () => ({
    // 状态
  }),
  getters: {
    // 计算属性
  },
  actions: {
    // 方法
  }
});
```

### 4. 创建新的组件

在 `src/components/` 目录下创建组件，支持自动导入，无需手动 import。

---

## ⚙️ 环境变量配置

在项目根目录创建 `.env` 文件：

```env
VITE_API_BASE_URL=https://api.example.com
```

---

## 🔧 开发服务器配置

- **端口**：520
- **自动打开**：启动时自动打开浏览器
- **代理**：配置了 `/api` 路径的代理转发

---

## 📦 构建配置

- **输出目录**：`dist`
- **源码映射**：开发环境开启，生产环境关闭
- **代码分割**：自动分离第三方库到 `vendor.js`
- **静态资源**：按文件类型分类存储

---

## 🛠️ 代码规范

- 统一使用 ESLint + Prettier 进行代码检查和格式化
- 推荐在 VSCode 安装 ESLint、Prettier 插件，并开启保存时自动修复

---

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

---

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

---

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- 提交 Issue
- 邮箱：2280954935@qq.com

---

⭐ 如果这个项目对你有帮助，请给它一个 Star！
