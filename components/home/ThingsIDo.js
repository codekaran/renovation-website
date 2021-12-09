import Image from "next/image";
import React from "react";
import style from "./ThingsIDo.module.css";
import service_1 from "../../public/service_1.png";
import service_2 from "../../public/service_2.png";
import service_3 from "../../public/service_3.png";
import service_4 from "../../public/service_4.png";

const serviceData = [
  {
    img: service_1,
    name: "Service 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum viverra bibendum fringilla sed dolor. Neque porta elementum erat vitae cursus at. Volutpat,",
  },
  {
    img: service_2,
    name: "Service 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum viverra bibendum fringilla sed dolor. Neque porta elementum erat vitae cursus at. Volutpat,",
  },
  {
    img: service_3,
    name: "Service 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum viverra bibendum fringilla sed dolor. Neque porta elementum erat vitae cursus at. Volutpat,",
  },
  {
    img: service_4,
    name: "Service 4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum viverra bibendum fringilla sed dolor. Neque porta elementum erat vitae cursus at. Volutpat,",
  },
];

const ThingsIDo = () => {
  return (
    <div className={style.main}>
      <div className={style.head}>Things I do</div>
      <div className={style.section}>
        {serviceData.map((service, key) => {
          return (
            <Card
              key={key}
              img={service.img}
              name={service.name}
              text={service.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ThingsIDo;

const Card = (props) => {
  return (
    <div className={style.card}>
      <div className={style.img}>
        <Image src={props.img} alt={props.name} />
      </div>
      <hr className={style.hr} />
      <h1 className={style.name}>{props.name}</h1>
      <p className={style.text}>{props.text}</p>
    </div>
  );
};
