import Image from 'next/image'
import React from 'react'
import { IoPlay } from "react-icons/io5";


function Section3() {
    return (
        <div className='relative h-[764px] flex justify-center items-center rounded-3xl overflow-hidden         max-md:w-full max-md:h-[477px]'>
            <div className='bg-gradient-to-b from-[#00000000] to-[#383838D6] absolute z-20 h-[540px] rounded-3xl w-[989px]      max-md:w-[306px] max-md:h-[316px]'></div>
            <Image src="/about/play-img.jpg" layout='omit' width={989} height={540} alt='img' className='absolute rounded-3xl w-[989px] h-[540px]       max-md:w-[306px] max-md:h-[316px]' />
            <div className='h-[92.6px] w-[92.6px] bg-[#23A6F0] rounded-full z-40 flex justify-center items-center text-white text-3xl       max-md:w-[57px] max-md:h-[57px] max-md:text-2xl'><IoPlay /></div>
        </div>
    )
}

export default Section3
