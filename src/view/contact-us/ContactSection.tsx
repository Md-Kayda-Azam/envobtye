"use client";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa";
import Whatapp from "@/assets/whatapp.png";
import Email from "@/assets/emailAdress.png";
import Linkedin from "@/assets/Likedin.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import Footer from "../fooder/Fooder";

interface ContactType {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactType>();

  const onSubmit = (data: ContactType) => {
    console.log("Form Submitted:", data);
    alert("Message Sent Successfully!");
  };

  return (
    <div className="bg-[#001246] text-white">
      <div className="flex flex-col md:flex-row py-10 lg:pt-40 lg:pb-20 px-6 md:px-20 justify-between items-center md:items-start">
        <div className="w-full max-w-[1106px] h-full gap-10 lg-gap-0 flex flex-col lg:flex-row justify-center items-start lg:items-center">
          {/* Left Side - Form */}
          <div className="w-full lg:w-[523px] bg-[#0A2C8C33] p-8 rounded-lg shadow-lg">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="flex gap-2 flex-col">
                <label
                  htmlFor="Name"
                  className="font-semibold text-sm leading-5 text-[#FFFFFF]"
                >
                  Name
                </label>
                {/* Name */}
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  placeholder="Your Name"
                  className={`p-3 bg-[#11339333] text-white rounded-md border placeholder:text-sm placeholder:font-normal placeholder:leading-5 shadow-[2px] shadow-[#19213D14] focus:outline-none ${
                    errors.name ? "border-red-500" : "border-[#F1F3F74D]"
                  }`}
                />
              </div>
              <div className="flex gap-2 flex-col">
                <label
                  htmlFor=""
                  className="font-semibold text-sm leading-5 text-[#FFFFFF]"
                >
                  Email
                </label>
                {/* Email */}
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                      message: "Invalid email format",
                    },
                  })}
                  type="email"
                  placeholder="support@envobyte.com"
                  className={`p-3 bg-[#11339333] text-white rounded-md border placeholder:text-sm placeholder:font-normal placeholder:leading-5 shadow-[2px] shadow-[#19213D14] focus:outline-none ${
                    errors.email ? "border-red-500" : "border-[#F1F3F74D]"
                  }`}
                />
              </div>

              <div className="flex gap-2 flex-col">
                <label
                  htmlFor=""
                  className="font-semibold text-sm leading-5 text-[#FFFFFF]"
                >
                  Phone
                </label>
                {/* Phone */}
                <input
                  {...register("phone", { required: "Phone is required" })}
                  type="text"
                  placeholder="+1 (667) 777 2477"
                  className={`p-3 bg-[#11339333] text-white rounded-md border placeholder:text-sm placeholder:font-normal placeholder:leading-5 shadow-[2px] shadow-[#19213D14] focus:outline-none ${
                    errors.phone ? "border-red-500" : "border-[#F1F3F74D]"
                  }`}
                />
              </div>
              <div className="flex gap-2 flex-col">
                <label
                  htmlFor=""
                  className="font-semibold text-sm leading-5 text-[#FFFFFF]"
                >
                  Compnay
                </label>
                {/* Company */}
                <input
                  {...register("company", { required: "Company is required" })}
                  type="text"
                  placeholder="Envobyte"
                  className={`p-3 bg-[#11339333] text-white rounded-md border placeholder:text-sm placeholder:font-normal placeholder:leading-5 shadow-[2px] shadow-[#19213D14] focus:outline-none ${
                    errors.company ? "border-red-500" : "border-[#F1F3F74D]"
                  }`}
                />
              </div>

              <div className="flex flex-col gap-2 sm:col-span-2">
                <label
                  htmlFor=""
                  className="font-semibold text-sm leading-5 text-[#FFFFFF]"
                >
                  Message
                </label>
                {/* Message */}
                <textarea
                  {...register("message", { required: "Message is required" })}
                  placeholder="Type your message here..."
                  className={`p-3 bg-[#11339333] text-white rounded-md border placeholder:text-sm placeholder:font-normal placeholder:leading-5 shadow-[2px] shadow-[#19213D14] focus:outline-none ${
                    errors.message ? "border-red-500" : "border-[#F1F3F74D]"
                  }`}
                  rows={2}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="sm:col-span-2 mt-4 w-full sm:max-w-[151px] bg-[#FFFFFF1A] px-3 py-3 rounded-md text-[#FFFFFF] font-semibold  border border-[#F1F3F74D] shadow-[2px] shadow-[#19213D14] text-sm leading-5 flex justify-center sm:justify-baseline items-center gap-2"
              >
                <span> Send Message</span>
                <FaArrowRight />
              </button>
            </form>
          </div>

          {/* Right Side - Contact Info */}
          <div className="w-full md:w-[551px] mt-10 md:mt-0 pb-12">
            <div className="flex flex-col md:items-start items-center lg:gap-5">
              <h2 className="text-2xl text-center sm:text-start sm:text-3xl lg:text-5xl font-extrabold sm:leading-12">
                Let us know what you think!
              </h2>
              <p className="text-[#FFFFFF] text-center md:text-start mt-2 font-normal text-base leading-6">
                Got something on your mind? Share it with us! Drop a message,
                and we will respond quickly to assist you.
              </p>
            </div>
            <div className="mt-6 space-y-4">
              {[
                {
                  icon: Email,
                  label: "Business:",
                  value: "support@yourwebsite.com",
                },
                { icon: Whatapp, label: "Whatsapp:", value: "+1 647 777 2017" },
                {
                  icon: Linkedin,
                  label: "LinkedIn:",
                  value: "www.linkedin.com/company/envobyte",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <div className=" sm:w-full flex justify-center items-center  sm:items-start flex-col sm:flex-row sm:justify-start gap-3">
                    <Image
                      src={item.icon}
                      alt={`${item.label} Logo`}
                      height={46}
                      width={46}
                    />
                    <div className="flex flex-col items-center sm:items-start">
                      <span className="font-normal text-sm leading-5 text-[#FFFFFF]">
                        {item.label}
                      </span>
                      <div className="flex gap-3 items-center">
                        <span className="font-semibold text-sm sm:text-base leading-5">
                          {item.value}
                        </span>
                        <FaExternalLinkAlt
                          size={10}
                          fill="#4D5AE8"
                          className="cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                  {index !== 2 && (
                    <div className="w-full justify-start items-center">
                      <hr className="w-full sm:w-[300px] border border-[#F1F3F726]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full border border-[#F1F3F726]" />
      <Footer />
    </div>
  );
};

export default ContactSection;
