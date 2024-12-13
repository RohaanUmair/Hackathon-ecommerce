import React from 'react'
import DisplayCard from '../displayCard'

function Section3() {
    return (
        <div className='h-[1652px] flex flex-col justify-evenly'>


            <div className='h-[102px] flex flex-col justify-between items-center'>
                <h2 className='text-xl font-normal text-[#737373]'>Featured Products</h2>
                <h3 className='text-2xl font-bold'>BESTSELLER PRODUCTS</h3>
                <p className='text-[14px] font-normal font text-[#737373]'>Problems trying to resolve the conflict between </p>
            </div>

            <div className='flex gap-7 justify-center'>
                <DisplayCard imgSrc='/card1.jpg' />
                <DisplayCard imgSrc='/card2.jpg' />
                <DisplayCard imgSrc='/card3.jpg' />
                <DisplayCard imgSrc='/card4.jpg' />
            </div>

            <div className='flex gap-7 justify-center mt-20'>
                <DisplayCard imgSrc='/card5.jpg' />
                <DisplayCard imgSrc='/card6.jpg' />
                <DisplayCard imgSrc='/card7.jpg' />
                <DisplayCard imgSrc='/card8.jpg' />
            </div>


        </div>
    )
}

export default Section3
