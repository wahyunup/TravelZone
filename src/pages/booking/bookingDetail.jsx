import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dataUser from "../../services/dataUser";
import BookingPopUp from "../../components/partials/popUp/BookingPopUp";
import Invoice from "../../components/partials/Invoice/Invoice";
import { FaHotel } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import PopUp from "../../components/modal/PopUp";
import { usePopUpStore } from "../../store/store";

const detailCard = () => {
  const { id } = useParams();
  const { DataTravel } = dataUser();
  
  const {PopUpMessage, showPopUp} = usePopUpStore()

  const [travelDetail, setTravelDetail] = useState({});
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const [order, setOrder] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleIsClosed = () => {
    setOrder(!order);
  };

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("loggedInUser"));
    setUser(storedUsers);

    const foundData = DataTravel.find((data) => data.id === parseInt(id));
    if (foundData) {
      setTravelDetail(foundData);
    }
  }, [id]);

  const handleSetIsOpen = () => {
    if (!user || Object.keys(user).length === 0) {
      showPopUp("Please Login First", false, true);
      setTimeout(() => {
        navigate("/login");
      }, 2000)
      return 
    }
    setIsOpenPopUp(!isOpenPopUp);
  };

  const handleOrder = (totalPrice, totalTicket) => {
    setIsOpenPopUp(false);
    setOrder(!order);

    setTravelDetail((prevState) => ({
      ...prevState,
      totalPrice,
      totalTicket,
    }));
  };

  const facility = travelDetail.facility ?? [];

  const handleCheckout = (transaction) => {
    setOrder(!order);
    let test = JSON.parse(localStorage.getItem("product")) || [];

    if (!test.some((item) => item.id === transaction.id)) {
      showPopUp("Order Success", true, true);
      let newTransaction = {
        ...transaction,
        username: user.username,
      };

      // Gabungin transaksi baru tanpa ngefilter data lama
      test.push(newTransaction);

      // Simpen ulang semua data
      localStorage.setItem("product", JSON.stringify(test));
    } else {
      showPopUp("Existing Trip", false, true);
    }
    setTimeout(() => {
      navigate("/booking");
    }, 2000)
  };

  return (
    <div className="md:h-screen md:px-[50px] px-[25px] flex-col md:flex-row flex gap-8">
      <div className="w-full flex flex-col gap-4">
        <div className="md:h-[500px] h-[400px] overflow-hidden rounded-3xl">
          <img
            src={travelDetail.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="font-semibold text-[30px]">{travelDetail.tittle}</h1>
        <p className="text-justify">{travelDetail.desc}</p>
      </div>

      <div className="sticky top-6 md:w-[750px] h-fit flex flex-col gap-5">
        <div className="flex justify-between rounded-2xl items-center border border-slate-200 p-6 bg-white">
          <div className="flex justify-between w-full">
            <div>
              <p className="text-slate-500 md:text-[14px]">Start from</p>
              <p className="md:text-[18px]">
                <span className="font-semibold ">Rp.{travelDetail.price}</span>
                /Ticket
              </p>
            </div>
            <button
              onClick={handleSetIsOpen}
              className="bg-blue-500 px-5 py-3 font-semibold md:text-[17px] text-[14px] rounded-xl text-white">
              Booking Now
            </button>
          </div>
        </div>

        <div className="border flex flex-col gap-4 border-slate-200 rounded-2xl p-8">
          <h1 className="font-semibold text-[25px]">Facility</h1>

          <div className="flex flex-col gap-3">
            {
              <div className="border-b border-dashed pb-3 flex items-center">
                <FaHotel />
                <span className="pl-4">{facility[0]}</span>
              </div>
            }
            <div className="border-b border-dashed pb-3 flex items-center">
              <FaCar />
              <span className="pl-4">{facility[1]}</span>
            </div>
            <div className="border-b border-dashed pb-3 flex items-center">
              <IoFastFood />
              <span className="pl-4">{facility[2]}</span>
            </div>
            <div className="border-b border-dashed pb-3 flex items-center">
              <FaUser />
              <span className="pl-4">{facility[3]}</span>
            </div>
          </div>
        </div>
      </div>

      {PopUpMessage.condition && <PopUp message={PopUpMessage} />}

      {isOpenPopUp && (
        <BookingPopUp
          price={travelDetail.price}
          tittle={travelDetail.tittle}
          handleIsOpen={handleSetIsOpen}
          DataTravel={DataTravel}
          handleOrder={handleOrder}
        />
      )}

      {order && (
        <Invoice
          travelDetail={travelDetail}
          dataUser={user}
          handleCheckout={handleCheckout}
          handleIsClosed={() => handleIsClosed(false)}
        />
      )}
    </div>
  );
};

export default detailCard;
