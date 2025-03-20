import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";
import world from "@/assets/world.png";
import like from "@/assets/like.png";
import user from "@/assets/user.png";
import people from "@/assets/people.png";
import envobtye from "@/assets/envobye.png";
import backgroundImage from "@/assets/Frame10000.png";

const HeroSection = () => {
  return (
    <section className="text-white flex flex-col items-center justify-center text-center px-3 sm:px-5">
      <div
        className="relative flex flex-col items-center justify-center w-full  my-10 rounded-lg overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, #04135B 0%, rgba(4, 18, 85, 0.33) 100%), url(${
            backgroundImage.src || backgroundImage
          })`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundColor: "#04135B",
          minHeight: "700px", // Ensures a minimum height for small screens
        }}
      >
        <div className="flex flex-col items-center justify-center w-full my-10 rounded-lg overflow-hidden">
          {/* Heading and Subheading */}
          <div className="px-4 py-6">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[75px] font-extrabold leading-tight sm:leading-[85px] font-raleway">
              DIGITAL SERVICES
            </h1>
            <p className="text-base sm:text-[25px] font-bold sm:font-extrabold mt-2 mb-6">
              BUILDING YOUR EMPIRE DIGITALLY
            </p>
          </div>

          {/* Buttons */}
          <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 px-4 mb-8">
            <Button
              text="SEE PRICING"
              className="text-sm sm:text-base w-full sm:w-[238px] max-w-[300px] h-[50px] rounded-md bg-[#FF6200] text-white border border-transparent font-inter transition-all duration-200 ease-in-out hover:bg-white hover:border-[#FF6200] hover:text-[#FF6200]"
            />
            <Button
              text="BOOK AN APPOINTMENT"
              className="text-sm sm:text-base w-full sm:w-[238px] max-w-[300px] h-[50px] rounded-md bg-[#04125a] text-white border border-white font-inter transition-all duration-200 ease-in-out hover:bg-white hover:border-[#FF6200] hover:text-[#FF6200]"
            />
          </div>

          {/* Stats Section */}
          <div className="w-full lg:w-[1000px] xl:w-[1100px] 2xl:w-[1160px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 py-6 px-4 sm:px-6">
            {data.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center justify-center gap-4"
              >
                <div className="flex items-center gap-2 w-full max-w-[268px]">
                  <div className="h-12 w-12 flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="text-left">
                    <span className="font-semibold text-lg leading-8 block">
                      {item.totalNumber}
                    </span>
                    <span className="font-semibold text-sm leading-[22px] block">
                      {item.name}
                    </span>
                  </div>
                </div>
                {index < data.length - 1 && (
                  <span
                    className={`h-12 w-[1px] bg-[#8295bf] ${
                      index === 1 ? "hidden lg:inline" : "hidden sm:inline"
                    }`}
                  ></span>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Image */}
          <div className="w-full flex justify-center items-center mt-8">
            <Image
              src={envobtye}
              alt="Hero Image"
              width={882}
              height={553}
              className="w-full lg:max-w-[400px] 2xl:max-w-[582px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

const data = [
  { id: 1, name: "Websites built", icon: world, totalNumber: "2k+" },
  { id: 2, name: "Client satisfaction", icon: like, totalNumber: "97%" },
  { id: 3, name: "Team members", icon: people, totalNumber: "25+" },
  { id: 4, name: "Amazing clients", icon: user, totalNumber: "500+" },
];
