# Agent 交接文档

本文档面向未来接手此项目的 AI Agent（Claude Code / Kimi Code / Codex 等）。

## 新会话启动提示词

当你在一个新会话中接手这个项目时，请先复制并执行以下步骤：

```
请先阅读以下文件以了解项目背景：
1. README.md
2. docs/PROJECT_STATE.md
3. docs/AGENT_HANDOFF.md
4. docs/DECISIONS.md
5. CHANGELOG.md
6. TODO.md

然后运行以下命令确认项目状态：
git status
git log --oneline --decorate -n 10
npm run build

在完成以上步骤并输出接管报告（包含 git status、build 结果、项目结构说明）之前，请勿修改任何文件。
只有在得到用户确认后，才能开始具体任务。
```

## 新 Agent 接手前必须阅读的文件列表

1. `README.md` — 项目基本说明
2. `docs/PROJECT_STATE.md` — 项目当前状态（含重要警告）
3. `docs/AGENT_HANDOFF.md` — 本文档
4. `docs/DECISIONS.md` — 历史决策记录
5. `CHANGELOG.md` — 版本变更记录
6. `TODO.md` — 未来任务路线图
7. `astro.config.mjs` — 确认域名配置（无 base path）
8. `src/content/config.ts` — Content Collections schema
9. `package.json` — 依赖版本和 scripts
10. `.gitignore` — 已忽略的文件类型
11. `src/pages/tutorials/[slug].astro` — Tutorials 详情页路由
12. `src/pages/ideas/[slug].astro` — Ideas 详情页路由

## 新 Agent 接手后必须运行的命令

```bash
# 1. 确认 git 状态
git status

# 2. 查看最近提交记录
git log --oneline --decorate -n 10

# 3. 安装依赖（使用 npm ci 确保与 lockfile 一致）
npm ci

# 4. 确认项目能正常构建
npm run build

# 5. 如需本地预览
npm run dev
```

## 修改代码前必须确认的事项

1. ❓ 用户是否明确授权了本次修改范围？
2. ❓ 此次修改是否涉及部署配置（`.github/workflows/`、`astro.config.mjs`）？
3. ❓ 此次修改是否涉及添加新功能（新页面、新依赖、新集成）？
4. ❓ 修改是否与项目的克制、真实、学术定位一致？
5. ❓ 是否会导致硬编码路径错误（如 `/personal-homepage`）？

如果以上任何一项无法确认，请先向用户确认后再操作。

## 禁止操作清单

以下操作**未经用户明确授权不得执行**：

| 禁止项 | 说明 |
|--------|------|
| 添加 Pagefind | 文章数量不足时不需搜索 |
| 添加 Giscus | 评论系统需等内容和流量积累后再考虑 |
| 添加 RSS | 当前阶段不需要 |
| 添加多语言 | 中文主页，暂无英文化需求 |
| 添加动画 | 学术风格保持简洁 |
| 修改 astro.config.mjs | base path 和 site 配置已就绪 |
| 修改 public/CNAME | 当前仓库没有此文件，域名在 GitHub Pages 设置中 |
| 重写页面文案为 PI 风格 | 定位是研究生，不是成熟学者 |
| 虚构论文/项目/奖项 | 保持真实克制 |
| 提交 .astro/ 到 git | 那是构建缓存 |
| 提交 dist/ 到 git | 那是构建产物 |
| 提交 node_modules/ 到 git | 那是依赖目录 |
| 提交 .codex 到 git | 那是本地工具缓存 |
| 提交 .codex/ 到 git | 那是本地工具缓存 |
| 提交 .claude/settings.local.json 到 git | 那是本地工具配置 |
| 提交 .claude/*.local.json 到 git | 那是本地工具配置 |
| 大重构工程结构 | 当前结构已满足需求 |

## 推荐任务流程

1. **接收任务** → 用户描述需求
2. **确认范围** → 确认是否在授权范围内
3. **检查现状** → `git status` + `npm run build`
4. **分析实现** → 确认要改哪些文件
5. **执行修改** → 改代码
6. **构建验证** → `npm run build` 必须成功
7. **汇报结果** → 告知修改了什么、build 结果

## 每次任务完成后的汇报格式

```
A. 修改了哪些文件
B. 每个文件主要改了什么
C. npm run build 是否成功
D. 是否涉及部署配置变更
E. 是否需要 git commit / push
F. 下一个合理任务建议
```

## 每次任务完成后必须运行

```bash
npm run build
```

如果 build 失败：
1. 判断是否为本次修改引起
2. 如果不是文档问题导致的工程错误，不要擅自大改，先报告
3. 如果是本次修改引起，自己修复直到 build 成功

## 如果涉及部署，必须说明

- 部署使用 GitHub Actions + GitHub Pages
- 自定义域名 `lab.xiaolan.monster` 配置在 GitHub Pages 设置中
- **`astro.config.mjs` 中没有 `base` 路径**，不要添加
- 推送后 GitHub Actions 会自动构建部署
- 部署完成后检查 https://lab.xiaolan.monster 是否正常访问

## 项目定位提醒

- 这是**研究生个人科研主页**，不是成熟 PI 或课题组官网
- 文案风格：克制、真实、学术化
- 不要把网站写成"国际一流实验室"风格
- 不要虚构研究成果

## Contact

- 线上地址: https://lab.xiaolan.monster/
- GitHub: https://github.com/Alanxander5/personal-homepage
