import React from 'react'
import TeamCard from '../TeamCard'

function Section4() {
    return (
        <div className='h-[826px] flex flex-col items-center justify-evenly'>
            <div className='flex flex-col items-center text-center gap-[10px]'>
                <h2 className='text-[#252B42] text-[40px] font-bold'>Meet Our Team</h2>
                <p className='text-[#737373] text-sm font-normal'>Problems trying to resolve the conflict between <br />the two major realms of Classical physics: Newtonian mechanics </p>
            </div>

            <div className='flex gap-[30px]'>
                <TeamCard imgSrc='/about/team-card1.jpg' />
                <TeamCard imgSrc='/about/team-card2.jpg' />
                <TeamCard imgSrc='/about/team-card3.jpg' />
            </div>
        </div>
    )
}

export default Section4
