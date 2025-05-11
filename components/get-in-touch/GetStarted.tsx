import Image from "next/image";
import React from "react";

const GetStarted = () => {
  return (
    <section className="bg-[url('/getStarted/get-started-lg.svg')] bg-cover bg-center w-[100%] md:w-[90%] rounded-none md:rounded-[10px] max-w-[1142px] mx-auto my-[64px] lg:my-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-[50%] z-20">
      <div className="py-[40px] pl-[24px] pr-[16px] flex md:justify-between items-center flex-col md:flex-row gap-[35px] md:gap-0">
        <div className="flex flex-col items-center gap-[18px]">
          <h3 className="text-white md:self-start text-[26px] font-bold">
            Take good design today
          </h3>
          <div className="flex gap-[24px] items-center">
            <div className="flex items-center gap-[8px]">
              <Image
                src="/getStarted/icon.svg"
                alt="web-dev"
                width={12}
                height={12}
              />
              <span className="text-white text-[16px] font-normal">
                web design
              </span>
            </div>
            <div className="flex items-center gap-[8px]">
              <Image
                src="/getStarted/icon.svg"
                alt="web-dev"
                width={12}
                height={12}
              />
              <span className="text-white text-[16px] font-normal">
                ui design
              </span>
            </div>
            <div className="flex items-center gap-[8px]">
              <Image
                src="/getStarted/icon.svg"
                alt="web-dev"
                width={12}
                height={12}
              />
              <span className="text-white text-[16px] font-normal">
                ui design
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[24px]">
          <button className="bg-black w-[150px] h-[40px] rounded-[5px] text-white text-[16px] font-medium py-[5px] px-[26px] cursor-pointer">
            Get started
          </button>
          <button className="bg-white w-[150px] h-[40px] rounded-[5px] text-black text-[16px] font-medium py-[5px] px-[26px] cursor-pointer">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
