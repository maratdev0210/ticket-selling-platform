// state management for selected seats, returns the selected seats and updates them as well
import { createStore } from "zustand";

const useSelectedSeats = createStore((set) => ({
  selectedSeats: [],
  areSeatsReserved: false, // when the user buys his tickets we should store those seats as reserved
  setSelectedSeats: (
    newSeat // {x, y, price, section, type, colorCode}
  ) => set((state) => ({ selectedSeats: [...state.selectedSeats, newSeat] })),
  resetSelectedSeats: () => set(() => ({ selectedSeats: [] })),
  setReservedSeats: () => set(() => ({ areSeatsReserved: true })),
}));

export default useSelectedSeats;
