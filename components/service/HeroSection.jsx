import React from "react";
import Image from "next/image";
import service_hero_section from "../../public/service_hero_section.png";
import style from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={style.hero_section}>
      <div className={style.hero_section_image}>
        <Image src={service_hero_section} alt="service_hero_section_png" />
      </div>
      <div className={style.hero_heading}>Service</div>
      <div className={style.section_header}>What I do</div>
      <div className={style.section_content} style={{ paddingTop: "33px" }}>
        <div className={style.content_heading}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className={style.content_info}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut
          habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh
          sit faucibus massa. Integer blandit quisque rutrum quis mauris blandit
          amet. Et, mus fames fringilla nisi. Sit etiam egestas posuere id enim
          quis leo. Tortor consectetur egestas dapibus non.
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
