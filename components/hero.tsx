// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { ArrowUpRight, CirclePlay } from "lucide-react";
import React from "react";
// import LogoCloud from "./logo-cloud";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-5 md:p-6">
      {/* Text Container: Full width, centered */}
      <div className="flex flex-col w-full max-w-6xl md:max-w-7xl items-center px-2 sm:px-4">
        {/* Main heading - responsive sizing and spacing */}
        <h1
          className="
                text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem]
                font-sans font-thin leading-[0.9]
                uppercase
                text-neutral-400
                w-full text-center
                tracking-[0.08em] sm:tracking-[0.12em] md:tracking-[0.16em] lg:tracking-[0.2em]
                break-words
              "
          style={{
            fontSynthesis: "none",
          }}
        >
          Minimalist
        </h1>

        {/* Subheading - responsive sizing and spacing */}
        <h2
          className="
                text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                font-sans font-thin leading-none
                text-neutral-300
                mt-3 xs:mt-4 sm:mt-5 md:mt-6 lg:mt-8
                tracking-[0.04em] sm:tracking-[0.06em] md:tracking-[0.08em] lg:tracking-[0.1em]
                w-full text-center
              "
        >
          Design
        </h2>

        {/* Tertiary line - mobile optimized with flex-wrap */}
        <div className="mt-6 sm:mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4">
          <span className="text-base xs:text-lg sm:text-xl md:text-2xl font-light bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-400 bg-clip-text text-transparent">
            Designing
          </span>
          <span className="text-base xs:text-lg sm:text-xl md:text-2xl font-light text-neutral-500/40 rotate-12 mx-2 sm:mx-3 md:mx-4">
            /
          </span>
          <span className="text-base xs:text-lg sm:text-xl md:text-2xl font-light bg-gradient-to-r from-neutral-300 via-neutral-400 to-neutral-500 bg-clip-text text-transparent">
            Learning
          </span>
          <span className="text-base xs:text-lg sm:text-xl md:text-2xl font-light text-neutral-500/40 rotate-12 mx-2 sm:mx-3 md:mx-4">
            /
          </span>
          <span className="text-base xs:text-lg sm:text-xl md:text-2xl font-light bg-gradient-to-r from-neutral-400 via-neutral-500 to-neutral-600 bg-clip-text text-transparent">
            Exploring
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
