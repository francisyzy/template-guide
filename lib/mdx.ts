import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const root = process.cwd();

export async function getMD(filepath) {
  const file = fs.readFileSync(
    path.join(root, "content", `${filepath}.md`),
    "utf8",
  );
  const { data, content } = matter(file);
  const { title, description, auth } = data;

  return {
    title,
    description,
    unhydratedContent: await serialize(content),
    auth: auth ?? null,
  };
}
