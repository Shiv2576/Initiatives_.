// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { ArrowUpRight, CirclePlay } from "lucide-react";
import React from "react";
// import LogoCloud from "./logo-cloud";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-5 mt-20">
      {/* Text Container: Full width, centered */}
      <div className="flex flex-col w-full max-w-7xl items-center">
        <h1
          className="
                text-7xl sm:text-8xl md:text-[8rem] lg:text-[10rem] xl:text-[12rem]
                font-sans font-thin leading-none
                uppercase
                text-neutral-400
                w-full text-center
              "
          style={{
            letterSpacing: "0.2em",
            fontSynthesis: "none",
          }}
        >
          Minimalist
        </h1>

        <h2
          className="
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                font-sans font-thin leading-none
                text-neutral-300 mt-4
                tracking-[0.1em]
                w-full text-center
              "
        >
          Design
        </h2>

        {/* Tertiary line (Very light descriptor) */}
        <div className="mt-8 flex items-center justify-center">
          <span className="text-2xl font-light bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-400 bg-clip-text text-transparent">
            Designing
          </span>
          <span className="mx-6 text-2xl font-light text-neutral-500/40 rotate-12">
            /
          </span>
          <span className="text-2xl font-light bg-gradient-to-r from-neutral-300 via-neutral-400 to-neutral-500 bg-clip-text text-transparent">
            Learning
          </span>
          <span className="mx-6 text-2xl font-light text-neutral-500/40 rotate-12">
            /
          </span>
          <span className="text-2xl font-light bg-gradient-to-r from-neutral-400 via-neutral-500 to-neutral-600 bg-clip-text text-transparent">
            Exploring
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
