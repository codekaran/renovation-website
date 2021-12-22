import Head from "next/head";
import { Fragment } from "react";
import HomePage from "../components/HomePage";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Home | RENGEB</title>
      </Head>
      <HomePage />
    </Fragment>
  );
};

export default Home;
