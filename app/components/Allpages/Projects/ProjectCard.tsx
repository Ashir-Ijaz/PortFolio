// import React from 'react';
// // ✅ Using alias
// import { projectsData, type Project } from '@/lib/data';

// type Props = {
//   project: Project;
//   onClick: () => void;
// };

// const ProjectCard: React.FC<Props> = ({ project, onClick }) => {
//   return (
//     <div
//       className="bg-white/5 p-4 rounded-lg hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer"
//       onClick={onClick}
//     >
//       <img
//         src={project.image}
//         alt={project.title}
//         className="w-full h-48 object-cover rounded-md mb-4"
//       />
//       <h3 className="text-xl text-white font-semibold">{project.title}</h3>
//       <p className="text-gray-300 mt-2 line-clamp-2">{project.description}</p>
//     </div>
//   );
// };

// export default ProjectCard;
import React from 'react';
import { type Project } from "../../../../lib/data"; // Adjust path if needed

type Props = {
  project: Project;
  onClick: () => void;
};

const ProjectCard: React.FC<Props> = ({ project, onClick }) => {
  return (
    <div
      className="relative bg-white/5 rounded-lg overflow-hidden cursor-pointer group transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      onClick={onClick}
    >
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          View Details
        </button>
      </div>

      {/* Title & Description */}
      <div className="p-4">
        <h3 className="text-xl text-white font-semibold">{project.title}</h3>
        <p className="text-gray-300 mt-2 line-clamp-2">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
