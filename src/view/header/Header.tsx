"use client";
import React, { useState } from "react";
import logo from "@/assets/Frame 404.png";
import Image from "next/image";
import Button from "@/components/Button/Button";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="flex justify-between items-center p-4 bg-gradient-to-r text-white">
      <div className="hidden md:flex text-2xl font-bold w-[100px] lg:w-[117px] h-[30px]">
        <Image src={logo} alt="Logo" />
      </div>
      <nav className="hidden md:flex md:gap-3 lg:gap-8 xl:gap-10 2xl:gap-12 lg:font-semibold font-normal  lg:text-base text-sm leading-[22px] text-center uppercase">
        {[
          "Home",
          "Service",
          "Combo Sales",
          "Portfolio",
          "About Us",
          "Blogs",
        ].map((item, index) => (
          <Link
            key={index}
            href="#"
            className={`hover:underline ${
              item === "Home" ? "text-[#FF693B]" : ""
            }`}
          >
            {item}
          </Link>
        ))}
      </nav>
      <Button
        text="See Pricing"
        className="hidden md:flex text-sm border-transparent border rounded-md text-white transition-all duration-200 ease-in-out transform font-inter hover:bg-white hover:border-[#FF6200] hover:text-[#FF6200] bg-[#FF6200] 2xl:h-[50px] 2xl:w-[238px] xl:h-[50px] xl:w-[200px] lg:h-[50px] lg:w-[160px] md:h-[36px] md:w-[100px]"
      />

      {/* Mobile view */}
      <div
        className={`w-full h-96 ${
          menuOpen ? "h-96" : "h-[50px]"
        } md:hidden flex-col`}
      >
        <div className="flex justify-between items-start w-full">
          <div className="w-[100px] h-[30px]">
            <Image src={logo} alt="Logo" />
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            {menuOpen ? (
              <IoMdClose
                size={30}
                className="cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <GiHamburgerMenu
                size={30}
                className="cursor-pointer"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </div>
        {menuOpen && (
          <>
            <nav className="md:hidden flex gap-5 mt-5 flex-col justify-center items-start font-semibold  text-base leading-[22px] text-center uppercase">
              {[
                "Home",
                "Service",
                "Combo Sales",
                "Portfolio",
                "About Us",
                "Blogs",
              ].map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className={`hover:underline ${
                    item === "Home" ? "text-[#FF693B]" : "text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>

            <Button
              text="See Pricing"
              className="md:hidden mt-5 flex text-base font-bold border-transparent border rounded-md text-white transition-all duration-200 ease-in-out transform font-inter hover:bg-white hover:border-[#FF6200] hover:text-[#FF6200] bg-[#FF6200] w-full h-[50px]"
              onClick={() => setMenuOpen(false)}
            />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
