import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="box">
        <div className="brand-name">Rengeb</div>
        <div className="icons">
          <FaFacebookF />
          <AiFillInstagram />
          <FaLinkedinIn />
          <FaTwitter />
        </div>
      </div>
      <div className="box">
        <div className="contact">
          <div className="heading">Contact</div>
          <div className="sub-heading">+123-4567-890</div>
        </div>
        <div className="email">
          <div className="heading">Email</div>
          <div className="sub-heading">example@example.com</div>
        </div>
      </div>
      <div className="box">
        <div className="address">
          <div className="heading">Address</div>
          <div className="sub-heading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut
            habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh
            sit faucibus massa. Integer blandit quisque rutrum quis mauris
            blandit amet.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
