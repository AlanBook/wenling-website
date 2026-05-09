# 问灵 Wenling 官网 Landing Page

## 文件说明

问灵项目的官方展示页面，采用单页滚动式设计，CSS 和 JavaScript 已分离到独立文件。

## 文件结构

```
wenling-website/
├── index.html          # 主页面（HTML 结构）
├── styles.css          # 样式表（CSS）
├── main.js             # 交互逻辑（JavaScript）
├── icon.png            # Logo 图标
└── assets/            # 功能截图
```

## 设计特点

- **配色主题**：黑绿 + 岩石黄（深色主题）
- **设计风格**：参考 shijuan-website 的布局和交互模式
- **响应式设计**：适配桌面/平板/手机
- **动画效果**：滚动渐显、光晕浮动、按钮光泽等

## 页面结构

1. **导航栏** - 固定顶部，毛玻璃效果
2. **Hero 区域** - 主标题 + 行动按钮 + 光晕动画
3. **核心功能展示** - 5个交替布局的功能介绍（配图）
4. **AI 引擎能力** - 三种访谈模式 + 支持的模型
5. **智能体配置** - 6个功能卡片网格
6. **结果分析** - 导出功能介绍
7. **用户认证体系** - 研究者端 + 受访者端
8. **安全与部署** - 安全机制 + 数据存储 + 启动方式
9. **快速上手指南** - 三步走流程
10. **API 接口总览** - 四大类 API 表格
11. **Footer** - 版权信息

## 展示图片使用

- `assets/interview-settings.png` - 设计访谈框架
- `assets/interview-ui.png` - AI智能访谈
- `assets/interview-manage.png` - 研究者管理端
- `assets/agentsettings.png` - 智能体配置
- `assets/user-dashboard.png` - 用户仪表板
- `assets/profile.png` - 个人资料

## 如何预览

直接在浏览器中打开 `index.html` 文件即可预览。

或者使用本地服务器：

```bash
# Python 3
python -m http.server 8080

# Node.js (需要安装 http-server)
npx http-server -p 8080
```

然后访问 `http://localhost:8080`

## 后续扩展

- [ ] 浅色皮肤切换（通过 CSS 变量 `data-theme="light"`）
- [ ] 深色/浅色主题切换按钮
- [ ] 多语言支持（i18n）
- [ ] 访客统计集成

## 技术栈

- **HTML** - 页面结构（index.html）
- **CSS** - 样式设计（styles.css）
- **JavaScript** - 交互逻辑（main.js）
- CSS 变量驱动主题（支持深色/浅色切换）
- IntersectionObserver 实现滚动动画
- 内联 SVG 图标
- 无外部依赖，纯原生实现

## 主题切换

已预留浅色主题支持，通过 CSS 变量 `data-theme` 实现：

```javascript
// 切换主题
toggleTheme(); // 在 dark 和 light 之间切换

// 手动设置
document.documentElement.setAttribute('data-theme', 'light');
```

主题偏好会自动保存到 localStorage。
