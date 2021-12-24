import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import parse from "html-react-parser";
import Link from "next/link";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="box">
        <div className="brand-name">
          <Link href="/" passHref>
            <span className="pointer">{parse(props.data.heading)}</span>
          </Link>
        </div>
        <div className="icons">
          <FaFacebookF className="pointer" />
          <AiFillInstagram className="pointer" />
          <FaLinkedinIn className="pointer" />
          <FaTwitter className="pointer" />
        </div>
      </div>
      <div className="box">
        <div className="contact">
          <div className="heading">{parse(props.data.phone.heading)}</div>
          <div className="sub-heading">
            {parse(props.data.phone.subHeading)}
          </div>
        </div>
        <div className="email">
          <div className="heading">{parse(props.data.email.heading)}</div>
          <div className="sub-heading">
            {parse(props.data.email.subHeading)}
          </div>
        </div>
      </div>
      <div className="box">
        <div className="address">
          <div className="heading">{parse(props.data.address.heading)}</div>
          <div className="sub-heading">
            {parse(props.data.address.subHeading)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
