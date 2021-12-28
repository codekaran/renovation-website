import Head from "next/head";
import { Fragment } from "react";
import ContactPage from "../components/ContactPage";

const contact = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact me | RENGEB</title>
      </Head>
      <ContactPage />
    </Fragment>
  );
};

export default contact;
