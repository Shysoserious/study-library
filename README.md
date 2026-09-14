# 理科学习库

李思源的个人学习资料网站：从大一到现在，每一门课的复习笔记都收在这里。纯静态站点，可直接部署到 GitHub Pages，手机、平板、电脑都能访问，还能安装成 PWA。

## 文件结构

```
理科学习/
├── index.html            首页（课程目录、全文搜索、收藏置顶、进度打卡、最近查看）
├── glossary.html         术语词汇表（中英对照，支持搜索与学科筛选）
├── data.js               单一数据源：课程、笔记、附件、术语
├── search-index.js       搜索索引（关键词版，可用 build_site.py 升级为全文）
├── manifest.webmanifest   PWA 清单
├── sw.js                 Service Worker（离线缓存）
├── icon.svg              站点图标
├── build_site.py         可选脚本：重建全文搜索索引
├── assets/
│   ├── style.css         视觉样式（简洁学术风格 × 亮暗主题）
│   └── app.js            首页交互逻辑
└── （各课程文件夹 + HTML 笔记）
```

## 快速开始

**本地预览**：直接用浏览器打开 `index.html` 即可（所有数据都在 `data.js` 里，无后端依赖）。部分浏览器对 `file://` 打开 PWA/service worker 有限制，但不影响正常浏览。

**部署到 GitHub Pages**：

1. 在 GitHub 新建一个仓库（例如 `study-library`）。
2. 把 `理科学习` 文件夹里的所有内容推送到仓库根目录。
3. 仓库 Settings → Pages → Source 选 `Deploy from a branch` → 分支选 `main`（或 `master`），目录选 `/ (root)` → Save。
4. 稍等片刻，访问 `https://<你的用户名>.github.io/<仓库名>/` 即可。

之后每次更新笔记，`git push` 一下就上线了。

## 日常更新：怎么加东西

所有内容都收在 **`data.js`** 这一个文件里，改完刷新即生效。

- **加一门新课**：在 `data.js` 的 `courses` 数组里加一个对象，填 `id / name / nameEn / code / semester / category / status / teacher / desc / notes / attachments`（字段说明见 `data.js` 末尾注释）。
- **加一条笔记**：在对应课程的 `notes` 里加 `{ title: "显示名", file: "相对路径.html" }`。
- **加一个附件**（可选，当前纯笔记模式未启用）：在对应课程的 `attachments` 里加路径字符串，或 `{ name: "自定义显示名", file: "路径" }`。
- **加术语**：在 `glossary` 里对应课程下加 `{ en: "...", zh: "..." }`。

**搜索索引**：新增笔记后，在 `search-index.js` 里补一条 `{ course, title, file, text }`（`text` 填几个关键词即可）。想要「真·全文搜索」，在装有 Python 的电脑上运行 `python build_site.py`，它会自动读取每份笔记 HTML 的正文填进索引。

## 视觉风格

已锁定为「简洁学术」风格：衬线标题 + 纸白底 + 学术蓝，像教科书目录。亮暗主题仍可随时切换（右上角按钮）。

## 功能一览

- **全文搜索**：顶栏搜索框或 `Ctrl/Cmd + K`，覆盖所有笔记标题与关键词（`build_site.py` 后可覆盖正文全文）。
- **亮暗主题**：右上角切换，记住偏好。
- **收藏置顶**：课程卡片右上角星标，置顶课程显示在最上方。
- **进度打卡**：笔记前的圆圈可打勾，记录每门课的复习进度。
- **最近查看**：自动记录最近看过的 6 份笔记。
- **PWA**：可「添加到主屏幕」，离线也能打开已缓存的内容。

## 小提示

- 目前网站是「纯笔记」模式：PDF/PPT 课件已通过 `.gitignore` 排除、不会随仓库部署，本地仍保留原文件。想收录某份课件时，去掉对应 `.gitignore` 规则、并在 `data.js` 里回填 `attachments` 即可。
- 更新 `sw.js` 后如果发现旧页面缓存没刷新，把 `sw.js` 里 `CACHE` 的版本号 `study-lib-v1` 改成 `study-lib-v2` 即可强制刷新。
- iOS 对 SVG 图标（`apple-touch-icon`）支持有限，如需完美图标可再补一张 180×180 的 `icon-180.png` 并在 `index.html` 里引用。
