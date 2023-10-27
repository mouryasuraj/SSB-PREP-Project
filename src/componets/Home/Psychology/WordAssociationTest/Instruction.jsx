import React from 'react'
import { Link } from 'react-router-dom'

function Instruction() {


  const url = document.URL
  const lastNum = url.substring(url.length-2);



  return (
    <div className='flex flex-col justify-center w-[100vw] h-[100vh] items-center gap-y-10 px-5'>
      <p className='capitalize text-xl md:text-3xl text-center font-bold text-sky-700'>Click <span className=''>"start"</span> to display the words</p>
      <Link  to={`start-test/${lastNum}`}  className='uppercase  bg-sky-700 text-white px-3 hover:bg-sky-600 active:scale-[0.8] duration-300 py-2 rounded-sm text-xl md:text-2xl'>start</Link>
    </div>
  )
}

export default Instruction
