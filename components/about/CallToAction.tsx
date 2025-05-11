import AppLayout from "@/layout/AppLayout";

const CallToAction = () => {
  return (
    <div className="min-h-[450px] lg:max-h-[443px] bg-[url('/callToAction/callToAction.png')] bg-cover bg-center">
      <AppLayout className="py-[74px]">
        <div className="flex flex-col items-center gap-[46px]">
          <h1 className="text-white text-center text-[24px] md:text-[36px] font-bold leading-[36px] md:leading-[44px] tracking-[-0.48px] md:tracking-[-0.72px]">
            Looking for a Reliable Software Development Company?
          </h1>
          <p className="text-[#D4D4D4] text-center text-[16px] md:text-[18px] font-medium leading-[28px]">
            EMOS Tech&apos;s software development stands out with customized,
            scalable solutions, innovative technologies, and a client-focused
            approach that drives long term business growth.
          </p>

          <div className="w-[336px] h-[60px] shadow-[0px_4px_13.4px_0px_rgba(191, 114, 238, 0.12)] bg-[#00AA9C] rounded-[5px] border-[1px] border-[#D9F5F3] flex items-center justify-center cursor-pointer">
            <button className="text-[#FAFAFA] text-center text-[20px] font-medium leading-[28px] tracking-[-0.4px] cursor-pointer">
              Book a Free Consultation
            </button>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default CallToAction;
