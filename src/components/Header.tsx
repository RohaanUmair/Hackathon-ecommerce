"use client";
import { FiPhone } from "react-icons/fi";
import { PiEnvelopeLight } from "react-icons/pi";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter, FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { useState, useEffect } from "react";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    
    useEffect(() => {
        // Load cart data from localStorage on page load
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCartItems(storedCart);
    }, []);

    const navs = [
        { name: 'Home', link: '/' },
        { name: 'Shop', link: '/shop' },
        { name: 'About', link: '/about' },
        { name: 'Blog', link: '/blog' },
        { name: 'Contact', link: '/contact' },
        { name: 'Pages', link: '/pages' }
    ];

    const removeCartItem = (title: any) => {
        const updatedCart = cartItems.filter(item => item.title !== title);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

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
                            <h1 className="text-[14px] font-[700]">Follow Us and get a chance to win 80% off</h1>
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
                            {navs.map((nav, index) => (
                                <Link key={index} href={nav.link}>
                                    <li>{nav.name}</li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="w-[324px] flex text-[#23a6f0] items-center">
                        <div className="w-[166px] flex items-center">
                            <FaRegUser className="text-[12px]" />
                            <h3 className="text-[14px] font-[700]">Login / Register</h3>
                        </div>
                        <div className="text-base flex w-[166px] justify-around">
                            <IoSearch />
                            <BsCart2 onClick={() => {
                                    setIsCartOpen(!isCartOpen)
                                    console.log(cartItems)
                                }} className="cursor-pointer" />
                            <IoIosHeartEmpty />
                        </div>
                    </div>
                </div>
                {isCartOpen && (
                    <div className="fixed top-[150px] right-6 w-[300px] bg-white shadow-lg p-4 z-50">
                        <h2 className="text-lg font-bold">Cart</h2>
                        {cartItems.length > 0 ? (
                            <ul>
                                {cartItems.map(item => (
                                    <li key={item.title} className="flex w-full justify-between items-center border-b py-2 gap-4">
                                        <div className="flex justify-between w-full">
                                            <span>{item.title}</span>
                                            <span>${item.price} x {item.quantity}</span>
                                        </div>
                                        <button onClick={() => removeCartItem(item.title)} className="text-red-500">X</button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-center py-2">Cart is empty</p>
                        )}
                        <div className="mt-4 flex justify-between">
                            <span className="font-bold">Total:</span>
                            <span className="font-bold">${totalPrice}</span>
                        </div>

                        <Link href={'/checkout'}>
                            <button className="w-full mt-4 bg-[#23a6f0] text-white py-2">Checkout</button>
                        </Link>
                    </div>
                )}
            </header>
            <header className="md:hidden flex justify-between items-center p-4 bg-white shadow">
                <h3 className="text-lg font-bold">Bandage</h3>
                <div className="flex items-center space-x-4">
                    <BiMenuAltRight className="text-2xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)} />
                </div>
            </header>
        </>
    );
}

export default Header;
