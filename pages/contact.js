import Head from "next/head";
import { Fragment } from "react";
import ContactPage from "../components/ContactPage";

const contact = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Contact me | RENGEB</title>
      </Head>
      <ContactPage data={props.data.sections} />
    </Fragment>
  );
};

export default contact;

export async function getStaticProps({ locale }) {
  let data = {};
  const lang = locale === "nl" ? "nl" : locale === "en" ? "en" : "fr";
  try {
    let res = await fetch(
      "http://161.35.41.189/getData?website=rengeb&page=contact&lang=" + lang
    );
    res = await res.json();
    data = JSON.parse(res.data);
    data["path"] = "";
  } catch (err) {
    console.log(err);
  }

  return {
    props: { data },
    revalidate: 1,
  };
}
