export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  github: string;
  technologies: string[];
};

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Wallpaper App',
    description: 'This is a brief description of what this project does.',
    image: '/portfolio.jpg',
    github: 'https://github.com/username/project1',
    technologies: ['React', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: '2',
    title: 'Care App',
    description: 'Another project showcasing different features.',
    image: '/healthcare.jpg',
    github: 'https://github.com/username/project2',
    technologies: ['Next.js', 'Node.js']
  },
  {
    id: '3',
    title: 'Safe Space',
    description: 'Another project showcasing different features.',
    image: '/safespace.jpg',
    github: 'https://github.com/username/project2',
    technologies: ['Next.js', 'Node.js']
  },
    {
    id: '4',
    title: 'Showroom App ',
    description: 'Another project showcasing different features.',
    image: '/showroom.jpg',
    github: 'https://github.com/username/project2',
    technologies: ['Next.js', 'Node.js']
  },
   {
    id: '5',
    title: 'Repair App',
    description: 'Another project showcasing different features.',
    image: '/repairing.jpg',
    github: 'https://github.com/username/project2',
    technologies: ['Next.js', 'Node.js']
  },
 
  // Add more projects as needed
];
