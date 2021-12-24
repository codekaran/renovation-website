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
      <ServicePage data={props.data} images={images} />
    </Fragment>
  );
};

export default service;
export async function getStaticProps() {
  const data = [
    { Heading: "Service" },
    {
      Heading: "What I do",
      SubHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      Intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh sit faucibus massa. Integer blandit quisque rutrum quis mauris blandit amet. Et, mus fames fringilla nisi. Sit etiam egestas posuere id enim quis leo. Tortor consectetur egestas dapibus non.",
    },
    {
      Heading: "Do you want to renovate your house or office ?",
      Intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum viverra bibendum fringilla sed dolor. Neque porta elementum erat vitae cursus at. Volutpat,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum viverra bibendum fringilla sed dolor.",
      Button: "Hire me",
    },
    {
      Heading: "What I provide",
      CardHeading1: "Service 1",
      CardIntro1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh sit faucibus massa. Integer blandit quisque rutrum quis mauris blandit amet",
      CardHeading2: "Service 1",
      CardIntro2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh sit faucibus massa. Integer blandit quisque rutrum quis mauris blandit amet",
      CardHeading3: "Service 1",
      CardIntro3:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh sit faucibus massa. Integer blandit quisque rutrum quis mauris blandit amet",
      CardHeading4: "Service 1",
      CardIntro4:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh sit faucibus massa. Integer blandit quisque rutrum quis mauris blandit amet",
    },
  ];
  return {
    props: { data },
  };
}
