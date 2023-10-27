import NavBar from "./NavBar/NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

import React from "react";

function Layout() {
  return (
    <div>
      <div className="bg-white">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
