import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { IoEye } from "react-icons/io5";





function Section1() {
    return (
        <div className="h-[826px] pt-[136px] bg-[#fafafa]">


            <div className="h-[92px] bg-[#fafafa] flex justify-center">
                <div className="w-[1042px] px-6 flex items-center gap-[15px] font-bold text-sm">
                    <h5>Home</h5>
                    <IoIosArrowForward className="text-base text-[#bdbdbd]" />
                    <h5 className="text-[#bdbdbd]">Shop</h5>
                </div>
            </div>


            <div className="w-[1042px] h-[598px] mx-auto flex justify-between">


                <div className="w-[506px] h-[546px] flex flex-col gap-5 relative">
                    <div className="h-[450px] w-[506px]">
                        <Image src="/single-product/shop-single-product.jpg" className="h-full w-full" alt="img" layout="omit" height={450} width={506} />
                    </div>

                    <div className="flex gap-5">
                        <Image src={'/single-product/small-img.jpg'} alt="img" className="w-[100px] h-[75px] object-cover" layout="omit" width={100} height={75} />
                        <Image src={'/single-product/shop-single-product.jpg'} alt="img" className="w-[100px] h-[75px] object-cover" layout="omit" width={100} height={75} />
                    </div>

                    <div className="text-white flex justify-between w-full text-[60px] px-5 absolute top-1/2 -translate-y-1/2">
                        <IoIosArrowBack />
                        <IoIosArrowForward />
                    </div>
                </div>



                <div className="w-[510px] h-[450px] flex flex-col">
                    <h4 className="font-semibold text-xl text-[#252B42] mt-[11px]">Floating Phone</h4>

                    <div className="flex text-xl text-[#F3CD03] gap-[5px] items-center mt-3">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                        <h6 className="text-[#737373] font-bold text-sm ml-2">10 Reviews</h6>
                    </div>

                    <h5 className="text-[#252B42] text-2xl font-bold mt-5">$1,139.33</h5>

                    <h6 className="text-[#737373] font-bold text-sm mt-[5px]">Availability  : <span className="text-[#23A6F0]">In Stock </span></h6>

                    <p className="text-sm font-normal text-[#858585] mt-8">Met minim Mollie non desert Alamo est sit cliquey dolor
                        do met sent. RELIT official consequent door ENIM RELIT Mollie.
                        Excitation venial consequent sent nostrum met.
                    </p>

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

                        <div className="w-10 h-10 rounded-full border border-[#E8E8E8] bg-white flex justify-center items-center text-[#252B42] text-[19px]">
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