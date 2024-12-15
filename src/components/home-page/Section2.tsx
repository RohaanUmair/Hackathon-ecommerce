import ImgCard from "./ImgCard";

function Section2() {
    return (
        <div className="relative w-full flex-col h-[770px] overflow-hidden bg-[#fafafa] flex justify-evenly items-center">


            <div className="w-[607px] h-[62px] flex flex-col justify-between items-center">
                <h2 className="text-2xl font-[700] text-[#252b42]">EDITOR’S PICK</h2>
                <p className="text-[14px] font-[400]">Problems trying to resolve the conflict between </p>
            </div>


            <div className="w-[1050px] h-[500px] flex justify-between">


                <div className="h-full w-[510px] relative">
                    <ImgCard
                        imgSrc="/home-sec1.jpg"
                        text="MEN"
                    />
                </div>

                <div className="h-full w-[240px] relative">
                    <ImgCard
                        imgSrc="/home-sec2.jpg"
                        text="WOMEN"
                    />
                </div>


                <div className="flex flex-col justify-between">
                    <div className="h-[242px] w-[240px] relative">
                        <ImgCard
                            imgSrc="/home-sec3.jpg"
                            text="ACCESSORIES"
                        />
                    </div>

                    <div className="h-[242px] w-[240px] relative">
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