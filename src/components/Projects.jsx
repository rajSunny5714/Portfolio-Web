import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-12 px-4 md:px-10">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold text-neutral-100"
      >
        Projects
      </motion.h1>

      <div className="flex flex-col gap-16">
        {PROJECTS.map((project, index) => {
          let buttonClasses = "bg-red-600 bg-opacity-40 text-white"; // first two buttons

          if (index >= 2 && index < 4) {
            buttonClasses = "bg-orange-400 bg-opacity-40 text-black";
          }

          return (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center gap-8"
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="relative w-full lg:w-1/3 flex justify-center"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-[250px] md:w-[300px] lg:w-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                />

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center rounded-lg"
                >
                  <button
                    className={`${buttonClasses} font-semibold rounded-lg shadow-md hover:bg-opacity-60 transition px-5 py-2`}
                  >
                    🔗 Live Project
                  </button>
                </a>
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-2/3 max-w-xl"
              >
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  <h6 className="mb-2 text-xl md:text-2xl font-bold text-neutral-100">
                    {project.title}
                  </h6>
                </a>

                <p className="mb-4 text-neutral-400 text-sm md:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {(project.technologies || []).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-green-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
