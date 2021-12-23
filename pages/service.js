import Head from "next/head";
import { Fragment } from "react";
import ServicePage from "../components/ServicePage";

const data = {
  hero: {
    heading: "Service",
    section: {
      heading: "What I do",
      subHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh sit faucibus massa. Integer blandit quisque rutrum quis mauris blandit amet. Et, mus fames fringilla nisi. Sit etiam egestas posuere id enim quis leo. Tortor consectetur egestas dapibus non.",
    },
  },
  hireme: {
    heading: "Do you want to renovate your house or office ?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum viverra bibendum fringilla sed dolor. Neque porta elementum erat vitae cursus at. Volutpat,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum viverra bibendum fringilla sed dolor.",
    button: "Hire me",
    image:
      "https://images.unsplash.com/photo-1597476817120-9b82cef5ce82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVub3ZhdGlvbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  service: {
    heading: "What I provide",
    services: [
      {
        image:
          "https://images.unsplash.com/photo-1618832515490-e181c4794a45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVub3ZhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        heading: "Service 1",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh sit faucibus massa. Integer blandit quisque rutrum quis mauris blandit amet",
      },
      {
        image:
          "https://images.unsplash.com/photo-1618832515490-e181c4794a45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVub3ZhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        heading: "Service 1",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh sit faucibus massa. Integer blandit quisque rutrum quis mauris blandit amet",
      },
      {
        image:
          "https://images.unsplash.com/photo-1618832515490-e181c4794a45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVub3ZhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        heading: "Service 1",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh sit faucibus massa. Integer blandit quisque rutrum quis mauris blandit amet",
      },
      {
        image:
          "https://images.unsplash.com/photo-1618832515490-e181c4794a45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVub3ZhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        heading: "Service 1",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh sit faucibus massa. Integer blandit quisque rutrum quis mauris blandit amet",
      },
      {
        image:
          "https://images.unsplash.com/photo-1618832515490-e181c4794a45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVub3ZhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        heading: "Service 1",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh sit faucibus massa. Integer blandit quisque rutrum quis mauris blandit amet",
      },
    ],
  },
};

const service = () => {
  return (
    <Fragment>
      <Head>
        <title>Service | RENGEB</title>
      </Head>
      <ServicePage data={data} />
    </Fragment>
  );
};

export default service;
