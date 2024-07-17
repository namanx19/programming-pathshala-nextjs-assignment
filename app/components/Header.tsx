"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
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
  return (
    <div>
      <header className="flex justify-between items-center py-8 md:px-28 px-16 bg-neutral-silver">
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

        <div className="hidden lg:block">
          <Button variant="outline" className="mr-2">
            Login
          </Button>
          <Button>Sign up</Button>
        </div>

        {/* Responsive Menu */}
        <div className="lg:hidden">
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
      </header>
    </div>
  );
}

export default Header;