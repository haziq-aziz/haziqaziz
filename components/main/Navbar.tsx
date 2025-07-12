import { Links } from "@/constants";
import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/images/nav/NavLogo.png"
            alt="logo"
            width={110}
            height={70}
            className="cursor-pointer hidden md:block ml-[30px]"
          />
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About Me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="#achievements" className="cursor-pointer">
              Achievemets
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Links.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
              className="hidden md:block"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

