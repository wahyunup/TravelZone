import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import { Outlet } from "react-router-dom";

const pageLayout = () => {
  return (
    <div>
      <Navbar/>
      <div><Outlet/></div>
      <Footer/>
    </div>
  );
};

export default pageLayout;
