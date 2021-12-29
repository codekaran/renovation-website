import Head from "next/head";
import { Fragment } from "react";
import ContactPage from "../components/ContactPage";

const contact = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Contact me | RENGEB</title>
      </Head>
      <ContactPage data={props.data} />
    </Fragment>
  );
};

export default contact;

export async function getStaticProps({ locale }) {
  const data = [
    {
      Heading: "Contact",
      SubHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      Intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh sit faucibus massa. Integer blandit quisque rutrum quis mauris blandit amet. Et, mus fames fringilla nisi. Sit etiam egestas posuere id enim quis leo. Tortor consectetur egestas dapibus non.",
    },
    {
      Heading: "Let's Connect",
      SubHeading: "Do you have any query? Or just want to talk over a coffee",
      FormFName: "First name",
      FormLName: "Last Name",
      FormEmail: "Email Address",
      FormMessage: "Message",
    },
    {
      Heading: "Get in touch",
      PhoneHeading: "Contact no.",
      PhoneSubHeading: "+362 2522065132",
      EmailHeading: "Email address",
      EmailSubHeading: "hello@gmail.com",
      AddressHeading: "Address",
      AddressSubHeading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit uthabitant eget ut nunc",
    },
  ];

  return {
    props: { data },
  };
}
