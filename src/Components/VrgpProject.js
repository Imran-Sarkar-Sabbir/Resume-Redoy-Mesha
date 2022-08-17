import React from "react";

export const VRGPProject = ({
  type,
  info,
  role,
  date,
  Description
}) => {
  return (
    <>
      <section className="technical-skills section" id="skills">
        <h2 className="section-title">{type}</h2>
        <div className="skills__content bd-grid">
          <ul className="skills__data">{info}</ul>
        </div>
      </section>
      <section className="soft-skills section">
        <h2 className="section-title">{role}</h2>
        <div className="skills__content bd-grid">
          {date}
          <p>{Description}</p>
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
