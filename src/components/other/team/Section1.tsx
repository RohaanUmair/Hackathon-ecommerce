import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

function Section1() {
    return (
        <div className='h-[180px] flex flex-col items-center justify-between my-[50px]      max-md:m-0 max-md:h-[200px] max-md:my-12'>
            <h5 className='text-[#737373] text-base font-bold'>WHAT WE DO</h5>

            <h1 className='text-[58px] font-bold text-[#252B42]         max-md:text-[40px] max-md:text-center max-md:w-[90%]'>Innovation tailored for you</h1>

            <p className="text-sm text-[#252B42] font-bold flex gap-[15px] items-center">Home <IoIosArrowForward className="text-xl text-[#BDBDBD]" /><span className="text-[#737373]">Team</span></p>
        </div>
    )
}

export default Section1
