import Head from "next/head";
import React, { Fragment } from "react";
import AboutPage from "../components/AboutPage";

const about = () => {
  return (
    <Fragment>
      <Head>
        <title>About me | RENGEB</title>
      </Head>
      <AboutPage />
    </Fragment>
  );
};

export default about;
