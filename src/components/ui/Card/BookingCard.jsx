import { IoTicketOutline } from "react-icons/io5";
import Countdown from "../../partials/Countdown/Countdown";
import { useState } from "react";
const BookingCard = ({ dataTrip }) => {
  let setDate = new Date();
  const localTime = setDate.toLocaleString();
  console.log(localTime);

  return (
    <article className="rounded-xl border-2 border-gray-100 bg-white">
      <div className="flex items-start gap-4 p-4 sm:pl-6 sm:pr-6 sm:pt-6 lg:pl-8 lg:pr-8 lg:pt-8">
        <div>
          <h3 className="font-medium text-lg">
            <a href="#" className="hover:underline">
              {" "}
              {dataTrip.tittle}{" "}
            </a>
          </h3>

          <p className="line-clamp-2 text-sm text-gray-700">
            Rp.{dataTrip.totalPrice}
          </p>

          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center gap-1 text-gray-500">
              <IoTicketOutline />
              <p className="text-xs">{dataTrip.totalTicket}</p>
            </div>

            <span className="hidden sm:block" aria-hidden="true">
              &middot;
            </span>

            <p className="  text-xs text-gray-500">
              Ordered by
              <a href="#" className="font-medium underline hover:text-gray-700">
                {" "}
                {dataTrip.username}{" "}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="-me-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-ss-xl rounded-ee-xl bg-green-600 px-3 py-1.5 text-white">
          <Countdown />
        </div>
      </div>
    </article>
  );
};

export default BookingCard;
