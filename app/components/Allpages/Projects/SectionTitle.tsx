import React from 'react';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-8 text-center 
             bg-gradient-to-r from-purple-400 via-blue-400 to-blue-100
             bg-clip-text text-transparent leading-tight w-fit mx-auto">{title}</h2>
      {subtitle && <p className="text-gray-400 mt-2">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
