# 项目状态文档

## 基本信息

- **项目名称**: personal-homepage
- **线上地址**: https://lab.xiaolan.monster/
- **GitHub 仓库**: https://github.com/Alanxander5/personal-homepage
- **当前版本**: v0.4.2-wakeup-fullscreen
- **最后更新**: 2026-05-01
- **npm version**: `0.4.2-wakeup-fullscreen` (package.json uses npm-compatible semver string)
- **Git tag**: not created in this working tree

## 技术栈

- **框架**: Astro 5.x
- **样式**: Tailwind CSS 3.x
- **内容格式**: Markdown/MDX + Astro Content Collections
- **语言**: TypeScript
- **构建**: npm run build
- **开发**: npm run dev

## 部署方式

- **平台**: GitHub Pages
- **方式**: GitHub Actions (`.github/workflows/deploy.yml`)
- **触发**: 推送到 main 分支自动构建部署
- **域名**: lab.xiaolan.monster (自定义域名，CNAME 配置在 GitHub Pages 设置中)

## 域名配置说明

⚠️ **重要警告**：
- 使用 `lab.xiaolan.monster` 自定义域名后，`astro.config.mjs` 中**没有设置 `base` 路径**
- 不要重新添加 `base: '/personal-homepage'`，这会导致部署后路径错误
- **当前仓库没有 `public/CNAME` 文件**，自定义域名通过 GitHub 仓库 Settings > Pages 中的 CNAME 设置配置
- **不要随意新建 `public/CNAME`**，除非重新设计部署方式

## 已完成功能

1. ✅ Astro 主页 MVP
2. ✅ 自定义域名部署 (lab.xiaolan.monster)
3. ✅ 页面文案可信化 (v0.2)
4. ✅ Tutorials 和 Ideas 迁移为 Content Collections (v0.3)
5. ✅ 页脚访问统计小栏 (v0.3.1)
6. ✅ Tutorials 和 Ideas 动态详情页 (v0.4)
7. ✅ Playground / 提醒起床小助手 (v0.4.1)
8. ✅ Playground / 提醒起床小助手支持全屏模式 (v0.4.2)

## 当前页面结构

| 页面 | 文件 | 说明 |
|------|------|------|
| 首页 | `src/pages/index.astro` | 定位、研究兴趣导航 |
| 关于 | `src/pages/about.astro` | 研究生身份、计算方法兴趣 |
| 研究方向 | `src/pages/research.astro` | 四个方向：消落带、微生物、建模、遥感 |
| 教程笔记 | `src/pages/tutorials.astro` | 从 Content Collections 读取，卡片可点击 |
| 教程详情 | `src/pages/tutorials/[slug].astro` | 动态路由，渲染 MDX 正文 |
| 想法库 | `src/pages/ideas.astro` | 从 Content Collections 读取，卡片可点击 |
| 想法详情 | `src/pages/ideas/[slug].astro` | 动态路由，渲染 MDX 正文 |
| 当前状态 | `src/pages/now.astro` | Q2 工作重点 |
| Playground | `src/pages/playground.astro` | 低风险小型网页试验区 |
| 提醒起床小助手 | `src/pages/playground/yanqi-clock.astro` | 规律作息提醒与动态时钟小实验，支持时钟区域全屏显示 |

## Playground 说明

- Playground 是低风险试验区，用于放置与科研主页无直接关系的小型前端实验
- Playground 内容不代表科研成果，不应包装成 Research / Tutorials / Ideas 内容
- 提醒起床小助手是 Playground 娱乐小实验
- 雁栖湖时间是用户自定义时间设定
- 不要按真实时区逻辑重写这个页面

## 当前内容系统结构

### Tutorials Collection
- 路径: `src/content/tutorials/`
- 字段: title, date, tags, difficulty, status, abstract
- 状态值: 草稿 / 更新中 / 已完成
- 难度值: 入门 / 初级 / 中级 / 高级

### Ideas Collection
- 路径: `src/content/ideas/`
- 字段: title, date, tags, status, confidence, abstract
- 状态值: 思考阶段 / 文献调研阶段 / 实验设计阶段 / 进行中 / 已搁置
- 可信度值: 低 / 中 / 高

## 重要组件说明

| 组件 | 文件 | 说明 |
|------|------|------|
| BaseLayout | `src/layouts/BaseLayout.astro` | 全局页面布局 |
| Header | `src/components/Header.astro` | 导航栏 |
| Footer | `src/components/Footer.astro` | 页脚，含访问统计 |
| VisitorStats | `src/components/VisitorStats.astro` | Busuanzi-style 统计小栏 |

## 当前不应随意修改的内容

1. `astro.config.mjs` - 已正确配置 custom domain，勿改
2. `public/` 目录结构
3. `.github/workflows/deploy.yml` - 部署配置
4. `src/content/config.ts` - Content Collections schema

## 下一阶段建议任务

1. **v0.4 Real Content**: 写第一篇真正的教程文章和想法库文章
2. **v0.5 Search**: 当文章数量达到 8-10 篇后再接入 Pagefind
3. **v0.6 Interaction**: 视访问量决定是否接入 Giscus

## 当前风险与注意事项

- ❌ **不要使用 `/personal-homepage` 作为 base path** — 当前已正确使用 root path
- ❌ **不要提交 `.astro/` 目录到 git** — 该目录是 Astro 构建缓存，应在 .gitignore 中
- ❌ **不要虚构论文、基金、奖项** — 主页定位是研究生，不是成熟 PI
- ❌ **不要把主页写成课题组官网风格** — 保持克制和个人化
- ❌ **内容不足时不要急于添加 Pagefind / Giscus / 多语言** — 等内容积累到一定量再做
- ❌ **不要添加 RSS / 复杂动画 / D3 图谱** — 当前阶段不需要
- ❌ **不要让 Playground 页面污染主站全局样式** — 小实验必须局部封装
- ❌ **不要把 Playground 内容包装成科研成果** — 它只是低优先级前端实验区

## 访问统计 API

- 服务提供商: bsz.saop.cc (Busuanzi-style API)
- 端点: POST https://bsz.saop.cc/api
- 请求头: `x-bsz-referer: location.href`
- 返回字段: site_pv, site_uv, page_pv
- 失败处理: 静默失败，保持显示 "--"

## 构建输出

- 开发服务器: `npm run dev` → http://localhost:4321
- 生产构建: `npm run build` → 输出到 `dist/`
- 预览构建: `npm run preview`
