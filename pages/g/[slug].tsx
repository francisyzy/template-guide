import Head from "next/head";
import hydrate from "next-mdx-remote/hydrate";
import { getMD } from "lib/mdx";

import MDXComponents from "components/MDXComponents";
import BackButton from "components/BackButton";

const Guide = ({ title, unhydratedContent }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <BackButton href="/"></BackButton>
      <h1 className="mt-xs">{title}</h1>
      <div>{hydrate(unhydratedContent, { components: MDXComponents })}</div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;

  const { title, unhydratedContent } = await getMD(slug);

  return {
    props: {
      title,
      unhydratedContent,
    },
  };
}

export default Guide;
