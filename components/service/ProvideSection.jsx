import Image from "next/image";
import React from "react";
import style from "./ProvideSection.module.css";
import service_provide from "../../public/service_provide.png";

const data = [
  {
    num: "1",
    src: service_provide,
    alt: "service_provide",
    heading: "Service 1",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh sit faucibus massa. Integer blandit quisque rutrum quis mauris blandit amet.",
  },
  {
    num: "2",
    src: service_provide,
    alt: "service_provide",
    heading: "Service 2",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh sit faucibus massa. Integer blandit quisque rutrum quis mauris blandit amet.",
  },
  {
    num: "3",
    src: service_provide,
    alt: "service_provide",
    heading: "Service 3",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh sit faucibus massa. Integer blandit quisque rutrum quis mauris blandit amet.",
  },
  {
    num: "4",
    src: service_provide,
    alt: "service_provide",
    heading: "Service 4",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh sit faucibus massa. Integer blandit quisque rutrum quis mauris blandit amet.",
  },
];

const ProvideSection = () => {
  return (
    <div className={style.provide_section}>
      <div className={style.section_header}>What I provide</div>
      <div className={style.section_content}>
        {data.map((r, key) => {
          return (
            <TemplateStrip
              key={key}
              num={r.num}
              src={r.src}
              alt={r.alt}
              heading={r.heading}
              info={r.info}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProvideSection;

const TemplateStrip = (props) => {
  return (
    <div className={style.strip}>
      <div className={style.float}>{props.num}</div>
      <div className={style.image}>
        <Image src={props.src} alt={props.alt} />
      </div>
      <div className={style.content}>
        <div className={style.heading}>{props.heading}</div>
        <div className={style.info}>{props.info}</div>
      </div>
    </div>
  );
};
