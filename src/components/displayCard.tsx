import Image from "next/image";

function DisplayCard({ imgSrc }: { imgSrc: string }) {
    return (
        <div className="w-[240px] max-md:w-[348px] h-[615px] flex flex-col">
            <Image alt="card-img" src={imgSrc} width={240} height={427} layout="omit" className="w-full h-[427px] object-cover" />

            <div className="h-[188px] w-full flex flex-col justify-evenly items-center">
                <h5 className="text-base font-bold">Graphic Design</h5>
                <h6 className="font-bold text-sm text-[#737373]">English Department</h6>
                <p className="font-bold text-base text-[#bdbdbd]">$16.48 <span className="text-[#23856D]">$6.48</span></p>

                <div className="h-4 w-20 flex justify-between">
                    <div className="h-4 w-4 bg-[#23a6f0] rounded-full"></div>
                    <div className="h-4 w-4 bg-[#23856D] rounded-full"></div>
                    <div className="h-4 w-4 bg-[#E77C40] rounded-full"></div>
                    <div className="h-4 w-4 bg-[#252B42] rounded-full"></div>
                </div>
            </div>
        </div>
    )
}

export default DisplayCard;