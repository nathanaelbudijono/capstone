import { create } from "zustand";
import { UserState, userSlice } from "./slices/user-slices";
import { UserBoatState, userBoatSlice } from "./slices/user-boat-slices";

type storeState = UserState & UserBoatState;

export const useAppStore = create<storeState>()((...a) => ({
  ...userSlice(...a),
  ...userBoatSlice(...a),
}));
