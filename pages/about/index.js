import React from "react";
import AboutPage from "../../components/AboutPage";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdPin } from "react-icons/io";
import skill_png from "../../public/skill.png";
import hire_me_img from "../../public/service_hire_me.png";

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const long_text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit uthabitant eget ut nunc. Consequat quis senectus praesent vitae,nibh sit faucibus massa. Integer blandit quisque rutrum quismauris blandit amet. Et, mus fames fringilla nisi. Sit etiamegestas posuere id enim quis leo. Tortor consectetur egestasdapibus non.";
const AboutPageData = [
  {
    pageHeading: "About me",
    content1: long_text,
    content2: long_text,
    content3: long_text,
    social: {
      heading: "Follow me on",
      icons: [
        <FaFacebookF key={0} />,
        <AiFillInstagram key={1} />,
        <FaTwitter key={2} />,
        <FaLinkedinIn key={3} />,
      ],
    },
  },
  {
    contact: [
      { icon: <FaPhoneAlt />, heading: "Contact no.", body: "+123 456 7890" },
      {
        icon: <MdEmail />,
        heading: "Email address",
        body: "example@example.com",
      },
      { icon: <IoMdPin />, heading: "Address", body: text },
    ],
  },
  {
    heading: "Skills I have",
    content: [
      { image: skill_png, heading: "Skill 1", body: long_text },
      { image: skill_png, heading: "Skill 2", body: long_text },
      { image: skill_png, heading: "Skill 3", body: long_text },
      { image: skill_png, heading: "Skill 4", body: long_text },
    ],
  },
  {
    heading: "Do you want to renovate your house or office ?",
    content: long_text,
    image: hire_me_img,
  },
];

const Index = () => {
  return (
    <div>
      <AboutPage data={AboutPageData} />
    </div>
  );
};

export default Index;
