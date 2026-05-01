# Changelog

项目版本变更记录。格式参考 [Keep a Changelog](https://keepachangelog.com/)。

---

## [Unreleased]

*暂无未发布的变更。当前工作版本为 v0.4.1-wakeup-helper。*

---

## [v0.4.1-wakeup-helper]

发布于 2026-05-01

### Added
- Added a Playground section for small web experiments.
- Added a wake-up reminder helper page at /playground/yanqi-clock/.

### Changed
- Adapted the previous clock experiment into a wake-up reminder helper.
- Updated page naming from Yanqi Lake Clock to 提醒起床小助手.
- Updated the displayed time logic to China Standard Time / UTC+8.

### Notes
- The page remains outside Research, Tutorials, and Ideas.
- The next main task remains real content writing, not frontend experiments.

---

## [v0.4.0-article-pages]

发布于 2026-04-28

### Added
- Added dynamic article detail pages for Tutorials.
- Added dynamic article detail pages for Ideas.
- Added static route generation for all tutorial and idea MDX entries.

### Changed
- Made Tutorials list cards link to individual article pages.
- Made Ideas list cards link to individual idea pages.

### Notes
- The site now builds 12 static pages instead of 6.
- Search and comments are still intentionally deferred.

---

## [v0.3.2-agent-handoff]

发布于 2026-04-28

### Added
- Added project handoff documentation.
- Added project state, agent handoff, decisions, changelog, and TODO maintenance documents.

### Changed
- Clarified custom-domain deployment assumptions.
- Clarified that public/CNAME is currently not present and should not be recreated casually.
- Aligned version metadata for the handoff baseline.

### Fixed
- Removed tracked Astro cache files from Git.
- Ignored local Claude Code and Codex tool state files.
- Restored clean handoff baseline for future agent sessions.

### Notes
- package.json uses npm-compatible version string `0.3.2-agent-handoff`
- Git tag should be `v0.3.2-agent-handoff`
- 当前仓库没有 `public/CNAME` 文件
- 自定义域名 `lab.xiaolan.monster` 通过 GitHub Pages 仓库设置配置
- 不要因为看不到 public/CNAME 就自动创建它

---

## [v0.3.1] Visitor Stats

发布于 2026-04-27

### Added
- `src/components/VisitorStats.astro` — 页脚访问统计小栏组件
- Busuanzi-style API 集成（bsz.saop.cc）
- 页脚显示 PV · UV · 本页统计

### Changed
- `src/components/Footer.astro` — 引入 VisitorStats 组件

### Notes
- 统计失败时静默降级，显示 "--"
- 无需额外后端，纯前端实现

---

## [v0.3.0] Content Collections Migration

发布于 2026-04-27

### Added
- `src/content/config.ts` — Content Collections schema 定义
- `src/content/tutorials/python-ecology-data.mdx` — Python 数据整理教程
- `src/content/tutorials/16s-amplicon-analysis.mdx` — 16S 扩增子分析教程
- `src/content/tutorials/ecology-ml-intro.mdx` — 机器学习入门教程
- `src/content/ideas/llm-evidence-matrix.mdx` — 大模型辅助文献综述构想
- `src/content/ideas/remote-ground-flooding.mdx` — 遥感地面联合评估构想
- `src/content/ideas/microbial-nitrogen-phosphorus.mdx` — 微生物功能基因构想

### Changed
- `src/pages/tutorials.astro` — 从硬编码卡片改为 Content Collections 驱动
- `src/pages/ideas.astro` — 从硬编码卡片改为 Content Collections 驱动

### Notes
- Tutorials 字段：title, date, tags, difficulty, status, abstract
- Ideas 字段：title, date, tags, status, confidence, abstract
- 为未来添加文章详情页奠定基础

---

## [v0.2.0] Content Polish

发布于 2026-04-27

### Added
- 完整的个人简介内容（研究生身份、研究方向）
- 研究立场说明

### Changed
- 首页标题改为"生态学研究生的消落带与数据方法笔记"
- 首页简介明确身份和研究主线
- 首页标签聚焦：消落带生态、土壤微生物、生态数据建模
- 关于页面三段式简介
- 研究方向页面各方向具体描述
- 教程笔记页面明确为学习笔记而非课程
- 想法库页面明确为未充分验证的构想
- 当前状态页面删除无关引用

### Fixed
- 删除了 Derek Willis /now 页面引用

### Notes
- 文案风格：克制、真实、学术化
- 不虚构论文、项目、奖项
- 不包装成成熟 PI 或课题组负责人

---

## [v0.1.0] MVP Launch

发布于 2026-04-27

### Added
- Astro 项目基础结构
- 6 个页面：首页、关于、研究方向、教程笔记、想法库、当前状态
- Tailwind CSS 样式系统（森林绿 + 深蓝 + 暖灰白配色）
- Astro Content Collections 支持（MDX）
- GitHub Actions 部署到 GitHub Pages
- 自定义域名配置（lab.xiaolan.monster）
- 基础 SEO 和响应式布局

### Notes
- 初始版本为 MVP，功能完整但内容为占位
- 确认 base path 不用于自定义域名部署

---

## [v0.0.0] Initial Project

*无正式发布记录*

### Notes
- 项目初始化，基础配置完成
