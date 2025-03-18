import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";
import world from "@/assets/world.png";
import like from "@/assets/like.png";
import user from "@/assets/user.png";
import people from "@/assets/people.png";
import envobtye from "@/assets/envobye.png";

const HeroSection = () => {
  return (
    <section className="text-white lg:py-20 py-8 flex flex-col items-center justify-center text-center sm:px-5 px-3">
      <div>
        <h1 className="sm:text-[75px] text-5xl sm:leading-[85px] leading-12   font-extrabold mx-4 mt-4 mb-2 font-raleway">
          DIGITAL SERVICES
        </h1>
        <p className="sm:text-[25px] text-base sm:font-extrabold font-bold mb-6">
          BUILDING YOUR EMPIRE DIGITALLY
        </p>
      </div>
      <div className="flex justify-center flex-col sm:flex-row items-center gap-4 mt-8">
        <Button
          text="SEE PRICING"
          className="text-base w-[238px] h-[50px] border-transparent border rounded-md text-white transition-all duration-200 ease-in-out transform font-inter hover:bg-white hover:border-[#FF6200] hover:text-[#FF6200] bg-[#FF6200]"
        />
        <Button
          text="BOOK AN APPOINTMENT"
          bgColor="#19213D14"
          textColor="white"
          className="border border-white text-base w-[238px] h-[50px]  rounded-md text-white transition-all duration-200 ease-in-out transform font-inter hover:bg-white hover:border-[#FF6200] hover:text-[#FF6200] bg-[#04125a]"
        />
      </div>
      <div className="bg-[#04135B] grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center  text-white  gap-10  mt-10 py-4 px-6">
        {data.map((item, index) => (
          <div key={item.id} className="flex items-center gap-4">
            <div className="flex items-center gap-2 2xl:w-[268px] w-[210px]">
              <div className="h-14 w-14 flex items-center justify-center">
                <Image src={item.icon} alt="ICON" width={48} height={48} />
              </div>
              <div className="flex flex-col items-start w-full">
                <span className="font-semibold text-lg leading-8">
                  {item.totalNumber}
                </span>
                <span className="font-semibold text-sm leading-[22px]">
                  {item.name}
                </span>
              </div>
            </div>
            {(index === 0 || index === 1 || index === 2) && (
              <span className="h-12 bg-[#8295bf] w-[1px] hidden lg:inline"></span>
            )}
            {index !== 1 && index < data.length - 1 && (
              <span className="h-12 bg-[#8295bf] w-[1px] lg:hidden hidden sm:inline"></span>
            )}
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center mt-20">
        <Image src={envobtye} alt="PHOTO" width={882} height={553} />
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
