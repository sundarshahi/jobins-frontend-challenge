import { CountryStats } from "./country-stats";

export const CountrySalesCard = () => {
  return (
    <div className="bg-white flex flex-col gap-4 rounded-md p-[18px]">
      <CountryStats
        countryCode="usa"
        name="United States"
        value={30}
        percentage={25.8}
        isIncreased
      />
      <CountryStats
        countryCode="br"
        name="Brazil"
        value={26}
        percentage={16.2}
      />
      <CountryStats
        countryCode="au"
        name="Australia"
        value={17}
        percentage={11.9}
      />
    </div>
  );
};
