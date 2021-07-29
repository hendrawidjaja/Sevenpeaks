import create from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      sortActive: "Newest first",
      searchString: "",

      updateSortActive: (sortActive) => {
        set({ sortActive });
      },

      updateSearchString: (searchString) => {
        set({ searchString });
      },
    }),
    {
      name: "HendraStore",
    }
  )
);

export default useStore;
