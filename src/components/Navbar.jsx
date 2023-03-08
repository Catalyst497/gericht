import React, { useContext, useState, useEffect } from "react";
import { Menu, X } from "react-feather";
import { ContextProvider } from "../App";
function Navbar() {
  const { isDesktop, setIsDesktop } = useContext(ContextProvider);
  const [menuOpen, setMenuOpen] = useState(false);
  const [overlayPresent, setOverlayPresent] = useState(false);
  useEffect(() => {
    if (menuOpen) setOverlayPresent(true);
    else {
      setTimeout(() => {
        setOverlayPresent(false);
      }, [300]);
    }
  }, [menuOpen]);
  return (
    <>
      {overlayPresent && (
        <div onClick={() => setMenuOpen(false)} className={`overlay z-[99] fixed bg-[#00000099] inset-0 ${menuOpen ? 'opacity-1' : 'opacity-0'} duration-300`}></div>
      )}
      {!isDesktop && (
        <nav
          className={`fixed w-[70vw] inset-y-0 z-[999] flex flex-col p-8 text-[black] bg-[white] duration-300 gap-10 ${
            menuOpen ? "translate-x-0" : "translate-x-[-100%]"
          }`}
        >
          <X onClick={() => setMenuOpen(false)} />
          <ul className="flex flex-col gap-5 mt-16">
            <li>Home</li>
            <li>Pages</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Landing</li>
          </ul>
          <ul className="flex flex-col justify-between items-center gap-5">
            <li>Login / Registration</li>
            <div className="hr w-10 h-[1px] bg-black"></div>
            <li>Book Table</li>
          </ul>
        </nav>
      )}
      <div className="Navbar py-4 ">
        <nav className="flex justify-between w-[90%] md:w-[85%] mx-auto items-center">
          <img src="/images/Logo.png" className="h-12" alt="Logo" />
          {isDesktop ? (
            <>
              <ul className="flex gap-8">
                <li>Home</li>
                <li>Pages</li>
                <li>Contact Us</li>
                <li>Blog</li>
                <li>Landing</li>
              </ul>
              <ul className="flex justify-between items-center gap-8">
                <li>Login / Registration</li>
                <div className="hr h-10 w-[1px] bg-[white]"></div>
                <li>Book Table</li>
              </ul>
            </>
          ) : (
            <Menu onClick={() => setMenuOpen(true)} />
          )}
        </nav>
      </div>
    </>
  );
}

export default Navbar;
