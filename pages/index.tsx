import { MDXRemote } from 'next-mdx-remote';
import { getMD } from "lib/mdx";
import { slugs } from "content/meta";

import MDXComponents from "components/MDXComponents";
import GuidePreview from "components/GuidePreview";

export default function Index({ unhydratedContent, pages }) {
  return (
    <>
      <h1 className="text-4xl text-center font-black">TEMPLATE_TITLE Guide</h1>

      <div className="prose">
        <MDXRemote {...unhydratedContent} components={MDXComponents} />
      </div>

      {/* Other pages */}
      <section className="mt-base grid gap-sm md:grid-cols-2 lg:grid-cols-3">
        {pages &&
          pages.map((page) => (
            <GuidePreview page={page} key={page.slug}></GuidePreview>
          ))}
      </section>
    </>
  );
}

export async function getStaticProps(context) {
  const { unhydratedContent } = await getMD("index");

  const pages = [];
  for (const slug of slugs) {
    const { title, description } = await getMD(slug);
    pages.push({ slug, title, description });
  }

  return { props: { unhydratedContent, pages } };
}
