// which artist's concert does the user want to attend
import { createStore } from "zustand";

const useArtist = createStore((set) => ({
  artist: { name: "", avatar: "" }, // no artist is being selected by default
  changeArtist: (artist) => {
    set(() => ({ artist: artist }));
  },
}));

export { useArtist };
