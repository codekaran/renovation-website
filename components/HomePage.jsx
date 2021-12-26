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
          <h3 className="greeting">{parse(props.data[0].Greeting)}</h3>
          <h1 className="name">{parse(props.data[0].Heading)}</h1>
          <h3 className="profession">{parse(props.data[0].SubHeading)}</h3>
          <p className="intro">{parse(props.data[0].Intro)}</p>
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
          style={{ backgroundImage: "url(" + props.images[0] + ")" }}
        />
      </div>

      {/* About Section */}
      <div className="about-section">
        <h1 className="heading">{parse(props.data[1].Heading)}</h1>
        <div className="content">
          <div
            className="image bg-img"
            style={{ backgroundImage: "url(" + props.images[1] + ")" }}
          />
          <p className="body">{parse(props.data[1].Intro)}</p>
        </div>
      </div>

      {/* Service Section */}
      <div className="service-section bg-yellow">
        <h1 className="heading">{parse(props.data[2].Heading)}</h1>
        <div className="content">
          {/* Card 1 */}
          <div className="card">
            <div
              className="image bg-img"
              style={{
                backgroundImage: "url(" + props.images[2] + ")",
              }}
            />
            <div className="card-body">
              <h3 className="title">{parse(props.data[2].CardHeading1)}</h3>
              <p className="body">{parse(props.data[2].CardIntro1)}</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card">
            <div
              className="image bg-img"
              style={{
                backgroundImage: "url(" + props.images[2] + ")",
              }}
            />
            <div className="card-body">
              <h3 className="title">{parse(props.data[2].CardHeading2)}</h3>
              <p className="body">{parse(props.data[2].CardIntro2)}</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card">
            <div
              className="image bg-img"
              style={{
                backgroundImage: "url(" + props.images[2] + ")",
              }}
            />
            <div className="card-body">
              <h3 className="title">{parse(props.data[2].CardHeading3)}</h3>
              <p className="body">{parse(props.data[2].CardIntro3)}</p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="card">
            <div
              className="image bg-img"
              style={{
                backgroundImage: "url(" + props.images[2] + ")",
              }}
            />
            <div className="card-body">
              <h3 className="title">{parse(props.data[2].CardHeading4)}</h3>
              <p className="body">{parse(props.data[2].CardIntro4)}</p>
            </div>
          </div>
          {/* Card 5 */}
          <div className="card">
            <div
              className="image bg-img"
              style={{
                backgroundImage: "url(" + props.images[2] + ")",
              }}
            />
            <div className="card-body">
              <h3 className="title">{parse(props.data[2].CardHeading5)}</h3>
              <p className="body">{parse(props.data[2].CardIntro5)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-section">
        <h1 className="heading">{parse(props.data[3].Heading)}</h1>
        <div className="content-web">
          {props.gallery.webView.map((image, key) => {
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
          {props.gallery.mobileView.map((image, key) => {
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
        <h1 className="heading">{parse(props.data[4].Heading)}</h1>
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
                      backgroundImage: "url(" + props.images[3] + ")",
                    }}
                  ></div>
                  <h3 className="name">{parse(props.data[4].CardHeading1)}</h3>
                </div>
                <p className="review">{parse(props.data[4].CardIntro1)}</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <div className="user">
                  <div
                    className="profile bg-img"
                    style={{
                      backgroundImage: "url(" + props.images[3] + ")",
                    }}
                  ></div>
                  <h3 className="name">{parse(props.data[4].CardHeading2)}</h3>
                </div>
                <p className="review">{parse(props.data[4].CardIntro2)}</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <div className="user">
                  <div
                    className="profile bg-img"
                    style={{
                      backgroundImage: "url(" + props.images[3] + ")",
                    }}
                  ></div>
                  <h3 className="name">{parse(props.data[4].CardHeading3)}</h3>
                </div>
                <p className="review">{parse(props.data[4].CardIntro3)}</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <div className="user">
                  <div
                    className="profile bg-img"
                    style={{
                      backgroundImage: "url(" + props.images[3] + ")",
                    }}
                  ></div>
                  <h3 className="name">{parse(props.data[4].CardHeading4)}</h3>
                </div>
                <p className="review">{parse(props.data[4].CardIntro4)}</p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
