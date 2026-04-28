# 关键决策记录

本文档记录项目历史中的关键决策及其原因。

---

## Initial project phase 为什么使用 lab.xiaolan.monster

- **Decision**: 使用 lab.xiaolan.monster 作为站点域名，而非根域名 xiaolan.monster
- **Context**: 个人项目初始阶段，需要为未来扩展留出空间
- **Reason**:
  - 根域名 xiaolan.monster 保留用于其他用途（简历、作品集等）
  - 子域名 lab. 可以明确标识这是科研/实验室相关内容
  - 如果未来需要，可以将根域名重定向到 lab.
- **Consequence**: 所有 Astro 配置直接使用 site: 'https://lab.xiaolan.monster'，无需 base path

---

## Initial project phase 为什么自定义域名后删除 Astro base

- **Decision**: 部署到 GitHub Pages 时，不使用 `base: '/personal-homepage'` 路径
- **Context**: 最初 Astro 项目配置为部署到 GitHub 用户页面（username.github.io），需要 base 路径
- **Reason**:
  - 后来改为使用自定义域名 lab.xiaolan.monster
  - 自定义域名直接指向根路径，不需要子路径
  - 添加 base 会导致所有资源路径错误（/personal-homepage/xxx）
- **Consequence**:
  - astro.config.mjs 保持 `site: 'https://lab.xiaolan.monster'`，无 base
  - CNAME 配置在 GitHub Pages 仓库设置中，而非 public/ 目录

---

## v0.2.0 Content Polish 为什么先做内容可信版

- **Decision**: 在开发任何高级功能之前，先将页面文案可信化
- **Context**: 初始 MVP 的文案过于抽象和营销化
- **Reason**:
  - 个人科研主页的核心是内容可信度
  - 在没有真实内容的情况下开发高级功能没有意义
  - 研究生身份决定了不能用 PI / 课题组风格来包装
- **Consequence**: v0.2 聚焦于文案打磨，建立了克制、真实、学术的文案风格

---

## v0.3.0 Content Collections 为什么先迁移 Content Collections

- **Decision**: 将 Tutorials 和 Ideas 从硬编码卡片迁移到 Astro Content Collections
- **Context**: 项目 MVP 中这两个页面使用了写死在 Astro 文件中的数据数组
- **Reason**:
  - Content Collections 提供了 schema 验证和类型安全
  - 便于未来添加新的教程和想法而无需修改页面代码
  - 为未来添加详情页（文章独立 URL）打下基础
  - Astro 对 MDX 的内置支持使内容编写更灵活
- **Consequence**: 页面从数据驱动变为内容驱动，支持未来扩展

---

## v0.3.1 Visitor Stats 为什么访问统计放在页脚而不是首页

- **Decision**: 访问统计小栏放在页脚，而非首页显眼位置或全站大数字卡片
- **Context**: 需要为网站添加基础的访问统计功能
- **Reason**:
  - 统计数字对访问者不重要，放在显眼位置会干扰主要内容
  - 页脚是合适的位置：低调、不影响阅读、提供基本信息
  - 研究性质决定不需要商业化的"大数字展示"风格
  - 避免了接入复杂分析后台的需求
- **Consequence**: 使用 bsz.saop.cc API，页脚显示 PV · UV · 本页

---

## Why not Pagefind暂缓 Pagefind

- **Decision**: 暂不为网站添加全文搜索功能
- **Context**: Astro 支持的 Pagefind 是成熟的静态搜索方案
- **Reason**:
  - Pagefind 适合内容量较大的网站（10+ 篇）
  - 当前 Tutorials + Ideas 共 6 篇内容，不需要搜索
  - 过早引入会增加构建复杂度但不带来实际价值
  - 等内容积累到一定量后再接入更合理
- **Consequence**: 文档中明确标注"当文章数量达到 8-10 篇后再接入 Pagefind"

---

## Why not Giscus暂缓 Giscus

- **Decision**: 暂不添加评论区或讨论功能
- **Context**: Giscus 是 GitHub 驱动的评论系统，适合开源项目
- **Reason**:
  - 个人科研主页不是社区项目，评论功能不是刚需
  - 初期流量有限，评论功能利用不足
  - 维护评论系统的成本（审核、垃圾信息）与收益不成比例
  - 邮件或 GitHub Issue 是更合适的反馈渠道
- **Consequence**: docs/PROJECT_STATE.md 中标注"视访问量决定"

---

## Why not 多语言暂缓多语言

- **Decision**: 保持单一中文版本，暂不添加英文化
- **Context**: 项目初始定位是服务中文读者
- **Reason**:
  - 当前内容全部是中文，面向中文科研社区
  - 多语言会增加内容维护成本
  - 生态学研究的受众在中文社区
  - 未来如果需要英文化可以后续添加，但当前不需要
- **Consequence**: docs/PROJECT_STATE.md 中标注"暂无英文化需求"

---

## Why 克制文案 为什么保持文案克制，不包装成成熟 PI

- **Decision**: 主页定位为生态学研究生个人主页，而非成熟 PI 或课题组官网
- **Context**: 初始版本文案有"探索生态系统与智能方法的交叉研究"等抽象表述
- **Reason**:
  - 个人主页的核心是可信度，包装过度会适得其反
  - 用户是研究生，不是实验室负责人，不应虚构资历
  - 学术社区对真实性敏感，过度包装会被识破
  - "研究兴趣""正在学习""方法探索"比"引领前沿"更合适
- **Consequence**: 文案风格聚焦于真实、克制、学术化表达
