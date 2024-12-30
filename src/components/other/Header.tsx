"use client";
import Link from "next/link";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const nav = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Product',
            link: '/product'
        },
        {
            name: 'Pricing',
            link: '/pricing'
        },
        {
            name: 'Blog',
            link: '/blog'
        },
        {
            name: 'Contact',
            link: '/contact'
        }
    ]

    return (
        <>
            <header className="h-[91px] flex pl-[195px] pr-[143px] items-center justify-between fixed z-[1000] bg-white w-full max-md:hidden">
                <h1 className="text-[#252B42] text-2xl font-bold">Bandage</h1>

                <div className="flex w-[815px] justify-between">
                    <ul className="text-[#737373] text-sm font-bold flex gap-[21px] items-center">
                        {
                            nav.map((item, index) => {
                                return (
                                    <Link key={index} href={item.link}>
                                        <li>{item.name}</li>
                                    </Link>
                                )
                            })
                        }
                    </ul>

                    <div className="flex items-center gap-[45px]">
                        <p className="text-[#23A6F0] font-bold text-sm">Login</p>
                        <button className="bg-[#23A6F0] w-[214px] rounded-[5px] h-[52px] text-white font-bold text-sm">Become a member</button>
                    </div>
                </div>

            </header>

            {/* 
            <header className="flex flex-col items-center md:hidden fixed w-screen bg-[#fafafa]">


                <div className="flex justify-between w-full py-[23px] px-[35px] text-[#252B42]">
                    <h3 className="text-2xl font-bold">Bandage</h3>

                    <div className="flex text-2xl items-center gap-4">
                        <IoIosSearch />
                        <IoCartOutline />
                        <BiMenuAltRight />
                    </div>
                </div>


            </header> */}

            <header className="flex flex-col items-center md:hidden fixed w-screen bg-white z-50">


                <div className="flex justify-between w-full py-[23px] px-[35px] text-[#252B42]">
                    <h3 className="text-2xl font-bold">Bandage</h3>

                    <div className="flex text-2xl items-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <BiMenuAltRight />
                    </div>
                </div>


                {
                    isMenuOpen &&
                    <ul className="bg-white w-full py-8 text-[#737373] text-[20px] font-normal flex flex-col gap-[30px] items-center">
                        <Link href={'/'}>
                            <li>Home</li>
                        </Link>

                        <Link href={'/shop'}>
                            <li>Shop</li>
                        </Link>

                        <Link href={'/pricing'}>
                            <li>Pricing</li>
                        </Link>

                        <Link href={'/about'}>
                            <li>About</li>
                        </Link>

                        <Link href={'/contact'}>
                            <li>Contact</li>
                        </Link>

                        <Link href={'/team'}>
                            <li>Team</li>
                        </Link>
                    </ul>
                }



            </header>
        </>
    )
}

export default Header;