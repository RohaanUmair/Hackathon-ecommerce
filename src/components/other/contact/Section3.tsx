import Image from "next/image"

function Section3() {
    return (
        <div className="h-[348px] py-20 relative flex flex-col gap-4 text-center items-center">
            <Image alt="arrow" src='/arrow.png' width={64} height={15} className="absolute top-0" />

            <h6 className="text-[#252B42] text-base font-bold">WE Can t WAIT TO MEET YOU</h6>

            <h2 className="text-[58px] text-[#252B42] font-bold">Lets Talk</h2>

            <button className="w-[186px] h-[52px] bg-[#23A6F0] text-sm font-bold text-white rounded-[5px]">Try it free now</button>
        </div>
    )
}

export default Section3
