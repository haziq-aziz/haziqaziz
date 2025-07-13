import React from 'react'
import { ProjectCard } from '../sub/ProjectCard'
import { FeaturedProject } from '../sub/FeaturedProject';

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
      style={{ transform: "scale(0.9)" }}
    >
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        My Projects
      </h1>
        <FeaturedProject />
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {/* <ProjectCard
          src="/images/projects/InterPlus.png"
          title="Inter+ - Virtual Online World (Private Server)"
          description="A web browser-based virtual online world game, inspired by Habbo Hotel."
        />
        <ProjectCard
          src="/images/projects/InterPlus.png"
          title="Inter+ - Virtual Online World (Private Server)"
          description="A web browser-based virtual online world game, inspired by Habbo Hotel."
        />
        <ProjectCard
          src="/images/projects/InterPlus.png"
          title="Inter+ - Virtual Online World (Private Server)"
          description="A web browser-based virtual online world game, inspired by Habbo Hotel."
        /> */}
      </div>
    </div>
    </section>
  );
}
