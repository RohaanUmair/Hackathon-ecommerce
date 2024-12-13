import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { TfiAlarmClock } from "react-icons/tfi";
import { VscGraph } from "react-icons/vsc";

function LearnMoreCard({ imgSrc }: { imgSrc: string }) {
    return (
        <div className="h-[606px] w-[348px] relative rounded-[3px]" style={{ boxShadow: '0 1px 4px 0 #ccc' }}>
            <div className="w-[58px] h-6 absolute flex justify-center top-5 left-5 items-center bg-[#E74040]">
                <h5 className="text-sm font-bold text-white">NEW</h5>
            </div>

            <div className="w-[348px] h-[300px]">
                <Image alt="bg" src={imgSrc} layout="omit" width={348} height={300} className="w-full h-full object-cover object-center" />
            </div>

            <div className="h-[306px] w-full p-[25px] flex flex-col justify-between">
                <div className="flex gap-[15px] font-normal text-[12px] text-[#737373]">
                    <p className="text-[#8EC2F2]">Google</p>
                    <p>Trending</p>
                    <p>New</p>
                </div>

                <h4 className="text-[#252B42] text-xl font-normal">Loudest à la Madison #1 <br /> (L integral)</h4>

                <p className="text-sm font-normal text-[#737373]">We focus on ergonomics and meeting <br />you where you work. Its only a <br />keystroke away.</p>

                <div className="flex justify-between">
                    <div className="flex gap-[5px]">
                        <TfiAlarmClock className="text-[#23A6F0]" />
                        <p className="text-[12px] font-normal text-[#737373]">22 April 2021</p>
                    </div>

                    <div className="flex gap-[5px]">
                        <VscGraph className="text-[#23856D]" />
                        <p className="text-[12px] font-normal text-[#737373]">10 comments</p>
                    </div>
                </div>

                <h6 className="text-sm flex items-center font-bold text-[#737373]">Learn More <IoIosArrowForward className="text-xl font-normal text-[#23A6F0]" /></h6>
            </div>
        </div>
    )
}

export default LearnMoreCard;