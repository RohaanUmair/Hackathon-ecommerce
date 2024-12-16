import { IoIosArrowForward } from "react-icons/io";
import React from 'react'

function Section1() {
    return (
        <div className='h-[280px] flex justify-center bg-white items-center'>
            <div className='flex flex-col items-center gap-4 h-[180px]'>
                <h5 className="text-[#737373] text-base font-bold">PRICING</h5>
                <h2 className="text-[58px] text-[#252B42] font-bold     max-md:text-[40px]">Simple Pricing</h2>
                <p className="text-sm text-[#252B42] font-bold flex gap-[15px] items-center">Home <IoIosArrowForward className="text-xl text-[#BDBDBD]" /><span className="text-[#737373]">Pricing</span></p>
            </div>
        </div>
    )
}

export default Section1
