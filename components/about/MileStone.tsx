"use client";

import AppLayout from "@/layout/AppLayout";
import Image from "next/image";
import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";

const MileStone = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2025);

  return (
    <AppLayout>
      <SectionHeader
        title="Milestones That Shaped EMOS Technologies and Empowered Digital Growth"
        description="eTechViral offers custom software, mobile app development, and cloud services tailored for businesses, ensuring scalable, secure, and innovative solutions in today's digital era."
        maxWidth="max-w-[1123px]"
      />

      <div className="flex flex-col items-center gap-[40px] max-w-[1295px] w-full">
        <div className="min-h-[422.695px] flex flex-col lg:flex-row items-center justify-between relative w-full">
          <div className="relative w-[314.625px] h-[231.969px] xl:w-[413.3px] xl:h-[354.721px]">
            <Image
              src="/milestone/milestone.svg"
              alt="milestone"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute top-[50%] left-1/2 lg:left-[30%] xl:left-[39%] translate-x-[-50%] translate-y-[-50%]">
            <h1 className="max-w-[581px] min-h-[208px] text-[#00AA9C] text-center text-[90px] lg:text-[140px] xl:text-[200px] font-bold lg:leading-[168px] xl:leading-[222px] xl:tracking-[2px] [text-shadow:-12px_16px_18.6px_rgba(0,0,0,0.44)]">
              2024
            </h1>
          </div>

          <div className="mt-[80px] flex max-w-[471px] min-h-[200px] justify-center items-center">
            <p
              style={{ fontFamily: "var(--font-poppins)" }}
              className="text-[#FEFEFE] text-center tracking-[1.76px] leading-[35px] text-[16px] lg:text-[20px] xl:text-[24px] font-medium lg:leading-[28px] xl:leading-[35px] xl:tracking-[2.64px]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              venenatis mauris urna, at eleifend nulla maximus non. Donec
              elementum, sapien quis tempus ultricies, nunc orci dignissim
              mauris, eget venenatis sapien sem vitae sem
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center max-w-[1020px] w-full min-h-[49px] px-4 sm:px-[33px] py-[18px] relative">
          <div className="h-[3px] bg-[#00978A] w-full max-w-[935.011px]" />

          <div className="flex flex-row justify-between w-full absolute">
            {Array.from({ length: 4 }).map((_, index) => {
              const year = 2022 + index;
              return (
                <div
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`w-[60px] h-[40px] sm:w-[80px] sm:h-[45px] md:w-[105px] md:h-[49px] border-[3px] border-[#00978A] rounded-[30.5px] flex items-center justify-center cursor-pointer ${
                    selectedYear === year ? "bg-[#00978A]" : "bg-[#121212]"
                  }`}
                >
                  <span
                    className={`text-[16px] sm:text-[20px] md:text-[24px] font-normal leading-[35px] tracking-[1.5px] sm:tracking-[2.64px] ${
                      selectedYear === year ? "text-white" : "text-[#A19C9C]"
                    }`}
                  >
                    {year}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default MileStone;
