import React from 'react'
import TeamCard from '../TeamCard'

function Section3() {
    return (
        <div className='w-[1034px] h-[1759px] mx-auto flex flex-col justify-evenly items-center         max-md:h-full max-md:w-full'>
            <h2 className='text-[40px] text-[#252B42] font-bold         max-md:w-[60%] max-md:mx-auto max-md:text-center'>Meet Our Team</h2>

            <div className='flex w-full px-2 justify-between        max-md:flex-col max-md:items-center'>
                <TeamCard imgSrc='/team/team-1.jpg' />
                <TeamCard imgSrc='/team/team-2.jpg' />
                <TeamCard imgSrc='/team/team-3.jpg' />
            </div>

            <div className='flex w-full px-2 justify-between        max-md:flex-col max-md:items-center'>
                <TeamCard imgSrc='/team/team-4.jpg' />
                <TeamCard imgSrc='/team/team-5.jpg' />
                <TeamCard imgSrc='/team/team-6.jpg' />
            </div>

            <div className='flex w-full px-2 justify-between        max-md:flex-col max-md:items-center'>
                <TeamCard imgSrc='/team/team-7.jpg' />
                <TeamCard imgSrc='/team/team-8.jpg' />
                <TeamCard imgSrc='/team/team-9.jpg' />
            </div>
        </div>
    )
}

export default Section3
