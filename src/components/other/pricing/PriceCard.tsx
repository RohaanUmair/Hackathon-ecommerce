import React from 'react'
import { TiTick } from 'react-icons/ti'

function PriceCard({ heading, price, backgroundColor, color, color2 }: { heading: string, price: string, backgroundColor: string, color: string, color2: string }) {
    return (
        <div className='w-[327px] border border-[#23A6F0] flex flex-col items-center gap-[35px] py-[50px] rounded-[10px]' style={{backgroundColor}}>
            <h3 className='text-2xl font-bold' style={{color}}>{heading}</h3>
            <h5 className='font-bold text-base' style={{color: color2}}>Organize across all <br />apps by hand</h5>
            <div className='flex text-[#23A6F0] gap-[10px]'>
                <h2 className='text-[40px] font-bold'>{price}</h2>
                <div>
                    <h2 className='text-2xl font-bold'>$</h2>
                    <h5 className='text-[#8EC2F2] text-sm font-bold'>Per Month</h5>
                </div>
            </div>
            <div className='flex flex-col gap-[15px]'>
                <h6 className='flex items-center gap-[10px] text-sm font-bold' style={{color}}><div className='w-8 h-8 bg-[#2DC071] rounded-full text-white text-2xl flex justify-center items-center'><TiTick /></div> Unlimited product updates</h6>
                <h6 className='flex items-center gap-[10px] text-sm font-bold' style={{color}}><div className='w-8 h-8 bg-[#2DC071] rounded-full text-white text-2xl flex justify-center items-center'><TiTick /></div> Unlimited product updates</h6>
            </div>
        </div>
    )
}

export default PriceCard
