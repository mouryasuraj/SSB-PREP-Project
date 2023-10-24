import React from "react";
import { NavLink } from "react-router-dom";

function NavBarLink({ linkName }) {
  return (
    <div>
      <NavLink
        to={linkName === "home" ? "" : linkName}
        className={({ isActive }) =>
          `${
            isActive ? "bg-sky-900" : "text-white"
          } rounded-sm px-3 py-2 font-bold   text-white uppercase`
        }
      >
        {linkName}
      </NavLink>
    </div>
  );
}

export default NavBarLink;
