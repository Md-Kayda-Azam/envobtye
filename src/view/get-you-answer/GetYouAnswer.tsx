"use client";

import { useState } from "react";
import Image from "next/image";
import waveBackground from "@/assets/waveBg.png";
import playIcon from "@/assets/playicon.png";
import benefit from "@/assets/benefit.png";
import nineInOneBadge from "@/assets/in-badge.png";
import Button from "@/components/Button/Button";

const cardData = [
  {
    id: 1,
    title: "Why Choose Envobyte",
    subtitle: "Experienced & trustworthy",
    text: "We’re experienced, trustworthy, and a team of experts in design, development, SEO, and more, delivering everything you need for success.",
    image: playIcon,
  },
  {
    id: 2,
    title: "What’s Your Benefit",
    subtitle: "No hassle with best price",
    text: "A hassle-free process that saves you time, with everything you need in one seamless package at an incredibly attractive price.",
    image: benefit,
  },
  {
    id: 3,
    title: "What is Combo Offer",
    subtitle: "Get 9 services in one package",
    text: "You’re getting web design, development, content writing, social media kit, custom graphics, and business consultation—all in one combo package!",
    image: nineInOneBadge,
  },
];

const GetYourAnswers: React.FC = () => {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <section className="relative py-12 px-6 bg-white flex justify-center items-center flex-col">
      <div className="w-full max-w-[1107px]">
        <div className="flex justify-center items-center flex-col gap-3.5">
          <span className="text-[#0C89FF] font-semibold text-base leading-6">
            MORE DETAILS
          </span>
          <h2 className="text-xl sm:text-4xl md:text-5xl leading-5 font-bold text-[#0A2C8C]">
            Get Your Answers
          </h2>
        </div>
        <div className="flex md:flex-row flex-col justify-between items-center my-10">
          {cardData.map((card) => (
            <div
              key={card.id}
              className={`p-6 text-left w-full md:w-[369px] h-[535px] relative shadow cursor-pointer transition-all duration-300 ${
                activeCard === card.id
                  ? "bg-[#0A2C8C] text-white"
                  : "bg-white hover:bg-[#0A2C8C] hover:text-white"
              }`}
              onMouseEnter={() => setActiveCard(card.id)}
            >
              <div className="p-5">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={200}
                  height={150}
                  className="mx-auto mb-4"
                />
              </div>
              {/* <div className="flex flex-col gap-2 mt-10"> */}
              <div
                className={`flex flex-col gap-2 ${
                  card.id === 2 ? "mt-14" : "mt-10"
                }`}
              >
                <h3
                  className={`text-2xl sm:text-base lg:text-2xl xl:text-3xl font-semibold leading-9 mb-2 ${
                    activeCard === card.id ? "text-white" : "text-[#001246]"
                  }`}
                >
                  {card.title}
                </h3>
                <span
                  className={`font-normal text-base sm:text-sm lg:text-base leading-[22px] ${
                    activeCard === card.id ? "text-[#65B5FF]" : "text-[#65B5FF]"
                  }`}
                >
                  {card.subtitle}
                </span>
                <p
                  className={`text-base sm:text-sm lg:text-base font-normal leading-6 ${
                    activeCard === card.id ? "text-white" : "text-[#424242]"
                  }`}
                >
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Button
            text="See Pricing"
            className="w-[180px] h-11 text-base border-transparent border rounded-md text-white transition-all duration-200 ease-in-out transform font-inter hover:bg-white hover:border-[#FF6200] hover:text-[#FF6200] bg-[#FF6200]"
          />
        </div>
      </div>
    </section>
  );
};

export default GetYourAnswers;
