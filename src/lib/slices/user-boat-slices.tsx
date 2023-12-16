import { StateCreator } from "zustand";
import axios from "axios";

export interface userBoatType {
  id: string;
  namaKapal: string;
  jenisKapal: string;
  panjangKapal: number;
  kapalAktif: boolean;
  dermaga: string;
  createdAt: string;
  users_id: string;
  chassis: string;
  kapasitasKapal: number;
  noMesin: string;
  tanggalBuat: string;
  warna: string;
}

export interface UserBoatState {
  boats: userBoatType[];
  getUserBoat: (id: string) => Promise<void>;
}

export const userBoatSlice: StateCreator<UserBoatState> = (set, get) => ({
  boats: [],
  getUserBoat: async (id: string) => {
    axios.defaults.withCredentials = true;
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/kapal/user/getKapalById/${id}`,
        {
          withCredentials: true,
        }
      );
      set({ boats: res.data });
    } catch (err: any) {
      console.log(err);
    }
  },
});
