import React, { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import parse from "html-react-parser";

const ContactPage = (props) => {
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

  const form = (props) => {
    return (
      <form className="form">
        <div className="input">
          <p>
            {parse(props.FormFName)} <span className="required">*</span>
          </p>
          <input
            type="text"
            required
            placeholder="ABC"
            value={fname}
            onChange={handleChange("fname")}
          />
        </div>
        <div className="input">
          <p>
          {parse(props.FormLName)} <span className="required">*</span>
          </p>
          <input
            type="text"
            required
            placeholder="XYZ"
            value={lname}
            onChange={handleChange("lname")}
          />
        </div>
        <div className="input">
          <p>
          {parse(props.FormEmail)}<span className="required">*</span>
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
          {parse(props.FormMessage)} <span className="required">*</span>
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
          <h1>{parse(props.data[0].Heading)}</h1>
          <h3>{parse(props.data[0].SubHeading)}</h3>
          <p>{parse(props.data[0].Intro)}</p>
        </div>
        <div className="contact-form bg-yellow">
          <h1>{parse(props.data[1].Heading)}</h1>
          <h3>{parse(props.data[1].SubHeading)}</h3>
          {form(props.data[1])}
        </div>
      </div>

      {/* Contact section */}
      <div className="contact-section">
        <h1>{parse(props.data[2].Heading)}</h1>
        <div className="content">
          <div className="card">
            <div className="icon">
              <FaPhoneAlt />
            </div>
            <h3 className="heading">{parse(props.data[2].PhoneHeading)}</h3>
            <p className="sub-heading">
              {parse(props.data[2].PhoneSubHeading)}
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <MdEmail />
            </div>
            <h3 className="heading">{parse(props.data[2].EmailHeading)}</h3>
            <p className="sub-heading">
              {parse(props.data[2].EmailSubHeading)}
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <MdLocationOn />
            </div>
            <h3 className="heading">{parse(props.data[2].AddressHeading)}</h3>
            <p className="sub-heading">
              {parse(props.data[2].AddressSubHeading)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
