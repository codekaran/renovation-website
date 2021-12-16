import React from "react";
import Image from "next/image";
import style from "./AboutPage.module.css";
import HireMeSection from "./global/HireMeSection";
import Image1 from "../public/Image1.png";
import Image2 from "../public/Image2.png";
import Image3 from "../public/Image3.png";

const AboutPage = (props) => {
  const HeroSection = (props) => {
    return (
      <div className={style.hero}>
        <div className={style.hero_heading}>{props.pageHeading}</div>
        <div className={style.section}>
          <div className={style.hero_image1}>
            <Image src={Image1} alt="Hero Image 1" />
          </div>
          <div className={style.hero_image2}>
            <Image src={Image2} alt="Hero Image 2" />
          </div>
          <div className={style.hero_image3}>
            <Image src={Image3} alt="Hero Image 3" />
          </div>
          <div
            className={style.content_body}
            style={{ lineHeight: "42px", width: "75%" }}
          >
            {props.content1}
          </div>
          <div
            className={style.content_body}
            style={{ lineHeight: "42px", width: "55%" }}
          >
            {props.content2}
          </div>
          <div
            className={style.content_body}
            style={{ lineHeight: "42px", width: "35%" }}
          >
            {props.content3}
          </div>
          <div className={style.social_icons}>
            <div className={style.heading}>{props.social.heading}</div>
            <div className={style.icon_strip}>
              {props.social.icons.map((e, key) => {
                return e;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };
  const ContactSection = (props) => {
    return (
      <div className={style.contact_section}>
        {props.contact.map((r, key) => {
          return (
            <Card key={key} icon={r.icon} heading={r.heading} body={r.body} />
          );
        })}
      </div>
    );
  };
  const Card = (props) => {
    return (
      <div className={style.contact_card}>
        <div className={style.icon}>{props.icon}</div>
        <div className={style.heading}>{props.heading}</div>
        <div className={style.content}>{props.body}</div>
      </div>
    );
  };
  const SkillsSection = (props) => {
    return (
      <div className={style.section}>
        <div className={style.section_header}>{props.heading}</div>
        <div className={style.section_content}>
          {props.content.map((skill, key) => {
            return (
              <SkillCard
                key={key}
                image={skill.image}
                heading={skill.heading}
                body={skill.body}
              />
            );
          })}
        </div>
      </div>
    );
  };
  const SkillCard = (props) => {
    return (
      <div className={style.box}>
        <div className={style.card}>
          <div className={style.image}>
            <Image src={props.image} alt={props.heading} />
          </div>
          <div className={style.card_content}>
            <div className={style.content_header}>{props.heading}</div>
            <div
              className={style.content_body}
              style={{ textAlign: "center", padding: "16px" }}
            >
              {props.body}
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {HeroSection(props.data[0])}
      {ContactSection(props.data[1])}
      {SkillsSection(props.data[2])}
      <HireMeSection data={props.data[3]} />
    </div>
  );
};

export default AboutPage;
