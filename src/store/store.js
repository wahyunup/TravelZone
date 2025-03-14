import { create } from "zustand";

const usePopUpStore = create((set) => ({
  PopUpMessage: { message: null, status: true, condition: false },

  showPopUp: (message, status, condition) => {
    set({ PopUpMessage: { message, status, condition } });

    setTimeout(() => {
      set({ PopUpMessage: { message: null, status: true, condition: false } });
    }, 2000);
  },
}));

export { usePopUpStore };
