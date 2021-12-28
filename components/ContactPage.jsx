import React, { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
  });
  const { fname, lname, email, message } = formData;

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const form = () => {
    return (
      <form className="form">
        <div className="input">
          <p>
            First Name <span className="required">*</span>
          </p>
          <input
            type="text"
            required
            placeholder="Example"
            value={fname}
            onChange={handleChange("fname")}
          />
        </div>
        <div className="input">
          <p>
            Last Name <span className="required">*</span>
          </p>
          <input
            type="text"
            required
            placeholder="Example"
            value={lname}
            onChange={handleChange("lname")}
          />
        </div>
        <div className="input">
          <p>
            Email Address <span className="required">*</span>
          </p>
          <input
            type="text"
            required
            placeholder="example@gmail.com"
            value={email}
            onChange={handleChange("email")}
          />
        </div>
        <div className="input">
          <p>
            Message <span className="required">*</span>
          </p>
          <textarea
            rows="4"
            required
            placeholder="Write here..."
            value={message}
            onChange={handleChange("message")}
          />
        </div>
        <button type="submit">
          <RiSendPlaneFill />
          Send Message
        </button>
      </form>
    );
  };
  return (
    <div className="contact-page">
      {/* Hero section */}
      <div className="hero-section">
        <div className="content">
          <h1>Contact</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut
            habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh
            sit faucibus massa. Integer blandit quisque rutrum quis mauris
            blandit amet. Et, mus fames fringilla nisi. Sit etiam egestas
            posuere id enim quis leo. Tortor consectetur egestas dapibus non.
          </p>
        </div>
        <div className="contact-form bg-yellow">
          <h1>Let&apos;s Connect</h1>
          <h3>Do you have any query? Or just want to talk over a coffee</h3>
          {form()}
        </div>
      </div>

      {/* Contact section */}
      <div className="contact-section">
        <h1>Get in touch</h1>
        <div className="content">
          <div className="card">
            <div className="icon">
              <FaPhoneAlt />
            </div>
            <h3 className="heading">Contact no.</h3>
            <p className="sub-heading">+362 2522065132</p>
          </div>
          <div className="card">
            <div className="icon">
              <MdEmail />
            </div>
            <h3 className="heading">Email address</h3>
            <p className="sub-heading">hello@gmail.com</p>
          </div>
          <div className="card">
            <div className="icon">
              <MdLocationOn />
            </div>
            <h3 className="heading">Address</h3>
            <p className="sub-heading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut
              habitant eget ut nunc
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
