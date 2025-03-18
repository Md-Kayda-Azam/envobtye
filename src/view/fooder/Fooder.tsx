import Image from "next/image";
import React from "react";
import Logo from "@/assets/Frame 404.png";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin, FaPinterest, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Facebook from "@/assets/social-icon/facebook.png";
import LinkedIn from "@/assets/social-icon/LinkedInLink.png";
import Instagram from "@/assets/social-icon/instagram.png";
import Pinterest from "@/assets/social-icon/pinterest.png";
import X from "@/assets/social-icon/x.png";

const Footer = () => {
  return (
    <footer className="bg-[#001243] text-white pt-10 pb-5">
      <div className="w-[1200px] mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Column 1: Logo and Description */}
          <div className="col-span-2">
            <div className="mb-4">
              <Image src={Logo} alt="LOGO" height={30} width={117} />
            </div>
            <p className="w-full md:w-[225px] text-sm md:text-base font-normal md:leading-6 text-gray-300 font-roboto tracking-normal">
              We are an IT Company. We help businesses by bringing ideas to life
              easily & affordably.
            </p>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-raleway text-[#FFFFFF]">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FF693B] transition-colors text-sm md:text-base font-normal md:leading-6 text-gray-300 font-roboto tracking-normal"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FF693B] transition-colors text-sm md:text-base font-normal md:leading-6 text-gray-300 font-roboto tracking-normal"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FF693B] transition-colors text-sm md:text-base font-normal md:leading-6 text-gray-300 font-roboto tracking-normal"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Learn More */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-raleway text-[#FFFFFF]">
              Learn More
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FF693B] transition-colors text-sm md:text-base font-normal md:leading-6 text-gray-300 font-roboto tracking-normal"
                >
                  Combo Offer
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FF693B] transition-colors text-sm md:text-base font-normal md:leading-6 text-gray-300 font-roboto tracking-normal"
                >
                  Service Charge
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FF693B] transition-colors text-sm md:text-base font-normal md:leading-6 text-gray-300 font-roboto tracking-normal"
                >
                  EnvoByte App
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-raleway text-[#FFFFFF]">
              Support
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FF693B] transition-colors text-sm md:text-base font-normal md:leading-6 text-gray-300 font-roboto tracking-normal"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FF693B] transition-colors text-sm md:text-base font-normal md:leading-6 text-gray-300 font-roboto tracking-normal"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FF693B] transition-colors text-sm md:text-base font-normal md:leading-6 text-gray-300 font-roboto tracking-normal"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Get In Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-raleway text-[#FFFFFF]">
              Get In Touch
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center">
                <div className="mr-2 flex items-center justify-center">
                  <MdOutlineEmail size={24} fill="#e67d51" />
                </div>
                <Link
                  href="mailto:jerry@envobyte.com"
                  className="hover:text-[#FF693B] transition-colors text-sm md:text-base font-normal md:leading-6 text-gray-300 font-roboto tracking-normal"
                >
                  support@envobyte.com
                </Link>
              </li>
              <li className="flex items-center">
                <div className="mr-2 flex items-center justify-center">
                  <FaWhatsapp size={24} fill="#e67d51" />
                </div>
                <Link
                  href="tel:+1-667-777-2477"
                  className="hover:text-[#FF693B] transition-colors text-sm md:text-base font-normal md:leading-6 text-gray-300 font-roboto tracking-normal"
                >
                  +1 667 777 2477
                </Link>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <Link
                target="_blank"
                href="https://www.facebook.com/envobyte"
                legacyBehavior
              >
                <Image
                  src={Facebook}
                  alt="Facebook"
                  height={24}
                  width={24}
                  className="cursor-pointer transform hover:scale-125 transition-all duration-300"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/envobyte/"
                legacyBehavior
              >
                <Image
                  src={LinkedIn}
                  alt="LinkedIn"
                  height={24}
                  width={24}
                  className="cursor-pointer transform hover:scale-125 transition-all duration-300"
                />
              </Link>
              <Link href="https://www.instagram.com/envobyte/" legacyBehavior>
                <Image
                  src={Instagram}
                  alt="Instagram"
                  height={24}
                  width={24}
                  className="cursor-pointer transform hover:scale-125 transition-all duration-300"
                />
              </Link>
              <Link href="https://x.com/envobyte" legacyBehavior>
                <Image
                  src={X}
                  alt="X"
                  height={24}
                  width={24}
                  className="cursor-pointer transform hover:scale-125 transition-all duration-300"
                />
              </Link>
              <Link href="https://www.pinterest.com/envobyte/" legacyBehavior>
                <Image
                  src={Pinterest}
                  alt="Pinterest"
                  height={24}
                  width={24}
                  className="cursor-pointer transform hover:scale-125 transition-all duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="border-t border-gray-700 font-bold leading-[21px] mt-8 pt-4 text-center text-sm text-[#FFFFFF]">
        ©2025, Envobyte. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
