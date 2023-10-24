import NavBar from "./NavBar/NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

import React from 'react'

function Layout() {
  return (
    <div className="z-[1]">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
