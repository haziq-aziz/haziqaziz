import Image from "next/image";
import React from "react";
import { FeaturedProject } from "./FeaturedProject";
import { LinkIcon } from "@heroicons/react/24/solid";

interface Props {
  src: string;
  title: string;
  description: string;
  tech: string;
  link: string;
}

export const ProjectCard = ({ src, title, description, tech, link }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2a0e61] h-[500px] flex flex-col">
      <div className="h-100 w-full overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={1200}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative p-4 flex-1 flex flex-col">
        <h1 className="text-xl font-semibold text-white line-clamp-2">
          {title}
        </h1>
        <p className="mt-2 text-gray-300 flex-1 line-clamp-4">
          {description}
        </p>
        <p className="mt-2 text-gray-400 text-sm line-clamp-2">Tech: {tech}</p>
        <div className="flex flex-row mt-3 items-center gap-2">
          <LinkIcon className="h-5 w-5 text-white flex-shrink-0" />
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 underline hover:text-cyan-600 transition-colors cursor-pointer truncate"
          >
            {link}
          </a>
        </div>
      </div>
    </div>
  );
};
