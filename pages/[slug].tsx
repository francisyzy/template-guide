import Head from "next/head";
import { MDXRemote } from 'next-mdx-remote';
import { getMD } from "lib/mdx";

import MDXComponents from "components/MDXComponents";
import BackButton from "components/BackButton";
import { slugs } from "content/meta";
import { useEffect, useState } from "react";

const Guide = ({ title, unhydratedContent, auth }) => {
  const [showContent, setShowContent] = useState(false);
  const [wrongPasswordEntered, setWrongPasswordEntered] = useState(false);

  useEffect(() => {
    if (auth) {
      setShowContent(false);
      const password = prompt("Enter the secret key:");
      if (password === "defaultPassword") {
        setShowContent(true);
      } else {
        setWrongPasswordEntered(true);
      }
      console.log('the password entered was', password)
    } else {
      setShowContent(true)
    }
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <BackButton href="/"></BackButton>
      <h1 className="mt-xs">{title}</h1>

      <div className={`prose ${!showContent && "hidden"}`}>
        <MDXRemote {...unhydratedContent} components={MDXComponents} />
      </div>
      {wrongPasswordEntered && (
        <div className="text-red-500 font-bold">
          You entered the wrong password. Please reload the page and try again.
          Contact your the person in charge if you do not know the password
        </div>
      )}
    </>
  );
};

export async function getStaticPaths(context) {
  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const { slug } = context.params;

  const { title, unhydratedContent, auth } = await getMD(slug);

  return {
    props: {
      title,
      unhydratedContent,
      auth,
    },
  };
}

export default Guide;
