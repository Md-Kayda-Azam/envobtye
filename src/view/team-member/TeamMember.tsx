"use client";
import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import teamMember1 from "@/assets/team-member/dersr.png";
import teamMember2 from "@/assets/team-member/teammember3fdvesr.png";
import teamMember3 from "@/assets/team-member/teammember4fedwsa.png";
import teamMember4 from "@/assets/team-member/teammemberfejwayr.png";
import { motion } from "framer-motion";

const TeamMember: React.FC = () => {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);
  const [activeButton, setActiveButton] = useState<"prev" | "next" | null>(
    null
  );

  const [isLoading, setIsLoading] = useState(true);

  // Simulate a 30-second delay for data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Switch to actual data after 30 seconds
    }, 1000); // 30,000 milliseconds = 30 seconds

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
        breakpoint: 1024,
        settings: { slidesToShow: 2, centerPadding: "20px" },
      },
      { breakpoint: 768, settings: { slidesToShow: 1, centerPadding: "10px" } },
      { breakpoint: 480, settings: { slidesToShow: 1, centerPadding: "0px" } },
    ],
  };

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
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="flex flex-col justify-center items-center gap-2 mb-10">
            <span className="text-[#0C89FF] font-semibold text-base leading-6">
              EXPERIENCED TEAM
            </span>
            <h2 className="text-3xl sm:text-[45px] md:text-5xl font-semibold text-[#001246] text-center">
              Our Team Members
            </h2>
          </div>
        </motion.div>

        <div className="relative">
          <Slider ref={setSliderRef} {...settings}>
            {isLoading || teamMembers.length === 0
              ? // Skeleton Loader
                [...Array(3)].map((_, index) => (
                  <div key={index} className="p-[0.5px] text-center">
                    <div className="w-full max-w-[355px] mx-auto relative">
                      {/* Skeleton Image Placeholder */}
                      <div className="w-full h-[350px] relative animate-pulse">
                        <div className="bg-gray-300 w-full h-full"></div>
                      </div>
                      {/* Skeleton Text Overlay */}
                      <div className="bg-[#0A2C8C] p-4 h-[96px] absolute bottom-0 left-0 right-0 animate-pulse">
                        <div className="flex justify-center items-start flex-col w-full">
                          <div className="h-5 bg-gray-400 rounded w-3/4 mb-2"></div>
                          <div className="h-4 bg-gray-400 rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : // Actual Team Members
                teamMembers.map((member) => (
                  <div key={member.id} className="p-[0.5px] text-center">
                    <div className="w-full max-w-[355px] mx-auto relative">
                      <div className="w-full h-[350px] relative">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="bg-[#0A2C8C] text-white p-4 h-[96px] absolute bottom-0 left-0 right-0">
                        <div className="flex justify-center items-start flex-col w-full">
                          <h3 className="text-xl font-semibold">
                            {member.name}
                          </h3>
                          <p className="text-base font-medium">{member.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </Slider>

          <div className="relative mt-4">
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
