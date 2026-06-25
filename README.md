# Zhangzheng Tu Academic Homepage

Static academic homepage for **Zhangzheng Tu (涂章正)**.

## Overview

This project is a personal academic homepage designed for GitHub Pages. It presents research interests, news, education, research experience, publications, open-source projects, competition awards, and honors in a clean static layout.

## Main Files

- `index.html`: page structure and content
- `assets/css/theme-tzz.css`: page styles, spacing, and responsive layout
- `assets/img/`: avatar, institution logos, favicon, and other images
- `assets/paper_img/`: publication images
- `assets/opensource_img/`: open-source project images
- `assets/cv/CV.pdf`: curriculum vitae

## Local Preview

You can preview the site locally with any static file server. For example:

```powershell
python -m http.server 8000
```

Then open `http://127.0.0.1:8000/` in your browser.

## Deployment

Deploy this project to the root of the `1900AI.github.io` repository so that `index.html` is served directly by GitHub Pages.

## Notes

- The site is fully static and does not require a frontend build step.
- Update `index.html` and the assets folders when adding new papers, projects, or profile materials.

