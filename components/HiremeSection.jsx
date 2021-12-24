import React from "react";
import Image from "next/image";
import suitcase from "../public/Suitcase.svg";
import parse from "html-react-parser";

const HiremeSection = (props) => {
  return (
    <div className="hire-me-section bg-yellow">
      <div className="content">
        <div className="heading">{parse(props.heading)}</div>
        <div className="body">{parse(props.body)}</div>
        <div className="btn pointer">
          <Image src={suitcase} alt="Suitcase" />
          {parse(props.button)}
        </div>
      </div>
      <div className="image">
        <Image src="/service-hero.png" alt="Image" layout="fill"/>
      </div>
    </div>
  );
};

export default HiremeSection;
