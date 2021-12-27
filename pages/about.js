import Head from "next/head";
import React, { Fragment } from "react";
import AboutPage from "../components/AboutPage";

const images = [
  "https://images.unsplash.com/photo-1597476817120-9b82cef5ce82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVub3ZhdGlvbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
];

const about = (props) => {
  return (
    <Fragment>
      <Head>
        <title>About me | RENGEB</title>
      </Head>
      <AboutPage data={props.data.sections} images={images}/>
    </Fragment>
  );
};

export default about;

export async function getStaticProps() {
  let data = {};
  // const lang = locale === "nl" ? "nl" : "en";
  try {
    let res = await fetch(
      "http://161.35.41.189/getData?website=rengeb&page=about&lang=en"
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
