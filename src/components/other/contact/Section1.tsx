import Image from 'next/image';
import React from 'react';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Section1() {
    return (
        <div className='flex justify-between pl-[195px] items-center        max-md:p-0 max-md:flex-col'>
            <div className='flex flex-col gap-[35px]        max-md:px-[70px] max-md:text-center max-md:items-center max-md:py-[26px]'>
                <h5 className='text-[#252B42] text-base font-bold'>CONTACT US</h5>

                <h1 className='text-[#252B42] text-[58px] font-bold     max-md:text-[40px]'>Get in touch <br />today!</h1>

                <h4 className='text-[#737373] text-xl font-normal'>We know how large objects will act, <br />but things on a small scale</h4>

                <div className='text-[#252B42] text-2xl font-bold flex flex-col gap-5'>
                    <h3>Phone ; +451 215 215 </h3>
                    <h3>Fax : +451 215 215</h3>
                </div>

                <div className='flex gap-[34px] text-3xl'>
                    <FaTwitter />
                    <FaFacebookSquare />
                    <FaInstagram />
                    <FaLinkedin />
                </div>
            </div>

            <Image alt='bg' src='/contact/bg.png' width={571} height={826} layout='omit' />
        </div>
    )
}

export default Section1
