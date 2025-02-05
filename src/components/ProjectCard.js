import React from "react";

const ProjectCard = ({ title, description, image, link, tags }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="mt-3 flex flex-wrap space-x-2">
          {tags.map((tag, index) => (
            <span key={index} className="text-sm bg-gray-200 px-2 py-1 rounded">{tag}</span>
          ))}
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="block mt-3 text-blue-500 hover:underline">
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
