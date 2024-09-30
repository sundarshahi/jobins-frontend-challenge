import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const TotalSalesCard = () => {
  return (
    <div className="bg-white rounded-md flex items-center gap-x-6 p-[18px]">
      <div>
        <Image
          width={73}
          height={73}
          alt="logo"
          src="/business-and-finance.svg"
        />
      </div>

      <Separator className="bg-[#DBDADE]" orientation="vertical" />
      <div>
        <div>
          <p className="font-semibold text-lg">Total Sales & Costs</p>
          <p className="font-medium text-gray-500 text-sm">Last 7 days</p>
        </div>
        <div className="pt-10">
          <p className="font-bold">$350K</p>
          <p className="flex gap-1 mt-4 font-medium text-gray-500 text-sm">
            <span className="text-[#1EB564] flex gap-1">
              <Image
                width={16}
                height={16}
                alt="increase"
                src="/arrow_up.svg"
              />
              8.56K
            </span>
            <span> vs last 7 days</span>
          </p>
        </div>
      </div>
    </div>
  );
};
