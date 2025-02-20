import { create } from "zustand";

const useInvoice = create((set) => ({
  travelDetail: {},
  setTravelDetail: (newDetail) => set(() => ({ travelDetail: newDetail })),

  totalPrice: 0,
  SetTotalPrice: (NewTotalPrice) => set(() => ({ totalPrice:NewTotalPrice})),

  order: false,
  setOrder: () => set(() => ({ order })),
}));

export { useInvoice };
