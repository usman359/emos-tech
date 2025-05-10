import Image from "next/image";
import React from "react";
import SectionHeader from "../ui/SectionHeader";
import AppLayout from "@/layout/AppLayout";

const Discover = () => {
  return (
    <AppLayout>
      <div className="flex flex-col items-center justify-center gap-[40px] lg:gap-[60px]">
        <SectionHeader
          title="Discover EMOS Technologies Success Stories and Transformative Solutions"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniamqui s nostrud exerci tation ullamcorper susc"
          maxWidth="max-w-[780px]"
        />

        <div className="flex flex-col sm:flex-row max-w-[1224px] items-center gap-[24px] lg:gap-[97px]">
          <div className="flex flex-col items-start gap-[42px] lg:gap-[16px] max-w-[621px]">
            <div className="flex flex-col items-start gap-[12px] max-w-[453px]">
              <h1 className="text-[#6EAD04] text-[20px] lg:text-[36px] font-bold leading-[44px] tracking-[-0.4px] lg:tracking-[-0.72px]">
                Biotic Milk
              </h1>
              <p className="text-white text-[16px] lg:text-[18px] font-normal leading-[28px]">
                Gangle is an interactive platform that allows users to discover
                events happening around them via a dynamic map interface.
              </p>
            </div>

            <div className="flex flex-col items-start gap-[36px]">
              <div className="flex flex-col items-start gap-[17px]">
                <div className="flex items-center gap-[16px]">
                  <Image
                    src="/discover/img-1.svg"
                    alt="Discover"
                    width={48}
                    height={48}
                  />

                  <div className="flex flex-col items-start gap-[4px] w-[134px]">
                    <h3 className="text-[#E5E5E5] text-[16px] font-medium leading-[24px]">
                      Max Bareson
                    </h3>
                    <p className="text-[#A3A3A3] text-[14px] font-normal leading-[20px] tracking-[0.1px] w-[167px]">
                      CEO, Biotic Milk
                    </p>
                  </div>
                </div>

                <p className="text-[#D4D4D4] text-[16px] lg:text-[18px] font-normal leading-[28px]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore ma gna
                  aliquam erat volutpat. Ut wisi enim ad minim veniamqui s
                  nostrud exerci tation ullamcorper susc
                </p>
              </div>

              <p className="text-[#6EAD04] text-[14px] font-medium leading-[20px] tracking-[0.1px]">
                Discover more
              </p>
            </div>
          </div>

          {/* Desktop images */}
          <div className="lg:flex items-center hidden">
            <div className="md:w-[157px] lg:w-[257px] h-[532px]">
              <Image
                src="/discover/mobile-1.svg"
                alt="Discover"
                width={257}
                height={532}
              />
            </div>
            <div className="md:w-[157px] lg:w-[257px] h-[532px]">
              <Image
                src="/discover/mobile-2.svg"
                alt="Discover"
                width={257}
                height={532}
              />
            </div>
          </div>

          {/* Mobile newsletter */}
          <div className="lg:hidden flex flex-col items-start gap-[42px] lg:gap-[16px] max-w-[621px]">
            <div className="flex flex-col items-start gap-[12px] max-w-[453px]">
              <h1 className="text-[#56ADFF] text-[20px] lg:text-[36px] font-bold leading-[44px] tracking-[-0.4px] lg:tracking-[-0.72px]">
                News Letter
              </h1>
              <p className="text-white text-[16px] lg:text-[18px] font-normal leading-[28px]">
                Gangle is an interactive platform that allows users to discover
                events happening around them via a dynamic map interface.
              </p>
            </div>

            <div className="flex flex-col items-start gap-[36px]">
              <div className="flex flex-col items-start gap-[17px]">
                <div className="flex items-center gap-[16px]">
                  <Image
                    src="/discover/img-1.svg"
                    alt="Discover"
                    width={48}
                    height={48}
                  />

                  <div className="flex flex-col items-start gap-[4px] w-[134px]">
                    <h3 className="text-[#E5E5E5] text-[16px] font-medium leading-[24px]">
                      Max Bareson
                    </h3>
                    <p className="text-[#A3A3A3] text-[14px] font-normal leading-[20px] tracking-[0.1px] w-[167px]">
                      CEO, Biotic Milk
                    </p>
                  </div>
                </div>

                <p className="text-[#D4D4D4] text-[16px] lg:text-[18px] font-normal leading-[28px]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore ma gna
                  aliquam erat volutpat. Ut wisi enim ad minim veniamqui s
                  nostrud exerci tation ullamcorper susc
                </p>
              </div>

              <p className="text-[#56ADFF] text-[14px] font-medium leading-[20px] tracking-[0.1px]">
                Discover more
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex justify-between items-center w-full max-w-[1218px]">
        <div className="flex h-[18px] items-start gap-[6px]">
          <Image
            src="/discover/active-dot.svg"
            alt="Discover"
            width={18}
            height={18}
          />
          <Image
            src="/discover/inactive-dot.svg"
            alt="Discover"
            width={18}
            height={18}
          />
          <Image
            src="/discover/inactive-dot.svg"
            alt="Discover"
            width={18}
            height={18}
          />
        </div>

        <div className="flex w-[124px] h-[55px] justify-center items-start gap-[14px]">
          <Image
            src="/discover/left-side.svg"
            alt="Discover"
            width={55}
            height={55}
          />
          <Image
            src="/discover/right-side.svg"
            alt="Discover"
            width={55}
            height={55}
          />
        </div>
      </div>
    </AppLayout>
  );
};

export default Discover;
