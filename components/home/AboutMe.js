import React from "react";
import Image from "next/image";
import about_me from "../../public/about_me.png";
import style from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={style.main}>
      <div className={style.head}>About me</div>
      <div className={style.box}>
        <div className={style.img}>
          <Image src={about_me} alt="about_me_png" />
        </div>
        <hr className={style.verticalLine} />
        <div className={style.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut
          habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh
          sit faucibus massa. Integer blandit quisque rutrum quis mauris blandit
          amet. Et, mus fames fringilla nisi. Sit etiam egestas posuere id enim
          quis leo. Tortor consectetur egestas dapibus non. Mi diam etiam nunc
          ornare dui, vel odio. Placerat ultricies nisl risus risus malesuada in
          massa fringilla amet. Diam risus mi, ut et, luctus risus lorem ac.
          Sapien purus varius semper morbi auctor at non a. Hendrerit morbi at
          est commodo neque rutrum massa. Morbi tortor lectus pellentesque a
          amet. Fames leo fames feugiat bibendum felis augue est. Felis sem
          tristique.
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
