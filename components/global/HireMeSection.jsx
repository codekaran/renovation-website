import React from "react";
import Image from "next/image";
import suitcase from "../../public/Suitcase.svg";
import style from "./HireMeSection.module.css";

const HireMeSection = (props) => {
  return (
    <div className={style.section}>
      <div className={style.section_content}>
        <div className={style.content_header}>
          {props.data.heading}
        </div>
        <div className={style.content_body}>
          {props.data.content}
        </div>
        <div className={style.hire_me_button}>
          <Image src={suitcase} alt="suitcase_icon" height={20} width={20} />
          <p className={style.text}>Hire me</p>
        </div>
      </div>
      <hr className={style.vertical} />
      <div>
        <Image src={props.data.image} alt="service_hire_me" />
      </div>
    </div>
  );
};

export default HireMeSection;
