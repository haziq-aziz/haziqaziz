import React from 'react'
import { AchievementCard } from '../sub/AchievementCard';

export const Achievements = () => {
  return (
    <section
      id="achievements"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden"
      style={{ transform: "scale(0.9)" }}
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          My Achievements
        </h1>
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
          <AchievementCard />
        </div>
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-39 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/video/encryption.webm"
          />
        </div>
      </div>
    </section>
  );
}
