import create from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set, get) => ({
      books: [],
      addBook: (book) =>
        set((state) => ({ books: [...state.books, { book }] })),
    }),
    {
      name: "hendra-store",
    }
  )
);
