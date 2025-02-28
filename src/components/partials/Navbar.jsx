import { useEffect, useState } from "react";
import Link from "../ui/Link";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  const Navbar = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Booking",
      href: "/booking",
    },
  ];

  const Navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [users, setUsers] = useState();
  const [isLogin, setIsLogin] = useState(false);
  const [isOpenNav, setIsopennav] = useState(false);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("loggedInUser"));
    setUsers(storedUsers);
    setIsLogin(!!storedUsers);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setIsLogin(false);
    setUsers(null);
    Navigate("/login");
  };

  const handleIsOpenNav = () => {
    setIsopennav(!isOpenNav)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
    <div
      className={`sticky  top-0 py-8 bg-white transition-transform duration-300 z-[10] ${
        isVisible ? "translate-y-0" : "-translate-y-full : "
      }`}>
      {/* Navbar Large */}
      <div className="hidden md:flex justify-between px-10">
        <h1 className="font-semibold">TravelZone</h1>
        <div className="flex gap-14">
          {Navbar.map((nav, index) => (
            <Link key={index} name={nav.name} to={nav.href} />
          ))}
        </div>
        <div className="flex gap-7 items-center">
          {isLogin ? (
            <>
              <a>Welcome, {users?.username}</a>

              <button onClick={handleLogout} className="py-2 px-6 rounded-full">
                Log Out
              </button>
            </>
          ) : (
            <>
              <a
                className="border border-slate-700 hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all duration-300 py-2 px-6 rounded-full"
                href="/login">
                Login
              </a>
              <a className="py-2 px-6 rounded-full" href="/register">
                Register
              </a>
            </>
          )}
        </div>
      </div>

      {/* Navbar mobile */}
      <div className="flex md:hidden justify-between px-10">
        <h1 className="font-semibold">TravelZone</h1>
        <div className="flex items-center gap-3">
          <RxHamburgerMenu onClick={handleIsOpenNav}/>
        </div>
      </div>

    </div>
      {isOpenNav && (
        <div className="flex justify-center absolute">
          <span className="text-[13px]">{users?.username}</span>
          <h1>asdasd</h1>
        </div>
      )}
      </>
  );
};

export default Navbar;
