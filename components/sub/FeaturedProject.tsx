import Image from "next/image";
import React from "react";
import { LinkIcon } from "@heroicons/react/24/solid";

export const FeaturedProject = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 md:gap-20 py-8 md:py-20 px-2 sm:px-4">
      {/* First Project */}
      <div className="relative flex flex-col md:flex-row items-center max-w-6xl w-full gap-4 md:gap-0">
        <div className="w-full md:max-w-2xl z-20 relative order-2 md:order-1 md:mr-[-80px]">
          <h1 className="font-bold text-purple-500 text-center md:text-left">
            Game Development
          </h1>
          <p className="font-semibold text-lg md:text-xl lg:text-2xl text-gray-300 text-center md:text-left">
            Inter+ - Virtual Private Server Online World
          </p>
          <div className="bg-gray-200/20 rounded-xl shadow-2xl backdrop-blur-lg overflow-hidden mt-4">
            <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">
              <p className="text-white text-sm sm:text-base md:text-lg text-center md:text-left mb-4">
                A web browser-based virtual online world game allowing players to
                create and customize their own avatars with daily average of 60
                active users and over 3000 user accounts created
              </p>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base text-center md:text-left">
                Tech: Ubuntu Server, Nginx, MariaDB (MySQL), Java (Server Side),
                Laravel PHP (Client Side), Cloudflare, Tailwind CSS
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start items-center mt-4 gap-2 pb-4">
            <LinkIcon className="h-4 w-4 md:h-6 md:w-6 text-white" />
            <a
              href="https://instagram.com/inter_rasmi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 underline hover:text-cyan-600 transition-colors cursor-pointer text-xs sm:text-sm md:text-base break-all"
            >
              https://interplus.my
            </a>
            <p className="text-white italic text-xs sm:text-sm md:text-base">
              (Project Discontinued)
            </p>
          </div>
        </div>

        <div className="w-full md:w-auto rounded-xl shadow-lg p-2 md:p-4 z-10 relative order-1 md:order-2">
          <Image
            src="/images/projects/InterPlus.png"
            alt="Inter+ Project"
            width={350}
            height={350}
            className="w-full max-w-[250px] sm:max-w-[280px] md:max-w-[350px] mx-auto object-contain rounded-xl"
          />
        </div>
      </div>

      {/* Second Project */}
      <div className="relative flex flex-col md:flex-row-reverse items-center max-w-6xl w-full gap-4 md:gap-0">
        <div className="w-full md:max-w-2xl z-20 relative order-2 md:order-1 md:ml-[-80px]">
          <h1 className="font-bold text-purple-500 text-center md:text-right">
            Final Year Project
          </h1>
          <p className="font-semibold text-lg md:text-xl lg:text-2xl text-gray-300 text-center md:text-right">
            Damai - A Gamified Mobile Mental Health App with Admin Web Portal
          </p>
          <div className="bg-gray-200/20 rounded-xl shadow-2xl backdrop-blur-lg overflow-hidden mt-4">
            <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">
              <p className="text-white text-sm sm:text-base md:text-lg text-center md:text-right mb-4">
                A cross platform (iOS and Android) mobile app for students to
                track moods, journal, and complete self-care routines — with
                points, streaks, and badges to gamify mental wellness. Includes an
                admin web portal for content and user management
              </p>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base text-center md:text-right">
                Tech: Typescript, React Native, Expo, Firebase, Node.js, React.js,
                Next.js, Nativewind CSS
              </p>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="flex flex-wrap justify-center md:justify-end items-center mt-4 gap-2 pb-4">
              <a
                href="https://github.com/haziq-aziz/damai-application"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 underline hover:text-cyan-600 transition-colors cursor-pointer text-xs sm:text-sm md:text-base break-all"
              >
                https://github.com/haziq-aziz/damai-application
              </a>
              <LinkIcon className="h-4 w-4 md:h-6 md:w-6 text-white" />
            </div>
          </div>
        </div>

        <div className="w-full md:w-auto rounded-xl shadow-lg p-2 md:p-4 z-10 relative order-1 md:order-2">
          <Image
            src="/images/projects/Damai.png"
            alt="Damai Project"
            width={350}
            height={350}
            className="w-full max-w-[250px] sm:max-w-[280px] md:max-w-[350px] mx-auto object-contain rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};
