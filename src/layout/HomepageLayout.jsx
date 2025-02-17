import { Outlet } from "react-router-dom";
import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";

const HomepageLayout = () => {
  return (
    <>
    <Navbar/>
      <div className="px-8 flex flex-col gap-8">
        <Outlet />
      </div>
    <Footer/>
    </>
  );
};

export default HomepageLayout;
