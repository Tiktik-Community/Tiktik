import React from "react";
import Head from "next/head";

const SEO = () => {
  return (
    <Head>
      <link rel="icon" href="https://i.imgur.com/XuODa9Q.png" />
      <meta name="description" content="A Network for Coders" />

      <meta itemProp="name" content="Tiktik" />
      <meta itemProp="description" content="A Network for Coders" />
      <meta itemProp="image" content="https://i.imgur.com/XuODa9Q.png" />

      <meta property="og:url" content="https://tiktik-programming.vercel.app" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Tiktik" />
      <meta property="og:description" content="A Network for Coders" />
      <meta property="og:image" content="https://i.imgur.com/XuODa9Q.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Tiktik" />
      <meta
        name="twitter:description"
        content="A Network for Coders"
      />
      <meta name="twitter:image" content="https://i.imgur.com/XuODa9Q.png" />
    </Head>
  );
};

export default SEO;
