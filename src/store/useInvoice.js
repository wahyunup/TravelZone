import { create } from "zustand";

const useInvoice = create((set) => ({

  totalPrice: 0,
  SetTotalPrice: (NewTotalPrice) => set(() => ({ totalPrice:NewTotalPrice})),

}));

export { useInvoice };
