import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import React from "react";
import LogoCloud from "./logo-cloud";

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
        <p className="text-xl font-light text-neutral-300 mt-8">
          A visual language exploration
        </p>
      </div>
    </div>
  );
};

export default Hero;
