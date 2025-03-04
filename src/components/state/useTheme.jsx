import { createStore } from "zustand";

// global store dark/light theme management
const useTheme = createStore((set) => ({
  theme: localStorage.getItem("theme").substring(1, 5),
  changeTheme: () =>
    set((state) => ({ theme: state.theme == "dark" ? "light" : "dark" })),
}));

export default useTheme;
