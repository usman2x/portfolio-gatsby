import React, { useState } from "react";
import skills from "../content/misc/skills.json";
import { 
  Code2, Database, 
  Cloud, LineChart, 
  Terminal, Layout, 
  FileCode, Figma,
  Cpu, Globe, 
  PenTool, Microscope,
  Layers, GitBranch,
  Smartphone, Monitor,
  Server, Shield,
  Search, Film
} from 'lucide-react';

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  
  // Map to convert skill names to Lucide icons
  const getIconForSkill = (skillName) => {
    const iconMap = {
      "React": <Code2 size={32} />,
      "JavaScript": <Terminal size={32} />,
      "HTML/CSS": <Layout size={32} />,
      "Node.js": <Server size={32} />,
      "Python": <FileCode size={32} />,
      "Database": <Database size={32} />,
      "AWS": <Cloud size={32} />,
      "Git": <GitBranch size={32} />,
      "UI/UX": <Figma size={32} />,
      "Mobile Development": <Smartphone size={32} />,
      "Front-end Development": <Monitor size={32} />,
      "Back-end Development": <Server size={32} />,
      "DevOps": <Cloud size={32} />,
      "Testing": <Microscope size={32} />,
      "Data Science": <LineChart size={32} />,
      "Machine Learning": <Cpu size={32} />,
      "Blockchain": <Globe size={32} />,
      "SEO": <Search size={32} />,
      "Content": <PenTool size={32} />,
      "Security": <Shield size={32} />,
      "Design": <Layers size={32} />,
      "Video": <Film size={32} />
    };
    
    // Return the mapped icon or a default icon
    return iconMap[skillName] || <Code2 size={32} />;
  };

  return (
    <section id="skills" className="container py-5">
      <h2 className="text-center mb-5 section-title">Skills & Technologies</h2>
      <p className="text-center text-muted mt-4 small">Click on any skill to see related technologies</p>
      <div className="row g-4 justify-content-center">
        {skills.map((skill, index) => (
          <div key={index} className="col-md-3 col-sm-4 col-6">
            <div 
              className={`skill-card d-flex flex-column align-items-center justify-content-center p-4 rounded shadow-sm ${activeSkill === index ? 'active' : ''}`}
              onClick={() => setActiveSkill(activeSkill === index ? null : index)}
            >
              <div className="skill-icon mb-3 text-primary">
                {/* Use the icon from Lucide based on skill name instead of img tag */}
                {getIconForSkill(skill.name)}
              </div>
              <h5 className="skill-name text-center mb-0">{skill.name}</h5>
              
              {activeSkill === index && skill.technologies && (
                <div className="skill-technologies mt-3 pt-3 border-top w-100">
                  <div className="d-flex flex-wrap justify-content-center gap-2">
                    {skill.technologies.map((tech, idx) => (
                      <span key={idx} className="badge bg-light text-dark px-3 py-2 rounded-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Skills;