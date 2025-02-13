import Image from "next/image";
import { FaHooli } from "react-icons/fa";
import { FaLyft } from "react-icons/fa";
import { FaStripe } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";



function CompaniesName() {
    return (
        <div className="h-[175px] bg-[#fafafa] flex justify-center      max-md:h-[1173px]">
            <div className="w-[1050px] text-[103px] flex justify-between items-center text-[#737373]    max-md:w-screen max-md:flex-col max-md:justify-evenly max-md:text-[160px]">
                <FaHooli />
                <FaLyft />
                <Image src='/logo/Vector.svg' alt="img" height={103} width={103} />
                <FaStripe />
                <FaAws />
                <FaRedditAlien />
            </div>
        </div>
    )
}

export default CompaniesName;