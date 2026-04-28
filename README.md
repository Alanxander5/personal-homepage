# 个人科研主页

基于 Astro 构建的静态网站，用于展示个人研究方向和学术笔记。

**线上地址**: https://lab.xiaolan.monster/

## 技术栈

- **框架**: Astro 5.x
- **样式**: Tailwind CSS
- **语言**: TypeScript
- **内容**: Markdown/MDX + Astro Content Collections

## 快速开始

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 项目结构

```
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── VisitorStats.astro
│   ├── content/
│   │   ├── config.ts
│   │   ├── tutorials/
│   │   └── ideas/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── index.astro
│       ├── about.astro
│       ├── research.astro
│       ├── tutorials.astro
│       ├── ideas.astro
│       └── now.astro
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

## 页面说明

| 页面 | 路径 | 内容 |
|------|------|------|
| 首页 | `/` | 一句话定位与快速导航 |
| 关于 | `/about` | 个人简介与教育背景 |
| 研究方向 | `/research` | 四个主要研究方向 |
| 教程笔记 | `/tutorials` | 学习过程中的技术笔记 |
| 想法库 | `/ideas` | 科研想法与思路 |
| 当前状态 | `/now` | 当前工作重点 |

## 部署说明

网站通过 GitHub Actions 自动部署到 GitHub Pages，使用自定义域名 `lab.xiaolan.monster`。

部署配置位于 `.github/workflows/deploy.yml`，推送到 main 分支后自动触发。

⚠️ **注意**: `astro.config.mjs` 已正确配置自定义域名，无需修改。如需调整域名，请先阅读 `docs/PROJECT_STATE.md` 中的警告。

## 文档

- [项目状态文档](docs/PROJECT_STATE.md) — 项目当前状态、技术栈、已完成功能
- [Agent 交接文档](docs/AGENT_HANDOFF.md) — 面向未来接手的 AI Agent
- [关键决策记录](docs/DECISIONS.md) — 历史决策及原因
- [更新日志](CHANGELOG.md) — 版本变更记录
- [任务路线图](TODO.md) — 未来任务规划

## 内容系统

Tutorials 和 Ideas 已迁移到 Astro Content Collections，添加新内容需在对应目录创建 `.mdx` 文件：

- 教程: `src/content/tutorials/`
- 想法: `src/content/ideas/`

Schema 定义位于 `src/content/config.ts`。

## 注意事项

- 不要虚构论文、基金、奖项
- 不要把主页写成成熟 PI 或课题组官网
- 不要在内容不足时添加 Pagefind、Giscus 等功能
- 不要提交 `.astro/` 构建缓存到 git
