import NavBar from "./NavBar/NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { SetContextProvider } from "../context/setsContext";

import React, { useState } from 'react'

function Layout() {

  const [words, setWords] = useState([])
  const [link, setLink] = useState('')

  


  return (
    <SetContextProvider value={{words, link}}>
      <div className="bg-white">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </SetContextProvider>
  )
}

export default Layout
