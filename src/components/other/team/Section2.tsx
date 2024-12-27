import Image from 'next/image'
import React from 'react'

function Section2() {
    return (
        <div className='h-[530px] flex gap-[9px] mx-auto w-fit      max-md:flex-col max-md:h-full'>

            <Image layout='omit' alt='img' src="/team/img1.jpg" width={700} height={530} className='w-[700px] h-[530px] object-cover        max-md:w-full max-md:h-[530px]' />

            <div className='flex flex-col gap-[9px]         max-md:flex-row max-md:gap-2'>
                <div className='flex gap-[9px]          max-md:flex-col'>
                    <Image layout='omit' alt='img' src="/team/img2.jpg" width={361} height={260} className='scale-x-[-1] w-[361px] h-[260px] object-cover       max-md:w-full' />
                    <Image layout='omit' alt='img' src="/team/img3.jpg" width={361} height={260} className='w-[361px] h-[260px] object-cover        max-md:w-full' />
                </div>

                <div className='flex gap-[9px]       max-md:flex-col'>
                    <Image layout='omit' alt='img' src="/team/img4.jpg" width={361} height={260} className='w-[361px] h-[260px] object-cover        max-md:w-full' />
                    <Image layout='omit' alt='img' src="/team/img5.jpg" width={361} height={260} className='w-[361px] h-[260px] object-cover        max-md:w-full' />
                </div>
            </div>

        </div>
    )
}

export default Section2
