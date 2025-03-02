import { useState } from "react";
import { FaRegEye, FaRegEyeSlash  } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const register = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
  const navigate = useNavigate()
  const [user, setUser] = useState({
    username : "",
    email : "",
    password : "",
    confirmPassword : "",
  });

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const handleSetUser = () => {

    if (!user.username || !user.email || !user.password || !user.confirmPassword) {
      alert("Semua field harus diisi!");
      return;
    }

    // Ambil daftar users yang sudah ada di localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Cek apakah email sudah terdaftar
    const isEmailUsed = existingUsers.some(users => users.email === user.email);

    if (isEmailUsed) {
      alert("Email sudah terdaftar! Gunakan email lain.");
      return;
    }

    // Tambahkan user baru ke daftar users
    const updatedUsers = [...existingUsers, user];

    // Simpan kembali ke localStorage
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("Registrasi berhasil!");
    
    // Reset form
    setUser({ username: "", email: "", password: "", confirmPassword: "" });
    navigate("/login")
  }


  return (
    <div className="flex rounded-lg border p-5 justify-between border-slate-100 gap-5 md:w-[1200px]">
    <div className="flex flex-col justify-center items-center gap-4 bg-white md:w-[50%]">
      <span className="font-semibold text-[30px]">Register</span>
      <div className="flex flex-col gap-3 md:w-full w-[300px]">
        <input
          type="text"
          placeholder="username"
          name="username"
          value={user.username}
          onChange={handleChange}
          className="text-[15px] bg-slate-50 rounded-md px-4 h-[45px] placeholder:text-slate-300 focus:outline-blue-400"
        />
        <input
        required
          type="email"
          placeholder="email address"
          name="email"
          value={user.email}
          onChange={handleChange}
          className="text-[15px] bg-slate-50 rounded-md px-4 h-[45px] placeholder:text-slate-300 focus:outline-blue-400"
        />
      <div className="relative">
        <input
          type={`${!isShowPassword ? "password" : "text"}`}
          placeholder="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          className="text-[15px] bg-slate-50 rounded-md px-4 h-[45px] placeholder:text-slate-300 focus:outline-blue-400 w-full "
          />
          <button onClick={() => setIsShowPassword(!isShowPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">{!isShowPassword ? <FaRegEye/> : <FaRegEyeSlash/> } </button>
          </div>

        <div className="relative">
        <input
          type={`${!isShowConfirmPassword ? "password" : "text"}`}
          placeholder="confirm password"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
          className="text-[15px] bg-slate-50 rounded-md px-4 h-[45px] placeholder:text-slate-300 focus:outline-blue-400 w-full "
          />
          <button onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">{!isShowConfirmPassword ? <FaRegEye/> : <FaRegEyeSlash/> } </button>
          </div>
      </div>
      <button onClick={handleSetUser} className="bg-blue-500 text-white p-2 h-[50px] rounded-lg w-full">
        Register
      </button>
      <p>Don't have an account? <a className="text-blue-500" href="/login">Login</a></p>


    </div>
    <div className="overflow-hidden h-[500px] w-[50%] rounded-lg hidden md:flex">
    <img src="https://images.unsplash.com/photo-1593981340005-d982402e4474?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" alt="" />
    </div>
  </div>
  );
};

export default register;
