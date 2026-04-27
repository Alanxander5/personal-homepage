# 个人科研主页

基于 Astro 构建的静态网站，用于展示个人研究方向和学术笔记。

## 技术栈

- **框架**: Astro 5.x
- **样式**: Tailwind CSS
- **语言**: TypeScript
- **内容**: Markdown/MDX

## 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

访问 http://localhost:4321 查看网站。

### 构建生产版本

```bash
npm run build
```

构建产物会输出到 `dist/` 目录。

### 预览构建结果

```bash
npm run preview
```

## 项目结构

```
├── public/                 # 静态资源
│   └── favicon.svg        # 网站图标
├── src/
│   ├── components/         # Astro 组件
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/           # 页面布局
│   │   └── BaseLayout.astro
│   └── pages/             # 页面
│       ├── index.astro    # 首页
│       ├── about.astro    # 关于
│       ├── research.astro # 研究方向
│       ├── tutorials.astro # 教程笔记
│       ├── ideas.astro    # 想法库
│       └── now.astro      # 当前状态
├── astro.config.mjs       # Astro 配置
├── tailwind.config.mjs    # Tailwind 配置
└── tsconfig.json          # TypeScript 配置
```

## 页面说明

| 页面 | 路径 | 内容 |
|------|------|------|
| 首页 | `/` | 一句话定位与快速导航 |
| 关于 | `/about` | 个人简介与教育背景 |
| 研究方向 | `/research` | 四个主要研究方向 |
| 教程笔记 | `/tutorials` | 学习过程中的技术笔记 |
| 想法库 | `/ideas` | 科研想法与思路 |
| 当前状态 | `/now` | 2026 Q2 聚焦方向 |

## 部署到 GitHub Pages

1. 修改 `astro.config.mjs` 中的 `site` 和 `base` 配置：

```js
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/personal-homepage',  // 改为你的仓库名
});
```

2. 使用 GitHub Actions 自动部署，创建 `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
```

3. 推送代码到 main 分支，等待 GitHub Actions 自动部署。

## 联系方式

如有问题，欢迎通过项目仓库提交 Issue。
