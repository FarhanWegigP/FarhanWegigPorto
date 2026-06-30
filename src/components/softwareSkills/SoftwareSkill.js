import React from "react";
import "iconify-icon";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {skills.image ? (
                  <img src={skills.image} alt={skills.skillName} width="50" height="50" />
                ) : (
                  <iconify-icon
                    icon={skills.fontAwesomeClassname}
                    width="50"
                    height="50"
                  ></iconify-icon>
                )}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
