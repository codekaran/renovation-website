import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail, MdLocationOn } from "react-icons/md";
import HiremeSection from "./HiremeSection";
import parse from "html-react-parser";

const AboutPage = (props) => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="heading">{parse(props.data.hero.heading)}</div>
        <div>
          <div className="intro width1">{parse(props.data.hero.intro1)}</div>
          <div className="intro width2">{parse(props.data.hero.intro2)}</div>
          <div className="intro width3">{parse(props.data.hero.intro3)}</div>
        </div>
        <div className="hero-images">
          <div
            className="bg-img img1"
            style={{ backgroundImage: "url(" + props.data.hero.image1 + ")" }}
          ></div>
          <div
            className="bg-img img2"
            style={{ backgroundImage: "url(" + props.data.hero.image2 + ")" }}
          ></div>
          <div
            className="bg-img img3"
            style={{ backgroundImage: "url(" + props.data.hero.image3 + ")" }}
          ></div>
        </div>
        <div className="social-icons">
          <div className="sub-heading">{parse(props.data.hero.social)}</div>
          <div className="icons">
            <FaFacebookF className="pointer"/>
            <AiFillInstagram className="pointer"/>
            <FaLinkedinIn className="pointer"/>
            <FaTwitter className="pointer"/>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section bg-yellow">
        <div className="card">
          <div className="icon">
            <FaPhoneAlt />
          </div>
          <div className="heading">
            {parse(props.data.contact.phone.heading)}
          </div>
          <div className="sub-heading">
            {parse(props.data.contact.phone.subHeading)}
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <MdEmail />
          </div>
          <div className="heading">
            {parse(props.data.contact.email.heading)}
          </div>
          <div className="sub-heading">
            {parse(props.data.contact.email.subHeading)}
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <MdLocationOn />
          </div>
          <div className="heading">
            {parse(props.data.contact.address.heading)}
          </div>
          <div className="sub-heading">
            {parse(props.data.contact.address.subHeading)}
          </div>
        </div>
      </div>

      {/* Skills section */}
      <div className="skill-section">
        <div className="heading">{parse(props.data.skill.heading)}</div>
        <div className="content">
          {props.data.skill.skills.map((e, key) => {
            return (
              <div className="card" key={key}>
                <div
                  className="card-image bg-img"
                  style={{ backgroundImage: "url(" + e.image + ")" }}
                />
                <div className="card-heading">{parse(e.heading)}</div>
                <div className="card-body">{parse(e.body)}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hire me section */}
      <HiremeSection
        heading={props.data.hireme.heading}
        body={props.data.hireme.body}
        image={props.data.hireme.image}
        button={props.data.hireme.button}
      />
    </div>
  );
};

export default AboutPage;
