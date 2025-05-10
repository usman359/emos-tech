import Image from "next/image";
import React from "react";
import SectionHeader from "../ui/SectionHeader";
import AppLayout from "@/layout/AppLayout";

const Development = () => {
  return (
    <AppLayout className="hidden lg:block">
      <SectionHeader
        title="What Sets EMOS Technologies Software Development Apart?"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniamqui s nostrud exerci tation ullamcorper susc"
        maxWidth="max-w-[927px]"
      />

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-[61px]">
        <div className="flex max-w-[335px] flex-col items-start gap-[64px]">
          <h1 className="text-white text-[32px] font-semibold leading-[40px] tracking-[-0.64px]">
            Quality Products
          </h1>
          <p className="text-[#737373] text-[32px] font-normal leading-[40px] tracking-[-0.64px]">
            Responsive Software Development Service
          </p>
          <p className="text-[#737373] text-[32px] font-normal leading-[40px] tracking-[-0.64px]">
            Advance Technology Stack
          </p>
        </div>

        <div className="flex max-w-[454px] h-[328px] justify-center items-center">
          <Image
            src="/development/development.svg"
            alt="development"
            width={454}
            height={328}
          />
        </div>

        <p className="text-[#D4D4D4] text-center text-[18px] font-normal leading-[28px] max-w-[401px]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore ma gna aliquam erat
          volutpat. Ut wisi enim ad minim veniamqui s nostrud exerci tation
          ullamcorper susc
        </p>
      </div>
    </AppLayout>
  );
};

export default Development;
