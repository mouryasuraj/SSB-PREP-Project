import React from 'react'
import { Outlet } from 'react-router-dom'

function ShowWords() {
  return (
    <div className='w-full h-[100vh] absolute top-0 flex items-center z-[999] justify-center bg-white'>
      <Outlet />
    </div>
  )
}

export default ShowWords
