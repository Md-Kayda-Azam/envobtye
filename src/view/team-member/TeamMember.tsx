"use client";

import { useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import teamMember1 from "@/assets/team-member/teammember1.png";
import teamMember2 from "@/assets/team-member/teammember2.png";
import teamMember3 from "@/assets/team-member/teammember3.png";
import teamMember4 from "@/assets/team-member/teammember4.png";

const TeamMember: React.FC = () => {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);
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

  // Review Data
  const teamMembers = [
    {
      id: 1,
      name: "Stephanie Powell",
      role: "Frontend Developer",
      image: teamMember1,
    },
    {
      id: 2,
      name: "Brian Clark",
      role: "Backend Developer",
      image: teamMember2,
    },
    {
      id: 3,
      name: "Christopher White",
      role: "Digital Marketer",
      image: teamMember3,
    },
    {
      id: 4,
      name: "Brian Clark",
      role: "Frontend Developer",
      image: teamMember4,
    },
    {
      id: 5,
      name: "Christopher White",
      role: "Backend Developer",
      image: teamMember1,
    },
    {
      id: 6,
      name: "Stephanie Powell",
      role: "Digital Marketer",
      image: teamMember2,
    },
  ];

  return (
    <div className="bg-[#FFFFFF] py-40 flex justify-center items-center">
      <div className="max-w-[984px] w-full">
        {/* Section Title */}
        <div className="flex flex-col justify-center items-center gap-2 mb-10">
          <span className="text-[#0C89FF] font-semibold text-base leading-6">
            EXPERIENCED TEAM
          </span>
          <h2 className="text-3xl sm:text-[45px] md:text-5xl font-semibold text-[#001246] leading-6 max-w-[800px] mx-auto text-center">
            Our Team Members
          </h2>
        </div>

        {/* Services Slider */}
        <div className="relative">
          <Slider ref={setSliderRef} {...settings}>
            {teamMembers.map((member) => (
              <div key={member.id} className="p-[0.5px] text-center">
                {/* Card Container */}
                <div className="w-full max-w-[355px] mx-auto relative">
                  {/* Image Container */}
                  <div className="w-full h-[433px] relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                      className=""
                    />
                  </div>
                  {/* Name and Role Container */}
                  <div className="bg-[#0A2C8C] text-white p-4 h-[96px] absolute bottom-0 left-0 right-0">
                    <div className="flex justify-center items-start flex-col w-full">
                      <h3 className="text-xl font-semibold leading-7">
                        {member.name}
                      </h3>
                      <p className="text-base font-medium leading-[22px]">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Navigation Buttons */}
          <div className="relative mt-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
