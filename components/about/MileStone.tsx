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
        description="eTechViral offers custom software, mobile app development, and cloud services tailored for businesses, ensuring scalable, secure, and innovative solutions in today’s digital era."
        maxWidth="max-w-[1123px]"
      />

      <div className="flex flex-col items-center gap-[40px] max-w-[1295px] w-full">
        <div className="min-h-[422.695px] flex items-center justify-between relative w-full">
          <div className="relative w-[413.3px] h-[354.721px]">
            <Image
              src="/milestone/milestone.svg"
              alt="milestone"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute top-[50%] left-[39%] translate-x-[-50%] translate-y-[-50%]">
            <h1 className="max-w-[581px] min-h-[208px] text-[#00AA9C] text-center text-[200px] font-bold leading-[222px] tracking-[2px] [text-shadow:-12px_16px_18.6px_rgba(0,0,0,0.44)]">
              2024
            </h1>
          </div>

          <div className="flex max-w-[471px] min-h-[200px] justify-center items-center">
            <p className="text-[#FEFEFE] text-center text-[16px] lg:text-[24px] font-medium lg:leading-[35px] lg:tracking-[2.64px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              venenatis mauris urna, at eleifend nulla maximus non. Donec
              elementum, sapien quis tempus ultricies, nunc orci dignissim
              mauris, eget venenatis sapien sem vitae sem
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center max-w-[1020px] w-full min-h-[49px] px-[33px] py-[18px] relative">
          <div className="h-[3px] bg-[#00978A] w-full max-w-[935.011px]" />

          <div className="grid grid-cols-4 w-full gap-[200px] absolute">
            {Array.from({ length: 4 }).map((_, index) => {
              const year = 2022 + index;
              return (
                <div
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`w-[105px] h-[49px] border-[3px] border-[#00978A] rounded-[30.5px] flex items-center justify-center cursor-pointer ${
                    selectedYear === year ? "bg-[#00978A]" : "bg-[#121212]"
                  }`}
                >
                  <span
                    className={`text-[24px] font-normal leading-[35px] tracking-[2.64px] ${
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
