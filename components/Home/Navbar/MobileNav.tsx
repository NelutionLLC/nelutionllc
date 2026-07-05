import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { HiXMark } from "react-icons/hi2";


type Props = {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ closeNav, showNav }: Props) => {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeNav}
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-[1000] ${showNav ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Drawer */}
      <div className={`fixed top-0 left-0 h-full w-[75%] sm:w-[55%] bg-blue-950 z-[1050] transform transition-transform duration-300 ease-in-out ${showNav ? 'translate-x-0' : '-translate-x-full'}`}>

        {/* Header */}
        <div className="flex items-center justify-between px-6 h-[65px] border-b border-white/10">
          <span className="text-white uppercase text-lg font-bold tracking-widest">Nelution</span>
          <button
            onClick={closeNav}
            className="flex items-center justify-center w-8 h-8 rounded-md bg-white/10 hover:bg-white/20 transition-colors duration-200"
          >
            <HiXMark className="text-white text-xl" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col px-6 py-6 gap-1">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.id} onClick={closeNav}>
              <p className="text-white/80 hover:text-white text-base font-medium py-3 border-b border-white/10 transition-colors duration-200">
                {link.label}
              </p>
            </Link>
          ))}
        </nav>

        {/* Login */}
        <div className="px-6">
          <Link href="/login" onClick={closeNav} className="block w-full bg-white text-blue-950 font-semibold text-sm py-2.5 rounded-md hover:bg-gray-100 transition-colors duration-200 text-center">
            Login
          </Link>
        </div>
      </div>
    </>
  )
}

export default MobileNav
