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
        <div className="heading">{parse(props.data[0].Heading)}</div>
        <div>
          <div className="intro width1">{parse(props.data[0].Intro1)}</div>
          <div className="intro width2">{parse(props.data[0].Intro2)}</div>
          <div className="intro width3">{parse(props.data[0].Intro3)}</div>
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
          <div className="sub-heading">{parse(props.data[0].SubHeading)}</div>
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
          <div className="heading">{parse(props.data[1].PhoneHeading)}</div>
          <div className="sub-heading">
            {parse(props.data[1].PhoneSubHeading)}
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <MdEmail />
          </div>
          <div className="heading">{parse(props.data[1].EmailHeading)}</div>
          <div className="sub-heading">
            {parse(props.data[1].EmailSubHeading)}
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <MdLocationOn />
          </div>
          <div className="heading">{parse(props.data[1].AddressHeading)}</div>
          <div className="sub-heading">
            {parse(props.data[1].AddressSubHeading)}
          </div>
        </div>
      </div>

      {/* Skills section */}
      <div className="skill-section">
        <div className="heading">{parse(props.data[2].Heading)}</div>
        <div className="content">
          {/* Card 1 */}
          <div className="card">
            <div
              className="card-image bg-img"
              style={{
                backgroundImage: "url(" + props.images[0] + ")",
              }}
            />
            <div className="card-heading">
              {parse(props.data[2].CardHeading1)}
            </div>
            <div className="card-body">{parse(props.data[2].CardIntro1)}</div>
          </div>
          {/* Card 2 */}
          <div className="card">
            <div
              className="card-image bg-img"
              style={{
                backgroundImage: "url(" + props.images[0] + ")",
              }}
            />
            <div className="card-heading">
              {parse(props.data[2].CardHeading2)}
            </div>
            <div className="card-body">{parse(props.data[2].CardIntro2)}</div>
          </div>
          {/* Card 3 */}
          <div className="card">
            <div
              className="card-image bg-img"
              style={{
                backgroundImage: "url(" + props.images[0] + ")",
              }}
            />
            <div className="card-heading">
              {parse(props.data[2].CardHeading3)}
            </div>
            <div className="card-body">{parse(props.data[2].CardIntro3)}</div>
          </div>
          {/* Card 4 */}
          <div className="card">
            <div
              className="card-image bg-img"
              style={{
                backgroundImage: "url(" + props.images[0] + ")",
              }}
            />
            <div className="card-heading">
              {parse(props.data[2].CardHeading4)}
            </div>
            <div className="card-body">{parse(props.data[2].CardIntro4)}</div>
          </div>
          {/* Card 5 */}
          <div className="card">
            <div
              className="card-image bg-img"
              style={{
                backgroundImage: "url(" + props.images[0] + ")",
              }}
            />
            <div className="card-heading">
              {parse(props.data[2].CardHeading5)}
            </div>
            <div className="card-body">{parse(props.data[2].CardIntro5)}</div>
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
