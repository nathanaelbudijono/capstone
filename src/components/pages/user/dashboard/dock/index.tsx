import Typography from "@/components/core/typography";
import { DataDockBoat } from "@/modules/table/dock-user/dock-table";
import { dockBoatColumns } from "@/modules/table/dock-user/dock-user-column";

const DockIndex = () => {
  return (
    <main
      className={`${DockBoatData.length % 5 === 0 ? "h-full" : "h-screen"}`}
    >
      <Typography variant="h3" color="primary">
        Docks
      </Typography>
      <Typography variant="small" className="mt-2">
        List of boats that are currently docked.
      </Typography>
      <div className="container mx-auto py-5">
        <DataDockBoat columns={dockBoatColumns} data={DockBoatData} />
      </div>
    </main>
  );
};

const DockBoatData = [
  {
    id: "1234av",
    boatName: "Kapal 1",
    arrivalTime: "12:00",
    departureTime: "13:00",
    status: "Active",
    dockName: "Dermaga 1",
    dockNumber: 1,
  },
  {
    id: "1234gav",
    boatName: "Kapal 1",
    arrivalTime: "12:00",
    departureTime: "13:00",
    status: "Active",
    dockName: "Dermaga 1",
    dockNumber: 12,
  },
  {
    id: "1234feav",
    boatName: "Kapal 1",
    arrivalTime: "12:00",
    departureTime: "13:00",
    status: "Active",
    dockName: "Dermaga 1",
    dockNumber: 31,
  },
  {
    id: "1234afev",
    boatName: "Kapal 1",
    arrivalTime: "12:00",
    departureTime: "13:00",
    status: "Active",
    dockName: "Dermaga 1",
    dockNumber: 41,
  },
  {
    id: "123e12w4av",
    boatName: "Kapal 1",
    arrivalTime: "12:00",
    departureTime: "13:00",
    status: "Active",
    dockName: "Dermaga 1",
    dockNumber: 415,
  },
  {
    id: "123e4w4av",
    boatName: "Kapal 1",
    arrivalTime: "12:00",
    departureTime: "13:00",
    status: "Active",
    dockName: "Dermaga 1",
    dockNumber: 415,
  },
  {
    id: "123ew34av",
    boatName: "Kapal 1",
    arrivalTime: "12:00",
    departureTime: "13:00",
    status: "Active",
    dockName: "Dermaga 1",
    dockNumber: 415,
  },
];

export default DockIndex;
