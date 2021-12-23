import React from "react";
import Image from "next/image";
import HiremeSection from "./HiremeSection";
import serviceHero from "../public/service-hero.png";
import parse from "html-react-parser";
const url =
  "https://images.unsplash.com/photo-1618832515490-e181c4794a45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVub3ZhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
const ServicePage = (props) => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-heading">{parse(props.data.hero.heading)}</div>
        <div className="section">
          <div className="heading">
            {parse(props.data.hero.section.heading)}
          </div>
          <div className="content">
            <div className="sub-heading">
              {parse(props.data.hero.section.subHeading)}
            </div>
            <div className="body">{parse(props.data.hero.section.body)}</div>
          </div>
          <div className="hero-image">
            <Image src={serviceHero} alt="service-hero" />
          </div>
        </div>
      </div>

      {/* Hire me section */}
      <HiremeSection
        heading={props.data.hireme.heading}
        body={props.data.hireme.body}
        image={props.data.hireme.image}
        button={props.data.hireme.button}
      />

      {/* Service Section */}
      <div className="service-section">
        <div className="heading"></div>
        <div className="content">
          {props.data.service.services.map((e, index) => {
            return (
              <div className="card" key={index}>
                <div className="float">{index + 1}</div>
                <div
                  className="image bg-img"
                  style={{
                    backgroundImage: "url(" + e.image + ")",
                  }}
                />
                <div className="card-body">
                  <div className="sub-heading">{parse(e.heading)}</div>
                  <div className="body">{parse(e.body)}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
