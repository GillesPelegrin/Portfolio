import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ReactComponent as IconMenu } from "./logo.svg";

export default function Navbar() {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  return (
    <>
      <nav className="mx-4 flex h-1/6  justify-between font-sans font-semibold text-color-title md:mx-10 lg:mx-20">
        <div className="flex items-center gap-4 xl:gap-6">
          <IconMenu className=" h-12 w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20" />
          <div className=" text-3xl lg:text-4xl xl:text-5xl ">
            Gilles Pelegrin
          </div>
        </div>
        <button
          className="flex items-center md:hidden"
          type="button"
          onClick={() => setOpenMobileNav(!openMobileNav)}
        >
          <GiHamburgerMenu size={30} />
        </button>
        <div className=" hidden cursor-pointer md:flex ">
          <ul className="flex flex-col text-2xl text-color-title md:flex-row  md:space-x-6   lg:space-x-8 lg:text-3xl xl:text-4xl">
            <li className="md:flex md:items-center">
              <a className="block hover:text-color-text">Languages</a>
            </li>
            <li className="md:flex md:items-center">
              <a className="block hover:text-color-text">Projects</a>
            </li>
            <li className="md:flex md:items-center">
              {/* This button does not respons the right way, i have the feeling that the border is removed when hovering */}
              <a className="block rounded-2xl  border-4 border-secundary p-2 text-secundary hover:bg-secundary hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {openMobileNav && (
        <div className="absolute inset-x-0 mx-4 my-4 block cursor-pointer  font-sans font-semibold shadow-lg md:hidden">
          <ul className=" mx-4 py-8 text-2xl text-color-title  ">
            <li className="mb-2">
              <a className="hover:text-color-text">Languages</a>
            </li>
            <li className="mb-2">
              <a className="mb-2 hover:text-color-text">Projects</a>
            </li>
            <li>
              <a className="mb-2  text-secundary hover:text-sky-600">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
