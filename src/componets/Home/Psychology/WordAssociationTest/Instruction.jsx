import React from 'react'
import { Link } from 'react-router-dom'

function Instruction() {


  const url = document.URL
  const lastNum = url.substring(url.length-2);



  return (
    <div className='flex flex-col items-center gap-y-10'>
      <p className='capitalize text-3xl font-bold text-sky-700'>Click <span className=''>"start"</span> to display the words</p>
      <Link  to={`start-test/${lastNum}`}  className='uppercase  bg-sky-700 text-white px-3 hover:bg-sky-600 active:scale-[0.8] duration-300 py-2 rounded-sm text-2xl'>start</Link>
    </div>
  )
}

export default Instruction
