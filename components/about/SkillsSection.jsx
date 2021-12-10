import React from "react";
import style from "./SkillsSection.module.css";
import skill_png from "../../public/skill.png";
import Image from "next/image";

const skills = [
  {
    image: skill_png,
    name: "Skill 1",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum viverra bibendum fringilla sed dolor. Neque porta elementum erat vitae cursus at. Volutpat,",
  },
  {
    image: skill_png,
    name: "Skill 2",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum viverra bibendum fringilla sed dolor. Neque porta elementum erat vitae cursus at. Volutpat,",
  },
  {
    image: skill_png,
    name: "Skill 3",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum viverra bibendum fringilla sed dolor. Neque porta elementum erat vitae cursus at. Volutpat,",
  },
  {
    image: skill_png,
    name: "Skill 4",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum viverra bibendum fringilla sed dolor. Neque porta elementum erat vitae cursus at. Volutpat,",
  },
];

const SkillsSection = () => {
  return (
    <div className={style.skill_section}>
      <div className={style.section_header}>Skills I have</div>
      <div className={style.section_content}>
        {skills.map((skill, key) => {
          return (
            <SkillCard
              key={key}
              image={skill.image}
              name={skill.name}
              info={skill.info}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSection;

const SkillCard = (props) => {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <Image src={props.image} alt={props.name} />
      </div>
      <div className={style.card_content}>
        <div className={style.name}>{props.name}</div>
        <div className={style.info}>{props.info}</div>
      </div>
    </div>
  );
};
