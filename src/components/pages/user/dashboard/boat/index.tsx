import Typography from "@/components/core/typography";
import { DataTable } from "@/components/table/data-table";
import { columns } from "@/modules/boat-user/columns";

const UserBoat = () => {
  return (
    <main>
      <Typography variant="h3" color="primary">
        Boat's Owned
      </Typography>
      <Typography variant="small" className="mt-2">
        List of boats owned or active.
      </Typography>
      <div className="container mx-auto py-5">
        <DataTable columns={columns} data={boatData} />
      </div>
    </main>
  );
};

const boatData = [
  {
    id: "12325j2",
    name: "Kapal 1",
    tipeKapal: "Tipe 1",
    panjangKapal: "4",
    kapasitasKapal: "5",
    kapalAktif: "Aktif",
    dermaga: "Dermaga 1",
  },
  {
    id: "1232245j2",
    name: "Kapal 2",
    tipeKapal: "Tipe 1",
    panjangKapal: "4",
    kapasitasKapal: "5",
    kapalAktif: "Aktif",
    dermaga: "Dermaga 1",
  },
  {
    id: "12322",
    name: "Kapal 3",
    tipeKapal: "Tipe 1",
    panjangKapal: "4",
    kapasitasKapal: "5",
    kapalAktif: "Aktif",
    dermaga: "Dermaga 1",
  },
  {
    id: "1625j2",
    name: "Kapal 4",
    tipeKapal: "Tipe 1",
    panjangKapal: "4",
    kapasitasKapal: "5",
    kapalAktif: "Aktif",
    dermaga: "Dermaga 1",
  },
  {
    id: "162535j2",
    name: "Kapal 45",
    tipeKapal: "Tipe 1",
    panjangKapal: "4",
    kapasitasKapal: "5",
    kapalAktif: "Aktif",
    dermaga: "Dermaga 1",
  },
  {
    id: "164225j2",
    name: "Kapal 6",
    tipeKapal: "Tipe 1",
    panjangKapal: "4",
    kapasitasKapal: "5",
    kapalAktif: "Aktif",
    dermaga: "Dermaga 1",
  },
];
export default UserBoat;
