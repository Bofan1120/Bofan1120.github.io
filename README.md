# Bofan Li — Academic Website

A multi-page academic website for [Bofan Li](https://bofan1120.github.io/), built with Next.js and configured for GitHub Pages.

## Update content

Most routine edits happen in one file:

`app/data/site.ts`

The file contains these clearly named collections:

- `profile` — title, affiliation, bio, email, Scholar link, and research interests
- `news` — expandable news entries and their photo galleries
- `publications` — publication cards, links, awards, and artifact badges
- `teaching` — course and term history
- `service` — professional and academic service
- `reviewingAssistance` — assisted reviews, displayed as “Help in Reviewing” on the Service page only
- `education` — degree timeline
- `awards` — awards shown on both the homepage and Awards page
- `demos` — demo entries with an optional image, video link, and code link
- `personal` — personal notes and photos

Add images under `public/images/` and reference them with a path beginning with `/images/`. For example:

```ts
{
  date: "Aug 2026",
  year: 2026,
  category: "Publication",
  title: "A new paper was accepted",
  detail: "A short explanation shown when the item is expanded.",
  images: [
    {
      src: "/images/news/example.jpg",
      alt: "A useful description of the image",
    },
  ],
}
```

The Demos and Personal pages are already linked in the header. Adding entries to their collections automatically replaces the coming-soon message.

## 日常维护

内容在 `app/data/site.ts` 中统一维护，首页和独立页面自动同步。

- 更新个人介绍：修改 `profile`；研究兴趣直接并入介绍段落。介绍支持 `[链接文字](https://example.com/)` 格式。
- 添加新闻：在 `news` 数组顶部添加一条记录，照片放在 `public/images/news/`。新闻页按 `year` 自动归档。`featured: true` 会让较早的新闻也显示在首页，`showOnHome: false` 则只在完整新闻页显示。
- 添加论文：在 `publications` 数组顶部填写标题、作者、年份、会议、配图和链接；检索和年份筛选自动更新。作者按论文原始顺序填写，以逗号和空格分隔。`status` 可填 `Published`、`Accepted` 或 `Preprint`，后两者会显示状态标签。
- 首页的 **Selected Publications** 自动筛选第一位作者为 `Bofan Li` 的论文；合作论文保留在 Publications 独立页面，无需另外维护两份列表。
- 论文的获奖链接填写在 `awardUrl`，奖项列表的链接填写在 `href`。Distinguished Artifact Award 的官方地址统一维护在 `distinguishedArtifactAwardUrl`。
- 添加教学、服务、奖项、教育经历：在对应数组添加记录。Service 与 Awards 可用 `showOnHome: false` 隐藏首页条目，但仍保留独立页面的完整记录。
- 奖项可展开查看 `detail` 与 `images` 配图，`selectivity` 显示评选数字。没有对应照片时使用 `images: []`，之后补图即可；Dean's Award 目前待补照片。研究奖照片上的正式名称保留在说明中，评选数字按本人提供的信息填写。
- 填写 Demo / Personal：给 `demos` 或 `personal` 添加如下记录即可，不需要改页面代码：

```ts
{
  title: "My research demo",
  description: "A short description of the system.",
  date: "September 2026",
  image: { src: "/images/demo.jpg", alt: "Demo screenshot" },
  links: [{ label: "Video", href: "https://example.com/video" }],
}
```

可选的 `image`、`date`、`links` 不填时可省略。首页展示最近 5 条可见新闻及额外标记为 `featured` 的新闻、最近 3 条教学经历，论文只展示一作条目；独立页面展示全部记录。Service 的 `href` 用来给会议／期刊名称加超链接；`reviewingAssistance` 用于“Help in Reviewing”，只在 Service 独立页面展示，不显示在首页。

未公开的内容及配图保存在本地 `drafts/` 目录，并通过 `.gitignore` 排除，不会进入公开 GitHub 仓库或网站发布目录。恢复发布的步骤记录在本地 `drafts/README.md` 中；不要把未公开内容写在将要上传的源码注释里。

配色在 `app/globals.css` 顶部的 `:root` 中设置：冷调纸白 `#eef3f6`、墨黑 `#0c1418`、蓝色 `#0b6e97`。颜色参考 [wqzhao.org](https://wqzhao.org/)，布局是为本网站独立实现的。正文 Public Sans、标题 Source Serif 4 字体均保存在本地，许可证位于 `public/fonts/`。

合作论文 MUGEN、GeoMotionGPT 和 ARiSE 的作者、会议与配图依据 [XL-Stack Lab](https://xinliulab.github.io/) 的公开论文列表核对（2026-09-14）。原始配图分别为 [MUGEN](https://xinliulab.github.io/Figure/mugen.jpg)、[GeoMotionGPT](https://xinliulab.github.io/Figure/geomotiongpt.png) 和 [ARiSE](https://xinliulab.github.io/Figure/arise.png)，副本存放在 `public/images/publications/`。MUGEN 明确标为预印本。

## Local development

```bash
pnpm install
pnpm dev
```

## Publish to GitHub Pages

The included workflow at `.github/workflows/pages.yml` builds and deploys the site whenever the `main` branch is updated. Pages uses **GitHub Actions** as its source.

以后更新：修改内容 → 本地预览 → 提交并推送到 `main` → 等待仓库 Actions 显示发布成功。也可以直接让 Codex 完成更新、检查和发布。GitHub 登录保存在本机凭据管理器中，不需要把 token 写进项目。

旧网站的 Git 历史已保留，原有 `/files/` 下载链接由 `public/files/` 继续提供。旧版 HTML、CSS 和脚本的本地备份位于被 Git 忽略的 `legacy/` 目录，新网站以 `app/` 为准。
