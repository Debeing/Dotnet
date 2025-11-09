"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const tabs = [
    { label: "Home", link: "/" },
    { label: "Events", link: "/event" },
    { label: "About us", link: "/about" },
    { label: "Projects", link: "/project" },
    { label: "Resources", link: "/resource" },

  ];

  return (
    <>
      <header className=" max-w-7xl mx-auto">
        <div className=" flex items-center gap-2.5 w-full justify-between z-10 bg-white/95 px-4 ">
          {/* Logo (left) */}
          <div className=" ">
            <Link
              href="/"
              className="text-lg font-bold inline-flex items-center"
            >
              <Image src="/logo.png" alt="Logo" width={72} height={34} />
            </Link>
          </div>

          {/* Centered Navigation */}
          <nav className={`hidden md:flex justify-center gap-6  text-sm font-lexend `}>
            {tabs.map((tab, index) => (
              <Link
                className={`${index === 0 && "font-bold"}`}
                href={tab.link}
                key={index}
              >
                {tab.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center font-grotesk">
            <Button variant={"outline"}>Contact-us</Button>
            <div className="flex items-center ml-2 cursor-pointer font-space-grotesk leading-[160%] text-center tracking-[0%">
              <span>English</span>
              <ChevronDown className="ml-1" />
            </div>
          </div>

          {/* mobilr menu */}
          <div className="md:hidden">
            <button onClick={()=>setIsOpen(prev=>!prev)}>
             { isOpen?<X />:<Menu />}
            </button>
            <div className={`${isOpen?"block":"hidden"} bg-white absolute top-16 right-2 w-48 px-4 py-1`}>
              {tabs.map((tab, index) =>(
                <Link className="flex" href={tab.link}
                key={index}>
                  {tab.label}
                </Link>
              ))}
              
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
