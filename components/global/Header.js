import React, { useState, useEffect, useRef } from "react";
import style from "./Header.module.css";
import Image from "next/image";
import Suitcase from "../../public/Suitcase.svg";
import Link from "next/link";
import { useRouter } from "next/router";

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
  // const [value, setValue] = useState(0);
  const slider = useRef();
  // const [pathname, setPathname] = useState();
  const router = useRouter();
  useEffect(() => {
    clickHandle(router.pathname);
  }, []);
  const clickHandle = (pathname) => {
    console.log(pathname);
    console.log("hello");
    if (pathname === "/") {
      slider.current.style.left = "4%";
      // setValue(0);
    }
    if (pathname === "/about") {
      slider.current.style.left = "44%";
      // setValue(1);
    }
    if (pathname === "/service") {
      slider.current.style.left = "88%";
      // setValue(2);
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
            className={
              router.pathname === "/"
                ? style.nav_items__active
                : style.nav_items
            }
            onClick={() => {
              clickHandle("/");
              // console.log(router.pathname);
            }}
          >
            Home
          </p>
        </Link>
        <Link href="/about" passHref>
          <p
            className={
              router.pathname === "/about"
                ? style.nav_items__active
                : style.nav_items
            }
            onClick={() => {
              clickHandle("/about");
            }}
          >
            About
          </p>
        </Link>
        <Link href="/service" passHref>
          <p
            className={
              router.pathname === "/service"
                ? style.nav_items__active
                : style.nav_items
            }
            onClick={() => {
              clickHandle("/service");
            }}
          >
            Service
          </p>
        </Link>
      </div>
    </div>
  );
};
