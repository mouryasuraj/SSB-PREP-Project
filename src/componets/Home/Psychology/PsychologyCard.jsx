import React from 'react'
import { Link } from 'react-router-dom'

function PsychologyCard({sectionName, goTo}) {
  return (
    <Link to={goTo} className='w-[250px] h-[250px] flex capitalize items-center justify-center border-[2px] shadow-lg mt-10 lg:hover:scale-[1.01] duration-300 hover:shadow-2xl'>
       <p className='text-sky-800 font-bold text-md text-center'>{sectionName}</p>    
    </Link>
  )
}

export default PsychologyCard
