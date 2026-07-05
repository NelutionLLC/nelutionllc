"use client"
import { useState } from "react"
import MobileNav from "./MobileNav"
import Navbar from "./Navbar"

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNavShow = () => setShowNav(!showNav);
  const handleCloseNav = () => setShowNav(false);
  return (
    <div>
      <Navbar openNav={handleNavShow} />
      <MobileNav showNav={showNav} closeNav={handleCloseNav} />
    </div>
  )
}

export default ResponsiveNav
