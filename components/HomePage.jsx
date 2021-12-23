import React from "react";
import Image from "next/image";
import suitcase from "../public/Suitcase.svg";
import lightbulb from "../public/Lightbulb.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import parse from "html-react-parser";
import { BiBuildingHouse } from "react-icons/bi";

const responsive = {
  web: {
    breakpoint: { max: 4000, min: 500 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
  },
};

const HomePage = (props) => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="lightbulb">
          <Image src={lightbulb} alt="lightbulb" />
        </div>
        <div className="content">
          <div className="greeting">{parse(props.data.hero.greeting)}</div>
          <div className="name">{parse(props.data.hero.name)}</div>
          <div className="profession">{parse(props.data.hero.profession)}</div>
          <div className="intro">{parse(props.data.hero.intro)}</div>
          <div className="buttons">
            <div className="btn">
              <Image src={suitcase} alt="Suitcase" />
              {parse(props.data.hero.button1)}
            </div>
            <div className="btn2">
              <BiBuildingHouse />
              {parse(props.data.hero.button2)}
            </div>
          </div>
        </div>
        <div
          className="hero-image bg-img"
          style={{ backgroundImage: "url(" + props.data.hero.image + ")" }}
        />
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="heading">{parse(props.data.about.heading)}</div>
        <div className="content">
          <div
            className="image bg-img"
            style={{ backgroundImage: "url(" + props.data.about.image + ")" }}
          />
          <div className="body">{parse(props.data.about.body)}</div>
        </div>
      </div>

      {/* Service Section */}
      <div className="service-section bg-yellow">
        <div className="heading">{parse(props.data.service.heading)}</div>
        <div className="content">
          {props.data.service.services.map((e, key) => {
            return (
              <div className="card" key={key}>
                <div
                  className="image bg-img"
                  style={{
                    backgroundImage: "url(" + e.image + ")",
                  }}
                />
                <div className="card-body">
                  <div className="title">{parse(e.title)}</div>
                  <div className="body">{parse(e.body)}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-section">
        <div className="heading">Work I have done</div>
        <div className="content-web">
          {props.data.gallery.webView.map((image, key) => {
            return (
              <div
                key={key}
                className="image bg-img"
                style={{
                  backgroundImage: "url(" + image.url + ")",
                  gridColumnStart: image.col_start,
                  gridColumnEnd: image.col_end,
                  gridRowStart: image.row_start,
                  gridRowEnd: image.row_end,
                  border: "10px solid #ffffff",
                }}
              />
            );
          })}
        </div>
        <div className="content-mob">
          {props.data.gallery.mobileView.map((image, key) => {
            return (
              <div
                key={key}
                className="image bg-img"
                style={{
                  backgroundImage: "url(" + image.url + ")",
                  gridColumnStart: image.col_start,
                  gridColumnEnd: image.col_end,
                  gridRowStart: image.row_start,
                  gridRowEnd: image.row_end,
                  border: "3px solid #ffffff",
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial-section">
        <div className="heading">{parse(props.data.testimonial.heading)}</div>
        <div className="content">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
          >
            {props.data.testimonial.testimonies.map((e, key) => {
              return (
                <div className="card" key={key}>
                  <div className="box">
                    <div className="user">
                      <div
                        className="profile bg-img"
                        style={{
                          backgroundImage: "url(" + e.url + ")",
                        }}
                      ></div>
                      <div className="name">{parse(e.name)}</div>
                    </div>
                    <div className="review">{parse(e.review_msg)}</div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
