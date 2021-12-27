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
        <h1 className="hero-heading">{parse(props.data[0].Heading)}</h1>
        <div className="section">
          <h2 className="heading">{parse(props.data[1].Heading)}</h2>
          <div className="content">
            <h3 className="sub-heading">{parse(props.data[1].SubHeading)}</h3>
            <p className="body">{parse(props.data[1].Intro)}</p>
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
        <h1 className="heading">{parse(props.data[3].Heading)}</h1>
        <div className="content">
          {/* Card 1 */}
          <div className="card">
            <div className="float">1</div>
            <div
              className="image"
              style={{ position: "relative", zIndex: "-1" }}
            >
              <Image
                src="/service.png"
                alt="Service 1"
                layout="fill"
              />
            </div>
            <div className="card-body">
              <h3 className="sub-heading">
                {parse(props.data[3].CardHeading1)}
              </h3>
              <p className="body">{parse(props.data[3].CardIntro1)}</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card">
            <div className="float">2</div>
            <div
              className="image"
              style={{ position: "relative", zIndex: "-1" }}
            >
              <Image
                src="/service.png"
                alt="Service 1"
                layout="fill"
              />
            </div>
            <div className="card-body">
              <h3 className="sub-heading">
                {parse(props.data[3].CardHeading2)}
              </h3>
              <p className="body">{parse(props.data[3].CardIntro2)}</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card">
            <div className="float">3</div>
            <div
              className="image"
              style={{ position: "relative", zIndex: "-1" }}
            >
              <Image
                src="/service.png"
                alt="Service 1"
                layout="fill"
              />
            </div>
            <div className="card-body">
              <h3 className="sub-heading">
                {parse(props.data[3].CardHeading3)}
              </h3>
              <p className="body">{parse(props.data[3].CardIntro3)}</p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="card">
            <div className="float">4</div>
            <div
              className="image"
              style={{ position: "relative", zIndex: "-1" }}
            >
              <Image
                src="/service.png"
                alt="Service 1"
                layout="fill"
              />
            </div>
            <div className="card-body">
              <h3 className="sub-heading">
                {parse(props.data[3].CardHeading4)}
              </h3>
              <p className="body">{parse(props.data[3].CardIntro4)}</p>
            </div>
          </div>
          {/* Card 5 */}
          <div className="card">
            <div className="float">5</div>
            <div
              className="image"
              style={{ position: "relative", zIndex: "-1" }}
            >
              <Image
                src="/service.png"
                alt="Service 1"
                layout="fill"
              />
            </div>
            <div className="card-body">
              <h3 className="sub-heading">
                {parse(props.data[3].CardHeading5)}
              </h3>
              <p className="body">{parse(props.data[3].CardIntro5)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
