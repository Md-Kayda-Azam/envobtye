"use client";

import { useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image"; // Added for image support
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import frame from "@/assets/Frame1000005851.png";
import starIcon from "@/assets/client-reviews/Star.png"; // Replace with your star icon image
import fiverrIcon from "@/assets/client-reviews/fiverr.png"; // Replace with your Fiverr icon
import upworkIcon from "@/assets/client-reviews/upwork.png"; // Replace with your Upwork icon
import client1 from "@/assets/client-reviews/client2.png"; // Replace with your client images
import client2 from "@/assets/client-reviews/client2.png";
import client3 from "@/assets/client-reviews/client2.png";
import client4 from "@/assets/client-reviews/client2.png";

const ClientReviews: React.FC = () => {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);
  const [activeButton, setActiveButton] = useState<"prev" | "next" | null>(
    null
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true,
    centerPadding: "30px",
  };

  // Review Data
  const reviews = [
    {
      id: 1,
      name: "Stephanie Powell",
      platform: "Fiverr",
      platformIcon: fiverrIcon,
      review:
        "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas saplen fusce eget risus purus suspendisse turpls volputat onare",
      clientImage: client1,
    },
    {
      id: 2,
      name: "Brian Clark",
      platform: "Upwork",
      platformIcon: upworkIcon,
      review:
        "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas saplen fusce eget risus purus suspendisse turpls volputat onare",
      clientImage: client2,
    },
    {
      id: 3,
      name: "Christopher White",
      platform: "Upwork",
      platformIcon: upworkIcon,
      review:
        "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas saplen fusce eget risus purus suspendisse turpls volputat onare",
      clientImage: client3,
    },
    {
      id: 4,
      name: "Brian Clark",
      platform: "Fiverr",
      platformIcon: fiverrIcon,
      review:
        "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas saplen fusce eget risus purus suspendisse turpls volputat onare",
      clientImage: client4,
    },
    {
      id: 5,
      name: "Christopher White",
      platform: "Upwork",
      platformIcon: upworkIcon,
      review:
        "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas saplen fusce eget risus purus suspendisse turpls volputat onare",
      clientImage: client2,
    },
    {
      id: 6,
      name: "Stephanie Powell",
      platform: "Fiverr",
      platformIcon: fiverrIcon,
      review:
        "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas saplen fusce eget risus purus suspendisse turpls volputat onare",
      clientImage: client3,
    },
  ];

  return (
    <div
      className="bg-[#FFFFFF] pt-10 flex justify-center items-center"
      style={{
        backgroundImage: `url(${frame.src})`, // Use the frame image as background
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    >
      <div className="w-[984px]">
        {/* Section Title */}
        <div className="flex flex-col justify-center items-center gap-2 mb-10">
          <span className="text-[#0C89FF] font-semibold text-base leading-6">
            CLIENT REVIEWS
          </span>
          <h2 className="text-[45px] md:text-5xl font-semibold text-[#001246] leading-6 max-w-[800px] mx-auto text-center">
            Our Proud Clients
          </h2>
        </div>

        {/* Services Slider */}
        <div className="relative">
          <Slider ref={setSliderRef} {...settings}>
            {reviews.map((review) => (
              <div key={review.id} className="p-4">
                <div className="bg-white p-6 rounded-lg shadow-lg text-left border border-gray-200">
                  {/* Star Rating */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, index) => (
                      <Image
                        key={index}
                        src={starIcon}
                        alt="Star"
                        width={20}
                        height={20}
                        className="mr-1"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-600 text-base leading-relaxed mb-4">
                    {review.review}
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center">
                    <div className="h-12 w-12 overflow-hidden mr-2">
                      <Image
                        src={review.clientImage}
                        alt={review.name}
                        className="rounded-full object-cover w-full h-full"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div>
                      <h4 className="text-[#0A2C8C] font-semibold text-lg">
                        {review.name}
                      </h4>
                      <div className="flex items-center">
                        <Image
                          src={review.platformIcon}
                          alt={review.platform}
                          width={20}
                          height={20}
                          className="mr-2"
                        />
                        <span className="text-gray-500 text-sm">
                          From {review.platform}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <Slider ref={setSliderRef} {...settings}>
            {reviews.map((review) => (
              <div key={review.id} className="p-4">
                <div className="bg-white p-6 rounded-lg shadow-lg text-left border border-gray-200">
                  {/* Star Rating */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, index) => (
                      <Image
                        key={index}
                        src={starIcon}
                        alt="Star"
                        width={20}
                        height={20}
                        className="mr-1"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-600 text-base leading-relaxed mb-4">
                    {review.review}
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center">
                    <div className="h-12 w-12 overflow-hidden mr-2">
                      <Image
                        src={review.clientImage}
                        alt={review.name}
                        className="rounded-full object-cover w-full h-full"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div>
                      <h4 className="text-[#0A2C8C] font-semibold text-lg">
                        {review.name}
                      </h4>
                      <div className="flex items-center">
                        <Image
                          src={review.platformIcon}
                          alt={review.platform}
                          width={20}
                          height={20}
                          className="mr-2"
                        />
                        <span className="text-gray-500 text-sm">
                          From {review.platform}
                        </span>
                      </div>
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

export default ClientReviews;
