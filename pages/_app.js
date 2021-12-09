import { Fragment } from "react";
import "../styles/globals.css";
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
