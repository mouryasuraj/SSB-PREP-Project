import React, { useState } from "react";
import NavBarLink from "./NavLink";
import { Link } from "react-router-dom";

function NavBar() {
  const [hidden, setHidden] = useState(false);

  const handleMenu = () => {
    setHidden((prev) => !prev);
  };

  return (
    <div>
      <nav className="bg-sky-500 flex justify-between px-10 md:justify-around  items-center relative">
        {/* Logo */}
        <Link to='' className="md:text-5xl text-3xl uppercase text-white font-extrabold  py-4 cursor-pointer">
          SSB Prep
        </Link>
        {/* navlink */}
        <ul
          className={`flex-wrap gap-x-2 md:flex md:pt-0 pt-12 duration-300 md:relative px-10 w-1/2 md:top-0 absolute  md:w-fit md:h-fit  h-[100vh] ${
            hidden ? "top-[0]" : "top-[-100vh]"
          } bg-sky-500 md:bg-transparent right-[0]`}
        >
          {/* X Mark */}
          <i
            onClick={handleMenu}
            className="fa-solid px-3 py-1 rounded-full hover:rotate-180 duration-500 hover:bg-red-500 fa-xmark right-5 top-3 absolute md:hidden text-3xl  cursor-pointer text-white"
          ></i>
          <div className="flex md:flex-row flex-col gap-y-8">
            <NavBarLink linkName="home" />
            <NavBarLink linkName="about" />
            <NavBarLink linkName="contact" />
          </div>
        </ul>
        {/* Solid Bar */}
        <i
          onClick={handleMenu}
          className="fa-solid fa-bars md:hidden text-3xl  cursor-pointer text-white"
        ></i>
      </nav>
    </div>
  );
}

export default NavBar;
