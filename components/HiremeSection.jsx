import React from "react";
import Image from "next/image";
import suitcase from "../public/Suitcase.svg";
import parse from "html-react-parser";

const url =
  "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVub3ZhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
const HiremeSection = (props) => {
  return (
    <div className="hire-me-section bg-yellow">
      <div className="content">
        <div className="heading">{parse(props.heading)}</div>
        <div className="body">{parse(props.body)}</div>
        <div className="btn">
          <Image src={suitcase} alt="Suitcase" />
          {parse(props.button)}
        </div>
      </div>
      <div
        className="image bg-img"
        style={{ backgroundImage: "url(" + props.image + ")" }}
      />
    </div>
  );
};

export default HiremeSection;
