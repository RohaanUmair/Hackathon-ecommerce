import Image from "next/image";

function Section1() {
    return (
        <div className="relative w-full h-screen md:pt-[136px] max-md:pt-[78px] overflow-hidden flex justify-center items-center">
            <Image
                src="/bg.jpg"
                alt="bg"
                className="absolute -z-10 inset-0 w-full h-full object-cover object-top md:!top-10"
                layout="fill"
            />


            <div className="md:w-[1044px] mmd:h-[427px] flex items-center">
                
                <div className="md:w-[599px] max-md:text-center h-[331px] max-md:h-[381px] flex flex-col justify-between max-md:items-center max-md:px-[73px] text-white">
                    <h5 className="text-base font-[700]">SUMMER 2020</h5>

                    <h1 className="font-[700] text-[58px] max-md:text-[40px]">NEW COLLECTION</h1>

                    <h4 className="font-[400] text-xl">We know how large objects will act, <br /> 
                    but things on a small scale.</h4>

                    <button className="w-[221px] h-[62px] bg-[#2dc071] rounded-[5px] font-[700] text-[24px]">SHOP NOW</button>
                </div>

            </div>
        </div>
    )
}

export default Section1;