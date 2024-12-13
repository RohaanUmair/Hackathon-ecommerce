import Image from 'next/image'
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



function TeamCard({ imgSrc }: { imgSrc: string }) {
    return (
        <div className='w-[316px] h-[383px]'>
            <div className='w-[316px] h-[231px]'>
                <Image src={imgSrc} alt='team' layout='omit' width={316} height={231} className='h-full object-cover w-full' />
            </div>


            <div className='h-[152px] flex flex-col items-center justify-between py-[30px]'>
                <h5 className='text-[#252B42] text-base font-bold'>Username</h5>
                <h6 className='text-[#737373] text-sm font-bold'>Profession</h6>
                <div className='flex text-[#23A6F0] text-[23px] gap-5'>
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                </div>
            </div>
        </div>
    )
}

export default TeamCard
