import Image from "next/image"
import { IoIosArrowForward } from "react-icons/io"

function Section2() {
    return (
        <div className="h-[572px] bg-white w-[1050px] mx-auto flex flex-col">

            <div className="h-[91px] flex gap-12 w-full text-[#737373] font-bold text-sm border-b border-[#ECECEC] justify-center items-center">
                <h6>Description</h6>
                <h6>Additional Information</h6>
                <h6>Reviews (0)</h6>
            </div>


            <div className="w-[500px]">
                <div className="w-[1056px] mx-auto flex justify-between pt-10">


                    <div className="w-[332px] h-[392px]">
                        <Image src={'/single-product/desc-img.jpg'} layout="omit" width={316} height={372} className="w-[316px] rounded-md h-[372px]" alt="img" />
                    </div>


                    <div className="flex flex-col w-[332px] h-[427px] gap-[30px]">
                        <h5 className="text-[#252B42] font-bold text-2xl">the quick fox jumps over </h5>

                        <h6 className="text-[#737373] font-normal text-sm">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.<br /><br />

                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.<br /><br />

                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h6>
                    </div>


                    <div className="w-[332px] h-[320px] flex flex-col justify-between">
                        <div className="w-full h-[118px] flex flex-col gap-[30px]">
                            <h5 className="text-[#252B42] font-bold text-2xl">the quick fox jumps over </h5>

                            <div className="flex flex-col gap-[10px]">
                                <div className="flex gap-2">
                                    <IoIosArrowForward className="text-[#737373] text-base" />
                                    <p className="text-[#737373] font-bold text-sm">the quick fox jumps over the lazy dog</p>
                                </div>
                                <div className="flex gap-2">
                                    <IoIosArrowForward className="text-[#737373] text-base" />
                                    <p className="text-[#737373] font-bold text-sm">the quick fox jumps over the lazy dog</p>
                                </div>
                                <div className="flex gap-2">
                                    <IoIosArrowForward className="text-[#737373] text-base" />
                                    <p className="text-[#737373] font-bold text-sm">the quick fox jumps over the lazy dog</p>
                                </div>
                                <div className="flex gap-2">
                                    <IoIosArrowForward className="text-[#737373] text-base" />
                                    <p className="text-[#737373] font-bold text-sm">the quick fox jumps over the lazy dog</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-[118px] flex flex-col gap-[30px]">
                            <h5 className="text-[#252B42] font-bold text-2xl">the quick fox jumps over </h5>

                            <div className="flex flex-col gap-[10px]">
                                <div className="flex gap-2">
                                    <IoIosArrowForward className="text-[#737373] text-base" />
                                    <p className="text-[#737373] font-bold text-sm">the quick fox jumps over the lazy dog</p>
                                </div>
                                <div className="flex gap-2">
                                    <IoIosArrowForward className="text-[#737373] text-base" />
                                    <p className="text-[#737373] font-bold text-sm">the quick fox jumps over the lazy dog</p>
                                </div>
                                <div className="flex gap-2">
                                    <IoIosArrowForward className="text-[#737373] text-base" />
                                    <p className="text-[#737373] font-bold text-sm">the quick fox jumps over the lazy dog</p>
                                </div>
                                <div className="flex gap-2">
                                    <IoIosArrowForward className="text-[#737373] text-base" />
                                    <p className="text-[#737373] font-bold text-sm">the quick fox jumps over the lazy dog</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Section2
