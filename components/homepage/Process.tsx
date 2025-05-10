import Image from "next/image";
import React from "react";
import SectionHeader from "../ui/SectionHeader";
import AppLayout from "@/layout/AppLayout";

const processItems = [
  {
    title: "In-depth Discovery and Needs Assessment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tellus orci, vestibulum vitae maximus id, vulputate blandit lorem. Donec consectetur nunc ac nunc vehicula placerat. ",
  },
  {
    title: "Planning and Architecture Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tellus orci, vestibulum vitae maximus id, vulputate blandit lorem. Donec consectetur nunc ac nunc vehicula placerat. ",
  },
  {
    title: "Feature Development and Integration",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tellus orci, vestibulum vitae maximus id, vulputate blandit lorem. Donec consectetur nunc ac nunc vehicula placerat. ",
  },
  {
    title: "Testing and Quality Assurance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tellus orci, vestibulum vitae maximus id, vulputate blandit lorem. Donec consectetur nunc ac nunc vehicula placerat. ",
  },
  {
    title: "Deployment and Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tellus orci, vestibulum vitae maximus id, vulputate blandit lorem. Donec consectetur nunc ac nunc vehicula placerat. ",
  },
  {
    title: "Maintenance and Optimization",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tellus orci, vestibulum vitae maximus id, vulputate blandit lorem. Donec consectetur nunc ac nunc vehicula placerat. ",
  },
];

const Process = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute w-full max-w-[1155px] h-[202px] lg:h-[479px] rounded-[372px] opacity-[0.53] lg:opacity-[0.64] rotate-[64.979deg] lg:rotate-[38.597deg] top-[10%] lg:top-1/2 lg:left-1/2 transform lg:-translate-x-1/2"
        style={{
          background:
            "radial-gradient(1.01% 58.8% at 47.15% 53.87%, #000 0%, #04534A 100%)",
          filter: "blur(235.0500030517578px)",
        }}
      />
      <AppLayout>
        <SectionHeader
          title="What is EMOS Technologies Approach to Developing WebRTC Applications?"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniamquis nostrud exerci tation ullamcorper susc."
          maxWidth="max-w-[1040px]"
        />

        <div className="flex w-full flex-col items-center justify-center gap-[24px] lg:gap-[16px] min-h-[1016px]">
          {processItems.map((item, index) => (
            <React.Fragment key={index}>
              <div className="w-full min-h-[205px] lg:min-h-[156px] flex flex-col gap-[16px] sm:gap-0 sm:flex-row sm:justify-between items-start relative">
                <div className="flex flex-col">
                  <span className="text-[#00AA9C] text-[16px] lg:text-[18px] font-medium leading-[28px]">
                    {index > 9 ? index + 1 : `0${index + 1}`}
                  </span>
                  {/* <Image
                    src="/process/down-arrow.svg"
                    alt="down-arrow"
                    width={24}
                    height={24}
                    className="hidden lg:block"
                  /> */}
                </div>
                <h1 className="text-white text-[18px] lg:text-[28px] font-semibold leading-[24px] lg:leading-[36px] tracking-[0.36px] lg:tracking-[-0.56px] max-w-[256px] lg:max-w-[339px] self-center">
                  {item.title}
                </h1>
                <p className="text-[#C8C8C8] text-[16px] lg:text-[18px] font-medium leading-[28px] max-w-[256px] lg:max-w-[617px] self-center">
                  {item.description}
                </p>
                <Image
                  src="/process/down-arrow.svg"
                  alt="down-arrow"
                  width={24}
                  height={24}
                  className="-mt-[16px] absolute bottom-0"
                />
              </div>
              <div className="w-full h-[0.6px] bg-[#8D8989]" />
            </React.Fragment>
          ))}
        </div>
      </AppLayout>
    </section>
  );
};

export default Process;
