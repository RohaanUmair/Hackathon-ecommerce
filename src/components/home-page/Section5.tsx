import Image from "next/image"

function Section5() {
    return (
        <div className="h-[682px] flex items-center justify-end gap-[110px]">
            <div className="w-[704px] h-[682px]">
                <Image alt="bg" src='/sec5-bg.png' layout="omit" width={704} height={682} className="w-full h-full object-cover object-center" />
            </div>

            <div className="w-[573px] h-[326px] flex flex-col justify-between">
                <h5 className="text-base font-bold text-[#bdbdbd]">SUMMER 2020</h5>
                <h2 className="font-bold text-[40px] leading-[50px] text-[#252B42]">Part of the Neural <br />Universe</h2>
                <h4 className="text-[#737373] text-xl font-normal">We know how large objects will act,<br /> but things on a small scale.</h4>

                <div className="flex gap-[10px]">
                    <button className="bg-[#2DC071] font-bold text-sm w-[156px] h-[52px] text-white">BUY NOW</button>
                    <button className="border border-[#2DC071] text-[#2DC071] w-[173px] h-[52px]">READ MORE</button>
                </div>
            </div>
        </div>
    )
}

export default Section5
