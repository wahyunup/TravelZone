import BookingCard from "../../components/ui/Card/BookingCard";

const booking = () => {
  const userIsLogin = JSON.parse(localStorage.getItem("loggedInUser"));

  let userTrip = JSON.parse(localStorage.getItem("nama")) || [];
  const filterTrip = userTrip.filter(
    (user) => user?.username === userIsLogin?.username
  );

  console.log(userTrip);
  

  return (
    <div className="h-[100vh]">
      <div className="flex flex-col gap-4 px-10">
        {userIsLogin ? (
          filterTrip.length > 0 ? (
            <>
              {userTrip.map((trip, id) => (
                <div
                  key={id}>
                 <BookingCard dataTrip={trip}/>
                </div>
              ))}
            </>
          ) : (
            <div>
              <p className="inset-0 fixed items-center flex justify-center">
                Belum Ada Trip
              </p>
            </div>
          )
        ) : (
          <p className="inset-0 fixed items-center flex justify-center gap-2">Wanna Trip? <a href="/login" className="text-blue-500"> login first</a></p>
        )}
      </div>
    </div>
  );
};

export default booking;
