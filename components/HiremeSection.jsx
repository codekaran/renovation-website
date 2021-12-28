import React from "react";
import Image from "next/image";
import suitcase from "../public/Suitcase.svg";
import parse from "html-react-parser";
import Link from "next/link";

const HiremeSection = (props) => {
  return (
    <div className="hire-me-section bg-yellow">
      <div className="content">
        <h1 className="heading">{parse(props.heading)}</h1>
        <p className="body">{parse(props.body)}</p>
        <Link href="/contact" passHref>
          <div className="btn pointer">
            <Image src={suitcase} alt="Suitcase" />
            {parse(props.button)}
          </div>
        </Link>
      </div>
      <div className="image">
        <Image src="/service-hero.png" alt="Image" layout="fill" />
      </div>
    </div>
  );
};

export default HiremeSection;
