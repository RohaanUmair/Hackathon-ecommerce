import DisplayCard from "../displayCard";

function Section4() {
    return (
        <div className="scale-95 flex flex-col gap-12">
            <div className="flex gap-7 justify-center    max-md:flex-col max-md:items-center">
                <DisplayCard imgSrc="/shop-sec41.jpg" />
                <DisplayCard imgSrc="/shop-sec42.jpg" />
                <DisplayCard imgSrc="/shop-sec43.jpg" />
                <DisplayCard imgSrc="/shop-sec44.jpg" />
            </div>

            <div className="flex gap-7 justify-center max-md:hidden"> 
                <DisplayCard imgSrc="/shop-sec45.jpg" />
                <DisplayCard imgSrc="/shop-sec46.jpg" />
                <DisplayCard imgSrc="/shop-sec47.jpg" />
                <DisplayCard imgSrc="/shop-sec48.jpg" />
            </div>

            <div className="flex gap-7 justify-center max-md:hidden"> 
                <DisplayCard imgSrc="/shop-sec49.jpg" />
                <DisplayCard imgSrc="/shop-sec410.jpg" />
                <DisplayCard imgSrc="/shop-sec411.jpg" />
                <DisplayCard imgSrc="/shop-sec412.jpg" />
            </div>

            <ul className="flex border border-[#bdbdbd] w-fit rounded-md mx-auto">
                <li className="w-[84px] justify-center items-center flex h-[74px] bg-[#F3F3F3] border border-[#BDBDBD] text-[#BDBDBD] font-bold text-sm"><p>First</p></li>
                <li className="w-[49px] justify-center items-center flex border border-[#bdbdbd] h-[74px] text-[#23A6F0] font-bold text-sm"><p>1</p></li>
                <li className="w-[49px] justify-center items-center flex border border-[#bdbdbd] h-[74px] bg-[#23a6f0] text-white"><p>2</p></li>
                <li className="w-[49px] justify-center items-center flex border border-[#bdbdbd] h-[74px] text-[#23A6F0] font-bold text-sm"><p>3</p></li>
                <li className="w-[85px] justify-center items-center flex border border-[#bdbdbd] h-[74px] text-[#23a6f0]"><p>Next</p></li>
            </ul>
        </div>
    )
}

export default Section4;