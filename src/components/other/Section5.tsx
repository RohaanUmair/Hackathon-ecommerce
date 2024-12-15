import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Section5() {
    return (
        <div className='h-[582px] flex flex-col justify-center bg-white'>
            <div className='h-[282px] flex flex-col justify-between items-center'>

                
                <h2 className='text-[40px] text-[#252B42] font-bold'>Start your 14 days free trial</h2>

                <h6 className='text-sm text-center font-normal text-[#737373]'>Met minim Mollie non desert Alamo est sit cliquey dolor <br />do met sent. RELIT official consequent.</h6>

                <button className='w-[186px] h-[52px] bg-[#23A6F0] rounded-[5px] text-white text-sm font-bold'>Try it free now</button>

                <div className='flex gap-[35px] text-[35px]'>
                    <FaTwitter className='text-[#55ACEE]' />
                    <FaFacebookSquare className='text-[#395185]' />
                    <FaInstagram />
                    <FaLinkedin className='text-[#0A66C2]' />
                </div>


            </div>
        </div>
    )
}

export default Section5
