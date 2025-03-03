import { IoTicketOutline } from "react-icons/io5";
const BookingCard = ({dataTrip}) => {
    return(
        <article className="rounded-xl border-2 border-gray-100 bg-white">
        <div className="flex items-start gap-4 p-4 sm:pl-6 sm:pr-6 sm:pt-6 lg:pl-8 lg:pr-8 lg:pt-8">
          
      
          <div>
            <h3 className="font-medium text-lg">
              <a href="#" className="hover:underline"> {dataTrip.tittle} </a>
            </h3>

            <p className="line-clamp-2 text-sm text-gray-700">Rp.{dataTrip.totalPrice}</p>
      
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center gap-1 text-gray-500">
                <IoTicketOutline/>
                <p className="text-xs">{dataTrip.totalTicket}</p>
              </div>
      
              <span className="hidden sm:block" aria-hidden="true">&middot;</span>
      
              <p className="  text-xs text-gray-500">
                Ordered by
                <a href="#" className="font-medium underline hover:text-gray-700"> {dataTrip.username} </a>
              </p>
            </div>
          </div>
        </div>
      
        <div className="flex justify-end">
          <strong
            className="-me-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-ss-xl rounded-ee-xl bg-green-600 px-3 py-1.5 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
      
            <span className="text-[10px] font-medium sm:text-xs">Solved!</span>
          </strong>
        </div>
      </article>
    )
}

export default BookingCard