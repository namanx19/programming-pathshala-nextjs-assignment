"use client";
import { Button } from "@/components/ui/button";
import { useThemeStore } from "@/providers/ThemeProvider";
import { Menu, MoonIcon, SunIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const navLinks = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Service",
    route: "#service",
  },
  {
    name: "Feature",
    route: "#feature",
  },
  {
    name: "Product",
    route: "#product",
  },
  {
    name: "Testimonial",
    route: "#testimonial",
  },
];

function Header() {
  const { theme, setTheme } = useThemeStore((state) => state);
  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <header className="flex justify-between items-center py-8 md:px-28 sm:px-16 px-8 bg-neutral-silver dark:text-neutral-grey">
        <div className="flex items-center space-x-2">
          <Image src="logo.svg" alt="logo" width={35} height={24} />
          <span className="text-2xl font-bold text-secondary">Nexcent</span>
        </div>

        <nav className="hidden lg:block">
          <ul className="flex space-x-[50px]">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link href={`${item.route}`} className="hover:text-green-600">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden lg:flex flex-row items-center">
          <Button variant="outline" className="mr-2">
            Login
          </Button>
          <Button>Sign up</Button>
          <Button
            variant="outline"
            onClick={handleThemeChange}
            className="p-2 rounded-full ml-4"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </Button>
        </div>

        {/* Responsive Menu */}
        <div className="flex flex-row items-center lg:hidden">
          <Button
            variant="outline"
            onClick={handleThemeChange}
            className="p-2 rounded-full mr-4"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </Button>
          <div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetTitle> Nexcent </SheetTitle>
                <SheetDescription>
                  <nav className="mt-8">
                    <ul className="space-y-4">
                      {navLinks.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={`#${item.route}`}
                            className="hover:text-green-600"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="mt-8 space-y-2">
                    <Button variant="outline" className="w-full">
                      Login
                    </Button>
                    <Button className="w-full">Sign up</Button>
                  </div>
                </SheetDescription>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
