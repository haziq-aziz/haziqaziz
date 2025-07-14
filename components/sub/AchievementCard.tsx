"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LinkIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";

export const AchievementCard = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAlt, setSelectedAlt] = useState<string>("");

  const openImagePopup = (src: string, alt: string) => {
    setSelectedImage(src);
    setSelectedAlt(alt);
  };

  const closeImagePopup = () => {
    setSelectedImage(null);
    setSelectedAlt("");
  };
  return (
    <>
      <div className="flex flex-row items-center justify-center min-h-screen h-full relative z-30">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex flex-col md:flex-row translate-y-[-50px] bg-gray-800/50 rounded-xl shadow-2xl backdrop-blur-lg p-6 relative z-40">
            <div
              className="cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0 md:w-1/3"
              onClick={() =>
                openImagePopup(
                  "/images/achievements/AsiaImpact.png",
                  "Asia Impact Award"
                )
              }
            >
              <Image
                src="/images/achievements/AsiaImpact.png"
                alt="Asia Impact Award"
                width={300}
                height={100}
                className="rounded-xl w-full h-auto object-contain"
              />
            </div>
            <div className="mx-4 my-2 flex-1 md:w-2/3">
              <h2 className="text-purple-500 text-xl font-semibold mb-4">
                ASIA IMPACT HACKATHON 2025 Excellence Award
              </h2>
              <br />
              <br />
              <p className="text-gray-300">
                Advanced to the Grand Final (Top 6 out of 300+ teams across Asia
                Pacific) and secured Excellence award for TranslateSL, a Figma
                prototype that enhances communication accessibility through real
                time sign language translator.
              </p>
              <div className="mt-2 relative z-50">
                <LinkIcon className="h-6 w-6 text-white inline-block mr-2" />
                <Link
                  href="https://www.dchallenge.org/hackathon-2025/translate-sl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 underline hover:text-cyan-600 transition-colors cursor-pointer"
                  style={{ pointerEvents: "auto" }}
                >
                  View Award Details
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row translate-y-[-50px] bg-gray-800/50 rounded-xl shadow-2xl backdrop-blur-lg p-6 relative z-40">
            <div
              className="cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0 md:w-1/3"
              onClick={() =>
                openImagePopup(
                  "/images/achievements/IVCCII.png",
                  "IVCCII 2025 Gold Award"
                )
              }
            >
              <Image
                src="/images/achievements/IVCCII.png"
                alt="Asia Impact Award"
                width={300}
                height={100}
                className="rounded-xl w-full h-auto object-contain"
              />
            </div>
            <div className="mx-4 my-2 flex-1 md:w-2/3">
              <h2 className="text-cyan-500 text-xl font-semibold mb-4">
                INTERNATIONAL VIRTUAL COMPETITION OF CREATIVE & INNOVATIVE IDEA
                (IVCCII) 2025 Gold Award
              </h2>
              <p className="text-gray-300">
                Category C - Undergraduate Student: Recognized for Damai, a
                gamified mental health and well being mobile app for university
                students, awarded for its innovation, creativity, and social
                impact.
              </p>
              <div className="mt-2 relative z-50">
                <LinkIcon className="h-6 w-6 text-white inline-block mr-2" />
                <Link
                  href="https://youtu.be/VMIcHxfelGo?si=UcbW6oLkYWPPQeAf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 underline hover:text-cyan-600 transition-colors cursor-pointer"
                  style={{ pointerEvents: "auto" }}
                >
                  View Award Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] backdrop-blur-sm"
          onClick={closeImagePopup}
        >
          <div className="relative max-w-4xl max-h-screen p-4">
            <button
              onClick={closeImagePopup}
              className="absolute top-2 right-2 z-[110] bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
            >
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <Image
                src={selectedImage}
                alt={selectedAlt}
                width={800}
                height={600}
                className="rounded-lg max-w-full max-h-screen object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
