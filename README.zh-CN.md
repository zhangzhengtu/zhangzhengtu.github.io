# 涂章正个人学术主页

这是 **涂章正 / Zhangzheng Tu** 的静态学术主页项目。

## 项目简介

该项目用于 GitHub Pages 部署，首页包含研究兴趣、新闻、教育经历、科研经历、论文发表、开源项目、竞赛奖项和荣誉等模块，整体采用简洁、克制、易读的学术主页形式。

## 主要文件

- `index.html`：页面结构与主要内容
- `assets/css/theme-tzz.css`：页面样式、间距和响应式布局
- `assets/img/`：头像、机构 Logo、favicon 等图片资源
- `assets/paper_img/`：论文配图
- `assets/opensource_img/`：开源项目配图
- `assets/cv/CV.pdf`：个人简历

## 本地预览

可以使用任意静态文件服务进行预览，例如：

```powershell
python -m http.server 8000
```

然后在浏览器中打开 `http://127.0.0.1:8000/`。

## 部署说明

将本项目内容部署到 `1900AI.github.io` 仓库根目录，确保 GitHub Pages 直接加载根目录下的 `index.html`。

## 说明

- 这是一个纯静态项目，不依赖前端构建流程。
- 后续新增论文、项目或个人资料时，主要更新 `index.html` 和 `assets/` 下对应资源即可。

