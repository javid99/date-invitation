import { create } from "zustand";

type DateStore = {
   place: string;
   day: string;
   time: string;

   setPlace: (place: string) => void;
   setDay: (day: string) => void;
   setTime: (time: string) => void;
};

export const useDateStore = create<DateStore>((set) => ({
   place: "",
   day: "",
   time: "",

   setPlace: (place) =>
      set({
         place,
      }),

   setDay: (day) =>
      set({
         day,
      }),

   setTime: (time) =>
      set({
         time,
      }),
}));
