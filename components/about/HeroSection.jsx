import React from "react";
import style from "./HeroSection.module.css";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Image1 from "../../public/Image1.png";
import Image2 from "../../public/Image2.png";
import Image3 from "../../public/Image3.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className={style.hero_section}>
      <div className={style.hero_heading}>About me</div>
      <div className={style.hero_content}>
        <div className={(style.hero_image1)}>
          <Image src={Image1} alt="Hero Image 1" />
        </div>
        <div className={(style.hero_image2)}>
          <Image src={Image2} alt="Hero Image 2" />
        </div>
        <div className={(style.hero_image3)}>
          <Image src={Image3} alt="Hero Image 3" />
        </div>
        <div className={style.para1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut
          habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh
          sit faucibus massa. Integer blandit quisque rutrum quis mauris blandit
          amet. Et, mus fames fringilla nisi. Sit etiam egestas posuere id enim
          quis leo. Tortor consectetur egestas dapibus non.
        </div>
        <div className={style.para2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut
          habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh
          sit faucibus massa. Integer blandit quisque rutrum quis mauris blandit
          amet. Et, mus fames fringilla nisi. Sit etiam egestas posuere id enim
          quis leo. Tortor consectetur egestas dapibus non.
        </div>
        <div className={style.para3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut
          habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh
          sit faucibus massa. Integer blandit quisque rutrum quis mauris blandit
          amet. Et, mus fames fringilla nisi. Sit etiam egestas posuere id enim
          quis leo. Tortor consectetur egestas dapibus non.
        </div>
        <div className={style.social_icons}>
          <div className={style.heading}>Follow me on</div>
          <div className={style.icon_strip}>
            <FaFacebookF className={style.icon} />
            <AiFillInstagram className={style.icon} />
            <FaLinkedinIn className={style.icon} />
            <FaTwitter className={style.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
