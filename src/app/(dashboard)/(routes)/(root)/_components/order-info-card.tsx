import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const OrderInfoCard = () => {
  return (
    <div className="bg-white rounded-md flex  gap-x-8 p-[18px]">
      <div className="flex items-center gap-x-6">
        <Image width={72} height={72} alt="logo" src="/avatar.svg" />
        <div>
          <p className="font-semibold text-lg">Robert Fox</p>
          <p className="text-gray-500 text-sm">robert@gmail.com</p>
        </div>
      </div>
      <Separator className="bg-[#DBDADE]" orientation="vertical" />
      <div>
        <p className="font-medium text-[13px] leading-[15.28px] text-[#8B909A] mb-6">
          PERSONAL INFORMATION
        </p>
        <div className="flex flex-col gap-4">
          <p className="flex text-[13px] leading-[15.28px]">
            <span className="w-[116px]">Contact Number</span>
            <span className="font-semibold">(201) 555-0124</span>
          </p>

          <p className="flex text-[13px] leading-[15.28px]">
            <span className="w-[116px]">Date of Birth</span>
            <span className="font-semibold">1 Jan, 1985</span>
          </p>
          <p className="flex text-[13px] leading-[15.28px]">
            <span className="w-[116px]">Member Since</span>
            <span className="font-semibold">3 March, 2023</span>
          </p>
        </div>
      </div>

      <Separator className="bg-[#DBDADE] md:ml-64" orientation="vertical" />
      <div>
        <p className="font-medium text-[13px] leading-[15.28px] text-[#8B909A] mb-6">
          SHIPPING ADDRESS
        </p>
        <p className="mb-7">3517 W. Gray St. Utica, Pennsylvania 57867</p>
        <div className="flex justify-between">
          <div>
            <p className="font-bold text-2xl leading-[22px] mb-2">150</p>
            <p className="font-medium text-[13px] leading-[18px] text-[#8B909A]">
              Total Orders
            </p>
          </div>
          <div>
            <p className="font-bold text-2xl leading-[22px] mb-2">140</p>
            <p className="font-medium text-[13px] leading-[18px] text-[#8B909A]">
              Completed
            </p>
          </div>
          <div>
            <p className="font-bold text-2xl leading-[22px] mb-2">10</p>
            <p className="font-medium text-[13px] leading-[18px] text-[#8B909A]">
              Canceled
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
