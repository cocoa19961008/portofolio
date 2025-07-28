import { DiPython, DiDjango, DiJavascript1, DiHaskell } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { SiJulia, SiScala } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { BsCodeSlash } from "react-icons/bs";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "Python", icon: <DiPython /> },
    { name: "Django", icon: <DiDjango /> },
    { name: "Java", icon: <FaJava /> },
    { name: "C++", icon: <TbBrandCpp /> },
    { name: "JavaScript", icon: <DiJavascript1 /> },
    { name: "Haskell", icon: <DiHaskell /> },
    { name: "Julia", icon: <SiJulia /> },
    { name: "Scala", icon: <SiScala /> },
    { name: "Prolog", icon: <BsCodeSlash /> },
  ];

  return (
    <section id="skills" className="skill-section">
      <h1>スキル</h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
