import CompaniesSec from "@/components/other/about/CompaniesSec";
import Section1 from "@/components/other/about/Section1";
import Section2 from "@/components/other/about/Section2";
import Section3 from "@/components/other/about/Section3";
import Section4 from "@/components/other/about/Section4";
import Section5 from "@/components/other/about/Section5";

function AboutPage() {
    return (
        <div className="pt-[91px]">
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <CompaniesSec />
            <Section5 />
        </div>
    )
}

export default AboutPage;