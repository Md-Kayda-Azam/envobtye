"use client";

import { useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import Button from "@/components/Button/Button";
import frame from "@/assets/Frame1000005851.png";
import separator from "@/assets/Separator.png";
import { motion } from "framer-motion";

const categories: string[] = [
  "WEBSITE",
  "UI/UX",
  "SEO",
  "LOGO DESIGN",
  "BANNER DESIGN",
  "GOOGLE ADS",
];

import { servicesData } from "../data/Data";

const AvailableServices: React.FC = () => {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("WEBSITE");
  const [activeButton, setActiveButton] = useState<"prev" | "next" | null>(
    null
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default (large screen)
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true,
    centerPadding: "30px",
    responsive: [
      {
        breakpoint: 1024, // 1024px
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768, // 768px
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 480, // 480px (Mobile View)
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="bg-[#001655] pt-10">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <div className="px-9 sm:px-5">
          <div className="text-start flex sm:flex-row flex-col gap-5 sm:gap-0 justify-between items-center w-full mb-6">
            <div className="flex flex-col items-center justify-center sm:justify-start sm:items-start">
              <span className="text-base font-semibold leading-6 text-[#FF693B]">
                DIGITAL SERVICES
              </span>
              <h2 className="text-white lg:text-5xl md:text-4xl text-center sm:text-3xl text-xl font-bold">
                Check Our Available Services
              </h2>
            </div>

            <div className="relative">
              {/* Blur Effect Layer */}
              <div className="hidden sm:block absolute -top-16 -left-2 w-[181px] h-[150px] bg-[#0a3cca40] blur-xl rounded-full"></div>

              {/* Button */}
              <Button
                text="All Services"
                className="relative h-11 w-[180px] text-base rounded-md text-white transition-all duration-200 ease-in-out transform font-inter hover:bg-white hover:border-[#FF6200] hover:text-[#FF6200] bg-[#FF6200] z-10"
              />
            </div>
          </div>

          <hr className="border border-[#FFFFFF42] my-5" />
          {/* Category Buttons */}
          <div className="hidden sm:flex sm:flex-row flex-col md:space-x-3 lg:space-x-4 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-normal text-base sm:text-sm md:text-base leading-[22px] cursor-pointer px-4 py-2 rounded transition-all ${
                  activeCategory === category ? "text-blue-500" : "text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          {/* Category Buttons */}
          <div className="grid sm:hidden grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 items-start mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-normal text-base sm:text-sm md:text-base leading-[22px] cursor-pointer px-4 py-2 rounded transition-all ${
                  activeCategory === category ? "text-blue-500" : "text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Services Slider */}
      <div className="relative">
        <div className="hidden lg:block">
          <div className="z-50 absolute top-2 right-118 2xl:right-134 w-[381px] h-[350px] bg-[#0a3cca40] blur-lg rounded-full"></div>
        </div>

        <Slider ref={setSliderRef} {...settings}>
          {servicesData[activeCategory]?.map((service) => (
            <div key={service.id} className="p-4">
              <div className="bg-[#092768] rounded-lg p-6 text-center shadow-lg">
                <div className="flex justify-center mb-4 h-20">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={80}
                    height={80}
                  />
                </div>
                <h3 className="text-white text-xl! lg:text-2xl leading-9 lg:leading-[42px] font-semibold">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-base leading-[42px] font-normal">
                  {service.description}
                </p>
                <div className="flex justify-center space-x-4 mt-4">
                  <Button
                    text="Portfolio"
                    className="w-[129px] h-9 rounded-full font-normal bg-[#0C89FF] hover:bg-white hover:text-[#0C89FF] hover:border-[#092768] text-white"
                  />
                  <Button
                    text="Order"
                    className="w-[84px] h-9 rounded-full font-normal hover:bg-white border border-[#0C89FF] bg-[#092768] text-[#0C89FF]"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Navigation Buttons */}
        <div className="relative my-10">
          <div className="flex justify-center items-center gap-3 w-full mt-4">
            <div className="w-[84px] flex gap-4">
              <button
                onClick={() => {
                  setActiveButton("prev");
                  sliderRef?.slickPrev();
                }}
                className={`border border-[#4580FF] flex justify-center items-center rounded-md w-[34px] h-[34px] transition-all ${
                  activeButton === "prev" ? "bg-[#FF693B]" : "bg-transparent"
                }`}
              >
                <MdNavigateBefore fill="#FFFFFF" />
              </button>

              <button
                onClick={() => {
                  setActiveButton("next");
                  sliderRef?.slickNext();
                }}
                className={`border border-[#4580FF] flex justify-center items-center rounded-md w-[34px] h-[34px] transition-all ${
                  activeButton === "next" ? "bg-[#FF693B]" : "bg-transparent"
                }`}
              >
                <MdNavigateNext fill="#FFFFFF" />
              </button>
            </div>
          </div>

          <div className="hidden sm:flex justify-end gap-2 mr-16 items-center mb-0">
            <span className="text-white font-raleway font-medium text-sm leading-5">
              Creative Solution
            </span>
            <Image src={separator} alt="Separator" width={50} height={20} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableServices;
