const Invoice = ({ travelDetail }) => {
  return (
    <div className="bg-black/20 fixed flex justify-center items-end inset-0 z-20">
      <div className=" bg-white p-4 flex flex-col gap-3 rounded-t-lg">
        <div>
          <h1 className="font-semibold text-[19px]">Booking Details</h1>
        </div>

        <div>
          <span className="text-slate-400">Destination</span>
          <p className="font-semibold">{travelDetail.tittle}</p>
        </div>

        <div>
          <span className="text-slate-400">Total Ticket</span>
          <p className="font-semibold">{travelDetail.totalTicket}</p>
        </div>

        <div>
          <span className="text-slate-400">Total Price</span>
          <p className="font-semibold">{travelDetail.totalPrice}</p>
        </div>
        

        <button className="bg-blue-500 text-white p-3 rounded-lg">Download invoice</button>
      </div>
    </div>
  );
};

export default Invoice;
