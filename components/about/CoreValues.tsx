import AppLayout from "@/layout/AppLayout";
import Image from "next/image";

const coreValues = [
  {
    icon: "/coreValues/img-1.svg",
    title: "Make it happen",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "/coreValues/img-2.svg",
    title: "Simplicity",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "/coreValues/img-3.svg",
    title: "Play as a team",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "/coreValues/img-4.svg",
    title: "Value beyond expectation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "/coreValues/img-5.svg",
    title: "Empowered communication",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const CoreValues = () => {
  return (
    <section className="overflow-hidden relative">
      <div
        className="absolute w-full max-w-[1691px] h-[461px] lg:h-[377px] rounded-[382px] opacity-[0.53] rotate-[64.979deg] lg:rotate-[38.597deg] top-[10%] lg:top-1/2 lg:left-1/2 transform lg:-translate-x-1/2"
        style={{
          background:
            "radial-gradient(1.01% 58.8% at 47.15% 53.87%, #000 0%, #04534A 100%)",
          filter: "blur(235.0500030517578px)",
        }}
      />
      <AppLayout className="flex flex-col sm:flex-row items-start gap-[36px] pb-[70px] sm:pb-[120px]">
        <div className="flex flex-col w-full max-w-[646px] items-center gap-[40px]">
          <h1 className="text-white text-[24px] sm:text-[36px] font-bold leading-[36px] sm:leading-[44px] tracking-[-0.48px] sm:tracking-[-0.72px]">
            Driven by Purpose: The Core Values Shaping EMOS Technologies
          </h1>
          <p
            className="text-[#D4D4D4] text-[16px] sm:text-[18px] font-medium leading-[28px]"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            ETechViral&apos;s software development stands out with customized,
            scalable solutions, innovative technologies, and a client-focused
            approach that drives long term business growth.
          </p>
        </div>
        <div className="p-[10px] max-w-[560px] w-full gap-[24px] grid grid-cols-1 sm:grid-cols-2">
          {coreValues.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-[16px] max-w-[268px] w-full"
            >
              <div className="flex flex-col items-start gap-[24px] max-w-[248px] w-full">
                <div className="w-[42px] h-[42px] sm:w-[60px] sm:h-[60px] relative">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-white text-[18px] sm:text-[24px] font-bold leading-[32px] tracking-[-0.36px] sm:tracking-[-0.48px]">
                  {item.title}
                </h2>
              </div>
              <p
                className="text-[#D4D4D4] text-[14px] leading-[20px] sm:text-[18px] sm:leading-[28px] sm:font-medium"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </AppLayout>
    </section>
  );
};

export default CoreValues;
