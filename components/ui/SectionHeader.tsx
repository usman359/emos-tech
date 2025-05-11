interface SectionHeaderProps {
  title: string;
  description: string;
  maxWidth: string;
}

const SectionHeader = ({
  title,
  description,
  maxWidth,
}: SectionHeaderProps) => {
  return (
    <div className={`${maxWidth} flex flex-col gap-[24px] lg:gap-[36px]`}>
      <h1
        style={{ fontFamily: "var(--font-poppins)" }}
        className="text-white text-start md:text-center text-[24px] md:text-[36px] font-bold leading-[36px] md:leading-[44px] tracking-[-0.48px] md:tracking-[-0.72px]"
      >
        {title}
      </h1>
      <p
        style={{ fontFamily: "var(--font-poppins)" }}
        className="text-[#D4D4D4] text-start md:text-center text-[16px] md:text-[18px] font-medium leading-[28px]"
      >
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
