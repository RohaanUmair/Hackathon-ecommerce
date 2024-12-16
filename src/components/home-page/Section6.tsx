import LearnMoreCard from "../LearnMoreCard";



function Section6() {
    return (
        <div className="h-[1044px] flex flex-col items-center justify-evenly max-md:h-full max-md:py-20 max-md:gap-20">


            <div className="h-[134px] flex flex-col items-center justify-between text-center    max-md:h-full max-md:px-[87px]">
                <h6 className="text-[#23A6F0] text-sm font-bold">Practice Advice</h6>
                <h3 className="text=[#252B42] font-bold text-[40px]">Featured Posts</h3>
                <p className="text-[#737373] font-normal text-sm">Problems trying to resolve the conflict between <br />the two major realms of Classical physics: Newtonian mechanics </p>
            </div>


            <div className="flex gap-[10px]     max-md:flex-col max-md:gap-[30px]">

               <LearnMoreCard imgSrc="/sec6-card1.jpg" />
               <LearnMoreCard imgSrc="/sec6-card2.jpg" />
               <LearnMoreCard imgSrc="/sec6-card3.jpg" />

            </div>


        </div>
    )
}

export default Section6;