# 问灵 Wenling 官网 Landing Page 创建计划

## 项目概述

在 `wenling-website/` 根目录创建 `index.html`，采用单页滚动式设计，整合 README.md 和 FEATURES.md 的全部内容，配色主题为黑绿+岩石黄，设计参考 shijuan-website 的布局和交互模式。

## 设计系统

### 配色方案（黑绿 + 岩石黄）

```css
:root {
  /* 深色主题（默认） */
  --bg: #1A1A1A;              /* 深黑背景 */
  --bg-warm: #242424;         /* 次级背景 */
  --bg-card: #2A2A2A;         /* 卡片背景 */
  --accent: #4CAF50;          /* 问灵绿（主色） */
  --accent-hover: #45A049;    /* 绿色悬停 */
  --accent-soft: rgba(76,175,80,0.12);  /* 绿色半透明 */
  --accent-yellow: #D4A853;   /* 岩石黄（辅助色） */
  --accent-yellow-hover: #C49B48;
  --text: #E8E8E8;            /* 主文字（浅色） */
  --text-secondary: #B0B0B0;  /* 次要文字 */
  --text-muted: #808080;      /* 弱化文字 */
  --border: #3A3A3A;          /* 边框 */
  --radius: 16px;
}
```

### 设计参考点（来自 shijuan-website）

- **导航栏**：固定顶部，毛玻璃效果，Logo + 导航链接 + CTA 按钮
- **Hero 区域**：大标题 + 描述 + 行动按钮 + 背景光晕动画
- **功能展示**：交替左右布局（文字 + 截图），滚动渐显动画
- **深色区块**：AI 能力展示区使用不同背景色区分
- **功能网格**：小卡片网格展示次要功能
- **下载/行动区**：卡片式布局，突出主要操作
- **Footer**：简洁版权信息 + 链接

## 页面结构（从上到下）

### 1. 导航栏（固定顶部）

- Logo：问灵 Wenling（使用 icon.png）
- 导航链接：功能 · AI引擎 · 配置 · 结果 · 部署
- CTA 按钮：快速上手

### 2. Hero 区域

**内容来源**：README.md 开头部分

- Badge：`v1.0.0 · AI驱动的自动化访谈系统`
- 主标题：`让AI成为你的访谈者`（渐变绿黄色）
- 描述：整合 README.md 的核心能力介绍
- 行动按钮：快速上手（绿色） + GitHub（描边）
- 背景：深黑底色 + 绿色/黄色光晕动画

**配图**：暂不配图，保持简洁

### 3. 功能分隔线

- 简约分隔：`探索功能`

### 4. 核心功能展示区（交替布局）

**Section 1：设计访谈框架**
- 文字：README.md "设计访谈框架" + FEATURES.md 第2节
- 配图：`展示图片/interview-settings.png`
- 布局：左文字，右图片

**Section 2：AI智能访谈**
- 文字：README.md "AI智能访谈" + FEATURES.md 第3-4节
- 配图：`展示图片/interview-ui.png`
- 布局：右文字，左图片（reverse）

**Section 3：数字人交互**
- 文字：README.md "数字人交互" + FEATURES.md 第3节数字人部分
- 配图：暂不使用（无对应截图）
- 布局：左文字，右占位框

**Section 4：研究者管理端**
- 文字：FEATURES.md 第2节访谈管理
- 配图：`展示图片/interview-manage.png`
- 布局：右文字，左图片（reverse）

**Section 5：智能体全局配置**
- 文字：FEATURES.md 第5节 AgentSettings
- 配图：`展示图片/agentsettings.png`
- 布局：左文字，右图片

### 5. AI 引擎能力区（深色区块，黄色背景）

**内容来源**：FEATURES.md 第4节

- 标题：`AI 访谈引擎`
- 三种访谈模式卡片：结构化 / 半结构化 / 非结构化
- 支持的模型标签云：Claude · GPT · DeepSeek · Kimi · Gemini · MiniMax · 阿里云百炼
- 特色：JSON结构化输出 · 上下文感知 · 人格化访谈

### 6. 智能体配置详情（功能网格）

**内容来源**：FEATURES.md 第5节

6-8个功能卡片网格展示：
- 原生服务（兑换码激活）
- 多模态配置（图片识别）
- ASR语音识别
- TTS语音合成
- 参数调节（Temperature/Top P）
- 系统提示词模板

### 7. 结果分析与导出

**内容来源**：FEATURES.md 第6节

- 文字：对话流完整展示 · 话题覆盖度可视化 · AI生成摘要
- 配图：暂不使用
- 导出功能：HTML · JSON · Markdown（部分）

### 8. 用户认证体系

**内容来源**：FEATURES.md 第1节

- 研究者端：注册/登录/个人资料/头像上传
- 受访者端：访问码输入/资料填写/进度展示
- 配图：`展示图片/user-dashboard.png` + `展示图片/profile.png`

### 9. 安全与部署（深色区块）

**内容来源**：FEATURES.md 第8-11节 + README.md 安装部分

- 安全机制：JWT认证 · 密码加密 · API Key隔离 · 访问码验证
- 数据存储：SQLite · 本地文件 · 自动迁移
- 启动方式：Windows一键启动 · PowerShell脚本 · pnpm monorepo

### 10. 快速上手指南

**内容来源**：README.md "快速上手三步" + 安装启动部分

步骤卡片：
1. 启动系统（运行 start-all.bat）
2. 研究者登录（admin / 123456）
3. 创建访谈（新建 → 发布 → 创建会话 → 分享访问码）

### 11. API 接口总览

**内容来源**：FEATURES.md 第10节

- 表格展示：认证/访谈/会话/设置四大类 API
- 简洁卡片式布局

### 12. Footer

- 问灵 Wenling © 2026
- 链接：GitHub · 功能文档 · 联系反馈
- 私有项目，仅供研究与演示使用

## 技术实现

### 文件结构

```
wenling-website/
├── index.html          # 新创建的 Landing Page
├── icon.png            # 已有，用作 Logo
└── 展示图片/            # 已有，7张截图
    ├── agentsettings.png
    ├── interview-manage.png
    ├── interview-settings.png
    ├── interview-ui.png
    ├── profile.png
    ├── response-login.png
    └── user-dashboard.png
```

### 关键技术点

1. **纯 HTML + CSS + 内联 JS**：无外部依赖，单文件部署
2. **CSS 变量驱动主题**：方便后续添加浅色皮肤
3. **滚动渐显动画**：IntersectionObserver 实现 `.reveal` 类
4. **响应式设计**：适配桌面/平板/手机（断点 900px / 640px）
5. **SVG 图标**：内联 SVG，无外部字体依赖
6. **图片路径**：使用相对路径 `展示图片/xxx.png`

### 动画效果（参考 shijuan-website）

- Hero 光晕浮动（orbFloat 动画）
- 按钮光泽扫过（btnShine 动画）
- 卡片悬停上升 + 阴影增强
- 滚动渐显（fadeUp 动画）
- 导航栏毛玻璃（backdrop-filter）

## 实施步骤

### Step 1：创建 index.html 文件

- 创建完整 HTML 结构
- 内嵌 CSS（`<style>` 标签）
- 内嵌 JS（`<script>` 标签）

### Step 2：实现设计系统 CSS

- 定义 CSS 变量（黑绿+岩石黄配色）
- 实现所有组件样式（导航/Hero/功能行/卡片/按钮等）
- 响应式断点（900px / 640px）
- 动画关键帧

### Step 3：构建页面内容

按上述页面结构逐节实现：
1. 导航栏
2. Hero 区域
3. 功能展示区（5个交替布局）
4. AI 引擎深色区块
5. 功能网格（6-8卡片）
6. 结果分析区
7. 用户认证区
8. 安全部署区
9. 快速上手指南
10. API 接口区
11. Footer

### Step 4：集成展示图片

- `interview-settings.png` → 设计访谈框架
- `interview-ui.png` → AI智能访谈
- `interview-manage.png` → 研究者管理端
- `agentsettings.png` → 智能体配置
- `user-dashboard.png` → 用户仪表板
- `profile.png` → 个人资料
- `response-login.png` → 受访者登录（如有合适位置）

### Step 5：添加交互功能

- 导航栏滚动效果（可选）
- 滚动渐显 Observer
- 平滑滚动（scroll-behavior: smooth）
- 移动端导航折叠（简化版）

### Step 6：测试与优化

- 检查所有图片路径
- 验证响应式布局
- 确认动画流畅度
- 检查文字内容完整性

## 内容映射表

| 页面区域 | README.md 来源 | FEATURES.md 来源 | 配图 |
|---------|---------------|-----------------|------|
| Hero | 开头介绍 + 核心能力 | 总览速查 | 无 |
| 设计访谈框架 | 主要能做什么.1 | 第2节创建/列表/详情 | interview-settings.png |
| AI智能访谈 | 主要能做什么.3 | 第3-4节会话/AI引擎 | interview-ui.png |
| 数字人交互 | 主要能做什么.4 | 第3节数字人部分 | 占位 |
| 研究者管理 | - | 第2节访谈管理 | interview-manage.png |
| 智能体配置 | AI服务配置指南 | 第5节AgentSettings | agentsettings.png |
| AI引擎能力 | - | 第4节AI引擎 | 标签云 |
| 功能网格 | - | 第5节多模态/ASR/TTS | 图标卡片 |
| 结果分析 | 主要能做什么.5 | 第6节结果/导出 | 无 |
| 用户认证 | - | 第1节认证体系 | user-dashboard.png + profile.png |
| 安全部署 | 安装与启动 | 第8-11节 | 无 |
| 快速上手 | 快速上手三步 | - | 无 |
| API接口 | - | 第10节API表格 | 无 |

## 后续扩展（预留）

- 浅色皮肤：通过 CSS 变量切换 `data-theme="light"`
- 深色/浅色切换按钮（当前先实现深色主题）
- 多语言支持（i18n）
- 访客统计（busuanzi 或其他）

## 注意事项

1. **配色对比度**：确保绿色 (#4CAF50) 和岩石黄 (#D4A853) 在深黑背景上有足够对比度
2. **图片尺寸**：展示图片可能需要调整 `object-fit` 或添加占位框
3. **内容精简**：FEATURES.md 内容较多，需提炼关键点，避免页面过长
4. **性能优化**：图片使用 `loading="lazy"` 延迟加载
5. **SEO**：添加 meta description / keywords / og:image
