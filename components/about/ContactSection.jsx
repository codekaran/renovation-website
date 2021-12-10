import React from "react";
import style from "./ContactSection.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdPin } from "react-icons/io";

const ContactDetails = [
  { icon: <FaPhoneAlt />, title: "Contact no.", info: "+362 2522065132" },
  { icon: <MdEmail />, title: "Email address", info: "example@example.com" },
  {
    icon: <IoMdPin />,
    title: "Address",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];
const ContactSection = () => {
  return (
    <div className={style.contact_section}>
      {ContactDetails.map((r, key) => {
        return <Card key={key} icon={r.icon} title={r.title} info={r.info} />;
      })}
    </div>
  );
};

export default ContactSection;

const Card = (props) => {
  return (
    <div className={style.contact_card}>
      <div className={style.icon}>{props.icon}</div>
      <div className={style.title}>{props.title}</div>
      <div className={style.info}>{props.info}</div>
    </div>
  );
};
