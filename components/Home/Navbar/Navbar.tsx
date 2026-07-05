"use client"
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3 } from "react-icons/hi2";

type Props = {
  openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {

  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${navBg ? 'bg-blue-950 shadow-md' : 'bg-transparent'} transition-all duration-300 h-[65px] z-[1000] fixed w-full`}>
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">

        {/* Logo */}
        <span className="text-white uppercase text-xl font-bold tracking-widest">Nelution</span>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.id}>
              <p className="relative text-white text-sm font-medium w-fit block after:block after:w-full after:h-[2px] after:bg-white after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65,0.05,0.36,1)] hover:after:origin-bottom-left hover:after:scale-x-100">
                {link.label}
              </p>
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="hidden sm:block bg-white/10 border border-white/30 text-white text-sm font-semibold px-4 py-1.5 rounded-md hover:bg-white/20 transition-all duration-200">
            Admin
          </Link>
          <Link href="/login" className="hidden sm:block bg-white text-blue-950 text-sm font-semibold px-4 py-1.5 rounded-md hover:bg-gray-100 transition-all duration-200">
            Login
          </Link>
          <button
            onClick={openNav}
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-md bg-white/10 hover:bg-white/20 transition-colors duration-200"
          >
            <HiBars3 className="text-white text-xl" />
          </button>
        </div>

      </div>
    </div>
  )
}

export default Navbar;
