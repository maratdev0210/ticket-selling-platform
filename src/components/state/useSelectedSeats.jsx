// state management for selected seats, returns the selected seats and updates them as well
import { createStore } from "zustand";

const useSelectedSeats = createStore((set) => ({
  selectedSeats: [],
  setSelectedSeats: (newSeat) =>
    set((state) => ({ selectedSeats: [...state.selectedSeats, newSeat] })),
  resetSelectedSeats: () => set(() => ({ selectedSeats: [] })),
}));

export default useSelectedSeats;
