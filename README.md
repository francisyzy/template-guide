This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# MT-RAC Guide

This is a guide page/app for the main application [MT-RAC+](https://mtrac.ado.sg)

It is separated out from the main project to provide easier updating of the guide page for faster build times, easier to update etc.

## Things you need to know to edit this guide

You need to know how to type in markdown syntax to edit the pages.

Here is a guide on how to use markdown https://www.markdownguide.org/

## Important files to edit the content

- [Content pages](content/index.md)
  - Specific detail pages:
  - [Accounts](content/accounts.md)
  - [Transport Operator](content/transport-operator.md)
  - [Vehicle Commander](content/vehicle-commander.md)
  - etc.
- [Screenshots](public/screenshots)

If new pages are to be inserted, [`meta.ts`](content/meta.ts) also needs to have the page title inside for it to build the new page inserted

### Formatting to be used

Copy over an existing page's `md` document and edit from there.

It will have all the headers necessary for the page to look ok. 

## Building the site

The page will automatically build after the file is saved. 

You can look at the build logs from the [Actions Tab](https://github.com/HavenOfExcellence/mtrac-guide/actions)

Once a green tick is shown, the site will be available at either at [MT-RAC+/mtrac-guide](https://mtrac.ado.sg/mtrac-guide) or [Repository Docs Page](https://havenofexcellence.github.io/mtrac-guide/) (Both serve identical content)

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!