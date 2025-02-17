const Jumbotron = () => {
    return (
        <div className="bg-slate-400 h-[700px] rounded-3xl overflow-hidden flex ">
        <div className="absolute px-[100px] py-[80px] text-white flex flex-col gap-6">
          <h1 className=" text-[90px] font-semibold w-[900px]">
            Explore the sights of the azores
          </h1>
          <p className="text-[18px]">
            A place where nature and adventure unite
          </p>
          <button className="bg-white text-black py-3 w-[160px] rounded-full">
            Book now
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="object-cover h-full w-full"
        />
      </div>
    )
}

export default Jumbotron