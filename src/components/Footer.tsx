import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import FooterSection from "./FooterSection";


function Footer() {
    return (
        <div className="h-[488px] w-full">


            <div className="bg-[#fafafa] h-[142px] flex items-center px-[195px] justify-between">
                <div className="w-full h-full border-b border-[#e6e6e6] flex items-center justify-between">
                    <h1 className="font-bold text-2xl">Bandage</h1>

                    <div className="flex text-[#23A6F0] text-[23px] gap-5">
                        <FaFacebook />
                        <FaInstagram />
                        <FaTwitter />
                    </div>
                </div>
            </div>

            <div className="h-[272px] flex justify-between items-center w-full">
                <div className="h-[170px] flex px-[195px] justify-between w-full">
                    <FooterSection
                        heading="Company Info"
                        li1="About Us"
                        li2="Carrier"
                        li3="We are hiring"
                        li4="Blog"
                    />

                    <FooterSection
                        heading="Legal"
                        li1="About Us"
                        li2="Carrier"
                        li3="We are hiring"
                        li4="Blog"
                    />

                    <FooterSection
                        heading="Features"
                        li1="Business Marketing"
                        li2="User Analytic"
                        li3="Live Chat"
                        li4="Unlimited Support"
                    />

                    <FooterSection
                        heading="Resources"
                        li1="IOS & Android"
                        li2="Watch a Demo"
                        li3="Customers"
                        li4="API"
                    />

                    <div className="w-fit">
                        <h5 className="font-bold text-base text-[#252B42]">Get In Touch</h5>

                        <div className="flex w-[321px] h-[58px]">
                            <input type="text" placeholder="Your Email" className="border border-[#e6e6e6] outline-none pl-5 text=[#737373] text-sm rounded-l-md font-normal" />
                            <button className="w-[117px] bg-[#23A6F0] text-white rounded-r-md">Subscribe</button>
                        </div>

                        <p className="text-[#737373] font-normal text-[12px] mt-1">Lore imp sum dolor Amit</p>
                    </div>
                </div>
            </div>

            <div className="h-[74px] bg-[#FAFAFA] flex items-center px-[195px]">
                <h6 className="text-[#737373] font-bold text-sm">Made With Love By Finland All Right Reserved</h6>
            </div>


        </div>
    )
}

export default Footer;