import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/buttons/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/dropdown/dropdown";

export type dockBoatType = {
  id: string;
  boatName: string;
  arrivalTime: string;
  departureTime: string;
  status: string;
  dockName: string;
  dockNumber: number;
};

export const dockBoatColumns: ColumnDef<dockBoatType>[] = [
  {
    accessorKey: "boatName",
    header: "Boat Name",
  },
  {
    accessorKey: "arrivalTime",
    header: "Arrival Time",
  },
  {
    accessorKey: "departureTime",
    header: "Departure Time",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "dockName",
    header: "Dock Name",
  },
  {
    accessorKey: "dockNumber",
    header: "Dock Number",
  },
  {
    accessorKey: " ",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
