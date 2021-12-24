import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import { BiBuildingHouse } from "react-icons/bi";
import suitcase from "../public/Suitcase.svg";
import parse from "html-react-parser";

const Navbar = (props) => {
  const [state, setState] = useState(false);
  const openNav = () => {
    setState(true);
  };
  const closeNav = () => {
    setState(false);
  };
  const Toggle = (props) => {
    return (
      <div className="mobile-nav">
        <div className="box">
          <div className="close">
            <MdClose onClick={closeNav} />
          </div>
          <div>
            <div className="links">
              <div className="link">
                <span className="pointer" onClick={closeNav}>
                  <Link href="/" passHref>
                    {parse(props.data.links.home)}
                  </Link>
                </span>
              </div>
              <div className="link">
                <span className="pointer" onClick={closeNav}>
                  <Link href="/about" passHref>
                    {parse(props.data.links.about)}
                  </Link>
                </span>
              </div>
              <div className="link">
                <span className="pointer" onClick={closeNav}>
                  <Link href="/service" passHref>
                    {parse(props.data.links.service)}
                  </Link>
                </span>
              </div>
            </div>
            <div className="center">
              <select className="dropdown pointer" name="language" id="lang">
                <option value="english">
                  {parse(props.data.languages[0])}
                </option>
                <option value="dutch">{parse(props.data.languages[1])}</option>
              </select>
              <div className="btn pointer" onClick={closeNav}>
                <Image src={suitcase} alt="Suitcase" />
                {parse(props.data.button1)}
              </div>
              <div className="btn2 pointer" onClick={closeNav}>
                <BiBuildingHouse />
                {parse(props.data.button2)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="navbar">
      <div className="brand-name">
        <Link href="/" passHref>
          <span className="pointer">{parse(props.data.heading)}</span>
        </Link>
      </div>
      <div className="nav-links">
        <Link href="/" passHref>
          <div className="link pointer">{parse(props.data.links.home)}</div>
        </Link>
        <Link href="/about" passHref>
          <div className="link pointer">{parse(props.data.links.about)}</div>
        </Link>
        <Link href="/service" passHref>
          <div className="link pointer">{parse(props.data.links.service)}</div>
        </Link>
      </div>

      {/* Visible for only web view */}
      <div className="visible-lg">
        <div className="btn pointer">
          <Image src={suitcase} alt="Suitcase" />
          {parse(props.data.button1)}
        </div>
        <select className="dropdown pointer" name="language" id="lang">
          <option value="english">{parse(props.data.languages[0])}</option>
          <option value="dutch">{parse(props.data.languages[1])}</option>
        </select>
      </div>

      {/* Visible for only mobile view */}
      <div className="hidden-lg">
        <div className="btn pointer">
          <Image src={suitcase} alt="Suitcase" />
          {parse(props.data.button1)}
        </div>
        <div className="toggle-btn pointer" onClick={openNav}>
          <CgMenuRightAlt />
        </div>
      </div>
      {state && <Toggle data={props.data} />}
    </div>
  );
};

export default Navbar;
