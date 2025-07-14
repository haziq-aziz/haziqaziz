import React from "react";
import { FooterContent } from "../sub/FooterContent";

export const Footer = () => {
  return (
    <footer className="relative w-full bg-transparent text-gray-200 shadow-lg z-[20]">
      <div className="w-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-lg border-t border-[#2a0e61]">
        <FooterContent />
      </div>
    </footer>
  );
};
