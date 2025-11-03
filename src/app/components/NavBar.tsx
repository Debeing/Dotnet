import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function Navbar() {
  return (
    <>
    <header className=" max-w-6xl mx-auto">
        <div className=" flex items-center gap-2.5 w-full justify-between z-10 bg-white/95 px-4 ">
          {/* Logo (left) */}
          <div className=" ">
            <Link href="/" className="text-lg font-bold inline-flex items-center">
              <Image src="/logo.png" alt="Logo" width={72} height={34} />
            </Link>
          </div>

          {/* Centered Navigation */}
          <nav className=" justify-center gap-6 flex text-sm font-lenx">
            <Link href="/" className="font-bold">Home</Link>
            <Link href="/event">Events</Link>
            <Link href="/about">About us</Link>
            <Link href="/project">Projects</Link>
            <Link href="/resource">Resources</Link>
          </nav>

          <div className="flex items-center font-grotesk">
            <Button variant={'outline'}>Contact-us</Button>
            <div className="flex items-center ml-2 cursor-pointer font-space-grotesk leading-[160%] text-center tracking-[0%">
              <span>English</span>
              <ChevronDown className="ml-1"/>
            </div>
          </div>
        </div>

      
    </header>
    {/* Images */}
    </>
  );
}