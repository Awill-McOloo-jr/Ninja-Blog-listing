import React from "react";
import Head from "next/head";

function about() {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="ninjas" />
      </Head>

      <div>
        <h1>About</h1>
        <p>This an About us page</p>
      </div>
    </>
  );
}

export default about;
