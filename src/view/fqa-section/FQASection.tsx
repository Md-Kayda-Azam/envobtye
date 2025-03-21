"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection: React.FC = () => {
  // State to track which FAQ is open
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // FAQ Data
  const faqs = [
    {
      id: 1,
      question: "What is Included in Your Web Development Service?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      question: "What Technologies Do You Use For Web Development?",
      answer:
        "We use modern technologies like HTML, CSS, JavaScript, React, Node.js, PHP, and MySQL to ensure your website is secure and responsive.",
    },
    {
      id: 3,
      question: "What If I Need Ongoing Support After The Website Launched?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      question: "Can I Customize My Website According To My Business Needs?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      question: "Do You Offer Services As Part Of Your Web Development?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  // Toggle FAQ
  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  // Animation Variants for "in" and "out"
  const answerVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      y: -10, // Start slightly above
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0, // Slide to original position
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="bg-[#FFFFFF] pb-10 sm:pb-40 pt-0 sm:pt-10 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full max-w-[900px] px-4">
          {/* Section Title */}
          <div className="flex flex-col justify-center items-center gap-2 mb-10">
            <h2 className="text-3xl sm:text-[45px] md:text-5xl font-bold text-[#0A2C8C] leading-[52px] max-w-[800px] mx-auto text-center">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="border-b border-gray-300 w-full md:w-[800px] lg:w-[938px]"
              >
                {/* Question with Number */}
                <div
                  className="flex justify-between items-center py-4 cursor-pointer "
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <div className="flex items-center gap-6">
                    {/* Number (01, 02, 03, etc.) */}
                    <span className="text-[#0A2C8C] font-semibold text-lg leading-6">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className={`text-lg sm:text-2xl leading-[22px] font-semibold ${
                        openFAQ === faq.id ? "text-[#0A2C8C]" : "text-[#6D758F]"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>
                  <span className="text-[#6D758F] text-2xl">
                    {openFAQ === faq.id ? "-" : "+"}
                  </span>
                </div>
                {/* Answer with Animation */}
                <AnimatePresence initial={false}>
                  {openFAQ === faq.id && (
                    <motion.div
                      variants={answerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden" // ✅ এই লাইন নিশ্চিত করো
                      className="overflow-hidden"
                    >
                      <div className="pb-4 pl-12 text-gray-600 ">
                        <p className="font-normal text-base sm:text-xl leading-[34px]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQSection;
