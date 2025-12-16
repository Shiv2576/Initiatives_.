import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import Link from "next/link";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Logo src="/try.jpg" alt="Your Logo" size={50} />

        <div className="mt-8 space-y-4">
          <Link
            href="https://github.com/Shiv2576/Initiatives_..git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="hidden xs:inline-flex ">Github</Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};
