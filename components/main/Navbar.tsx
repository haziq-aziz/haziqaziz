"use client";

import { Links } from "@/constants";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "achievements"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home", id: "home" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#achievements", label: "Achievements", id: "achievements" },
  ];

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-2 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <a href="#home" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/images/nav/NavLogo.png"
            alt="logo"
            width={70}
            height={45}
            className="cursor-pointer md:w-[110px] md:h-auto"
          />
        </a>

        <div className="flex-1 h-full flex flex-row items-center justify-center md:justify-end md:mr-20">
          <div className="flex items-center justify-between w-full max-w-[90%] md:max-w-[500px] h-auto border border-[#7042f861] bg-[#0300145e] backdrop-blur-xl px-2 md:px-[20px] py-[10px] rounded-full text-gray-200 shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`cursor-pointer px-1 md:px-3 py-2 rounded-full transition-all duration-300 relative overflow-hidden text-xs md:text-sm ${
                  activeSection === item.id
                    ? "text-white bg-white/20 backdrop-blur-md shadow-md"
                    : "hover:text-white hover:bg-white/10 hover:backdrop-blur-sm"
                }`}
              >
                {activeSection === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-sm" />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
