import Head from "next/head";
import { Fragment } from "react";
import HomePage from "../components/HomePage";

const Images = [
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
];

const gallery = [
  "./gallery1.png",
  "./gallery2.png",
  "./gallery3.png",
  "./gallery4.png",
  "./gallery5.png",
  "./gallery6.png",
  "./gallery7.png",
  "./gallery8.png",
  "./gallery9.png",
  "./gallery10.png",
  "./gallery11.png",
];

const Home = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Home | RENGEB</title>
      </Head>
      <HomePage data={props.data.sections} images={Images} gallery={gallery} />
    </Fragment>
  );
};

export default Home;

export async function getStaticProps({ locale }) {
  let data = {};
  const lang = locale === "nl" ? "nl" : "en";
  try {
    let res = await fetch(
      "http://161.35.41.189/getData?website=rengeb&page=home&lang=" + lang
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
