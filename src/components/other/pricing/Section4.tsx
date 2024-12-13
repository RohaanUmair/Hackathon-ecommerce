import React from 'react';
import Sec4TextSec from './Sec4TextSec';

function Section4() {
    return (
        <div className='w-full bg-white'>
            <div className='w-[1056px] h-[1037px] flex flex-col mx-auto gap-[50px] bg-white'>


                <div className='flex flex-col gap-[10px] text-center py-[45px]'>
                    <h2 className='text-[#252B42] text-[40px] font-bold'>Pricing FAQs</h2>
                    <p className='text-[#737373] font-normal text-xl'>Problems trying to resolve the conflict between <br />the two major realms of Classical physics</p>
                </div>


                <div className='w-full flex flex-col gap-[60px]'>


                    <div className='flex justify-center gap-[85px]'>
                        <Sec4TextSec />
                        <Sec4TextSec />
                    </div>

                    <div className='flex justify-center gap-[85px]'>
                        <Sec4TextSec />
                        <Sec4TextSec />
                    </div>

                    <div className='flex justify-center gap-[85px]'>
                        <Sec4TextSec />
                        <Sec4TextSec />
                    </div>

                    <div className='flex justify-center gap-[85px]'>
                        <Sec4TextSec />
                        <Sec4TextSec />
                    </div>


                </div>


                <h4 className='text-xl font-normal text-[#737373] text-center'>Haven’t got your answer? Contact our support</h4>


            </div>
        </div>
    )
}

export default Section4
