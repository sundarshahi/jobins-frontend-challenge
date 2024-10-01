"use client";

import { fromatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";

type Status = "pending" | "processing" | "success" | "failed";

export type Order = {
  id: number;
  customer: string;
  date: string;
  total: number;
  method: string;
  status: Status;
};

const statusColorMap: Record<Status, string> = {
  success: "text-[#28C76F]",
  pending: "text-[#FFC600]",
  processing: "text-[#0F60FF]",
  failed: "text-destructive-foreground",
};

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      return <div>#{row.getValue("id")}</div>;
    },
  },
  {
    accessorKey: "customer",
    header: "CUSTOMER",
  },
  {
    accessorKey: "date",
    header: "DATE",
  },
  {
    accessorKey: "total",
    header: "TOTAL",
    cell: ({ row }) => {
      const total: number = row.getValue("total") || 0;
      return <span>{fromatPrice(total)}</span>;
    },
  },
  {
    accessorKey: "method",
    header: "METHOD",
  },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }) => {
      const status: Status = row.getValue("status");

      return (
        <span className={cn("capitalize", statusColorMap[status])}>
          {status}
        </span>
      );
    },
  },
  {
    accessorKey: "action",
    header: "ACTION",
    cell: () => {
      return <div className="text-[#0F60FF] cursor-pointer">View Details</div>;
    },
  },
];
