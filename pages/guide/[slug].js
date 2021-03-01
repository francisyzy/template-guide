import fs from "fs";
import path from "path";

import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";

import { useRouter } from "next/router";

const Guide = ({ title, unhydratedContent }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{hydrate(unhydratedContent)}</p>
    </>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;

  const root = process.cwd();
  const file = fs.readFileSync(
    path.join(root, "content", `${slug}.md`),
    "utf8"
  );

  const { data, content } = matter(file);
  const { title } = data;

  return {
    props: {
      title,
      unhydratedContent: await renderToString(content),
    },
  };
}

export default Guide;
