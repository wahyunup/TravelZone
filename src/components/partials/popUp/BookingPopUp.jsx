import { useEffect, useState } from "react";

const BookingPopUp = ({ handleIsOpen, tittle, price, handleOrder }) => {

  const [totalPrice, setTotalPrice] = useState(price);
  const [totalTicket, setTotalTicket] = useState(1);

  const handleSetDecrement = () => {
    setTotalTicket((prevTicket) => (prevTicket > 1 ? prevTicket - 1 : prevTicket));
  };

  const handleSetIncrement = () => {
    setTotalTicket((prevTicket) => prevTicket + 1);
  };

  useEffect(() => {
    setTotalPrice(totalTicket * price);
  }, [totalTicket, price]);
  
  return (
    <div className="flex fixed inset-0 justify-center items-center z-10">
      <div className=" bg-black/20 fixed inset-0" onClick={handleIsOpen} />
      <div className="bg-white p-6 w-fit h-fit z-[2] rounded-2xl flex flex-col gap-3">
        <p className="text-[27px] font-semibold">{tittle}</p>
        <div className="flex gap-5 items-center">
          <p className="bg-slate-100 py-3 px-4 rounded-lg">
            Rp. {totalPrice}
            <span></span>
          </p>
          <div className="flex gap-4 border p-2 rounded-xl items-center">
            <button className="bg-blue-500 text-white py-1 px-3 rounded-lg" onClick={handleSetDecrement}>-</button>
            <span>{totalTicket} Ticket</span>
            <button className="bg-blue-500 text-white py-1 px-3 rounded-lg" onClick={handleSetIncrement}>+</button>
          </div>
        </div>
          <button className="bg-blue-500 text-white p-2 rounded-lg" onClick={()=> handleOrder(totalPrice, totalTicket)}>Order</button>
      </div>
    </div>
  );
};

export default BookingPopUp;
