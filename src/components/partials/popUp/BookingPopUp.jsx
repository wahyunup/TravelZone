import { useState } from "react";

const BookingPopUp = ({ handleIsOpen, tittle, price }) => {
  const [TotalPrice, setTotalPrice] = useState(price);
  const [totalTicket, setTotalTicket] = useState(1);

  const NewIncrement = TotalPrice + price;
  const NewIncrementTicket = totalTicket + 1;
  const NewDecrement = TotalPrice - price;
  const NewDecrementTicket = totalTicket - 1;

  const handleSetDecrement = () => {
    if (totalTicket <= 1) {
      return;
    }
    setTotalPrice(NewDecrement);
    setTotalTicket(NewDecrementTicket);
  };

  const handleSetIncrement = () => {
    setTotalTicket(NewIncrementTicket);
    setTotalPrice(NewIncrement);
  };

  return (
    <div className="flex fixed inset-0 justify-center items-center z-10">
      <div className=" bg-black/20 fixed inset-0" onClick={handleIsOpen} />
      <div className="bg-white p-6 w-fit h-fit z-[2] rounded-2xl flex flex-col gap-3">
        <p className="text-[27px] font-semibold">{tittle}</p>
        <div className="flex gap-5 items-center">
          <p className="bg-slate-100 py-3 px-4 rounded-lg">
            Rp.{TotalPrice}
            <span>/hari</span>
          </p>
          <div className="flex gap-4 border p-2 rounded-xl items-center">
            <button className="bg-blue-500 text-white py-1 px-3 rounded-lg" onClick={handleSetDecrement}>-</button>
            <span>{totalTicket} Ticket</span>
            <button className="bg-blue-500 text-white py-1 px-3 rounded-lg" onClick={handleSetIncrement}>+</button>
          </div>
        </div>
          <button className="bg-blue-500 text-white p-2 rounded-lg">Order</button>
      </div>
    </div>
  );
};

export default BookingPopUp;
