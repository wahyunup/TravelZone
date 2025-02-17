const register = () => {
  return (
    <div className="flex rounded-lg border p-5 justify-between border-slate-100 gap-5 w-[1200px]">
    <div className="flex flex-col justify-center items-center gap-4 bg-white w-[50%]">
      <span className="font-semibold text-[30px]">Register</span>
      <div className="flex flex-col gap-3 w-full">
        <input
          type="text"
          placeholder="username"
          className="text-[15px] bg-slate-50 rounded-md px-4 h-[45px] placeholder:text-slate-300 focus:outline-blue-400"
        />
        <input
          type="text"
          placeholder="email address"
          className="text-[15px] bg-slate-50 rounded-md px-4 h-[45px] placeholder:text-slate-300 focus:outline-blue-400"
        />
        <input
          type="text"
          placeholder="password"
          className="text-[15px] bg-slate-50 rounded-md px-4 h-[45px] placeholder:text-slate-300 focus:outline-blue-400"
        />
        <input
          type="text"
          placeholder="confirm password"
          className="text-[15px] bg-slate-50 rounded-md px-4 h-[45px] placeholder:text-slate-300 focus:outline-blue-400"
        />
      </div>
      <button className="bg-blue-500 text-white p-2 h-[50px] rounded-lg w-full">
        Register
      </button>

    </div>
    <div className="overflow-hidden h-[500px] w-[50%] rounded-lg">
    <img src="https://images.unsplash.com/photo-1593981340005-d982402e4474?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" alt="" />
    </div>
  </div>
  );
};

export default register;
