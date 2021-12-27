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

const web = [
  {
    col_start: "1",
    col_end: "10",
    row_start: "1",
    row_end: "10",
  },
  {
    col_start: "10",
    col_end: "15",
    row_start: "1",
    row_end: "7",
  },
  {
    col_start: "15",
    col_end: "23",
    row_start: "1",
    row_end: "9",
  },
  {
    col_start: "1",
    col_end: "10",
    row_start: "10",
    row_end: "15",
  },
  {
    col_start: "10",
    col_end: "15",
    row_start: "7",
    row_end: "15",
  },
  {
    col_start: "15",
    col_end: "23",
    row_start: "9",
    row_end: "15",
  },
  {
    col_start: "1",
    col_end: "14",
    row_start: "15",
    row_end: "23",
  },
  {
    col_start: "14",
    col_end: "23",
    row_start: "15",
    row_end: "22",
  },
  {
    col_start: "1",
    col_end: "7",
    row_start: "23",
    row_end: "31",
  },
  {
    col_start: "7",
    col_end: "14",
    row_start: "23",
    row_end: "31",
  },
  {
    col_start: "14",
    col_end: "23",
    row_start: "22",
    row_end: "31",
  },
];
const mobile = [
  {
    col_start: "1",
    col_end: "4",
    row_start: "1",
    row_end: "6",
  },
  {
    col_start: "4",
    col_end: "6",
    row_start: "1",
    row_end: "4",
  },
  {
    col_start: "4",
    col_end: "6",
    row_start: "4",
    row_end: "6",
  },
  {
    col_start: "1",
    col_end: "6",
    row_start: "6",
    row_end: "10",
  },
  {
    col_start: "1",
    col_end: "3",
    row_start: "10",
    row_end: "13",
  },
  {
    col_start: "1",
    col_end: "3",
    row_start: "13",
    row_end: "15",
  },
  {
    col_start: "3",
    col_end: "6",
    row_start: "10",
    row_end: "15",
  },
  {
    col_start: "1",
    col_end: "6",
    row_start: "15",
    row_end: "19",
  },
  {
    col_start: "1",
    col_end: "4",
    row_start: "19",
    row_end: "24",
  },
  {
    col_start: "4",
    col_end: "6",
    row_start: "19",
    row_end: "22",
  },
  {
    col_start: "4",
    col_end: "6",
    row_start: "22",
    row_end: "24",
  },
];

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
            <div className="image" style={{ position: "relative" }}>
              <Image src="/service.png" alt="Service 1" layout="fill" />
            </div>
            <div className="card-body">
              <h3 className="title">{parse(props.data[2].CardHeading1)}</h3>
              <p className="body">{parse(props.data[2].CardIntro1)}</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card">
            <div
              className="image"
              style={{ position: "relative"}}
            >
              <Image src="/service.png" alt="Service 1" layout="fill" />
            </div>
            <div className="card-body">
              <h3 className="title">{parse(props.data[2].CardHeading2)}</h3>
              <p className="body">{parse(props.data[2].CardIntro2)}</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card">
            <div
              className="image"
              style={{ position: "relative"}}
            >
              <Image src="/service.png" alt="Service 1" layout="fill" />
            </div>
            <div className="card-body">
              <h3 className="title">{parse(props.data[2].CardHeading3)}</h3>
              <p className="body">{parse(props.data[2].CardIntro3)}</p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="card">
            <div
              className="image"
              style={{ position: "relative"}}
            >
              <Image src="/service.png" alt="Service 1" layout="fill" />
            </div>
            <div className="card-body">
              <h3 className="title">{parse(props.data[2].CardHeading4)}</h3>
              <p className="body">{parse(props.data[2].CardIntro4)}</p>
            </div>
          </div>
          {/* Card 5 */}
          <div className="card">
            <div
              className="image"
              style={{ position: "relative"}}
            >
              <Image src="/service.png" alt="Service 1" layout="fill" />
            </div>
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
          {props.gallery.map((image, index) => {
            return (
              <div
                key={index}
                className="image bg-img"
                style={{
                  backgroundImage: "url(" + image + ")",
                  gridColumnStart: web[index].col_start,
                  gridColumnEnd: web[index].col_end,
                  gridRowStart: web[index].row_start,
                  gridRowEnd: web[index].row_end,
                  border: "10px solid #ffffff",
                }}
              />
            );
          })}
        </div>
        <div className="content-mob">
          {props.gallery.map((image, index) => {
            return (
              <div
                key={index}
                className="image bg-img"
                style={{
                  backgroundImage: "url(" + image + ")",
                  gridColumnStart: mobile[index].col_start,
                  gridColumnEnd: mobile[index].col_end,
                  gridRowStart: mobile[index].row_start,
                  gridRowEnd: mobile[index].row_end,
                  border: "4px solid #ffffff",
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
