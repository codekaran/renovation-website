import React from "react";
import Image from "next/image";
import suitcase from "../public/Suitcase.svg";

const url =
  "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVub3ZhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
const HiremeSection = () => {
  return (
    <div className="hire-me-section bg-yellow">
      <div className="content">
        <div className="heading">
          Do you want to renovate your house or office ?
        </div>
        <div className="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum
          viverra bibendum fringilla sed dolor. Neque porta elementum erat vitae
          cursus at. Volutpat,Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Mauris rutrum viverra bibendum fringilla sed dolor.
        </div>
        <div className="btn">
          <Image src={suitcase} alt="Suitcase" />
          Hire me
        </div>
      </div>
      <div
        className="image bg-img"
        style={{ backgroundImage: "url(" + url + ")" }}
      />
    </div>
  );
};

export default HiremeSection;
