import React from "react";
import Image from "next/image";
import style from "./HomePage.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import lightbulb from "../public/Lightbulb.svg";

const HomePage = (props) => {
  const HeroSection = (props) => {
    return (
      <div className={style.hero_section}>
        <div className={style.lightbulb}>
          <Image src={lightbulb} alt="lightbulb" />
        </div>
        <div className={style.hero_content}>
          <div className={style.hero_body}>
            <div className={style.greeting}>{props.greeting}</div>
            <div className={style.name}>{props.name}</div>
            <div className={style.profession}>{props.profession}</div>
            <div className={style.intro}>{props.intro}</div>
            <div className={style.buttons}>
              <div className={style.hire_me}>{props.button.hire_me.name}</div>
              <div className={style.my_work}>{props.button.my_work.name}</div>
            </div>
          </div>
          <div
            className={style.hero_image}
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uc3RydWN0aW9uJTIwd29ya2VyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      </div>
    );
  };
  const AboutMeSection = (props) => {
    return (
      <div className={style.section}>
        <div className={style.section_heading}>{props.heading}</div>
        <div
          className={style.section_content}
          style={{
            padding: "0",
            paddingRight: "90px",
            paddingBottom: "100px",
            alignItems: "center",
          }}
        >
          <div className={style.image}>
            <Image src={props.src} alt="about_me_png" />
          </div>
          <hr className={style.verticalLine} />
          <div className={style.content_body} style={{ width: "50%" }}>
            {props.content}
          </div>
        </div>
      </div>
    );
  };
  const ThingsIDoSection = (props) => {
    return (
      <div
        className={style.section}
        style={{ background: "rgba(231, 223, 34, 0.1)" }}
      >
        <div className={style.section_heading}>{props.heading}</div>
        <div className={style.section_content} style={{ alignItems: "center" }}>
          {props.services.map((service, key) => {
            return (
              <Card
                key={key}
                img={service.img}
                name={service.name}
                text={service.text}
              />
            );
          })}
        </div>
      </div>
    );
  };
  const Card = (props) => {
    return (
      <div className={style.card}>
        <div className={style.card_img}>
          <Image src={props.img} alt={props.name} />
        </div>
        <hr className={style.hr} />
        <div className={style.content_heading}>{props.name}</div>
        <div className={style.content_body} style={{ fontSize: "16px" }}>
          {props.text}
        </div>
      </div>
    );
  };
  const Gallery = (props) => {
    const GalleryImage = (props, key) => {
      return (
        <div
          key={key}
          style={{
            backgroundImage: "url(" + props.url + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            gridColumnStart: props.col_start,
            gridColumnEnd: props.col_end,
            gridRowStart: props.row_start,
            gridRowEnd: props.row_end,
            border: "10px solid #ffffff",
          }}
        />
      );
    };
    return (
      <div className={style.section}>
        <div className={style.section_heading}>{props.heading}</div>
        <div className={style.section_content} style={{ display: "block" }}>
          <div className={style.gallery}>
            {props.galleryData.map((image, key) => {
              return GalleryImage(image, key);
            })}
          </div>
        </div>
      </div>
    );
  };
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const ReviewCard = (props, key) => {
    return (
      <div className={style.review_card} key={key}>
        <div className={style.box}>
          <div className={style.user}>
            <div
              className={style.user_profile}
              style={{
                backgroundImage: "url(" + props.url + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className={style.user_name}>{props.name}</div>
          </div>
          <div className={style.review}>{props.review_msg}</div>
        </div>
      </div>
    );
  };
  const Testimonials = (props) => {
    return (
      <div className={style.section}>
        <div className={style.section_heading}>
          <div>{props.heading}</div>
        </div>
        <div className={style.section_content} style={{ display: "block" }}>
          <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            showDots={false}
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
          >
            {props.reviews.map((e, key) => {
              return ReviewCard(e, key);
            })}
          </Carousel>
        </div>
      </div>
    );
  };
  return (
    <div>
      {HeroSection(props.data[0])}
      {AboutMeSection(props.data[1])}
      {ThingsIDoSection(props.data[2])}
      {Gallery(props.data[3])}
      {Testimonials(props.data[4])}
    </div>
  );
};

export default HomePage;
