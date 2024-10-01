import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { columns } from "./_components/columns";
import { CountrySalesCard } from "./_components/country-sales-card";
import { DataTable } from "./_components/data-table";
import { OrderInfoCard } from "./_components/order-info-card";
import { TotalProfitCard } from "./_components/total-profit-card";
import { TotalSalesCard } from "./_components/total-sales-card";
import { ColumnDef } from "@tanstack/react-table";
import { getTotalSales } from "@/services/sales";

export default async function Dashboard() {
  const data = await getTotalSales();
  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:grid-cols-[31%_22%_45%] gap-3">
        <TotalSalesCard />
        <TotalProfitCard />
        <CountrySalesCard />
      </div>
      <div className="bg-white rounded-md p-[18px] grid grid-cols-1">
        <OrderInfoCard />
        <div className="mt-5">
          <Tabs defaultValue="all" className="w-[358px]">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All Orders</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="canceled">Canceled</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <DataTable columns={columns as ColumnDef<unknown>[]} data={data} />
    </div>
  );
}
