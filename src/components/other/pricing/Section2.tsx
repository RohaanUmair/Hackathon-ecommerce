import React from 'react'

function Section2() {
    return (
        <div className='flex flex-col items-center gap-12 py-12'>


            
            <div className='flex flex-col items-center gap-[10px]'>
                <h2 className='text-[#252B42] text-[40px] font-bold'>Pricing</h2>
                <p className='text-[#737373] text-sm font-bold text-center'>Problems trying to resolve the conflict between <br />the two major realms of Classical physics: Newtonian mechanics </p>
            </div>


            <div className='flex items-center gap-[10px]'>
                <h5 className='text-[#252B42] text-base font-bold'>Monthly</h5>
                <div className='w-[45px] h-[25px] border border-[#23A6F0] rounded-[16px] flex items-center'><div className='rounded-full ml-1 w-[19px] h-[19px] border border-[#D0D0D0] bg-[#EBEBEB]'></div></div>
                <h5 className='text-[#252B42] text-base font-bold'>Yearly</h5>
                <button className='w-[109px] h-11 bg-[#B2E3FF] rounded-[37px] ml-[6px] text-[#23A6F0] font-bold text-sm'>Save 25%</button>
            </div>



        </div>
    )
}

export default Section2
