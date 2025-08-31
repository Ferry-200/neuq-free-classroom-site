# NEUQ Free Classroom Site

[![Deploy Astro Site](https://github.com/Ferry-200/neuq-free-classroom-site/actions/workflows/deploy.yml/badge.svg)](https://github.com/Ferry-200/neuq-free-classroom-site/actions/workflows/deploy.yml)

东北大学秦皇岛分校工学馆空教室查询网站，支持截图分享功能。

## 功能特性

### 📸 截图分享功能
- **一键截图**：点击右下角的 📸 按钮可快速生成整个页面的截图
- **多种分享方式**：
  - 💾 下载图片到本地
  - 📋 复制图片到剪贴板（现代浏览器）
  - 📤 使用系统原生分享功能（移动设备）
- **实时预览**：截图后可立即预览生成的图片
- **响应式设计**：支持桌面和移动设备
- **无障碍访问**：支持键盘导航和屏幕阅读器

### 🎨 设计特点
- Material Design 风格界面
- 深色模式自动适配
- 移动端友好的响应式布局
- 流畅的交互动画

## 数据

- 空教室表  
  path: `src/content/free-classroom-data/gxg-yyyy-mm-dd-l1-l2.json`  
  data: `["工学馆103", "工学馆111", ...]`
- 构建信息  
  path: `src/build-info.json`  
  data: `{ "message": "..." }`

## 数据来源

[Ferry-200/neuq-free-classroom](https://github.com/Ferry-200/neuq-free-classroom)

## 技术栈

- **框架**：Astro.js
- **样式**：CSS with Material Design tokens
- **截图**：html2canvas
- **部署**：GitHub Pages

## 开发

### 安装依赖
```bash
npm install
```

### 开发服务器
```bash
npm run dev
```

### 构建
```bash
npm run build
```

### 预览构建
```bash
npm run preview
```

## 截图功能使用说明

### 桌面端
1. 点击页面右下角的 📸 按钮
2. 等待截图生成（约1-2秒）
3. 在弹出的对话框中选择操作：
   - 点击"下载图片"保存到本地
   - 点击"复制图片"复制到剪贴板
4. 按 Esc 键或点击"关闭"退出对话框

### 移动端
1. 点击页面右下角的 📸 按钮
2. 等待截图生成
3. 在分享对话框中可以：
   - 下载图片到设备
   - 使用系统分享功能分享给其他应用
   - 复制到剪贴板

### 浏览器兼容性
- ✅ Chrome 88+
- ✅ Firefox 87+
- ✅ Safari 14+
- ✅ Edge 88+
- ⚠️ Internet Explorer：不支持

### 已知限制
- 截图功能依赖现代浏览器的 Canvas API
- 复制到剪贴板功能需要 HTTPS 环境
- 系统分享功能主要在移动设备上可用
