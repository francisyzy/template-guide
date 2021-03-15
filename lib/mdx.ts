import fs from "fs";
import path from "path";
import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";
import MDXComponents from "components/MDXComponents";

const root = process.cwd();

export async function getMD(filepath) {
  const file = fs.readFileSync(
    path.join(root, "content", `${filepath}.md`),
    "utf8"
  );
  const { data, content } = matter(file);
  const { title, description, auth } = data;

  return {
    title,
    description,
    unhydratedContent: await renderToString(content, {
      components: MDXComponents,
    }),
    auth: auth ?? null,
  };
}
