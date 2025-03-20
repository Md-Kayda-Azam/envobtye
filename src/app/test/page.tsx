"use client";
import React, { useState } from "react";
import backgroundImage from "@/assets/Frame10000.png";
import backgroundVendor from "@/assets/waveBg.png";
import Button from "@/components/Button/Button";
const categories: string[] = [
  "UI/UX",
  "WEBSITE",
  "SEO",
  "LOGO DESIGN",
  "BANNER DESIGN",
  "GOOGLE ADS",
];
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

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("WEBSITE");

  return (
    <div className="h-screen">
      <div
        className="flex justify-center items-center w-0 sm:w-full sm:max-w-[800px] md:max-w-[1000px] lg:max-w-[1200px] xl:max-w-[1300px] 2xl:max-w-[1600px] h-full sm:max-h-[280px] md:max-h-[380px] lg:max-h-[550px] xl:max-h-[800px] rounded-lg mx-auto"
        style={{
          backgroundImage: `url(${backgroundVendor?.src || backgroundVendor})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      >
        <div className="text-start gap-5 sm:gap-0 sm:flex-row flex-col flex justify-between items-center w-full mb-6">
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
        <hr className="border border-[#0A2C8C1A] my-5" />
        {/* Category Buttons */}
        {categories.length > 0 && (
          <div className="hidden sm:flex md:space-x-3 lg:space-x-4 mb-6">
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
        )}
      </div>
    </div>
  );
};

export default PortfolioSection;

// import React from "react";
// import backgroundImage from "@/assets/Frame10000.png";
// import backgroundVendor from "@/assets/waveBg.png";

// const Test = () => {
//   return (
//     <div className="bg-white w-full h-screen  flex justify-center items-center p-4 sm:p-6 md:p-8">
//       <div
//         className="flex justify-center items-center w-0 sm:w-full sm:max-w-[800px] md:max-w-[1000px] lg:max-w-[1200px] xl:max-w-[1300px] 2xl:max-w-[1600px] h-full sm:max-h-[280px] md:max-h-[380px] lg:max-h-[550px] xl:max-h-[800px] rounded-lg mx-auto"
//         style={{
//           backgroundImage: `url(${backgroundVendor.src || backgroundVendor})`,
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "bottom",
//           backgroundSize: "cover",
//           backgroundColor: "#04135B",
//         }}
//       ></div>
//     </div>
//     // <div className="w-full h-screen bg-[#04135b] flex justify-center items-center p-4 sm:p-6 md:p-8">
//     //   <div
//     //     className="flex justify-center items-center w-0 sm:w-full sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1300px] 2xl:max-w-[1600px] h-full sm:max-h-[280px] md:max-h-[380px] lg:max-h-[550px] xl:max-h-[800px] rounded-lg mx-auto"
//     //     style={{
//     //       backgroundImage: `linear-gradient(to bottom, #04135B 0%, #04125554 100%), url(${
//     //         backgroundImage.src || backgroundImage
//     //       })`,
//     //       backgroundRepeat: "no-repeat",
//     //       backgroundPosition: "bottom",
//     //       backgroundSize: "cover",
//     //       backgroundColor: "#04135B",
//     //     }}
//     //   ></div>
//     // </div>
//   );
// };

// export default Test;
// // import React from "react";
// // import backgroundImage from "@/assets/Frame10000.png";

// // const Test = () => {
// //   return (
// //     <div className="w-full h-screen bg-[#04135b] flex justify-center items-center">
// //       <div
// //         className="flex justify-center items-center w-full h-full max-w-screen-xl max-h-screen rounded-lg"
// //         style={{
// //           backgroundImage: `linear-gradient(to bottom, #04135B 0%, #04125554 100%), url(${backgroundImage.src})`,
// //           backgroundRepeat: "no-repeat",
// //           backgroundPosition: "center",
// //           backgroundSize: "cover",
// //           backgroundColor: "#04135B",
// //         }}
// //       ></div>
// //     </div>
// //   );
// // };

// // export default Test;

// // import React from "react";
// // import backgroundImage from "@/assets/Frame10000.png";

// // const Test = () => {
// //   return (
// //     <div className="w-full h-screen bg-[#04135b] flex justify-center items-center">
// //       <div
// //         className="flex justify-center items-center w-[1200px] h-[800px] rounded-lg"
// //         style={{
// //           backgroundImage: `linear-gradient(to bottom, #04135B 0%, #04125554 100%), url(${backgroundImage.src})`,
// //           backgroundRepeat: "no-repeat",
// //           backgroundPosition: "bottom",
// //           backgroundSize: "cover",
// //           backgroundColor: "#04135B",
// //         }}
// //       ></div>
// //     </div>
// //   );
// // };

// // export default Test;
