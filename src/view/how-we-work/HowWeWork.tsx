"use client";

import Image from "next/image";
import waveBackground from "@/assets/how-we-work/how-we-work-banner.jpeg";
import background from "@/assets/how-we-work/Background.png";

import Button from "@/components/Button/Button";

const HowWeWork: React.FC = () => {
  return (
    <section
      className="relative py-16 px-6 text-center bg-[#163ba3] max-w-full max-h-[1024px] bg-blend-overlay"
      style={{
        backgroundImage: `url(${waveBackground.src})`,
        backgroundRepeat: "np-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto mt-20">
        {/* Section Title */}
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="text-[#FFFFFF] font-semibold text-xl leading-7">
            HOW WE WORK
          </span>
          <h2 className="text-3xl sm:text-[45px] md:text-5xl font-extrabold text-white leading-[51px] max-w-[800px] mx-auto">
            Our Process For Delivering Results
          </h2>
          <p className="text-gray-300 text-sm mt-2 max-w-[700px]">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy text
            ever.
          </p>
        </div>

        <div className="flex justify-center items-center w-full max-w-[900px] h-[300px] sm:h-[400px] md:h-[500px]">
          <Image
            src={background}
            alt="BANNER"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Contact Now Button */}
        <div className="flex justify-center items-center mt-12">
          <Button
            text="Contact Now"
            bgColor="#FF693B"
            textColor="#FFFFFF"
            className="w-[238px] h-11 rounded-md text-white font-semibold bg-[#FF693B] hover:text-[#FF693B] hover:bg-white border border-[#FF693B] transition-all"
          />
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
