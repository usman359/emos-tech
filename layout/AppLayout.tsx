import { cn } from "@/lib/utils";
import React from "react";

const AppLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto max-w-[1440px] px-[23px] lg:px-[56px] mt-[70px] lg:mt-[160px]",
        "flex flex-col items-center justify-center gap-[40px] lg:gap-[60px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default AppLayout;
