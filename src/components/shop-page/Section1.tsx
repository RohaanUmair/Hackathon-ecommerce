import { IoIosArrowForward } from "react-icons/io";


function Section1() {
    return (
        <div className="pt-[136px]">
            <div className="bg-[#fafafa]">
                <div className="h-[92px] w-[1042px] mx-auto flex justify-between px-6 items-center">
                    <h2 className="text-[#252B42] font-bold text-2xl">Shop</h2>

                    <div className="flex items-center gap-3">
                        <h6 className="text-[#252B42] text-sm font-bold">Home</h6>
                        <IoIosArrowForward className="text-[#bdbdbd] text-base" />
                        <h6 className="text-[#BDBDBD] text-sm font-bold">Shop</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1;