import React from 'react'
import { HeroContent } from '../sub/HeroContent'

export const Hero = () => {
  return (
    <section id="home" >
      <div className="relative flex flex-col h-full w-full">
          <video
              autoPlay
              muted
              loop
              className="rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover"
          >
              <source src="/video/blackhole.webm" type="video/webm" />
          </video>
          <HeroContent />
      </div>
    </section>
  )
}
