'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";

function DisplayCard({ imgSrc, title, price, description }: { imgSrc: string, title: string, price: number, discountPercentage: number, description: string }) {
    const router = useRouter();
    const slug = title.replace(/\s+/g, '').toLowerCase();

    const handleClick = () => {
        router.push(`/shop/${slug}?title=${encodeURIComponent(title)}&price=${price}&imgSrc=${encodeURIComponent(imgSrc)}&description=${encodeURIComponent(description)}`);
        console.log('clicked')
    };

    return (
        <div className="w-[240px] max-md:w-[348px] h-[615px] flex flex-col cursor-pointer" onClick={handleClick}>
            <Image alt="card-img" src={imgSrc} width={240} height={427} layout="omit" className="w-full h-[427px] object-cover" />

            <div className="h-[188px] w-full flex flex-col justify-evenly items-center">
                <h5 className="text-base font-bold">{title}</h5>
                <h6 className="font-bold text-sm text-[#737373]">{title}</h6>
                <p className="font-bold text-base text-[#23856d]">${price}
                    {/* <span className="text-[#23856D]">${b}</span> */}
                </p>

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