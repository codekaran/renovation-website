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

const url =
  "https://images.unsplash.com/photo-1597476817120-9b82cef5ce82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVub3ZhdGlvbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60";
const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="heading">About me</div>
        <div>
          <div className="intro width1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut
            habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh
            sit faucibus massa. Integer blandit quisque rutrum quis mauris
            blandit amet. Et, mus fames fringilla nisi. Sit etiam egestas
            posuere id enim quis leo. Tortor consectetur egestas dapibus non.
          </div>
          <div className="intro width2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut
            habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh
            sit faucibus massa. Integer blandit quisque rutrum quis mauris
            blandit amet.
          </div>
          <div className="intro width3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut
            habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh
            sit faucibus massa. Integer blandit quisque rutrum quis mauris
            blandit amet.
          </div>
        </div>
        <div className="hero-images">
          <div
            className="bg-img img1"
            style={{ backgroundImage: "url(" + url + ")" }}
          ></div>
          <div
            className="bg-img img2"
            style={{ backgroundImage: "url(" + url + ")" }}
          ></div>
          <div
            className="bg-img img3"
            style={{ backgroundImage: "url(" + url + ")" }}
          ></div>
        </div>
        <div className="social-icons">
          <div className="sub-heading">Follow me on</div>
          <div className="icons">
            <FaFacebookF />
            <AiFillInstagram />
            <FaLinkedinIn />
            <FaTwitter />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section bg-yellow">
        <div className="card">
          <div className="icon">
            <FaPhoneAlt />
          </div>
          <div className="heading">Contact no.</div>
          <div className="sub-heading">+362 2522065132</div>
        </div>
        <div className="card">
          <div className="icon">
            <MdEmail />
          </div>
          <div className="heading">Email address</div>
          <div className="sub-heading">hello@gmail.com</div>
        </div>
        <div className="card">
          <div className="icon">
            <MdLocationOn />
          </div>
          <div className="heading">Address</div>
          <div className="sub-heading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut
            habitant eget ut nunc
          </div>
        </div>
      </div>

      {/* Skills section */}
      <div className="skill-section">
        <div className="heading">Skills I have</div>
        <div className="content">
          <div className="card">
            <div
              className="card-image bg-img"
              style={{ backgroundImage: "url(" + url + ")" }}
            />
            <div className="card-heading">Skill 1</div>
            <div className="card-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              rutrum viverra bibendum fringilla sed dolor. Neque porta elementum
              erat vitae cursus at. Volutpat,
            </div>
          </div>
          <div className="card">
            <div
              className="card-image bg-img"
              style={{ backgroundImage: "url(" + url + ")" }}
            />
            <div className="card-heading">Skill 1</div>
            <div className="card-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              rutrum viverra bibendum fringilla sed dolor. Neque porta elementum
              erat vitae cursus at. Volutpat,
            </div>
          </div>
          <div className="card">
            <div
              className="card-image bg-img"
              style={{ backgroundImage: "url(" + url + ")" }}
            />
            <div className="card-heading">Skill 1</div>
            <div className="card-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              rutrum viverra bibendum fringilla sed dolor. Neque porta elementum
              erat vitae cursus at. Volutpat,
            </div>
          </div>
          <div className="card">
            <div
              className="card-image bg-img"
              style={{ backgroundImage: "url(" + url + ")" }}
            />
            <div className="card-heading">Skill 1</div>
            <div className="card-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              rutrum viverra bibendum fringilla sed dolor. Neque porta elementum
              erat vitae cursus at. Volutpat,
            </div>
          </div>
          <div className="card">
            <div
              className="card-image bg-img"
              style={{ backgroundImage: "url(" + url + ")" }}
            />
            <div className="card-heading">Skill 1</div>
            <div className="card-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              rutrum viverra bibendum fringilla sed dolor. Neque porta elementum
              erat vitae cursus at. Volutpat,
            </div>
          </div>
        </div>
      </div>

      {/* Hire me section */}
      <HiremeSection />
    </div>
  );
};

export default AboutPage;
