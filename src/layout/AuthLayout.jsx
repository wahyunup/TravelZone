import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import { Outlet } from "react-router-dom";
const AuthLayout = () => {
  return (
    <div className="inset-0 fixed">
      <Navbar />
      <div className="flex h-[720px] justify-center items-center">
        <Outlet/>
      </div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
