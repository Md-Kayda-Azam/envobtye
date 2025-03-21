"use client";
import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image"; // Added for image support
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import starIcon from "@/assets/client-reviews/Star.png"; // Replace with your star icon image
import { motion } from "framer-motion";
import { reviews } from "../data/Data";

const ClientReviews: React.FC = () => {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);
  const [activeButton, setActiveButton] = useState<"prev" | "next" | null>(
    null
  );

  const [isLoading, setIsLoading] = useState(true);

  // Simulate a 30-second delay for data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Switch to actual reviews after 30 seconds
    }, 2000); // 30,000 milliseconds = 30 seconds

    // Cleanup timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

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

  return (
    <div className="bg-[#FFFFFF] pt-10 flex justify-center items-center">
      <div className="max-w-[984px] w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="flex flex-col justify-center items-center gap-2 mb-10">
            <span className="text-[#0C89FF] font-semibold text-base leading-6">
              CLIENT REVIEWS
            </span>
            <h2 className="text-3xl sm:text-[45px] md:text-5xl font-semibold text-[#001246] leading-6 max-w-[800px] mx-auto text-center">
              Our Proud Clients
            </h2>
          </div>
        </motion.div>

        {/* Services Slider */}
        <div className="relative">
          <Slider ref={setSliderRef} {...settings}>
            {isLoading || reviews.length === 0
              ? // Skeleton Loader
                [...Array(3)].map((_, index) => (
                  <div key={index} className="p-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-left border border-gray-200 animate-pulse">
                      {/* Star Rating Skeleton */}
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="w-5 h-5 bg-gray-300 rounded-full mr-1"
                          ></div>
                        ))}
                      </div>

                      {/* Review Text Skeleton */}
                      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-300 rounded w-full mb-4"></div>

                      {/* Client Info Skeleton */}
                      <div className="flex items-center">
                        <div className="h-12 w-12 bg-gray-300 rounded-full mr-2"></div>
                        <div>
                          <div className="h-4 bg-gray-300 rounded w-24 mb-1"></div>
                          <div className="flex items-center">
                            <div className="w-5 h-5 bg-gray-300 rounded-full mr-2"></div>
                            <div className="h-3 bg-gray-300 rounded w-20"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : // Actual Reviews
                reviews.map((review) => (
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
                          <h4 className="text-[#0A2C8C] font-semibold text-base sm:text-lg">
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
            {isLoading || reviews.length === 0
              ? // Skeleton Loader
                [...Array(3)].map((_, index) => (
                  <div key={index} className="p-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-left border border-gray-200 animate-pulse">
                      {/* Star Rating Skeleton */}
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="w-5 h-5 bg-gray-300 rounded-full mr-1"
                          ></div>
                        ))}
                      </div>

                      {/* Review Text Skeleton */}
                      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-300 rounded w-full mb-4"></div>

                      {/* Client Info Skeleton */}
                      <div className="flex items-center">
                        <div className="h-12 w-12 bg-gray-300 rounded-full mr-2"></div>
                        <div>
                          <div className="h-4 bg-gray-300 rounded w-24 mb-1"></div>
                          <div className="flex items-center">
                            <div className="w-5 h-5 bg-gray-300 rounded-full mr-2"></div>
                            <div className="h-3 bg-gray-300 rounded w-20"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : // Actual Reviews
                reviews.map((review) => (
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
                          <h4 className="text-[#0A2C8C] font-semibold text-base sm:text-lg">
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
