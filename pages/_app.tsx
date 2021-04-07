import Head from "next/head";

import "styles/globals.css";
import "styles/base.scss";
import "styles/utilities.scss";
import "styles/components.scss";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TEMPLATE_TITLE Guide</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📕</text></svg>"></link>
      </Head>

      <main className="space">

      <Component {...pageProps} />
      </main>
    </>
  );
}

export default App;
