import React from "react";

export const Skills = ({
  softLabel,
  vrgProject,
  softSkills,
}) => {
  return (
    <>
      <section className="technical-skills section" id="skills">
        <h2 className="section-title">VRGP PROJECT</h2>
        <h2 className="education__title" style={{ display: "inline" }} >{vrgProject.type} :</h2>
        <p style={{
          display: "inline",
          fontSize: "14px",
          paddingLeft: "10px"
        }}>{vrgProject.info}</p>
        <p></p>
        <h2 className="education__title" style={{ display: "inline" }}>Role :</h2>
        <p style={{
          display: "inline",
          fontSize: "14px",
          paddingLeft: "10px"
        }}>{vrgProject.role}</p>
        <p>{vrgProject.date}</p>
        <h2 className="education__title" style={{ display: "inline" }}>DESCRIPTION :</h2>
        <p style={{
          display: "inline",
          fontSize: "14px",
          paddingLeft: "10px"
        }}>{vrgProject.description}</p>
      </section>
      <section className="soft-skills section">
        <h2 className="section-title">{softLabel}</h2>
        <div className="skills__content bd-grid">
          <ul className="skills__data">
            {softSkills.map((skill) => <Skill key={skill} skill={skill} />)}
          </ul>
        </div>
      </section>
    </>
  );
};

const Skill = ({ skill }) => (
  <li className="skills__name">
    <span className="skills__circle" /> {skill}
  </li>
);
