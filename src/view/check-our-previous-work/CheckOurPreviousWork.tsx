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
  };

  return (
    <div className="bg-[#FFFFFF] pt-10">
      <div className="px-9 sm:px-5">
        <div className="text-start flex justify-between items-center w-full mb-6">
          <div>
            <span className="text-base font-semibold leading-6 text-[#0C89FF]">
              UI/UX PORTFOLIO
            </span>
            <h2 className="text-[#001246] text-5xl font-bold">
              Check Our Previous Work
            </h2>
          </div>
          <Button
            text="All Portfolio"
            width={180}
            height={44}
            className="text-base border-transparent border rounded-md text-white transition-all duration-200 ease-in-out transform font-inter hover:bg-white hover:border-[#FF6200] hover:text-[#FF6200] bg-[#FF6200]"
          />
        </div>
        <hr className="border border-[#0A2C8C1A] my-5" />
        {/* Category Buttons */}
        <div className="flex space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={` text-base leading-[22px] cursor-pointer px-4 py-2 rounded transition-all ${
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
          {previousWorkData1[activeCategory]?.map((service) => (
            <div key={service.id} className="px-4">
              <div className="bg-white p-6 pb-0 text-center flex justify-center mb-4 h-[279px] w-[498px] overflow-hidden">
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
          {previousWorkData2[activeCategory]?.map((service) => (
            <div key={service.id} className="px-4">
              <div className="bg-white p-6 pt-0 text-center flex justify-center mb-4 h-[279px] w-[498px] overflow-hidden">
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
            <div className="flex items-center gap-2 ml-auto w-[278px] h-[20px]">
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
