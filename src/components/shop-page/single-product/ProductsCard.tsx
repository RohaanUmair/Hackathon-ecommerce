import Image from "next/image"

function ProductsCard({ imgSrc }: {imgSrc: string}) {
    return (
        <div className="w-[239px] h-[442px] bg-white        max-md:w-[90%]">
            <Image src={imgSrc} layout="omit" width={239} height={280} className="w-full h-[280px] object-cover" alt="img" />

            <div className="h-[162px] flex flex-col gap-[10px] pl-[25px] justify-evenly pt-[25px] pb-[35px]">
                <h5 className="text-base font-bold text-[#252B42]">Graphic Design</h5>
                <h6 className="text-sm font-bold text-[#737373]">English Department</h6>
                <h5 className="text-base font-bold text-[#BDBDBD]">$16.48 <span className="text-[#23856D]">$6.48</span></h5>
            </div>
        </div>
    )
}

export default ProductsCard
