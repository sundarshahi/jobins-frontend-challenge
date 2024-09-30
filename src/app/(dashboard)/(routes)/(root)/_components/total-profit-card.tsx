import Image from "next/image";

export const TotalProfitCard = () => {
  return (
    <div className="bg-white rounded-md p-[18px]">
      <div className="flex items-center gap-x-6">
        <Image width={43} height={43} alt="yen" src="/yen.svg" />
        <div>
          <p className="font-semibold text-lg">Total Profit</p>
          <p className="font-medium text-gray-500 text-sm">Last 7 days</p>
        </div>
      </div>

      <div className="pt-8">
        <p className="font-bold">50K</p>
        <p className="flex gap-1 mt-4 font-medium text-gray-500 text-sm">
          <span className="text-[#1EB564] flex gap-1">
            <Image width={16} height={16} alt="increase" src="/arrow_up.svg" />
            12%
          </span>
          <span> vs last 7 days</span>
        </p>
      </div>
    </div>
  );
};
