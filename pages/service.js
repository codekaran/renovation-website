import Head from "next/head";
import { Fragment } from "react";
import ServicePage from "../components/ServicePage";

const images = [
  "https://images.unsplash.com/photo-1618832515490-e181c4794a45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVub3ZhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
];
const service = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Service | RENGEB</title>
      </Head>
      <ServicePage data={props.data.sections} images={images} />
    </Fragment>
  );
};

export default service;

export async function getStaticProps({ locale }) {
  let data = {};
  const lang = locale === "nl" ? "nl" : "en";
  try {
    let res = await fetch(
      "http://161.35.41.189/getData?website=rengeb&page=service&lang=" + lang
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
