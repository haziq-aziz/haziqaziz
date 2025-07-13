import React from 'react'

export const Achievements = () => {
  return (
    <section
      id="achievements"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
      style={{ transform: "scale(0.9)" }}
    >

        <div className="flex flex-col items-center justify-center py-20">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
            My Achievements
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
            {/* Achievement cards will go here */}
            </div>
        </div>
    </section>
  );
}
