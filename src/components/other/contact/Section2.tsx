import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import RequestCard from './RequestCard'
import { BsEnvelopeFill, BsTelephone } from 'react-icons/bs'

function Section2() {
    return (
        <div className='h-[814px] py-[112px] flex flex-col gap-20       max-md:h-[1530px] max-md:gap-0'>

            <div className='flex flex-col gap-[10px] text-center        max-md:px-[62px]'>
                <h6 className='text-sm text-[#252B42] font-bold'>VISIT OUR OFFICE</h6>
                <h2 className='text-[#252B42] text-[40px] font-bold'>We help small businesses<br /> with big ideas</h2>
            </div>

            <div className='flex justify-center         max-md:flex-col max-md:items-center'>
               <RequestCard theme='light' icon={<BsTelephone />} />
               <RequestCard theme='dark' icon={<FaLocationDot />} />
               <RequestCard theme='light' icon={<BsEnvelopeFill />} />
            </div>

        </div>
    )
}

export default Section2
