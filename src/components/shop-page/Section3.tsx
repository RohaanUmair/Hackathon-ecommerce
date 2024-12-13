import { IoGrid } from "react-icons/io5";
import { GrSort } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";



function Section3() {
    return (
        <div className="h-[98px]">
            <div className="w-[1050px] flex justify-between mx-auto">

                <div className="flex items-center">
                    <h6 className="font-bold text-sm text-[#737373]">Showing all 12 results</h6>
                </div>


                <div className="flex items-center w-[177px] gap-[15px]">
                    <h6 className="text-[#737373] text-sm font-bold">Views</h6>

                    <div className="w-12 h-12 border rounded-md flex justify-center items-center">
                        <IoGrid className="text-sm text-[#252B42]" />
                    </div>

                    <div className="w-12 h-12 border rounded-md flex justify-center items-center">
                        <GrSort className="text-sm text-[#737373]" />
                    </div>
                </div>


                <div className="flex items-center gap-[15px]">
                    <button className="bg-[#F9F9F9] border border-[#DDDDDD] w-[141px] h-[50px] rounded-md justify-center text-sm font-normal text-[#737373] gap-[6px] flex items-center">Popularity <IoIosArrowDown /></button>

                    <button className="w-[94px] h-[50px] bg-[#23A6F0] text-white rounded-md text-sm font-bold">Filter</button>
                </div>

            </div>
        </div>
    )
}

export default Section3;