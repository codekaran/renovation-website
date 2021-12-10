import React, { useState, useEffect, useRef } from "react";
import style from "./Header.module.css";
import Image from "next/image";
import Suitcase from "../../public/Suitcase.svg";
import Link from "next/link";

const Header = () => {
  return (
    <div className={style.main}>
      <div className={style.name}>s. smith</div>
      <ToggleBar />
      <div className={style.hire_me_box}>
        <Image
          className={style.hire_me_icon}
          src={Suitcase}
          alt="Suitcase-icon"
          height={24}
          width={24}
        />
        <p className={style.hire_me}>Hire me</p>
      </div>
    </div>
  );
};

export default Header;

const ToggleBar = () => {
  const [value, setValue] = useState(0);
  const slider = useRef();
  const [pathname, setPathname] = useState();
  useEffect(() => {
    setPathname(window.location.pathname);
  }, [pathname]);
  const clickHandle = () => {
    console.log(pathname);
    if (pathname === "/") {
      slider.current.style.left = "4%";
      setValue(0);
    }
    if (pathname === "/about") {
      slider.current.style.left = "44%";
      setValue(1);
    }
    if (pathname === "/service") {
      slider.current.style.left = "88%";
      setValue(2);
    }
  };

  return (
    <div className={style.toggle_bar}>
      <div className={style.slider_box}>
        <div ref={slider} className={style.slider} />
      </div>
      <div className={style.navbar}>
        <Link href="/" passHref>
          <p
            className={value === 0 ? style.nav_items__active : style.nav_items}
            onClick={clickHandle}
          >
            Home
          </p>
        </Link>
        <Link href="/about" passHref>
          <p
            className={value === 1 ? style.nav_items__active : style.nav_items}
            onClick={clickHandle}
          >
            About
          </p>
        </Link>
        <Link href="/service" passHref>
          <p
            className={value === 2 ? style.nav_items__active : style.nav_items}
            onClick={clickHandle}
          >
            Service
          </p>
        </Link>
      </div>
    </div>
  );
};
