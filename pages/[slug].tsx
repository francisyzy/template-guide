import Head from "next/head";
import hydrate from "next-mdx-remote/hydrate";
import { getMD } from "lib/mdx";

import MDXComponents from "components/MDXComponents";
import BackButton from "components/BackButton";
import { slugs } from "content/meta";

const Guide = ({ title, unhydratedContent }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <BackButton href="/"></BackButton>
      <h1 className="mt-xs">{title}</h1>
      <div className="prose">
        {hydrate(unhydratedContent, { components: MDXComponents })}
      </div>
    </>
  );
};

export async function getStaticPaths(context) {
  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    //  [
    //   { params: { slug: "accounts" } },
    //   { params: { slug: "transport-operator" } },
    // ],
    fallback: false,
  };
}
export async function getStaticProps(context) {
  // const { slug } = context.query;
  const { slug } = context.params;

  const { title, unhydratedContent } = await getMD(slug);

  return {
    props: {
      title,
      unhydratedContent,
    },
  };
}

export default Guide;
