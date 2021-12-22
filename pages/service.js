import Head from "next/head";
import { Fragment } from "react";
import ServicePage from "../components/ServicePage";

const service = () => {
  return (
    <Fragment>
      <Head>
        <title>Service | RENGEB</title>
      </Head>
      <ServicePage />
    </Fragment>
  );
};

export default service;
