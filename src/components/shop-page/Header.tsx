import { FiPhone } from "react-icons/fi";
import { PiEnvelopeLight } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import Link from "next/link";



function Header() {
    const navs = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Shop',
            link: '/shop'
        },
        {
            name: 'About',
            link: '/about'
        },
        {
            name: 'Blog',
            link: '/blog'
        },
        {
            name: 'Contact',
            link: '/contact'
        },
        {
            name: 'Pages',
            link: '/pages'
        }
    ]

    return (
        <header className="fixed z-50 flex flex-col w-full">

            <div className="h-[60px] flex items-end w-full bg-[#23856D] text-white">
                <div className="h-[46px] flex px-6 justify-between mx-auto items-center w-[1042px]">


                    <div className="w-[415px] flex">
                        <div className="flex w-[415px]">
                            <FiPhone className="text-[16px] font-[700]" />
                            <h6 className="font-[700] text-[14px]">(225) 5550118</h6>
                        </div>

                        <div className="flex w-[260px]">
                            <PiEnvelopeLight className="text[16px]" />
                            <h6 className="font-[700] text-[14px]">michelle.rivera@example.com</h6>
                        </div>
                    </div>


                    <div className="w-[332p]">
                        <h1 className="text-[14px] font-[700]">Follow Us  and get a chance to win 80% off</h1>
                    </div>


                    <div className="flex">
                        <h6 className="text-[16px] font-[700]">Follow Us:</h6>
                        <div className="flex w-[120px] justify-evenly items-center">
                            <FaInstagram className="text-[16px]" />
                            <FaYoutube className="text-[16px]" />
                            <FaFacebook className="text-[16px]" />
                            <FaTwitter className="text-[16px]" />
                        </div>
                    </div>


                </div>
            </div>


            <div className="bg-white">
                <div className="w-[1042px] mx-auto h-[77px] flex items-center px-6 bg-white justify-between">
                    <h3 className="font-[700] w-[187px] text-[24px]">Bandage</h3>


                    <div className="w-[361px] flex justify-between">
                        <ul className="w-[361px] flex justify-between font-[500] text-[14px]">
                            {
                                navs.map((nav) => {
                                    return (
                                        <Link href={nav.link}>
                                            <li>{nav.name}</li>
                                        </Link>
                                    )
                                })
                            }
                        </ul>
                    </div>


                    <div className="w-[324px] flex text-[#23a6f0] items-center">

                        <div className="w-[166px] flex items-center">
                            <FaRegUser className="text-[12px]" />
                            <h3 className="text-[14px] font-[700] ">Login / Register</h3>
                        </div>

                        <div className="text-base flex w-[166px] justify-around">
                            <IoSearch />
                            <BsCart2 />
                            <IoIosHeartEmpty />
                        </div>

                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header;