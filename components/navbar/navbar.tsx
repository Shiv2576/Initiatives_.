"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavigationSheet } from "./navigation-sheet";
import ThemeToggle from "../theme-toggle";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!navRef.current) return;

    // Subtle scale animation - very quick response
    gsap.to(navRef.current, {
      scale: 0.8,
      ease: "power1.out",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "+=100",
        scrub: 1, // Faster response
        markers: false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed z-10 top-6 inset-x-4 h-14 xs:h-16 backdrop-blur-sm border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full"
    >
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Logo src="/try.jpg" alt="Your Logo" size={50} />

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="https://github.com/Shiv2576/Initiatives_..git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="hidden md:inline-flex">Github</Button>
          </Link>

          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
