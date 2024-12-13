import Image from 'next/image'
import React from 'react'

function Section5() {
    return (
        <div className='h-[636px] bg-[#2A7CC7] flex'>


            <div className='h-full flex justify-center items-center' style={{width: 'calc(100dvw - 590px)'}}>

                <div className='flex text-white flex-col gap-6'>
                    <h5 className='text-base font-bold'>WORK WITH US</h5>
                    <h2 className='text-[40px] font-bold'>Now Let’s grow Yours</h2>
                    <p className='text-sm font-normal'>The gradual accumulation of information about atomic and <br />small-scale behavior during the first quarter of the 20th </p>
                    <button className='outline-none w-[132px] h-[52px] border border-[#fafafa] text-sm font-bold rounded-[5px]'>Button</button>
                </div>

            </div>



            <div className='w-[590px] h-[636px]'>
                <Image src="/about/sec5-bg.jpg" alt='bg' width={590} height={640} layout='omit' className='w-full h-full object-cover' />
            </div>


        </div>
    )
}

export default Section5
