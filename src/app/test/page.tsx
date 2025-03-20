import React from "react";
import backgroundImage from "@/assets/Frame10000.png";

const Test = () => {
  return (
    <div className="w-full h-screen bg-[#04135b] flex justify-center items-center p-4 sm:p-6 md:p-8">
      <div
        className="flex justify-center items-center w-0 sm:w-full sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1300px] 2xl:max-w-[1600px] h-full sm:max-h-[280px] md:max-h-[380px] lg:max-h-[550px] xl:max-h-[800px] rounded-lg mx-auto"
        style={{
          backgroundImage: `linear-gradient(to bottom, #04135B 0%, #04125554 100%), url(${
            backgroundImage.src || backgroundImage
          })`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundColor: "#04135B",
        }}
      ></div>
    </div>
  );
};

export default Test;
// import React from "react";
// import backgroundImage from "@/assets/Frame10000.png";

// const Test = () => {
//   return (
//     <div className="w-full h-screen bg-[#04135b] flex justify-center items-center">
//       <div
//         className="flex justify-center items-center w-full h-full max-w-screen-xl max-h-screen rounded-lg"
//         style={{
//           backgroundImage: `linear-gradient(to bottom, #04135B 0%, #04125554 100%), url(${backgroundImage.src})`,
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//           backgroundColor: "#04135B",
//         }}
//       ></div>
//     </div>
//   );
// };

// export default Test;

// import React from "react";
// import backgroundImage from "@/assets/Frame10000.png";

// const Test = () => {
//   return (
//     <div className="w-full h-screen bg-[#04135b] flex justify-center items-center">
//       <div
//         className="flex justify-center items-center w-[1200px] h-[800px] rounded-lg"
//         style={{
//           backgroundImage: `linear-gradient(to bottom, #04135B 0%, #04125554 100%), url(${backgroundImage.src})`,
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "bottom",
//           backgroundSize: "cover",
//           backgroundColor: "#04135B",
//         }}
//       ></div>
//     </div>
//   );
// };

// export default Test;
