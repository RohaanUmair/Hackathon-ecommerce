import ImgCard from "./ImgCard";

function Section2() {
    return (
        <div className="relative w-full min-h-screen flex-col md:h-[770px] max-md:py-20 overflow-hidden bg-[#fafafa] flex justify-evenly items-center">


            <div className="md:w-[607px] h-[62px] flex flex-col justify-between items-center max-md:mb-12">
                <h2 className="text-2xl font-[700] text-[#252b42]">EDITOR’S PICK</h2>
                <p className="text-[14px] font-[400]">Problems trying to resolve the conflict between </p>
            </div>


            <div className="md:w-[1050px] md:h-[500px] max-md:w-[full] flex justify-between max-md:flex-col max-md:gap-[30px]">


                <div className="h-full w-[510px] max-md:w-[323px] max-md:h-[500px] relative">
                    <ImgCard
                        imgSrc="/home-sec1.jpg"
                        text="MEN"
                    />
                </div>

                <div className="h-full w-[240px] relative max-md:w-[323px] max-md:h-[500px]">
                    <ImgCard
                        imgSrc="/home-sec2.jpg"
                        text="WOMEN"
                    />
                </div>


                <div className="flex flex-col justify-between max-md:gap-4">
                    <div className="h-[242px] w-[240px] relative max-md:w-[323px] max-md:h-[242px]">
                        <ImgCard
                            imgSrc="/home-sec3.jpg"
                            text="ACCESSORIES"
                        />
                    </div>

                    <div className="h-[242px] w-[240px] relative max-md:w-[323px] max-md:h-[242px]">
                        <ImgCard
                            imgSrc="/home-sec4.jpg"
                            text="KIDS"
                        />
                    </div>
                </div>


            </div>


        </div>
    )
}

export default Section2;