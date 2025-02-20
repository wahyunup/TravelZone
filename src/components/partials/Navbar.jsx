import { useEffect, useState } from "react";
import Link from "../ui/Link";
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

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    <div
      className={`sticky top-0 py-8 bg-white transition-transform duration-300 z-[10] ${
        isVisible ? "translate-y-0" : "-translate-y-full : "
      }`}>
      <div className="flex justify-between px-10">
        <h1 className="font-semibold">TravelZone</h1>
        <div className="flex gap-14">
          {Navbar.map((nav, index) => (
            <Link key={index} name={nav.name} to={nav.href}/>
          ))}
        </div>
        <div className="flex gap-7">
          <a className="border border-slate-700  hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all duration-300 py-2 px-6 rounded-full" href="/login">Login</a>
          <a className=" py-2 px-6 rounded-full" href="/register">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
