import React from "react";

const skills = [
  { name: "JavaScript", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Gatsby", icon: "🚀" },
  { name: "Node.js", icon: "🌱" },
  { name: "GraphQL", icon: "🔍" },
  { name: "CSS", icon: "🎨" },
];

const Skills = () => {
  return (
    <section id="skills" className="container py-12">
      <h2 className="text-3xl font-bold text-center mb-6">Skills & Technologies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-lg">
            <span className="text-3xl">{skill.icon}</span>
            <p className="mt-2 text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
