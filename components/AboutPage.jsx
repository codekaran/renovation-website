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
        <h1 className="heading">{parse(props.data[0].Heading)}</h1>
        <div>
          <p className="intro width1">{parse(props.data[0].Intro1)}</p>
          <p className="intro width2">{parse(props.data[0].Intro2)}</p>
          <p className="intro width3">{parse(props.data[0].Intro3)}</p>
        </div>
        <div className="hero-images">
          <div
            className="bg-img img1"
            style={{ backgroundImage: "url(" + props.images[0] + ")" }}
          ></div>
          <div
            className="bg-img img2"
            style={{ backgroundImage: "url(" + props.images[0] + ")" }}
          ></div>
          <div
            className="bg-img img3"
            style={{ backgroundImage: "url(" + props.images[0] + ")" }}
          ></div>
        </div>
        <div className="social-icons">
          <h3 className="sub-heading">{parse(props.data[0].SubHeading)}</h3>
          <div className="icons">
            <FaFacebookF className="pointer" />
            <AiFillInstagram className="pointer" />
            <FaLinkedinIn className="pointer" />
            <FaTwitter className="pointer" />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section bg-yellow">
        <div className="card">
          <div className="icon">
            <FaPhoneAlt />
          </div>
          <h3 className="heading">{parse(props.data[1].PhoneHeading)}</h3>
          <p className="sub-heading">
            {parse(props.data[1].PhoneSubHeading)}
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <MdEmail />
          </div>
          <h3 className="heading">{parse(props.data[1].EmailHeading)}</h3>
          <p className="sub-heading">
            {parse(props.data[1].EmailSubHeading)}
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <MdLocationOn />
          </div>
          <h3 className="heading">{parse(props.data[1].AddressHeading)}</h3>
          <p className="sub-heading">
            {parse(props.data[1].AddressSubHeading)}
          </p>
        </div>
      </div>

      {/* Skills section */}
      <div className="skill-section">
        <h1 className="heading">{parse(props.data[2].Heading)}</h1>
        <div className="content">
          {/* Card 1 */}
          <div className="card">
            <div
              className="card-image bg-img"
              style={{
                backgroundImage: "url(" + props.images[0] + ")",
              }}
            />
            <h3 className="card-heading">
              {parse(props.data[2].CardHeading1)}
            </h3>
            <p className="card-body">{parse(props.data[2].CardIntro1)}</p>
          </div>
          {/* Card 2 */}
          <div className="card">
            <div
              className="card-image bg-img"
              style={{
                backgroundImage: "url(" + props.images[0] + ")",
              }}
            />
            <h3 className="card-heading">
              {parse(props.data[2].CardHeading2)}
            </h3>
            <p className="card-body">{parse(props.data[2].CardIntro2)}</p>
          </div>
          {/* Card 3 */}
          <div className="card">
            <div
              className="card-image bg-img"
              style={{
                backgroundImage: "url(" + props.images[0] + ")",
              }}
            />
            <h3 className="card-heading">
              {parse(props.data[2].CardHeading3)}
            </h3>
            <p className="card-body">{parse(props.data[2].CardIntro3)}</p>
          </div>
          {/* Card 4 */}
          <div className="card">
            <div
              className="card-image bg-img"
              style={{
                backgroundImage: "url(" + props.images[0] + ")",
              }}
            />
            <h3 className="card-heading">
              {parse(props.data[2].CardHeading4)}
            </h3>
            <p className="card-body">{parse(props.data[2].CardIntro4)}</p>
          </div>
          {/* Card 5 */}
          <div className="card">
            <div
              className="card-image bg-img"
              style={{
                backgroundImage: "url(" + props.images[0] + ")",
              }}
            />
            <h3 className="card-heading">
              {parse(props.data[2].CardHeading5)}
            </h3>
            <p className="card-body">{parse(props.data[2].CardIntro5)}</p>
          </div>
        </div>
      </div>

      {/* Hire me section */}
      <HiremeSection
        heading={props.data[3].Heading}
        body={props.data[3].Intro}
        image={props.images[0]}
        button={props.data[3].Button}
      />
    </div>
  );
};

export default AboutPage;
