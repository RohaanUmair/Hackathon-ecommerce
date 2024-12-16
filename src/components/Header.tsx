import { FiPhone } from "react-icons/fi";
import { PiEnvelopeLight } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { IoIosHeartEmpty, IoIosSearch } from "react-icons/io";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";



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
    ];

    // const mobileNavs = [
    //     {
    //         name: 'Home',
    //         link: '/'
    //     },
    //     {
    //         name: 'Product',
    //         link: '/product'
    //     },
    //     {
    //         name: 'Pricing',
    //         link: '/pricing'
    //     },
    //     {
    //         name: 'Contact',
    //         link: '/contact'
    //     }
    // ];

    return (
        <>
            <header className="fixed z-50 flex flex-col w-full max-md:hidden">

                <div className="h-[60px] flex items-end w-full bg-[#252b42] text-white">
                    <div className="h-[46px] flex px-6 justify-between w-full items-center">


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


                <div className="w-full h-[77px] flex items-center px-6 bg-white">
                    <h3 className="font-[700] w-[187px] text-[24px]">Bandage</h3>


                    <div className="w-[1155px] flex justify-between">
                        <ul className="w-[361px] flex justify-between font-[500] text-[14px]">
                            {
                                navs.map((nav, index) => {
                                    return (
                                        <Link key={index} href={nav.link}>
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

            </header>

            <header className="flex flex-col items-center md:hidden fixed w-screen bg-white">


                <div className="flex justify-between w-full py-[23px] px-[35px] text-[#252B42]">
                    <h3 className="text-2xl font-bold">Bandage</h3>

                    <div className="flex text-2xl items-center gap-4">
                        <IoIosSearch />
                        <IoCartOutline />
                        <BiMenuAltRight />
                    </div>
                </div>


            </header>
        </>
    )
}

export default Header;