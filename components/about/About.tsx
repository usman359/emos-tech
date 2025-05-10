import AppLayout from "@/layout/AppLayout";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-[#00AA9C] from-[-19%] via-[rgba(0,142,130,0.41)] via-[123.42%] to-transparent relative">
      <AppLayout className="h-[401px]">
        <div className="flex flex-col w-full items-center gap-[36px]">
          <h1 className="text-[#FEFEFE] text-center text-[24px] sm:text-[36px] font-bold leading-[36px] sm:leading-[44px] sm:tracking-[-0.72px] capitalize max-w-[917px] w-full">
            We&apos;re a battle-tested group passionate about building great
            products
          </h1>
          <p className="text-center text-[#D4D4D4] text-[16px] sm:text-[18px] font-medium leading-[28px] sm:leading-[28px] max-w-[1123px] w-full">
            eTechViral offers custom software, mobile app development, and cloud
            services tailored for businesses, ensuring scalable, secure, and
            innovative solutions in today&apos;s digital era.
          </p>
        </div>

        <div className="hidden lg:block absolute -right-[30px] bottom-0 overflow-hidden">
          <div className="grid grid-cols-3 justify-center items-center gap-x-[10.9px] gap-y-[8.8px] opacity-[59%]">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="w-[59.847px] h-[61.943px] border-4 border-[#758B9D] rounded-full"
              />
            ))}
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default About;
