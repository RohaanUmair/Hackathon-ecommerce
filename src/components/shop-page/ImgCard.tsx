import Image from "next/image";

function ImgCard({ imgSrc }: { imgSrc: string }) {
    return (
        <div className="w-[204px] h-[223px] relative flex flex-col items-center justify-center text-white max-md:w-[331px] max-md:h-[330px]">
            <Image layout="fill" alt="img" src={imgSrc} className="w-[205px] h-[223px] ax-md:w-[331px] max-md:h-[330px] -z-20 top-0 absolute object-cover object-center"  />
            <div className="absolute h-full w-full bg-[rgba(0,0,0,0.3)] -z-10"></div>

            <h6 className="font-bold text-base max-md:mb-[20px]">Cloths</h6>
            <h6 className="font-bold text-sm">5 Items</h6>
        </div>
    )
}

export default ImgCard;