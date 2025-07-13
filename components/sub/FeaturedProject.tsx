import Image from "next/image";
import React from "react";
import { LinkIcon } from "@heroicons/react/24/solid";

export const FeaturedProject = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-20 py-20">
      <div className="relative flex flex-col md:flex-row items-center max-w-6xl w-full">
        <div className="max-w-2xl mr-[-80px] z-20 relative">
          <h1 className="font-bold text-purple-500">Game Development</h1>
          <p className="font-semibold text-2xl text-gray-300">
            Inter+ - Virtual Private Server Online World
          </p>
          <div className="bg-gray-200/20 rounded-xl shadow-2xl backdrop-blur-lg px-10">
            <p className="text-gray-300 text-lg mt-5 p-6">
              A web browser-based virtual online world game allowing players to create and customize their own
              avatars, socialize with others, and explore a virtual environment with daily avearage of 60 active users and over 3000 users accounts created
            </p>
          </div>
          <div className="flex flex-row mt-4 items-center gap-2 pb-4">
            <LinkIcon className="h-6 w-6 text-white" />
            <a
              href="https://instagram.com/inter_rasmi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 underline hover:text-purple-600 transition-colors cursor-pointer"
            >
              https://interplus.my
            </a>
            <p className="text-white italic">(Project Discontinued)</p>
          </div>
        </div>

        <div className="rounded-xl shadow-lg p-4 z-10 relative">
          <Image
            src="/images/projects/InterPlus.png"
            alt="Inter+ Project"
            width={350}
            height={350}
            className="w-full object-contain rounded-xl"
          />
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row items-center max-w-6xl w-full">
        <div className="rounded-xl shadow-lg p-4 z-10 relative">
          <Image
            src="/images/projects/Damai.png"
            alt="Inter+ Project"
            width={350}
            height={350}
            className="w-full object-contain rounded-xl"
          />
        </div>
        <div className="max-w-2xl ml-[-80px] z-20 relative">
          <h1 className="font-bold text-purple-500 text-right">
            Final Year Project
          </h1>
          <p className="font-semibold text-2xl text-gray-300 text-right">
            Damai - A Gamified Mobile Mental Health App with Admin Web Portal
          </p>
          <div className="bg-gray-200/20 rounded-xl shadow-2xl backdrop-blur-lg px-10">
            <p className="text-gray-300 text-lg mt-5 p-6 text-right">
              A mobile app for students to track moods, journal, and complete
              self-care routines — with points, streaks, and badges to gamify
              mental wellness. Includes an admin web portal for content and user
              management
            </p>
          </div>
          <div className="flex justify-end">
            <div className="flex flex-row mt-4 items-center gap-2 pb-4">
              <a
                href="https://github.com/haziq-aziz/damai-application"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 underline hover:text-purple-600 transition-colors cursor-pointer"
              >
                https://github.com/haziq-aziz/damai-application
              </a>
              <LinkIcon className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
