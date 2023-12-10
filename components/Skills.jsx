import React from 'react';

const Skills = () => {
  const skillsList = [
    'HTML5',
    'CSS3',
    'Bootstrap',
    'Tailwind CSS',
    'JavaScript',
    'Greensock',
    'ReactJs',
    'NextJs',
    'jQuery',
    'Node',
    'API',
    'GitHub',
    'Git Versioning',
    'Figma',
    'Photoshop',
  ];

  return (
    <div id='skills' className='font-body pb-20 px-72 text-center'>
      <h3 className='font-heading text-center text-2xl mb-5'>Skills</h3>
      <hr className='w-1/12 border-mint border-2 mx-auto mb-10' />
      <p>Current tech stack that I engage with most frequently, either through my current role or via personal projects.</p>
      <div className='mt-10 flex flex-wrap justify-center'>
        {skillsList.map((skill, index) => (
          <span
            key={index}
            className="inline-flex items-center rounded-md bg-mint px-4 py-1 m-2 text-lg font-medium text-slate ring-1 ring-inset ring-mint"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
