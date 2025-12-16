// logo.tsx - Add this component to your existing file
"use client";

import React from "react";
import { motion } from "framer-motion";

interface NavLogoProps {
  src: string;
  alt?: string;
  size?: number;
}

export const Logo: React.FC<NavLogoProps> = ({
  src,
  alt = "Logo",
  size = 50,
}) => {
  return (
    <motion.div
      className="relative cursor-pointer"
      style={{ width: size, height: size }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 },
      }}
    >
      <div className="relative rounded-full overflow-hidden w-full h-full">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 border border-neutral-700/30 rounded-full" />
      </div>
    </motion.div>
  );
};
