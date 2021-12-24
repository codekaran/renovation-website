import React from "react";
import Image from "next/image";
import HiremeSection from "./HiremeSection";
import serviceHero from "../public/service-hero.png";
import parse from "html-react-parser";

const ServicePage = (props) => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-heading">{parse(props.data[0].Heading)}</div>
        <div className="section">
          <div className="heading">{parse(props.data[1].Heading)}</div>
          <div className="content">
            <div className="sub-heading">{parse(props.data[1].SubHeading)}</div>
            <div className="body">{parse(props.data[1].Intro)}</div>
          </div>
          <div className="hero-image">
            <Image src={serviceHero} alt="service-hero" />
          </div>
        </div>
      </div>

      {/* Hire me section */}
      <HiremeSection
        heading={props.data[2].Heading}
        body={props.data[2].Intro}
        image={props.images[0]}
        button={props.data[2].Button}
      />

      {/* Service Section */}
      <div className="service-section">
        <div className="heading"></div>
        <div className="content">
          {/* Card 1 */}
          <div className="card">
            <div className="float">1</div>
            <div
              className="image bg-img"
              style={{
                backgroundImage: "url(" + props.images[0] + ")",
              }}
            />
            <div className="card-body">
              <div className="sub-heading">
                {parse(props.data[3].CardHeading1)}
              </div>
              <div className="body">{parse(props.data[3].CardIntro1)}</div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card">
            <div className="float">2</div>
            <div
              className="image bg-img"
              style={{
                backgroundImage: "url(" + props.images[0] + ")",
              }}
            />
            <div className="card-body">
              <div className="sub-heading">
                {parse(props.data[3].CardHeading2)}
              </div>
              <div className="body">{parse(props.data[3].CardIntro2)}</div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card">
            <div className="float">3</div>
            <div
              className="image bg-img"
              style={{
                backgroundImage: "url(" + props.images[0] + ")",
              }}
            />
            <div className="card-body">
              <div className="sub-heading">
                {parse(props.data[3].CardHeading3)}
              </div>
              <div className="body">{parse(props.data[3].CardIntro3)}</div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="card">
            <div className="float">4</div>
            <div
              className="image bg-img"
              style={{
                backgroundImage: "url(" + props.images[0] + ")",
              }}
            />
            <div className="card-body">
              <div className="sub-heading">
                {parse(props.data[3].CardHeading4)}
              </div>
              <div className="body">{parse(props.data[3].CardIntro4)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
