import React from "react";
import Image from "next/image";
import style from "./ServicePage.module.css";
import HireMeSection from "./global/HireMeSection";
import service_hero_section from "../public/service_hero_section.png";

const ServicePage = (props) => {
  const HeroSection = (props) => {
    return (
      <div className={style.hero}>
        <div className={style.hero_image}>
          <Image src={service_hero_section} alt="service_hero_section_png" />
        </div>
        <div className={style.hero_heading}>{props.PageHeading}</div>
        <div className={style.section}>
          <div className={style.section_header}>{props.heading}</div>
          <div className={style.section_content}>
            <div className={style.content_header}>{props.content.heading}</div>
            <div className={style.content_body} style={{ width: "45%" }}>
              {props.content.body}
            </div>
          </div>
        </div>
      </div>
    );
  };
  const ServicesSection = (props) => {
    return (
      <div className={style.section}>
        <div className={style.section_header}>{props.heading}</div>
        <div className={style.section_content}>
          {props.content.map((r, key) => {
            return (
              <ServiceTemplateStrip
                key={key}
                num={key+1}
                src={r.image}
                heading={r.heading}
                body={r.body}
              />
            );
          })}
        </div>
      </div>
    );
  };
  const ServiceTemplateStrip = (props) => {
    return (
      <div className={style.strip}>
        <div className={style.float}>{props.num}</div>
        <div className={style.image}>
          <Image src={props.src} alt={props.alt} />
        </div>
        <div className={style.content}>
          <div className={style.content_header}>{props.heading}</div>
          <div className={style.content_body}>{props.body}</div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {HeroSection(props.data[0])}
      <HireMeSection data={props.data[1]}/>
      {ServicesSection(props.data[2])}
    </div>
  );
};

export default ServicePage;
