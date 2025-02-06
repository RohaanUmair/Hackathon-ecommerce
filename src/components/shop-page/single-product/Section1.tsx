import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { IoEye } from "react-icons/io5";





function Section1({ product }: { product: { title: string; price: string; imgSrc: string, description: string } }) {
    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");

        const existingProductIndex = cart.findIndex((item: any) => item.title === product.title);
        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Product added to cart!");
        console.log(cart);
    };

    return (
        <div className="h-[826px] pt-[136px] bg-[#fafafa]       max-md:pt-[78px] max-md:h-[1050px]">


            <div className="h-[92px] bg-[#fafafa] flex justify-center">
                <div className="w-[1042px] px-6 flex items-center gap-[15px] font-bold text-sm      max-md:w-full max-md:px-0 max-md:justify-center">
                    <h5>Home</h5>
                    <IoIosArrowForward className="text-base text-[#bdbdbd]" />
                    <h5 className="text-[#bdbdbd]">Shop</h5>
                </div>
            </div>


            <div className="w-[1042px] h-[598px] mx-auto flex justify-between       max-md:flex-col max-md:w-full max-md:h-[990px] max-md:justify-normal">


                <div className="w-[506px] h-[546px] flex flex-col gap-5 relative        max-md:w-[348px] max-md:h-[394px] max-md:mx-auto">
                    <div className="h-[450px] w-[506px]         max-md:w-[348px] max-md:h-[277px]">
                        <Image src={product.imgSrc} className="h-full w-full" alt="img" layout="omit" height={450} width={506} />
                    </div>

                    <div className="flex gap-5">
                        <Image src={product.imgSrc} alt="img" className="w-[100px] h-[75px] object-cover" layout="omit" width={100} height={75} />
                        <Image src={product.imgSrc} alt="img" className="w-[100px] h-[75px] object-cover" layout="omit" width={100} height={75} />
                    </div>

                    <div className="text-white flex justify-between w-full text-[60px] px-5 absolute top-1/2 -translate-y-1/2       max-md:text-5xl max-md:-translate-y-16 max-md:px-2 ">
                        <IoIosArrowBack />
                        <IoIosArrowForward />
                    </div>
                </div>



                <div className="w-[510px] h-[450px] flex flex-col       max-md:w-[348px] max-md:h-[471px] max-md:mx-auto">
                    <h4 className="font-semibold text-xl text-[#252B42] mt-[11px]">{product.title}</h4>

                    <div className="flex text-xl text-[#F3CD03] gap-[5px] items-center mt-3">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                        <h6 className="text-[#737373] font-bold text-sm ml-2">10 Reviews</h6>
                    </div>

                    <h5 className="text-[#252B42] text-2xl font-bold mt-5">${product.price}</h5>

                    <h6 className="text-[#737373] font-bold text-sm mt-[5px]">Availability  : <span className="text-[#23A6F0]">In Stock </span></h6>

                    <p className="text-sm font-normal text-[#858585] mt-8">{product.description.slice(0, 200)}</p>

                    <div className="bg-[#BDBDBD] w-full h-px mt-7"></div>

                    <div className="flex gap-[10px] mt-7">
                        <div className="w-[30px] h-[30px] rounded-full bg-[#23A6F0]"></div>
                        <div className="w-[30px] h-[30px] rounded-full bg-[#2DC071]"></div>
                        <div className="w-[30px] h-[30px] rounded-full bg-[#E77C40]"></div>
                        <div className="w-[30px] h-[30px] rounded-full bg-[#252B42]"></div>
                    </div>

                    <div className="flex mt-[67px] gap-[10px]">
                        <button className="w-[148px] h-11 bg-[#23A6F0] font-bold text-sm text-white rounded-md">Select Options</button>

                        <div className="w-10 h-10 rounded-full border border-[#E8E8E8] bg-white flex justify-center items-center text-[#252B42] text-[19px]">
                            <FaRegHeart />
                        </div>

                        {/* CART BUTTON */}
                        <div onClick={addToCart} className="w-10 h-10 rounded-full border border-[#E8E8E8] bg-white flex justify-center items-center text-[#252B42] text-[19px]">
                            <BsCart />
                        </div>

                        <div className="w-10 h-10 rounded-full border border-[#E8E8E8] bg-white flex justify-center items-center text-[#252B42] text-[19px]">
                            <IoEye />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Section1;