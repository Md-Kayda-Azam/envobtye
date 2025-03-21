"use client";

import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import Button from "@/components/Button/Button";
import frame from "@/assets/Frame1000005851.png";
import separator from "@/assets/Separator.png";
import backgroundVendor from "@/assets/waveBg.png";
import { motion } from "framer-motion";

const categories: string[] = [
  "UI/UX",
  "WEBSITE",
  "SEO",
  "LOGO DESIGN",
  "BANNER DESIGN",
  "GOOGLE ADS",
];

import { previousWorkData1, previousWorkData2 } from "../data/Data";

const CheckOurPreviousWork: React.FC = () => {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("WEBSITE");
  const [activeButton, setActiveButton] = useState<"prev" | "next" | null>(
    null
  );

  const [isLoading, setIsLoading] = useState(true);

  // Simulate a 30-second delay for data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Switch to actual data after 30 seconds
    }, 500); // 30,000 milliseconds = 30 seconds

    // Cleanup timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    <div className="bg-[#FFFFFF]">
      <div className="mt-5 sm:mt-0 sm:h-[300px]">
        <div
          className="flex flex-col justify-center items-center w-full h-[200px] sm:h-[400px] lg:h-[450]  xl:h-[500px]"
          style={{
            backgroundImage: `url(${backgroundVendor.src || backgroundVendor})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="text-start gap-5 sm:gap-0 sm:flex-row flex-col flex justify-between items-center w-full px-4">
              <div className="flex flex-col items-center justify-center sm:justify-start sm:items-start">
                <span className="text-base font-semibold leading-6 text-[#0C89FF]">
                  UI/UX PORTFOLIO
                </span>
                <h2 className="text-[#001246] text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                  Check Our Previous Work
                </h2>
              </div>
              <Button
                text="All Portfolio"
                className="w-[180px] h-11 text-base border-transparent border rounded-md text-white transition-all duration-200 ease-in-out transform font-inter hover:bg-white hover:border-[#FF6200] hover:text-[#FF6200] bg-[#FF6200]"
              />
            </div>
          </motion.div>

          <hr className="border border-[#0A2C8C1A] my-2 w-full" />
          {/* Category Buttons */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="w-full hidden sm:flex md:space-x-3 lg:space-x-4 mb-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`font-normal text-base sm:text-sm md:text-base cursor-pointer px-4 py-2 rounded transition-all ${
                    activeCategory === category
                      ? "text-[#0C89FF] font-bold"
                      : "text-[#474747] font-normal"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="grid sm:hidden grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 items-start mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-normal text-base sm:text-sm md:text-base cursor-pointer px-4 py-2 rounded transition-all ${
                activeCategory === category
                  ? "text-[#0C89FF] font-bold"
                  : "text-[#474747] font-normal"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Services Slider */}
      <div className="relative">
        <Slider ref={setSliderRef} {...settings}>
          {isLoading || !previousWorkData1[activeCategory]
            ? // Skeleton Loader
              [...Array(3)].map((_, index) => (
                <div key={index} className="px-4">
                  <div className="bg-white p-6 pb-0 text-center flex justify-center mb-4 h-[279px] w-full md:w-[498px] overflow-hidden animate-pulse">
                    {/* Skeleton Image Placeholder */}
                    <div className="h-full w-full bg-gray-300 rounded"></div>
                  </div>
                </div>
              ))
            : // Actual Previous Work Data
              previousWorkData1[activeCategory]?.map((service) => (
                <div key={service.id} className="px-4">
                  <div className="bg-white p-6 pb-0 text-center flex justify-center mb-4 h-[279px] w-full md:w-[498px] overflow-hidden">
                    <Image
                      src={service.image}
                      alt="PHOTO"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              ))}
        </Slider>
        <Slider ref={setSliderRef} {...settings}>
          {isLoading || !previousWorkData1[activeCategory]
            ? // Skeleton Loader
              [...Array(3)].map((_, index) => (
                <div key={index} className="px-4">
                  <div className="bg-white p-6 pb-0 text-center flex justify-center mb-4 h-[279px] w-full md:w-[498px] overflow-hidden animate-pulse">
                    {/* Skeleton Image Placeholder */}
                    <div className="h-full w-full bg-gray-300 rounded"></div>
                  </div>
                </div>
              ))
            : // Actual Previous Work Data
              previousWorkData1[activeCategory]?.map((service) => (
                <div key={service.id} className="px-4">
                  <div className="bg-white p-6 pb-0 text-center flex justify-center mb-4 h-[279px] w-full md:w-[498px] overflow-hidden">
                    <Image
                      src={service.image}
                      alt="PHOTO"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              ))}
        </Slider>

        {/* Navigation Buttons */}
        <div
          className="relative"
          style={{
            backgroundImage: `url(${frame.src})`, // Use the frame image as background
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            width: "100%",
            height: "100px",
          }}
        >
          <div className="relative w-full mt-4">
            {/* Navigation Buttons Center */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-4">
              <button
                onClick={() => {
                  setActiveButton("prev");
                  sliderRef?.slickPrev();
                }}
                className={`border border-[#4580FF] flex justify-center items-center rounded-md w-[34px] h-[34px] transition-all ${
                  activeButton === "prev" ? "bg-[#FF693B]" : "bg-transparent"
                }`}
              >
                <MdNavigateBefore fill="#0A2C8C" />
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
                <MdNavigateNext fill="#0A2C8C" />
              </button>
            </div>

            {/* Creative Portfolio End e */}
            <div className="md:flex hidden items-center gap-2 ml-auto w-[278px] h-[20px]">
              <span className="text-[#353535] font-raleway font-medium text-sm leading-5">
                Creative portfolio
              </span>
              <Image
                src={separator}
                alt="Separator"
                width={50}
                height={20}
                className="bg-[#353535]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOurPreviousWork;
