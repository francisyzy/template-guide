import Head from "next/head";

import "styles/globals.css";
import "styles/base.scss";
import "styles/utilities.scss";
import "styles/components.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>eMT-RAC Guide</title>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
