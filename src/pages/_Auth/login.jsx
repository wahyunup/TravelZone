import { useState } from "react";
import { usePopUpStore } from "../../store/store";
import PopUp from "../../components/modal/PopUp";

const login = () => {
  const {PopUpMessage, showPopUp} = usePopUpStore()
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (!credentials.email || !credentials.password) {
      showPopUp("Semua field harus diisi!",false , true)
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (user) => user.email === credentials.email && user.password === credentials.password
    );

    if (foundUser) {
      showPopUp("Login Success!",true , true)
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser)); 
      setTimeout(() => {
        window.location.href = "/";
      },2000)
    } else {
      showPopUp("Wrong email or password!",false , true)
    }
  };
  return (
    <div className="flex flex-row-reverse rounded-lg border p-5 justify-between border-slate-100 gap-5 md:w-[1200px]">
      <div className="flex flex-col justify-center items-center gap-4 bg-white md:w-[50%]">
        <span className="font-semibold text-[25px] md:text-[30px]">Login</span>
        <div className="flex flex-col gap-3 md:w-full w-[300px]">
          <input
            type="email"
            placeholder="email address"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            className="text-[15px] bg-slate-50 rounded-md px-4 h-[45px] placeholder:text-slate-300 focus:outline-blue-400"
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            placeholder="password"
            onChange={handleChange}
            className="text-[15px] bg-slate-50 rounded-md px-4 h-[45px] placeholder:text-slate-300 focus:outline-blue-400"
          />
        </div>
        <button onClick={handleLogin} className="bg-blue-500 h-[50px] text-white p-2 rounded-lg w-full">
          Login
        </button>
        <p className="text-[15px]">Don't have an account? <a className="text-blue-500" href="/register">Create Account</a></p>
      </div>
      <div className="overflow-hidden h-[500px] w-[50%] rounded-lg hidden md:flex">
        <img
          src="https://images.unsplash.com/photo-1593981340005-d982402e4474?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      { PopUpMessage.condition &&
      <PopUp message={PopUpMessage}/>
      }
    </div>
  );
};

export default login;
