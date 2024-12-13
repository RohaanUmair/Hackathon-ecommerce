import CompaniesName from "@/components/CompaniesName";
import Section1 from "@/components/other/pricing/Section1";
import Section2 from "@/components/other/pricing/Section2";
import Section3 from "@/components/other/pricing/Section3";
import Section4 from "@/components/other/pricing/Section4";
import Section5 from "@/components/other/pricing/Section5";

function PricingPage() {
    return (
        <div className="pt-[91px] bg-[#fafafa]">
            <Section1 />
            <Section2 />
            <Section3 />
            <div className="flex flex-col py-20">
                <h2 className="text-xl font-normal text-center">Trusted By Over 4000 Big Companies</h2>
                <CompaniesName />
            </div>
            <Section4 />
            <Section5 />
        </div>
    )
}

export default PricingPage;