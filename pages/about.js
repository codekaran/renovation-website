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
      <AboutPage data={props.data} images={images}/>
    </Fragment>
  );
};

export default about;

export async function getStaticProps() {
  const data = [
    {
      Heading: "About me",
      Intro1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh sit faucibus massa. Integer blandit quisque rutrum quis mauris blandit amet. Et, mus fames fringilla nisi. Sit etiam egestas posuere id enim quis leo. Tortor consectetur egestas dapibus non.",
      Intro2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh sit faucibus massa. Integer blandit quisque rutrum quis mauris blandit amet. Et, mus fames fringilla nisi. Sit etiam egestas posuere id enim quis leo. Tortor consectetur egestas dapibus non.",
      Intro3:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh sit faucibus massa. Integer blandit quisque rutrum quis mauris blandit amet. Et, mus fames fringilla nisi. Sit etiam egestas posuere id enim quis leo. Tortor consectetur egestas dapibus non.",
      SubHeading: "Follow me on",
    },
    {
      PhoneHeading: "Contact no.",
      PhoneSubHeading: "+362 2522065132",
      EmailHeading: "Email address",
      EmailSubHeading: "hello@gmail.com",
      AddressHeading: "Address",
      AddressSubHeading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut habitant eget ut nunc",
    },
    {
      Heading: "Skills I have",
      CardHeading1: "Skill 1",
      CardIntro1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum viverra bibendum fringilla sed dolor. Neque porta elementum erat vitae cursus at. Volutpat,",
      CardHeading2: "Skill 2",
      CardIntro2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum viverra bibendum fringilla sed dolor. Neque porta elementum erat vitae cursus at. Volutpat,",
      CardHeading3: "Skill 3",
      CardIntro3:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum viverra bibendum fringilla sed dolor. Neque porta elementum erat vitae cursus at. Volutpat,",
      CardHeading4: "Skill 4",
      CardIntro4:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum viverra bibendum fringilla sed dolor. Neque porta elementum erat vitae cursus at. Volutpat,",
      CardHeading5: "Skill 5",
      CardIntro5:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum viverra bibendum fringilla sed dolor. Neque porta elementum erat vitae cursus at. Volutpat,",
    },
    {
      Heading: "Do you want to renovate your house or office ?",
      Intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum viverra bibendum fringilla sed dolor. Neque porta elementum erat vitae cursus at. Volutpat,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum viverra bibendum fringilla sed dolor.",
      Button: "Hire me",
    },
  ];
  return {
    props: { data },
  };
}
