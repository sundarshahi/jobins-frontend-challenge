"use client";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CountryStatsProps {
  countryCode: string;
  name: string;
  value: number;
  percentage: number;
  isIncreased?: boolean;
}

export const CountryStats = ({
  countryCode,
  name,
  value,
  percentage,
  isIncreased = false,
}: CountryStatsProps) => {
  const flagUrl = `/${countryCode}_flag.svg`;
  const increasedOrDecreased = isIncreased
    ? "/chevron-up.svg"
    : "/chevron-down.svg";
  return (
    <div className="flex items-center justify-between">
      <div className="h-[34px] w-[34px]">
        <Image width={34} height={34} alt="logo" src={flagUrl} />
      </div>
      <div className="w-[83px] truncate">
        <p className="font-semibold text-md">{value}K</p>
        <p className="text-[#8B909A] text-[13px] leading-[20px]">{name}</p>
      </div>
      <div className="w-44 h-4">
        <Progress value={percentage} variant="info" />
      </div>

      <div>
        <span
          className={cn(
            "flex gap-1 font-semibold",
            isIncreased ? "text-[#1EB564]" : "text-[#EA5455]"
          )}
        >
          <Image
            width={20}
            height={20}
            alt="increase"
            src={increasedOrDecreased}
          />
          {percentage}%
        </span>
      </div>
    </div>
  );
};
