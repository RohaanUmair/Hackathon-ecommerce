import Image from "next/image";

function Section1() {
    return (
        <div className="h-[638px] flex items-center w-full justify-between pr-[66px]">
            <div className="h-[321px] flex justify-between flex-col pl-[195px]">
                <h5 className="text-[#252B42] text-base font-bold">ABOUT COMPANY</h5>
                <h1 className="text-[#252B42] font-bold text-[58px]">ABOUT US</h1>
                <h4 className="text-[#737373] text-xl font-normal">We know how large objects will act,<br /> but things on a small scale</h4>
                <button className="w-[195px] h-[52px] bg-[#23A6F0] rounded-[5px] text-white text-sm font-bold">Get Quote Now</button>
            </div>

            <div className="w-[632px]">
                <Image src="/about/image.png" layout="omit" alt="img" width={632} height={612} className="w-[632px] object-cover h-[612px]" />
            </div>
        </div>
    )
}

export default Section1;