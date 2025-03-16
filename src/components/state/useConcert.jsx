import { createStore } from "zustand";

const useConcert = createStore((set) => ({
  concert: { date: "", city: "", venue: "" }, // {date, location, venue}
  setConcert: (concert) => {
    set(() => ({ concert: concert }));
  },
}));

export { useConcert };
