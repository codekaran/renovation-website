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
          <h1 className="greeting">{parse(props.data[0].Greeting)}</h1>
          <div className="name">{parse(props.data[0].Heading)}</div>
          <div className="profession">{parse(props.data[0].SubHeading)}</div>
          <div className="intro">{parse(props.data[0].Intro)}</div>
          <div className="buttons">
            <div className="btn pointer">
              <Image src={suitcase} alt="Suitcase" />
              {parse(props.data[0].Button1)}
            </div>
            <div className="btn2 pointer">
              <BiBuildingHouse />
              {parse(props.data[0].Button2)}
            </div>
          </div>
        </div>
        <div
          className="hero-image bg-img"
          style={{ backgroundImage: "url(" + props.data[0].Image + ")" }}
        />
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="heading">{parse(props.data[1].Heading)}</div>
        <div className="content">
          <div
            className="image bg-img"
            style={{ backgroundImage: "url(" + props.data[0].Image + ")" }}
          />
          <div className="body">{parse(props.data[1].Intro)}</div>
        </div>
      </div>

      {/* Service Section */}
      <div className="service-section bg-yellow">
        <div className="heading">{parse(props.data[2].Heading)}</div>
        <div className="content">
          {/* Card 1 */}
          <div className="card">
            <div
              className="image bg-img"
              style={{
                backgroundImage: "url(" + props.data[2].CardImage1 + ")",
              }}
            />
            <div className="card-body">
              <div className="title">{parse(props.data[2].CardHeading1)}</div>
              <div className="body">{parse(props.data[2].CardIntro1)}</div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card">
            <div
              className="image bg-img"
              style={{
                backgroundImage: "url(" + props.data[2].CardImage2 + ")",
              }}
            />
            <div className="card-body">
              <div className="title">{parse(props.data[2].CardHeading2)}</div>
              <div className="body">{parse(props.data[2].CardIntro2)}</div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card">
            <div
              className="image bg-img"
              style={{
                backgroundImage: "url(" + props.data[2].CardImage3 + ")",
              }}
            />
            <div className="card-body">
              <div className="title">{parse(props.data[2].CardHeading3)}</div>
              <div className="body">{parse(props.data[2].CardIntro3)}</div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="card">
            <div
              className="image bg-img"
              style={{
                backgroundImage: "url(" + props.data[2].CardImage4 + ")",
              }}
            />
            <div className="card-body">
              <div className="title">{parse(props.data[2].CardHeading4)}</div>
              <div className="body">{parse(props.data[2].CardIntro4)}</div>
            </div>
          </div>
          {/* Card 5 */}
          <div className="card">
            <div
              className="image bg-img"
              style={{
                backgroundImage: "url(" + props.data[2].CardImage5 + ")",
              }}
            />
            <div className="card-body">
              <div className="title">{parse(props.data[2].CardHeading5)}</div>
              <div className="body">{parse(props.data[2].CardIntro5)}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-section">
        <div className="heading">{parse(props.data[3].Heading)}</div>
        <div className="content-web">
          {props.data[3].webView.map((image, key) => {
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
          {props.data[3].mobileView.map((image, key) => {
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
        <div className="heading">{parse(props.data[4].Heading)}</div>
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
            <div className="card">
              <div className="box">
                <div className="user">
                  <div
                    className="profile bg-img"
                    style={{
                      backgroundImage: "url(" + props.data[4].CardImage1 + ")",
                    }}
                  ></div>
                  <div className="name">{parse(props.data[4].CardHeading1)}</div>
                </div>
                <div className="review">{parse(props.data[4].CardIntro1)}</div>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <div className="user">
                  <div
                    className="profile bg-img"
                    style={{
                      backgroundImage: "url(" + props.data[4].CardImage2 + ")",
                    }}
                  ></div>
                  <div className="name">{parse(props.data[4].CardHeading2)}</div>
                </div>
                <div className="review">{parse(props.data[4].CardIntro2)}</div>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <div className="user">
                  <div
                    className="profile bg-img"
                    style={{
                      backgroundImage: "url(" + props.data[4].CardImage3 + ")",
                    }}
                  ></div>
                  <div className="name">{parse(props.data[4].CardHeading3)}</div>
                </div>
                <div className="review">{parse(props.data[4].CardIntro3)}</div>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <div className="user">
                  <div
                    className="profile bg-img"
                    style={{
                      backgroundImage: "url(" + props.data[4].CardImage4 + ")",
                    }}
                  ></div>
                  <div className="name">{parse(props.data[4].CardHeading4)}</div>
                </div>
                <div className="review">{parse(props.data[4].CardIntro4)}</div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
