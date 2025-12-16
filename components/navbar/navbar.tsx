import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import ThemeToggle from "../theme-toggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed z-10 top-6 inset-x-4 h-14 xs:h-16  backdrop-blur-sm border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Logo src="/try.jpg" alt="Your Logo" size={50} />
        {/* Desktop Menu */}
        {/*<NavMenu className="hidden md:block" />*/}

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Link
            href="https://github.com/Shiv2576/Initiatives_..git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="hidden xs:inline-flex">Github</Button>
          </Link>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
