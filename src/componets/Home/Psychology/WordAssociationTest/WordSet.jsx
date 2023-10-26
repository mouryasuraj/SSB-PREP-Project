import React from 'react'
import { Link } from 'react-router-dom'

function WordSet() {




    const set = [];
    const noOfSets = 30

    for (let i = 1; i <= noOfSets; i++) {
        set.push(`set_${i<10 ? `0${i}` : i}`)
    }



    return (
        <>
            {
                set.map((set) => (
                    <Link to = {set}  key={set} target='' className='set w-[18%] min-w-[150px] h-[50px] text-sky-800 hover:text-white duration-200 flex items-center justify-center border-[2px] shadow-md mt-10 hover:bg-sky-500 hover:shadow-sky-500 rounded-sm hover:border-sky-500 hover:shadow-sm'>
                        <p className='font-bold uppercase text-md text-center '>{set}</p>
                    </Link>
                ))
            }
        </>
    )
}

export default WordSet
