import Image from 'next/image'
import React from 'react'
import { IoPlay } from "react-icons/io5";


function Section3() {
    return (
        <div className='relative h-[764px] flex justify-center items-center rounded-3xl overflow-hidden'>
            <div className='bg-gradient-to-b from-[#00000000] to-[#383838D6] absolute z-20 h-[540px] rounded-3xl w-[989px]'></div>
            <Image src="/about/play-img.jpg" layout='omit' width={989} height={540} alt='img' className='absolute rounded-3xl w-[989px] h-[540px]' />
            <div className='h-[92.6px] w-[92.6px] bg-[#23A6F0] rounded-full z-40 flex justify-center items-center text-white text-3xl'><IoPlay /></div>
        </div>
    )
}

export default Section3
