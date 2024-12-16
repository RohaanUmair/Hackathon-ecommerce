import Image from 'next/image'
import React from 'react'

function Section4() {
    return (
        <div className='h-[710px] max-md:h-full max-md:flex-col bg-[#23856D] flex items-end justify-center max-md:pt-[208px]'>
            <div className='w-[1050px] max-md:w-full h-[600px] max-md:h-full max-md:flex-col flex justify-between items-center'>


                <div className='w-[510px] max-md:mx-auto max-md:w-[261px] max-md:text-center h-[372px] max-md:h-[429px] text-white flex flex-col justify-between'>
                    <h5 className='text-xl font-normal'>SUMMER 2020</h5>
                    <h1 className='font-bold text-6xl max-md:text-[40px]'>Vita Classic Product</h1>
                    <h4 className='text-sm font-normal max-md:text-xl'>We know how large objects will act, We know <br /> how are objects will act, We know</h4>

                    <div className='flex items-center gap-8 h-[52px] max-md:h-[104px] max-md:gap-0 max-md:justify-between max-md:flex-col'>
                        <h4 className='text-2xl font-bold'>$16.48</h4>
                        <button className='w-[184px] h-[52px] rounded-md bg-[#2DC071] font-bold text-sm'>ADD TO CART</button>
                    </div>
                </div>


                <div>
                    <Image alt="bg" src='/sec4-bg.png' width={510} height={685} layout="omit" className="w-[510px] h-[597px] object-top object-cover max-md:mt-[30px]" />
                </div>


            </div>
        </div>
    )
}

export default Section4
