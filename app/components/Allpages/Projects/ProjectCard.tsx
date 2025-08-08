import React from 'react';
// ✅ Using alias
import { projectsData, type Project } from '@/lib/data';

type Props = {
  project: Project;
  onClick: () => void;
};

const ProjectCard: React.FC<Props> = ({ project, onClick }) => {
  return (
    <div
      className="bg-white/5 p-4 rounded-lg hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl text-white font-semibold">{project.title}</h3>
      <p className="text-gray-300 mt-2 line-clamp-2">{project.description}</p>
    </div>
  );
};

export default ProjectCard;
