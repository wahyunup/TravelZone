const booking = () => {
  const userIsLogin = JSON.parse(localStorage.getItem("loggedInUser"));
  console.log(userIsLogin?.username);

  let userTrip = JSON.parse(localStorage.getItem("nama")) || [];
  const filterTrip = userTrip.filter(
    (user) => user?.username === userIsLogin?.username
  );

  return (
    <div className="h-[100vh]">
      <div className="flex flex-col gap-4 px-10">
        {userIsLogin ? (
          filterTrip.length > 0 ? (
            <>
              {userTrip.map((trip, id) => (
                <div
                  key={id}
                  className="p-5 border border-slate-200 rounded-lg">
                  <p>{trip.tittle}</p>
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
          <p>Cant Read Your Booking</p>
        )}
      </div>
    </div>
  );
};

export default booking;
