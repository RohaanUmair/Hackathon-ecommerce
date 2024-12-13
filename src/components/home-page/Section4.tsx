import Image from 'next/image'
import React from 'react'

function Section4() {
    return (
        <div className='h-[710px] bg-[#23856D] flex items-end justify-center'>
            <div className='w-[1050px] h-[600px] flex justify-between items-center'>


                <div className='w-[510px] h-[372px] text-white flex flex-col justify-between'>
                    <h5 className='text-xl font-normal'>SUMMER 2020</h5>
                    <h1 className='font-bold text-6xl'>Vita Classic Product</h1>
                    <h4 className='text-sm font-normal'>We know how large objects will act, We know <br /> how are objects will act, We know</h4>

                    <div className='flex items-center gap-8 h-[52px]'>
                        <h4 className='text-2xl font-bold'>$16.48</h4>
                        <button className='w-[184px] h-[52px] rounded-md bg-[#2DC071] font-bold text-sm'>ADD TO CART</button>
                    </div>
                </div>


                <div>
                    <Image alt="bg" src='/sec4-bg.png' width={510} height={685} layout="omit" className="w-[510px] h-[597px] object-top object-cover" />
                </div>


            </div>
        </div>
    )
}

export default Section4
