import "./App.css";
import Homepage from "./pages/homepage";
import PageLayout from "./layout/PageLayout";
import About from "./pages/about/about";
import Booking from "./pages/booking/booking";
import BookingDetail from "./pages/booking/bookingDetail";
import Login from "./pages/_Auth/login";
import Register from "./pages/_Auth/register";
import { Route, Routes } from "react-router-dom";
import HomepageLayout from "./layout/HomepageLayout";
import AuthLayout from "./layout/AuthLayout";
function App() {
  return (
    <>
      <Routes>
        <Route element={<HomepageLayout />}>
          <Route path="/" element={<Homepage />} />
        </Route>

        <Route element={<PageLayout />}>
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path={"/bookingdetail/:id"} element={<BookingDetail />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
