import React from "react";
import Image from "next/image";
import service_hire_me from "../../public/service_hire_me.png";
import suitcase from "../../public/Suitcase.svg";
import style from "./HireMeSection.module.css";

const HireMeSection = () => {
  return (
    <div className={style.hire_me_section}>
      <div className={style.section_content}>
        <div className={style.content_header}>
          Do you want to renovate your house or office ?
        </div>
        <div className={style.content_info}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum
          viverra bibendum fringilla sed dolor. Neque porta elementum erat vitae
          cursus at. Volutpat,Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Mauris rutrum viverra bibendum fringilla sed dolor.
        </div>
        <div className={style.hire_me_button}>
          <Image src={suitcase} alt="suitcase_icon" height={20} width={20} />
          <p className={style.text}>Hire me</p>
        </div>
      </div>
      <hr className={style.vertical} />
      <div>
        <Image src={service_hire_me} alt="service_hire_me" />
      </div>
    </div>
  );
};

export default HireMeSection;

