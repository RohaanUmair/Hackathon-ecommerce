import Image from "next/image";

function Section1() {
    return (
        <div className="h-[638px] flex items-center w-full justify-between pr-[66px]        max-md:flex-col max-md:h-[1071px] max-md:p-0 max-md:justify-normal">
            <div className="h-[321px] flex justify-between flex-col pl-[195px]      max-md:h-[590px] max-md:p-0 max-md:justify-center max-md:gap-10 max-md:items-center">
                <h5 className="text-[#252B42] text-base font-bold       max-md:hidden">ABOUT COMPANY</h5>
                <h1 className="text-[#252B42] font-bold text-[58px]         max-md:text-[40px]">ABOUT US</h1>
                <h4 className="text-[#737373] text-xl font-normal       max-md:w-4/5 max-md:text-center">We know how large objects will act,<br className="max-md:hidden" /> but things on a small scale</h4>
                <button className="w-[195px] h-[52px] bg-[#23A6F0] rounded-[5px] text-white text-sm font-bold">Get Quote Now</button>
            </div>

            <div className="w-[632px]       max-md:w-[90%]">
                <Image src="/about/image.png" layout="omit" alt="img" width={632} height={612} className="w-[632px] object-cover h-[612px]      max-md:w-[375px] max-md:h-[440px] max-md:mx-auto" />
            </div>
        </div>
    )
}

export default Section1;