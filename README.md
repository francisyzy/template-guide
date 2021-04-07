# TEMPLATE_TITLE Guide

This is a guide page/app for the main application [TEMPLATE_TITLE](https://sub.mainProjectUrl/)

It is separated out from the main project to provide easier updating of the guide page for faster build times, easier to update etc.

## Markdown

In order to edit the guide pages, you will need to know markdown. Learn markdown at [markdownguide.org](https://www.markdownguide.org/), or [watch this video](https://www.youtube.com/watch?v=HUBNt18RFbo).

## Important files to edit the content

- [Content pages](content/index.md)
  - [Guide One](content/guide-one.md)
  - [Guide Two](content/guide-two.md) Protected using simple auth
  - etc.
- [Screenshots](public/screenshots)

If new pages are to be inserted, [`meta.ts`](content/meta.ts) also needs to have the page _slug_ inside for it to build the new page inserted. The page slug is the file name. For example, the page slug of the **Guide Page One** page is `guide-one`.

When creating new pages, do **not** use spaces in the file name. Instead of spaces, include hyphens.

### Formatting to be used

Copy over an existing page's `md` document and edit from there. The content at the top is the _metadata_ and will look like this:

```md
---
title: Guide Page One
description: Page One Description
---
```

Note the the "`---`" at the top and bottom of the metadata. The two required metedata values are:

1. `title`: The page's title, also shown in the tab bar
2. `description`: The page's description, show in the preview
3. (Optional) `auth`: Set to `true` to make the password required to view the page

## Building the site

The page will automatically build after the file is saved.

You can look at the build logs from the [Actions Tab](https://github.com/HavenOfExcellence/template-guide/actions)

Once a green tick is shown, the site will be available at either at [TEMPLATE_TITLE/template-guide](template.mainProjectUrl/template-guide/) or [Repository Docs Page](https://havenofexcellence.github.io/template-guide/) (Both serve identical content)

## Advanced development

First, install dependencies:

```bash
npm i
# or
yarn install
```

Then run the development server

```bash
npm run dev
# or
yarn dev
```

Open [localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
