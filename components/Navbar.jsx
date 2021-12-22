import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import suitcase from "../public/Suitcase.svg";

const Navbar = () => {
  const [state, setState] = useState(false);
  const openNav = () => {
    setState(true);
  };
  const closeNav = () => {
    setState(false);
  };
  const Toggle = () => {
    return (
      <div className="mobile-nav">
        <div className="box">
          <div className="close">
            <MdClose onClick={closeNav} />
          </div>
          <div style={{overflow: "scroll"}}>
            <div className="links">
              <Link href="/" passHref>
                <div className="link" onClick={closeNav}>
                  Home
                </div>
              </Link>
              <Link href="/about" passHref>
                <div className="link" onClick={closeNav}>
                  About
                </div>
              </Link>
              <Link href="/service" passHref>
                <div className="link" onClick={closeNav}>
                  Service
                </div>
              </Link>
            </div>
            <div className="center">
              <select className="dropdown" name="language" id="lang">
                <option value="english">en</option>
                <option value="dutch">nl</option>
              </select>
              <div className="btn" onClick={closeNav}>
                <Image src={suitcase} alt="Suitcase" />
                Hire me
              </div>
              <div className="btn2" onClick={closeNav}>
                My work
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="navbar">
      <div className="brand-name">Rengeb</div>
      <div className="nav-links">
        <Link href="/" passHref>
          <div className="link">Home</div>
        </Link>
        <Link href="/about" passHref>
          <div className="link">About</div>
        </Link>
        <Link href="/service" passHref>
          <div className="link">Service</div>
        </Link>
      </div>

      {/* Visible for only web view */}
      <div className="visible-lg">
        <div className="btn">
          <Image src={suitcase} alt="Suitcase" />
          Hire me
        </div>
        <select className="dropdown" name="language" id="lang">
          <option value="english">en</option>
          <option value="dutch">nl</option>
        </select>
      </div>

      {/* Visible for only mobile view */}
      <div className="hidden-lg">
        <div className="btn">
          <Image src={suitcase} alt="Suitcase" />
          Hire me
        </div>
        <div className="toggle-btn" onClick={openNav}>
          <CgMenuRightAlt />
        </div>
      </div>
      {state && <Toggle />}
    </div>
  );
};

export default Navbar;
