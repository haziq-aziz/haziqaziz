import { Skill_data } from "@/constants";
import React from "react";
import { SkillDataProvider } from "../sub/SkillDataProvider";

export const Skills = () => {
  // Filter skills by category
  const languageSkills = Skill_data.filter(
    (skill) => skill.category === "language"
  );
  const frameworkSkills = Skill_data.filter(
    (skill) => skill.category === "framework"
  );
  const databaseSkills = Skill_data.filter(
    (skill) => skill.category === "database"
  );
  const othersSkills = Skill_data.filter(
    (skill) => skill.category === "others"
  );

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
      style={{ transform: "scale(0.9)" }}
    >
        
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {languageSkills.map((skill, index) => (
          <SkillDataProvider
            key={index}
            src={skill.Image}
            width={skill.width}
            height={skill.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {frameworkSkills.map((skill, index) => (
          <SkillDataProvider
            key={index}
            src={skill.Image}
            width={skill.width}
            height={skill.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {databaseSkills.map((skill, index) => (
          <SkillDataProvider
            key={index}
            src={skill.Image}
            width={skill.width}
            height={skill.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {othersSkills.map((skill, index) => (
          <SkillDataProvider
            key={index}
            src={skill.Image}
            width={skill.width}
            height={skill.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-39 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/video/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};
