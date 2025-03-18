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
      <div className="flex flex-col md:flex-row pt-40 pb-20 px-6 md:px-20 justify-between items-center md:items-start">
        <div className="w-full max-w-[1106px] max-h-[426px] flex justify-center items-start flex-row">
          {/* Left Side - Form */}
          <div className="w-full md:w-[523px] bg-[#0A2C8C33] p-8 rounded-lg shadow-lg">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
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

              <div className="flex flex-col gap-2 md:col-span-2">
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
                className="md:col-span-2 mt-4 w-ful max-w-[151px] bg-[#FFFFFF1A] px-3 py-3 rounded-md text-[#FFFFFF] font-semibold  border border-[#F1F3F74D] shadow-[2px] shadow-[#19213D14] text-sm leading-5 flex justify-baseline items-center gap-2"
              >
                <span> Send Message</span>
                <FaArrowRight />
              </button>
            </form>
          </div>

          {/* Right Side - Contact Info */}
          <div className="w-full md:w-[551px] mt-10 md:mt-0 md:ml-10">
            <h2 className="text-5xl font-extrabold leading-12">
              Let us know what you think!
            </h2>
            <p className="text-[#FFFFFF] mt-2 font-normal text-base leading-6">
              Got something on your mind? Share it with us! Drop a message, and
              we will respond quickly to assist you.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <Image src={Email} alt="Email Logo" height={46} width={46} />
                <div className="flex items-start flex-col">
                  <span className="font-normal text-sm leading-5 text-[#FFFFFF]">
                    Bussiness:
                  </span>
                  <div className="flex gap-3 items-center">
                    <span className="font-semibold text-base leading-5">
                      support@yourwebsite.com
                    </span>
                    <FaExternalLinkAlt
                      size={10}
                      fill="#4D5AE8"
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              <hr className="w-full max-w-[340px] border border-[#F1F3F726]" />
              <div className="flex items-center gap-3">
                <Image
                  src={Whatapp}
                  alt="Whatsapp Logo"
                  className=""
                  height={46}
                  width={46}
                />
                <div className="flex items-start flex-col">
                  <span className="font-normal text-sm leading-5 text-[#FFFFFF]">
                    Whatsapp:
                  </span>
                  <div className="flex gap-3 items-center">
                    <span className="font-semibold text-base leading-5">
                      +1 647 777 2017
                    </span>
                    <FaExternalLinkAlt
                      size={10}
                      fill="#4D5AE8"
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              <hr className="w-full max-w-[340px] border border-[#F1F3F726]" />
              <div className="flex items-center gap-3">
                <Image
                  src={Linkedin}
                  alt="LinkedIn Logo"
                  height={46}
                  width={46}
                />
                <div className="flex items-start flex-col">
                  <span className="font-normal text-sm leading-5 text-[#FFFFFF]">
                    LinkedIn:
                  </span>
                  <div className="flex gap-3 items-center">
                    <span className="font-semibold text-base leading-5">
                      www.linkedin.com/company/envobyte
                    </span>
                    <FaExternalLinkAlt
                      size={10}
                      fill="#4D5AE8"
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
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
