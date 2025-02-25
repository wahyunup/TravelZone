import { BsXLg } from "react-icons/bs";
const Invoice = ({ travelDetail, dataUser, handleIsClosed }) => {

  return (
        <div className="bg-black/20 fixed flex justify-center items-end inset-0 z-20">
          <div className=" bg-white px-10 pt-10 pb-7 flex flex-col justify-around gap-14 rounded-t-xl w-[500px]">
            <div>
              <div className="flex justify-end">
                <button className="bg-red-100 p-2 rounded-full" onClick={handleIsClosed}><span className="text-red-500"><BsXLg/></span></button>
              </div>
              <h1 className="font-semibold text-[20px]">Booking Details</h1>
            </div>

            <div className="flex flex-col gap-7">
              <div className="border-b pb-4 border-spacing-x-36 border-slate-200 border-dashed">
                <span className="text-slate-400">Name</span>
                <p className="font-semibold">{dataUser.username}</p>
              </div>

              <div className="border-b pb-4 border-spacing-x-36 border-slate-200 border-dashed">
                <span className="text-slate-400">Destination</span>
                <p className="font-semibold">{travelDetail.tittle}</p>
              </div>

              <div className="border-b pb-4 border-spacing-x-36 border-slate-200 border-dashed">
                <span className="text-slate-400">Total Ticket</span>
                <p className="font-semibold">{travelDetail.totalTicket}</p>
              </div>

              <div className="border-b pb-4 border-spacing-x-36 border-slate-200 border-dashed">
                <span className="text-slate-400">Total Price</span>
                <p className="font-semibold">{travelDetail.totalPrice}</p>
              </div>
            </div>

            <button className="bg-blue-500 text-white p-3 rounded-lg">
              Download invoice
            </button>
          </div>
        </div>
  );
};

export default Invoice;
