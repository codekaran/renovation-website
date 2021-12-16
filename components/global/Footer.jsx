import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import style from "./Footer.module.css";

const Footer = () => {
  const SocialIcons = () => {
    return (
      <div className={style.social}>
        <p className={style.name}>rengeb</p>
        <div className={style.iconStrip}>
          <FaFacebookF className={style.icon} />
          <AiFillInstagram className={style.icon} />
          <FaLinkedinIn className={style.icon} />
          <FaTwitter className={style.icon} />
        </div>
      </div>
    );
  };
  const Contact = () => {
    return (
      <div className={style.contact}>
        <div>
          <p className={style.title}>Contact</p>
          <p className={style.info}>+254 36254-52-22</p>
        </div>
        <div>
          <p className={style.title}>Email</p>
          <p className={style.info}>example@example.com</p>
        </div>
      </div>
    );
  };
  const Address = () => {
    return (
      <div className={style.address}>
        <p className={style.title}>Address</p>
        <p className={style.info}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut
          habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh
          sit faucibus massa. Integer blandit quisque rutrum quis mauris blandit
          amet.
        </p>
      </div>
    );
  };
  return (
    <div className={style.main}>
      {SocialIcons()}
      {Contact()}
      {Address()}
    </div>
  );
};

export default Footer;
