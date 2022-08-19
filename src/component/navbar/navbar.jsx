import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ReactComponent as Logo } from "./logo.svg";

export default function Navbar() {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  return (
    <>
      <nav className="mx-4 flex h-1/6  justify-between font-sans font-semibold text-color-title md:mx-10 lg:mx-20">
        <div className="md: flex items-center gap-4 lg:gap-6">
          <Logo className=" h-12 w-12 md:h-16 md:w-16  " />
          <div className=" text-3xl lg:text-4xl ">Gilles Pelegrin</div>
        </div>
        <button
          className="flex items-center md:hidden"
          type="button"
          onClick={() => setOpenMobileNav(!openMobileNav)}
        >
          <GiHamburgerMenu size={30} />
        </button>
        <div className=" hidden cursor-pointer md:flex ">
          <ul className=" flex flex-row   gap-4 text-2xl text-color-title lg:text-3xl xl:gap-12">
            <li className="md:flex md:items-center">
              <a href="#language" className="block hover:text-color-text">
                Languages
              </a>
            </li>
            <li className="md:flex md:items-center">
              <a href="#project" className="block hover:text-color-text">
                Projects
              </a>
            </li>
            <li className="md:flex md:items-center">
              {/* This button does not respons the right way, i have the feeling that the border is removed when hovering */}
              <a
                href="#contact"
                className="block rounded-2xl  border-4 border-secundary p-1 text-secundary hover:bg-secundary hover:text-white lg:p-2"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {openMobileNav && (
        <div className="absolute inset-x-0 m-3 block cursor-pointer bg-white  font-sans font-semibold shadow-lg md:hidden">
          <ul className=" mx-4 py-8 text-2xl text-color-title  ">
            <li className="mb-2">
              <a href="#language" className="hover:text-color-text">
                Languages
              </a>
            </li>
            <li className="mb-2">
              <a href="#project" className="mb-2 hover:text-color-text">
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="mb-2  text-secundary hover:text-sky-600"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
