import { Fragment } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "../styles/styles.css";

const data = {
  navbar: {
    heading: "Rengeb",
    links: {
      home: "Home",
      about: "About",
      service: "Service",
    },
    languages: ["en", "nl"],
    button1: "Hire me",
    button2: "My work",
  },
  footer: {
    heading: "Rengeb",
    phone: {
      heading: "Contact",
      subHeading: "+123-4567-890",
    },
    email: {
      heading: "Email",
      subHeading: "example@example.com",
    },
    address: {
      heading: "Address",
      subHeading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh sit faucibus massa. Integer blandit quisque rutrum quis mauris blandit amet.",
    },
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Navbar data={data.navbar} />
      <Component {...pageProps} />
      <Footer data={data.footer} />
    </Fragment>
  );
}

export default MyApp;
