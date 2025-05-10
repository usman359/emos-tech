"use client";

import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import AppLayout from "@/layout/AppLayout";

const faqs = [
  {
    title: "The expense windows adapted sir. Wrong widen drawn.",
    description:
      "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.",
  },
  {
    title: "What is EMOS Technologies?",
    description:
      "EMOS Technologies is a leading IT service provider, helping businesses transform their digital vision into reality. With a team of expert developers and innovators, we build cutting-edge digital solutions that drive growth, efficiency, and market leadership.",
  },
  {
    title: "What is EMOS Technologies?",
    description:
      "EMOS Technologies is a leading IT service provider, helping businesses transform their digital vision into reality. With a team of expert developers and innovators, we build cutting-edge digital solutions that drive growth, efficiency, and market leadership.",
  },
  {
    title: "What is EMOS Technologies?",
    description:
      "EMOS Technologies is a leading IT service provider, helping businesses transform their digital vision into reality. With a team of expert developers and innovators, we build cutting-edge digital solutions that drive growth, efficiency, and market leadership.",
  },
  {
    title: "What is EMOS Technologies?",
    description:
      "EMOS Technologies is a leading IT service provider, helping businesses transform their digital vision into reality. With a team of expert developers and innovators, we build cutting-edge digital solutions that drive growth, efficiency, and market leadership.",
  },
  {
    title: "What is EMOS Technologies?",
    description:
      "EMOS Technologies is a leading IT service provider, helping businesses transform their digital vision into reality. With a team of expert developers and innovators, we build cutting-edge digital solutions that drive growth, efficiency, and market leadership.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <AppLayout>
      <div className="flex flex-col items-center gap-[40px] lg:gap-[60px]">
        <SectionHeader
          title="Explore EMOS Technologies FAQs and Expert Insights"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniamqui s nostrud exerci tation ullamcorper susc"
          maxWidth="max-w-[780px]"
        />

        <div className="flex flex-col lg:flex-row items-center justify-center gap-[40px] lg:gap-[48px] w-full">
          <div className="w-full max-w-[378px] sm:max-w-[751px] flex flex-col items-start gap-[15px]">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="w-full rounded-[5px] border-[1px] border-[#CFCFCF] bg-[#1E1E1E] py-[25px] pl-[23px] pr-[27px] flex flex-col gap-[23px]"
              >
                <div className="flex justify-between items-center">
                  <p className="text-white text-[18px] lg:text-[22px] font-bold leading-[22px] lg:leading-[26px]">
                    {faq.title}
                  </p>
                  <div
                    className="cursor-pointer"
                    onClick={() => toggleFaq(index)}
                  >
                    {openIndex === index ? (
                      <Minus className="text-white size-[15px] lg:size-[20px]" />
                    ) : (
                      <Plus className="text-white size-[15px] lg:size-[20px]" />
                    )}
                  </div>
                </div>
                <p
                  className={`${
                    openIndex === index ? "block" : "hidden"
                  } w-full max-w-[336px] lg:max-w-[644px] text-[#878787] text-[14px] lg:text-[18px] font-medium leading-[31px] lg:leading-[28px] tracking-[-0.28px]`}
                >
                  {faq.description}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-[501px] lg:max-w-[401px] w-full min-h-[512px] flex flex-col items-center gap-[53px] p-[32px] rounded-[5px] border-[1px] border-[#CFCFCF] bg-[#1E1E1E]">
            <Image
              src="/faqs/message.svg"
              alt="Message"
              width={67}
              height={67}
            />
            <p className="text-white text-center lg:text-start text-[20px] font-bold leading-[28px]">
              Do you have more questions?
            </p>
            <p className="text-white text-center text-[16px] font-medium leading-[31px] tracking-[-0.32px]">
              End-to-end payments and financial management in a single solution.
              Meet the right platform to help realize.
            </p>
            <button className="max-w-[337px] w-full h-[76px] rounded-[5px] border-[1px] border-[#CFCFCF] bg-[#008E82] text-white text-[16px] font-medium leading-[31px] tracking-[-0.32px] cursor-pointer">
              Shoot a Direct Mail
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Faqs;
